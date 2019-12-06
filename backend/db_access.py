from __future__ import print_function
import os
import enum
from sqlalchemy import create_engine, text
from sqlalchemy import Column, String, Integer, Float, DateTime, Binary, ForeignKey, Enum, UniqueConstraint, Index
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, relationship

# SQLite will be used if no production DB credentials will be found
dir_path = os.path.dirname(os.path.realpath(__file__))
db_string = 'sqlite:///' + os.path.join(dir_path, 'hdqm.db')

prod_db_string_file = os.path.join(dir_path, 'connection_string.txt')
if os.path.isfile(prod_db_string_file):
  with open(prod_db_string_file, 'r') as file:
    db_string = file.read().replace('\n', '')

is_postgres = True
if not db_string.startswith('postgres://'):
  is_postgres = False

db = create_engine(db_string)
base = declarative_base()


class HistoricDataPoint(base):
  __tablename__ = 'historic_data_points'

  id = Column(Integer, primary_key=True, nullable=False)
  run = Column(Integer, nullable=False)
  lumi = Column(Integer, nullable=False)
  # subsystem = Column(String, nullable=False)
  # name = Column(String, nullable=False)
  dataset = Column(String, nullable=False)
  pd = Column(String, nullable=False)
  processing_string = Column(String, nullable=False)
  # y_title = Column(String, nullable=False)
  # plot_title = Column(String, nullable=False)
  value = Column(Float, nullable=False)
  error = Column(Float, nullable=False)

  # Foreign keys
  config_id = Column(Integer, ForeignKey('last_calculated_configs.id'), nullable=False)
  config = relationship("LastCalculatedConfig", foreign_keys=[config_id])
  main_me_id = Column(Integer, ForeignKey('monitor_elements.id'), nullable=False)
  main_me = relationship("MonitorElement", foreign_keys=[main_me_id])
  optional_me1_id = Column(Integer, ForeignKey('monitor_elements.id'))
  optional_me1 = relationship("MonitorElement", foreign_keys=[optional_me1_id])
  optional_me2_id = Column(Integer, ForeignKey('monitor_elements.id'))
  optional_me2 = relationship("MonitorElement", foreign_keys=[optional_me2_id])
  reference_me_id = Column(Integer, ForeignKey('monitor_elements.id'))
  reference_me = relationship("MonitorElement", foreign_keys=[reference_me_id])

  __table_args__ = (
    Index('_historic_data_points_config_id_main_me_id_uindex', 'config_id', 'main_me_id', unique=True),
    # TODO: Add this index:
    # Index('_historic_data_points_subsystem_pd_processing_string_index', 'subsystem', 'pd', 'processing_string')
  )


class SelectionParams(base):
  __tablename__ = 'selection_params'

  id = Column(Integer, primary_key=True, nullable=False)
  subsystem = Column(String, nullable=False)
  pd = Column(String, nullable=False)
  processing_string = Column(String, nullable=False)

  __table_args__ = (
    Index('_selection_params_subsystem_pd_processing_string_uindex', 'subsystem', 'pd', 'processing_string', unique=True),
  )


class MonitorElement(base):
  __tablename__ = 'monitor_elements'

  id = Column(Integer, primary_key=True, nullable=False)
  run = Column(Integer, nullable=False)
  lumi = Column(Integer, nullable=False)
  me_path = Column(String, nullable=False)
  dataset = Column(String, nullable=False)
  eos_path = Column(String, nullable=False)
  me_blob = Column(Binary, nullable=False)
  gui_url = Column(String, nullable=False)
  image_url = Column(String, nullable=False)

  __table_args__ = (
    Index('_monitor_element_me_path_index', 'me_path'),
    Index('_monitor_element_me_path_eos_path_uindex', 'me_path', 'eos_path', unique=True)
  )


class OMSDataCache(base):
  __tablename__ = 'oms_data_cache'

  id = Column(Integer, primary_key=True, nullable=False)
  run = Column(Integer, nullable=False)
  lumi = Column(Integer, nullable=False)
  start_time = Column(DateTime, nullable=False)
  end_time = Column(DateTime, nullable=False)
  
  b_field = Column(Float, nullable=False)
  energy = Column(Float, nullable=False)
  
  delivered_lumi = Column(Float, nullable=False)
  end_lumi = Column(Float, nullable=False)
  recorded_lumi = Column(Float, nullable=False)
  l1_key = Column(String, nullable=False)
  hlt_key = Column(String, nullable=False)
  l1_rate = Column(Float, nullable=False)
  hlt_physics_rate = Column(Float, nullable=False)
  duration = Column(Integer, nullable=False)
  fill_number = Column(Integer, nullable=False)
  injection_scheme = Column(String)
  era = Column(String, nullable=False)


# ============== Tables for tracking the progress of monitor element extraction ============== #

class TrackedMEPathForMEExtraction(base):
  __tablename__ = 'tracked_me_paths_for_me_extraction'

  me_path = Column(String, primary_key=True, nullable=False)

  __table_args__ = (Index('_tracked_me_paths_for_me_extraction_me_path_uindex', 'me_path', unique=True),)


class TrackedEOSPathForMEExtraction(base):
  __tablename__ = 'tracked_eos_paths_for_me_extraction'

  eos_path = Column(String, primary_key=True, nullable=False)

  __table_args__ = (Index('_tracked_eos_paths_for_me_extraction_eos_path_uindex', 'eos_path', unique=True),)


class NewMEPathForMEExtraction(base):
  __tablename__ = 'new_me_paths_for_me_extraction'

  me_path = Column(String, primary_key=True, nullable=False)

  __table_args__ = (Index('_new_me_paths_for_me_extraction_me_path_uindex', 'me_path', unique=True),)


class NewEOSPathForMEExtraction(base):
  __tablename__ = 'new_eos_paths_for_me_extraction'

  eos_path = Column(String, primary_key=True, nullable=False)

  __table_args__ = (Index('_new_eos_paths_for_me_extraction_eos_path_uindex', 'eos_path', unique=True),)


class QueueToExtract(base):
  __tablename__ = 'queue_to_extract'

  id = Column(Integer, primary_key=True, nullable=False)
  eos_path = Column(String, nullable=False)
  me_path = Column(String, nullable=False)


# ================= Tables for tracking the progress of the trend calculation ================ #

class QueueToCalculate(base):
  __tablename__ = 'queue_to_calculate'

  id = Column(Integer, primary_key=True, nullable=False)

  # Foreign keys
  me_id = Column(Integer, ForeignKey('monitor_elements.id'), nullable=False)
  me = relationship("MonitorElement", foreign_keys=[me_id])


class QueueToCalculateLater(base):
  __tablename__ = 'queue_to_calculate_later'

  id = Column(Integer, primary_key=True, nullable=False)

  # Foreign keys
  me_id = Column(Integer, ForeignKey('monitor_elements.id'), nullable=False)
  me = relationship("MonitorElement", foreign_keys=[me_id])


class LastCalculatedConfig(base):
  __tablename__ = 'last_calculated_configs'

  id = Column(Integer, primary_key=True, nullable=False)
  subsystem = Column(String, nullable=False)
  name = Column(String, nullable=False)
  metric = Column(String, nullable=False)
  plot_title = Column(String, nullable=False)
  y_title = Column(String, nullable=False)
  relative_path = Column(String, nullable=False)
  histo1_path = Column(String)
  histo2_path = Column(String)
  reference_path = Column(String)
  threshold = Column(Integer)

  __table_args__ = (
    Index('_last_calculated_configs_subsystem_name_uindex', 'subsystem', 'name', unique=True),
  )


# ====================================== Helper functions ==================================== #


def setup_db():
  base.metadata.create_all(db)

def get_session():
  Session = sessionmaker(db)
  session = Session()
  return session

def dispose_engine():
  db.dispose()

def vacuum_processed_mes():
  if is_postgres:
    connection = db.connect()
    connection = connection.execution_options(isolation_level='AUTOCOMMIT')
    try:
      connection.execute('VACUUM processed_monitor_elements;')
    except Exception as e:
      print(e)
    finally:
      connection.close()

if __name__ == '__main__':
  setup_db()
