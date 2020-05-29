
const displayConfig = (function() {
    const displayGroups = [

		// ======================================== PixelPhase1 ========================================
		{
			name: "HitEfficiency_BPix_perLayer_group",
			plot_title: "BPIX  Hit Efficiency per layer",
			y_title: "BPIX  Hit Efficiency per layer",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["HitEfficiency_BPix_perLayer", "HitEfficiency_BPix_Layer2", "HitEfficiency_BPix_Layer3", "HitEfficiency_BPix_Layer4"],
		},
		{
			name: "HitEfficiency_FPix_perDisk_group",
			plot_title: "FPIX  Hit Efficiency per disk",
			y_title: "FPIX  Hit Efficiency per disk",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["HitEfficiency_FPix_perDisk", "HitEfficiency_FPix_Dm2", "HitEfficiency_FPix_Dm1", "HitEfficiency_FPix_Dp3", "HitEfficiency_FPix_Dp2", "HitEfficiency_FPix_Dp1"],
		},
		{
			name: "clustCharge_ONTk_FPix_perDisk_mpv_group",
			plot_title: "FPIX Cluster Charge OnTrack per disk (mpv)",
			y_title: "FPIX Cluster Charge OnTrack per disk (mpv)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["clustCharge_ONTk_FPix_perDisk_mpv", "clustCharge_ONTk_FPix_Dm2_mpv", "clustCharge_ONTk_FPix_Dm1_mpv", "clustCharge_ONTk_FPix_Dp3_mpv", "clustCharge_ONTk_FPix_Dp2_mpv", "clustCharge_ONTk_FPix_Dp1_mpv"],
		},
		{
			name: "size_ONTk_FPix_perDisk_mean_group",
			plot_title: "FPIX average cluster size OnTrack per disk (in pixels)",
			y_title: "FPIX average cluster size OnTrack per disk (in pixels)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["size_ONTk_FPix_perDisk_mean", "size_ONTk_FPix_Dm2_mean", "size_ONTk_FPix_Dm1_mean", "size_ONTk_FPix_Dp3_mean", "size_ONTk_FPix_Dp2_mean", "size_ONTk_FPix_Dp1_mean"],
		},
		{
			name: "adc_FPix_perDisk_mean_group",
			plot_title: "FPIX Digi ADC per disk (mean value)",
			y_title: "FPIX Digi ADC per disk (mean value)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["adc_FPix_perDisk_mean", "adc_FPix_Dm2_mean", "adc_FPix_Dm1_mean", "adc_FPix_Dp3_mean", "adc_FPix_Dp2_mean", "adc_FPix_Dp1_mean"],
		},
		{
			name: "clustCharge_ONTk_BPix_perLayer_mpv_group",
			plot_title: "BPIX Cluster Charge OnTrack per layer (mpv)",
			y_title: "BPIX Cluster Charge OnTrack per layer (mpv)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["clustCharge_ONTk_BPix_perLayer_mpv", "clustCharge_ONTk_BPix_Layer2_mpv", "clustCharge_ONTk_BPix_Layer3_mpv", "clustCharge_ONTk_BPix_Layer4_mpv"],
		},
		{
			name: "size_ONTk_BPix_perLayer_mean_group",
			plot_title: "BPIX average cluster size OnTrack per layer (in pixels)",
			y_title: "BPIX average cluster size OnTrack per layer (in pixels)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["size_ONTk_BPix_perLayer_mean", "size_ONTk_BPix_Layer2_mean", "size_ONTk_BPix_Layer3_mean", "size_ONTk_BPix_Layer4_mean"],
		},
		{
			name: "adc_BPix_perLayer_mean_group",
			plot_title: "BPIX Digi ADC per layer (mean value)",
			y_title: "BPIX Digi ADC per layer (mean value)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["adc_BPix_perLayer_mean", "adc_BPix_Layer2_mean", "adc_BPix_Layer3_mean", "adc_BPix_Layer4_mean"],
		},
		{
			name: "clustCharge_ONTk_BPix_perInOutLayer_mpv_group",
			plot_title: "BPIX Cluster Charge OnTrack per inner/outer layer (mpv)",
			y_title: "BPIX Cluster Charge OnTrack per inner/outer layer (mpv)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["clustCharge_ONTk_BPix_perInOutLayer_mpv", "clustCharge_ONTk_BPix_OuterLayer1_mpv", "clustCharge_ONTk_BPix_InnerLayer2_mpv", "clustCharge_ONTk_BPix_OuterLayer2_mpv", "clustCharge_ONTk_BPix_InnerLayer3_mpv", "clustCharge_ONTk_BPix_OuterLayer3_mpv", "clustCharge_ONTk_BPix_InnerLayer4_mpv", "clustCharge_ONTk_BPix_OuterLayer4_mpv"],
		},
		{
			name: "DigiPerClusterPixel_BPix_perLayer_group",
			plot_title: "BPIX total number of digis over digis in clusters per layer",
			y_title: "BPIX total number of digis over digis in clusters per layer",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["DigiPerClusterPixel_BPix_perLayer", "DigiPerClusterPixel_BPix_Layer2", "DigiPerClusterPixel_BPix_Layer3", "DigiPerClusterPixel_BPix_Layer4"],
		},
		{
			name: "DigiPerClusterPixel_FPix_perDisk_group",
			plot_title: "FPIX total number of digis over digis in clusters",
			y_title: "FPIX total number of digis over digis in clusters",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["DigiPerClusterPixel_FPix_perDisk", "DigiPerClusterPixel_FPix_Dm2", "DigiPerClusterPixel_FPix_Dm1", "DigiPerClusterPixel_FPix_Dp3", "DigiPerClusterPixel_FPix_Dp2", "DigiPerClusterPixel_FPix_Dp1"],
		},
		{
			name: "Residuals_X_BPIX_perLayer_mean_group",
			plot_title: "Residuals X BPIX per layer (Mean)",
			y_title: "Residuals X BPIX per layer (Mean)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["Residuals_X_BPIX_perLayer_mean", "Residuals_X_BPIX_L2_mean", "Residuals_X_BPIX_L3_mean", "Residuals_X_BPIX_L4_mean"],
		},
		{
			name: "Residuals_X_BPIX_perLayer_rms_group",
			plot_title: "Residuals X BPIX per layer (RMS)",
			y_title: "Residuals X BPIX per layer (RMS)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["Residuals_X_BPIX_perLayer_rms", "Residuals_X_BPIX_L2_rms", "Residuals_X_BPIX_L3_rms", "Residuals_X_BPIX_L4_rms"],
		},
		{
			name: "Residuals_Y_BPIX_perLayer_mean_group",
			plot_title: "Residuals Y BPIX per layer (Mean)",
			y_title: "Residuals Y BPIX per layer (Mean)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["Residuals_Y_BPIX_perLayer_mean", "Residuals_Y_BPIX_L2_mean", "Residuals_Y_BPIX_L3_mean", "Residuals_Y_BPIX_L4_mean"],
		},
		{
			name: "Residuals_Y_BPIX_perLayer_rms_group",
			plot_title: "Residuals Y BPIX per layer (RMS)",
			y_title: "Residuals Y BPIX per layer (RMS)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["Residuals_Y_BPIX_perLayer_rms", "Residuals_Y_BPIX_L2_rms", "Residuals_Y_BPIX_L3_rms", "Residuals_Y_BPIX_L4_rms"],
		},
		{
			name: "Residuals_X_FPIX_perMinusDisk_mean_group",
			plot_title: "Residuals X FPIX per disk - (Mean)",
			y_title: "Residuals X FPIX per disk - (Mean)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["Residuals_X_FPIX_perMinusDisk_mean", "Residuals_X_FPIX_Dm2_mean", "Residuals_X_FPIX_Dm1_mean"],
		},
		{
			name: "Residuals_X_FPIX_perMinusDisk_rms_group",
			plot_title: "Residuals X FPIX per disk - (RMS)",
			y_title: "Residuals X FPIX per disk - (RMS)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["Residuals_X_FPIX_perMinusDisk_rms", "Residuals_X_FPIX_Dm2_rms", "Residuals_X_FPIX_Dm1_rms"],
		},
		{
			name: "Residuals_Y_FPIX_perMinusDisk_mean_group",
			plot_title: "Residuals Y FPIX per disk - (Mean)",
			y_title: "Residuals Y FPIX per disk - (Mean)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["Residuals_Y_FPIX_perMinusDisk_mean", "Residuals_Y_FPIX_Dm2_mean", "Residuals_Y_FPIX_Dm1_mean"],
		},
		{
			name: "Residuals_Y_FPIX_perMinusDisk_rms_group",
			plot_title: "Residuals Y FPIX per disk - (RMS)",
			y_title: "Residuals Y FPIX per disk - (RMS)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["Residuals_Y_FPIX_perMinusDisk_rms", "Residuals_Y_FPIX_Dm2_rms", "Residuals_Y_FPIX_Dm1_rms"],
		},
		{
			name: "Residuals_X_FPIX_perPlusDisk_mean_group",
			plot_title: "Residuals X FPIX per disk + (Mean)",
			y_title: "Residuals X FPIX per disk + (Mean)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["Residuals_X_FPIX_perPlusDisk_mean", "Residuals_X_FPIX_Dp2_mean", "Residuals_X_FPIX_Dp1_mean"],
		},
		{
			name: "Residuals_X_FPIX_perPlusDisk_rms_group",
			plot_title: "Residuals X FPIX per disk + (RMS)",
			y_title: "Residuals X FPIX per disk + (RMS)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["Residuals_X_FPIX_perPlusDisk_rms", "Residuals_X_FPIX_Dp2_rms", "Residuals_X_FPIX_Dp1_rms"],
		},
		{
			name: "Residuals_Y_FPIX_perPlusDisk_mean_group",
			plot_title: "Residuals Y FPIX per disk + (Mean)",
			y_title: "Residuals Y FPIX per disk + (Mean)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["Residuals_Y_FPIX_perPlusDisk_mean", "Residuals_Y_FPIX_Dp2_mean", "Residuals_Y_FPIX_Dp1_mean"],
		},
		{
			name: "Residuals_Y_FPIX_perPlusDisk_rms_group",
			plot_title: "Residuals Y FPIX per disk + (RMS)",
			y_title: "Residuals Y FPIX per disk + (RMS)",
			subsystem: "PixelPhase1",
			correlation: false,
			series: ["Residuals_Y_FPIX_perPlusDisk_rms", "Residuals_Y_FPIX_Dp2_rms", "Residuals_Y_FPIX_Dp1_rms"],
		},

		// ======================================== Pixel ========================================
		{
			name: "HitResiduals_X_FPIX_Dm1_mean_group",
			plot_title: "HitResiduals X FPIX Mean",
			y_title: "HitResiduals X FPIX Mean",
			subsystem: "Pixel",
			correlation: false,
			series: ["HitResiduals_X_FPIX_Dm1_mean", "HitResiduals_X_FPIX_Dp1_mean"],
		},
		{
			name: "HitResiduals_X_FPIX_Dm1_rms_group",
			plot_title: "HitResiduals X FPIX RMS",
			y_title: "HitResiduals X FPIX RMS",
			subsystem: "Pixel",
			correlation: false,
			series: ["HitResiduals_X_FPIX_Dm1_rms", "HitResiduals_X_FPIX_Dp1_rms"],
		},
		{
			name: "HitResiduals_Y_FPIX_Dm1_mean_group",
			plot_title: "HitResiduals Y FPIX Mean",
			y_title: "HitResiduals Y FPIX Mean",
			subsystem: "Pixel",
			correlation: false,
			series: ["HitResiduals_Y_FPIX_Dm1_mean", "HitResiduals_Y_FPIX_Dp1_mean"],
		},
		{
			name: "HitResiduals_Y_FPIX_Dm1_rms_group",
			plot_title: "HitResiduals Y FPIX RMS",
			y_title: "HitResiduals Y FPIX RMS",
			subsystem: "Pixel",
			correlation: false,
			series: ["HitResiduals_Y_FPIX_Dm1_rms", "HitResiduals_Y_FPIX_Dp1_rms"],
		},
		{
			name: "HitResiduals_X_FPIX_Dm2_mean_group",
			plot_title: "HitResiduals X FPIX Mean",
			y_title: "HitResiduals X FPIX Mean",
			subsystem: "Pixel",
			correlation: false,
			series: ["HitResiduals_X_FPIX_Dm2_mean", "HitResiduals_X_FPIX_Dp2_mean"],
		},
		{
			name: "HitResiduals_X_FPIX_Dm2_rms_group",
			plot_title: "HitResiduals X FPIX RMS",
			y_title: "HitResiduals X FPIX RMS",
			subsystem: "Pixel",
			correlation: false,
			series: ["HitResiduals_X_FPIX_Dm2_rms", "HitResiduals_X_FPIX_Dp2_rms"],
		},
		{
			name: "HitResiduals_Y_FPIX_Dm2_mean_group",
			plot_title: "HitResiduals Y FPIX Mean",
			y_title: "HitResiduals Y FPIX Mean",
			subsystem: "Pixel",
			correlation: false,
			series: ["HitResiduals_Y_FPIX_Dm2_mean", "HitResiduals_Y_FPIX_Dp2_mean"],
		},
		{
			name: "HitResiduals_Y_FPIX_Dm2_rms_group",
			plot_title: "HitResiduals Y FPIX RMS",
			y_title: "HitResiduals Y FPIX RMS",
			subsystem: "Pixel",
			correlation: false,
			series: ["HitResiduals_Y_FPIX_Dm2_rms", "HitResiduals_Y_FPIX_Dp2_rms"],
		},

		// ======================================== SiStrips ========================================
		{
			name: "clusterStoN_ONTk_TIB_L1_mpv_group",
			plot_title: "S/N (mpv)",
			y_title: "S/N (mpv)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["clusterStoN_ONTk_TIB_L1_mpv", "clusterStoN_ONTk_TIB_L2_mpv", "clusterStoN_ONTk_TIB_L3_mpv", "clusterStoN_ONTk_TIB_L4_mpv"],
		},
		{
			name: "summary_ccpercmfromtrack__tecm_mpv_group",
			plot_title: "cluster charge	per cm (from track)",
			y_title: "cluster charge	per cm (from track)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["summary_ccpercmfromtrack__tecm_mpv", "summary_ccpercmfromtrack__tecp_mpv"],
		},
		{
			name: "summary_ccpercmfromtrack__tidm_mpv_group",
			plot_title: "cluster charge	per cm (from track)",
			y_title: "cluster charge	per cm (from track)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["summary_ccpercmfromtrack__tidm_mpv", "summary_ccpercmfromtrack__tidp_mpv"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel1_mean_group",
			plot_title: "HitResiduals TEC Wheel 1 Mean",
			y_title: "HitResiduals TEC Wheel 1 Mean",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel1_mean", "HitResiduals_TEC_PLUS_wheel1_mean"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel1_rms_group",
			plot_title: "HitResiduals TEC Wheel 1 RMS",
			y_title: "HitResiduals TEC Wheel 1 RMS",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel1_rms", "HitResiduals_TEC_PLUS_wheel1_rms"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel2_mean_group",
			plot_title: "HitResiduals TEC Wheel 2 Mean",
			y_title: "HitResiduals TEC Wheel 2 Mean",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel2_mean", "HitResiduals_TEC_PLUS_wheel2_mean"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel2_rms_group",
			plot_title: "HitResiduals TEC Wheel 2 RMS",
			y_title: "HitResiduals TEC Wheel 2 RMS",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel2_rms", "HitResiduals_TEC_PLUS_wheel2_rms"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel3_mean_group",
			plot_title: "HitResiduals TEC Wheel 3 Mean",
			y_title: "HitResiduals TEC Wheel 3 Mean",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel3_mean", "HitResiduals_TEC_PLUS_wheel3_mean"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel3_rms_group",
			plot_title: "HitResiduals TEC Wheel 3 RMS",
			y_title: "HitResiduals TEC Wheel 3 RMS",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel3_rms", "HitResiduals_TEC_PLUS_wheel3_rms"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel4_mean_group",
			plot_title: "HitResiduals TEC Wheel 4 Mean",
			y_title: "HitResiduals TEC Wheel 4 Mean",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel4_mean", "HitResiduals_TEC_PLUS_wheel4_mean"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel4_rms_group",
			plot_title: "HitResiduals TEC Wheel 4 RMS",
			y_title: "HitResiduals TEC Wheel 4 RMS",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel4_rms", "HitResiduals_TEC_PLUS_wheel4_rms"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel5_mean_group",
			plot_title: "HitResiduals TEC Wheel 5 Mean",
			y_title: "HitResiduals TEC Wheel 5 Mean",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel5_mean", "HitResiduals_TEC_PLUS_wheel5_mean"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel5_rms_group",
			plot_title: "HitResiduals TEC Wheel 5 RMS",
			y_title: "HitResiduals TEC Wheel 5 RMS",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel5_rms", "HitResiduals_TEC_PLUS_wheel5_rms"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel6_mean_group",
			plot_title: "HitResiduals TEC Wheel 6 Mean",
			y_title: "HitResiduals TEC Wheel 6 Mean",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel6_mean", "HitResiduals_TEC_PLUS_wheel6_mean"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel6_rms_group",
			plot_title: "HitResiduals TEC Wheel 6 RMS",
			y_title: "HitResiduals TEC Wheel 6 RMS",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel6_rms", "HitResiduals_TEC_PLUS_wheel6_rms"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel7_mean_group",
			plot_title: "HitResiduals TEC Wheel 7 Mean",
			y_title: "HitResiduals TEC Wheel 7 Mean",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel7_mean", "HitResiduals_TEC_PLUS_wheel7_mean"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel7_rms_group",
			plot_title: "HitResiduals TEC Wheel 7 RMS",
			y_title: "HitResiduals TEC Wheel 7 RMS",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel7_rms", "HitResiduals_TEC_PLUS_wheel7_rms"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel8_mean_group",
			plot_title: "HitResiduals TEC Wheel 8 Mean",
			y_title: "HitResiduals TEC Wheel 8 Mean",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel8_mean", "HitResiduals_TEC_PLUS_wheel8_mean"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel8_rms_group",
			plot_title: "HitResiduals TEC Wheel 8 RMS",
			y_title: "HitResiduals TEC Wheel 8 RMS",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel8_rms", "HitResiduals_TEC_PLUS_wheel8_rms"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel9_mean_group",
			plot_title: "HitResiduals TEC Wheel 9 Mean",
			y_title: "HitResiduals TEC Wheel 9 Mean",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel9_mean", "HitResiduals_TEC_PLUS_wheel9_mean"],
		},
		{
			name: "HitResiduals_TEC_MINUS_wheel9_rms_group",
			plot_title: "HitResiduals TEC Wheel 9 RMS",
			y_title: "HitResiduals TEC Wheel 9 RMS",
			subsystem: "SiStrips",
			correlation: false,
			series: ["HitResiduals_TEC_MINUS_wheel9_rms", "HitResiduals_TEC_PLUS_wheel9_rms"],
		},
		{
			name: "NClust_ONTk_TEC_MINUS_mean_group",
			plot_title: "Avg. N_{Clusters} (ON-Track)",
			y_title: "Avg. N_{Clusters} (ON-Track)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["NClust_ONTk_TEC_MINUS_mean", "NClust_ONTk_TEC_PLUS_mean"],
		},
		{
			name: "NClust_ONTk_TEC_MINUS_count_group",
			plot_title: "N_{Clusters} (ON-Track)",
			y_title: "N_{Clusters} (ON-Track)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["NClust_ONTk_TEC_MINUS_count", "NClust_ONTk_TEC_PLUS_count"],
		},
		{
			name: "NClust_OFFTk_TEC_MINUS_mean_group",
			plot_title: "Avg. N_{Clusters} (OFF-Track)",
			y_title: "Avg. N_{Clusters} (OFF-Track)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["NClust_OFFTk_TEC_MINUS_mean", "NClust_OFFTk_TEC_PLUS_mean"],
		},
		{
			name: "NClust_OFFTk_TEC_MINUS_count_group",
			plot_title: "N_{Clusters} (OFF-Track)",
			y_title: "N_{Clusters} (OFF-Track)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["NClust_OFFTk_TEC_MINUS_count", "NClust_OFFTk_TEC_PLUS_count"],
		},
		{
			name: "NClust_ONTk_TID_MINUS_mean_group",
			plot_title: "Avg. N_{Clusters} (ON-Track)",
			y_title: "Avg. N_{Clusters} (ON-Track)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["NClust_ONTk_TID_MINUS_mean", "NClust_ONTk_TID_PLUS_mean"],
		},
		{
			name: "NClust_ONTk_TID_MINUS_count_group",
			plot_title: "N_{Clusters} (ON-Track)",
			y_title: "N_{Clusters} (ON-Track)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["NClust_ONTk_TID_MINUS_count", "NClust_ONTk_TID_PLUS_count"],
		},
		{
			name: "NClust_OFFTk_TID_MINUS_mean_group",
			plot_title: "Avg. N_{Clusters} (OFF-Track)",
			y_title: "Avg. N_{Clusters} (OFF-Track)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["NClust_OFFTk_TID_MINUS_mean", "NClust_OFFTk_TID_PLUS_mean"],
		},
		{
			name: "NClust_OFFTk_TID_MINUS_count_group",
			plot_title: "N_{Clusters} (OFF-Track)",
			y_title: "N_{Clusters} (OFF-Track)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["NClust_OFFTk_TID_MINUS_count", "NClust_OFFTk_TID_PLUS_count"],
		},
		{
			name: "clusterStoN_ONTk_TOB_L1_mpv_group",
			plot_title: "S/N (mpv)",
			y_title: "S/N (mpv)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["clusterStoN_ONTk_TOB_L1_mpv", "clusterStoN_ONTk_TOB_L2_mpv", "clusterStoN_ONTk_TOB_L3_mpv", "clusterStoN_ONTk_TOB_L4_mpv", "clusterStoN_ONTk_TOB_L5_mpv", "clusterStoN_ONTk_TOB_L6_mpv"],
		},
		{
			name: "clusterStoN_ONTk_TID_MINUS_mpv_group",
			plot_title: "S/N (mpv)",
			y_title: "S/N (mpv)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["clusterStoN_ONTk_TID_MINUS_mpv", "clusterStoN_ONTk_TID_PLUS_mpv"],
		},
		{
			name: "clusterStoN_ONTk_TEC_MINUS_mpv_group",
			plot_title: "S/N (mpv)",
			y_title: "S/N (mpv)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["clusterStoN_ONTk_TEC_MINUS_mpv", "clusterStoN_ONTk_TEC_PLUS_mpv"],
		},
		{
			name: "clusterStoN_ONTk_TID_PLUS_R1_mpv_group",
			plot_title: "S/N (mpv)",
			y_title: "S/N (mpv)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["clusterStoN_ONTk_TID_PLUS_R1_mpv", "clusterStoN_ONTk_TID_PLUS_R2_mpv", "clusterStoN_ONTk_TID_PLUS_R3_mpv", "clusterStoN_ONTk_TID_PLUS_W1_mpv", "clusterStoN_ONTk_TID_PLUS_W2_mpv", "clusterStoN_ONTk_TID_PLUS_W3_mpv"],
		},
		{
			name: "clusterStoN_ONTk_TEC_PLUS_R1_mpv_group",
			plot_title: "S/N (mpv)",
			y_title: "S/N (mpv)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["clusterStoN_ONTk_TEC_PLUS_R1_mpv", "clusterStoN_ONTk_TEC_PLUS_R2_mpv", "clusterStoN_ONTk_TEC_PLUS_R3_mpv", "clusterStoN_ONTk_TEC_PLUS_R4_mpv", "clusterStoN_ONTk_TEC_PLUS_R5_mpv", "clusterStoN_ONTk_TEC_PLUS_R6_mpv", "clusterStoN_ONTk_TEC_PLUS_R7_mpv"],
		},
		{
			name: "clusterStoN_ONTk_TEC_PLUS_W1_mpv_group",
			plot_title: "S/N (mpv)",
			y_title: "S/N (mpv)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["clusterStoN_ONTk_TEC_PLUS_W1_mpv", "clusterStoN_ONTk_TEC_PLUS_W2_mpv", "clusterStoN_ONTk_TEC_PLUS_W3_mpv", "clusterStoN_ONTk_TEC_PLUS_W4_mpv", "clusterStoN_ONTk_TEC_PLUS_W5_mpv", "clusterStoN_ONTk_TEC_PLUS_W6_mpv", "clusterStoN_ONTk_TEC_PLUS_W7_mpv", "clusterStoN_ONTk_TEC_PLUS_W8_mpv", "clusterStoN_ONTk_TEC_PLUS_W9_mpv"],
		},
		{
			name: "TotalNumberOfCluster__TID__MINUS_group",
			plot_title: "Average N_{Clusters}",
			y_title: "Average N_{Clusters}",
			subsystem: "SiStrips",
			correlation: false,
			series: ["TotalNumberOfCluster__TID__MINUS", "TotalNumberOfCluster__TID__PLUS"],
		},
		{
			name: "TotalNumberOfCluster__TEC__MINUS_group",
			plot_title: "Average N_{Clusters}",
			y_title: "Average N_{Clusters}",
			subsystem: "SiStrips",
			correlation: false,
			series: ["TotalNumberOfCluster__TEC__MINUS", "TotalNumberOfCluster__TEC__PLUS"],
		},
		{
			name: "clusterStoN_ONTk_TID_MINUS_R1_mpv_group",
			plot_title: "S/N (mpv)",
			y_title: "S/N (mpv)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["clusterStoN_ONTk_TID_MINUS_R1_mpv", "clusterStoN_ONTk_TID_MINUS_R2_mpv", "clusterStoN_ONTk_TID_MINUS_R3_mpv", "clusterStoN_ONTk_TID_MINUS_W1_mpv", "clusterStoN_ONTk_TID_MINUS_W2_mpv", "clusterStoN_ONTk_TID_MINUS_W3_mpv"],
		},
		{
			name: "clusterStoN_ONTk_TEC_MINUS_R1_mpv_group",
			plot_title: "S/N (mpv)",
			y_title: "S/N (mpv)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["clusterStoN_ONTk_TEC_MINUS_R1_mpv", "clusterStoN_ONTk_TEC_MINUS_R2_mpv", "clusterStoN_ONTk_TEC_MINUS_R3_mpv", "clusterStoN_ONTk_TEC_MINUS_R4_mpv", "clusterStoN_ONTk_TEC_MINUS_R5_mpv", "clusterStoN_ONTk_TEC_MINUS_R6_mpv", "clusterStoN_ONTk_TEC_MINUS_R7_mpv"],
		},
		{
			name: "clusterStoN_ONTk_TEC_MINUS_W1_mpv_group",
			plot_title: "S/N (mpv)",
			y_title: "S/N (mpv)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["clusterStoN_ONTk_TEC_MINUS_W1_mpv", "clusterStoN_ONTk_TEC_MINUS_W2_mpv", "clusterStoN_ONTk_TEC_MINUS_W3_mpv", "clusterStoN_ONTk_TEC_MINUS_W4_mpv", "clusterStoN_ONTk_TEC_MINUS_W5_mpv", "clusterStoN_ONTk_TEC_MINUS_W6_mpv", "clusterStoN_ONTk_TEC_MINUS_W7_mpv", "clusterStoN_ONTk_TEC_MINUS_W8_mpv", "clusterStoN_ONTk_TEC_MINUS_W9_mpv"],
		},
		{
			name: "clusterStoN_ONTk_TID_MINUS_mean_group",
			plot_title: "S/N (mean)",
			y_title: "S/N (mean)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["clusterStoN_ONTk_TID_MINUS_mean", "clusterStoN_ONTk_TID_PLUS_mean"],
		},
		{
			name: "clusterStoN_ONTk_TID_PLUS_mean_group",
			plot_title: "S/N (mean)",
			y_title: "S/N (mean)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["clusterStoN_ONTk_TID_PLUS_mean", "clusterStoN_ONTk_TID_MINUS_mean"],
		},
		{
			name: "clusterStoN_ONTk_TEC_MINUS_mean_group",
			plot_title: "S/N (mean)",
			y_title: "S/N (mean)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["clusterStoN_ONTk_TEC_MINUS_mean", "clusterStoN_ONTk_TEC_PLUS_mean"],
		},
		{
			name: "clusterStoN_ONTk_TEC_PLUS_mean_group",
			plot_title: "S/N (mean)",
			y_title: "S/N (mean)",
			subsystem: "SiStrips",
			correlation: false,
			series: ["clusterStoN_ONTk_TEC_PLUS_mean", "clusterStoN_ONTk_TEC_MINUS_mean"],
		},

		// =========================================== Muons ===========================================

		{
			name: "Mean_of_BX_Barrel_Wheels",
			plot_title: "Mean of BX distribution (barrel)",
			y_title: "Mean of BX distribution",
			subsystem: "RPC",
			correlation: false,
			series: ["BX_w0", "BX_wp1", "BX_wp2", "BX_wm1", "BX_wm2"],
		},
		{
			name: "Mean_of_BX_Endcap_pDisks",
			plot_title: "Mean of BX distribution (endcap +)",
			y_title: "Mean of BX distribution",
			subsystem: "RPC",
			correlation: false,
			series: ["BX_dp1", "BX_dp2", "BX_dp3", "BX_dp4"],
		},
		{
			name: "Mean_of_BX_Encap_mDisks",
			plot_title: "Mean of BX distribution (endcap -)",
			y_title: "Mean of BX distribution",
			subsystem: "RPC",
			correlation: false,
			series: ["BX_dm1", "BX_dm2", "BX_dm3", "BX_dm4"],
		},
		{
			name: "Avg_of_Cluster_Size",
			plot_title: "Average of cluster size distribution",
			y_title: "Average cluster size",
			subsystem: "RPC",
			correlation: false,
			series: ["ClusterSize_barrel", "ClusterSize_endcap-", "ClusterSize_endcap+"],
		},
		{
			name: "Mean_Of_Residuals",
			plot_title: "Mean of segment - hit residuals",
			y_title: "Mean of residuals distributions (both phi and theta superlayers)",
			subsystem: "DT",
			correlation: false,
			series: ["MeanRes_Phi", "MeanRes_Theta_YB0", "MeanRes_Theta_YB1", "MeanRes_Theta_YB2"],
		},
		{
			name: "Sigma_Of_Residuals",
			plot_title: "Sigma of segment - hit residuals",
			y_title: "Sigma of residuals distributions (both phi and theta superlayers)",
			subsystem: "DT",
			correlation: false,
			series: ["SigmaRes_Phi", "SigmaRes_Theta_YB0", "SigmaRes_Theta_YB1", "SigmaRes_Theta_YB2"],
		},
		{
			name: "Mean_Of_t0_in_MB1",
			plot_title: "Mean of segment t0 distribution (MB1)",
			y_title: "Mean of t0 distribution (MB1)",
			subsystem: "DT",
			correlation: false,
			series: ["MeanT0_MB1_YB-2", "MeanT0_MB1_YB-1", "MeanT0_MB1_YB0", "MeanT0_MB1_YB1", "MeanT0_MB1_YB2"],
		},
		{
			name: "Mean_Of_t0_MB2",
			plot_title: "Mean of segment t0 distribution (MB2)",
			y_title: "Mean of t0 distribution (MB2)",
			subsystem: "DT",
			correlation: false,
			series: ["MeanT0_MB2_YB-2", "MeanT0_MB2_YB-1", "MeanT0_MB2_YB0", "MeanT0_MB2_YB1", "MeanT0_MB2_YB2"],
		},
		{
			name: "Mean_Of_t0_MB3",
			plot_title: "Mean of segment t0 distribution (MB3)",
			y_title: "Mean of t0 distribution (MB3)",
			subsystem: "DT",
			correlation: false,
			series: ["MeanT0_MB3_YB-2", "MeanT0_MB3_YB-1", "MeanT0_MB3_YB0", "MeanT0_MB3_YB1", "MeanT0_MB3_YB2"],
		},
		{
			name: "Mean_Of_t0_MB4",
			plot_title: "Mean of segment t0 distribution (MB4)",
			y_title: "Mean of t0 distribution (MB4)",
			subsystem: "DT",
			correlation: false,
			series: ["MeanT0_MB4_YB-2", "MeanT0_MB4_YB-1", "MeanT0_MB4_YB0", "MeanT0_MB4_YB1", "MeanT0_MB4_YB2"],
		},
		{
			name: "Residual_Width",
			plot_title: "Residual Width",
			y_title: "Width of segment - hit residual",
			subsystem: "CSC",
			correlation: false,
			series: ["Residual_Width_me-11a", "Residual_Width_me-11b", "Residual_Width_me-12", "Residual_Width_me-13", "Residual_Width_me-21", "Residual_Width_me-22", "Residual_Width_me-31", "Residual_Width_me-32", "Residual_Width_me-41", "Residual_Width_me-42", "Residual_Width_me+11a", "Residual_Width_me+11b", "Residual_Width_me+12", "Residual_Width_me+13", "Residual_Width_me+21", "Residual_Width_me+22", "Residual_Width_me+31", "Residual_Width_me+32", "Residual_Width_me+41", "Residual_Width_me+42"],
		},
		{
			name: "PedestalNoise_Width",
			plot_title: "Pedestal Noise Width",
			y_title: "Width of pedestal noise",
			subsystem: "CSC",
			correlation: false,
			series: ["PedestalNoise_Width_me-11a", "PedestalNoise_Width_me-11b", "PedestalNoise_Width_me-12", "PedestalNoise_Width_me-13", "PedestalNoise_Width_me-21", "PedestalNoise_Width_me-22", "PedestalNoise_Width_me-31", "PedestalNoise_Width_me-32", "PedestalNoise_Width_me-41", "PedestalNoise_Width_me-42", "PedestalNoise_Width_me+11a", "PedestalNoise_Width_me+11b", "PedestalNoise_Width_me+12", "PedestalNoise_Width_me+13", "PedestalNoise_Width_me+21", "PedestalNoise_Width_me+22", "PedestalNoise_Width_me+31", "PedestalNoise_Width_me+32", "PedestalNoise_Width_me+41", "PedestalNoise_Width_me+42"],
		},
        
		// =========================================== HCAL ===========================================
        {
            name: "DIGITiming-MeanTime",
            plot_title: "DIGITiming",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HBP","DIGITiming-MeanTime-HBM","DIGITiming-MeanTime-HEP","DIGITiming-MeanTime-HEM","DIGITiming-MeanTime-HFP","DIGITiming-MeanTime-HFM","DIGITiming-MeanTime-HOM","DIGITiming-MeanTime-HOP"],
        }
        {
            name: "DIGITDCTime-MeanTime",
            plot_title: "DIGITDCTime",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HBP","DIGITDCTime-MeanTime-HBM","DIGITDCTime-MeanTime-HEP","DIGITDCTime-MeanTime-HEM","DIGITDCTime-MeanTime-HFP","DIGITDCTime-MeanTime-HFM","DIGITDCTime-MeanTime-HOM","DIGITDCTime-MeanTime-HOP"],
        }
        {
            name: "DIGITiming-MeanTime-HBP-depth12",
            plot_title: "DIGITiming MeanTime HBP depth12",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HBP01-depth12","DIGITiming-MeanTime-HBP02-depth12","DIGITiming-MeanTime-HBP03-depth12","DIGITiming-MeanTime-HBP04-depth12","DIGITiming-MeanTime-HBP05-depth12","DIGITiming-MeanTime-HBP06-depth12","DIGITiming-MeanTime-HBP07-depth12","DIGITiming-MeanTime-HBP08-depth12","DIGITiming-MeanTime-HBP09-depth12","DIGITiming-MeanTime-HBP10-depth12","DIGITiming-MeanTime-HBP11-depth12","DIGITiming-MeanTime-HBP12-depth12","DIGITiming-MeanTime-HBP13-depth12","DIGITiming-MeanTime-HBP14-depth12","DIGITiming-MeanTime-HBP15-depth12","DIGITiming-MeanTime-HBP16-depth12","DIGITiming-MeanTime-HBP17-depth12","DIGITiming-MeanTime-HBP18-depth12"],
        }
        {
            name: "DIGITiming-Active-Chan-HBP-depth12",
            plot_title: "DIGITiming Active Chan HBP depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HBP01-depth12","DIGITiming-Active-Chan-HBP02-depth12","DIGITiming-Active-Chan-HBP03-depth12","DIGITiming-Active-Chan-HBP04-depth12","DIGITiming-Active-Chan-HBP05-depth12","DIGITiming-Active-Chan-HBP06-depth12","DIGITiming-Active-Chan-HBP07-depth12","DIGITiming-Active-Chan-HBP08-depth12","DIGITiming-Active-Chan-HBP09-depth12","DIGITiming-Active-Chan-HBP10-depth12","DIGITiming-Active-Chan-HBP11-depth12","DIGITiming-Active-Chan-HBP12-depth12","DIGITiming-Active-Chan-HBP13-depth12","DIGITiming-Active-Chan-HBP14-depth12","DIGITiming-Active-Chan-HBP15-depth12","DIGITiming-Active-Chan-HBP16-depth12","DIGITiming-Active-Chan-HBP17-depth12","DIGITiming-Active-Chan-HBP18-depth12"],
        }
        {
            name: "DIGITDCTime-MeanTime-HBP-depth12",
            plot_title: "DIGITDCTime MeanTime HBP depth12",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HBP01-depth12","DIGITDCTime-MeanTime-HBP02-depth12","DIGITDCTime-MeanTime-HBP03-depth12","DIGITDCTime-MeanTime-HBP04-depth12","DIGITDCTime-MeanTime-HBP05-depth12","DIGITDCTime-MeanTime-HBP06-depth12","DIGITDCTime-MeanTime-HBP07-depth12","DIGITDCTime-MeanTime-HBP08-depth12","DIGITDCTime-MeanTime-HBP09-depth12","DIGITDCTime-MeanTime-HBP10-depth12","DIGITDCTime-MeanTime-HBP11-depth12","DIGITDCTime-MeanTime-HBP12-depth12","DIGITDCTime-MeanTime-HBP13-depth12","DIGITDCTime-MeanTime-HBP14-depth12","DIGITDCTime-MeanTime-HBP15-depth12","DIGITDCTime-MeanTime-HBP16-depth12","DIGITDCTime-MeanTime-HBP17-depth12","DIGITDCTime-MeanTime-HBP18-depth12"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HBP-depth12",
            plot_title: "DIGITDCTime Active Chan HBP depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HBP01-depth12","DIGITDCTime-Active-Chan-HBP02-depth12","DIGITDCTime-Active-Chan-HBP03-depth12","DIGITDCTime-Active-Chan-HBP04-depth12","DIGITDCTime-Active-Chan-HBP05-depth12","DIGITDCTime-Active-Chan-HBP06-depth12","DIGITDCTime-Active-Chan-HBP07-depth12","DIGITDCTime-Active-Chan-HBP08-depth12","DIGITDCTime-Active-Chan-HBP09-depth12","DIGITDCTime-Active-Chan-HBP10-depth12","DIGITDCTime-Active-Chan-HBP11-depth12","DIGITDCTime-Active-Chan-HBP12-depth12","DIGITDCTime-Active-Chan-HBP13-depth12","DIGITDCTime-Active-Chan-HBP14-depth12","DIGITDCTime-Active-Chan-HBP15-depth12","DIGITDCTime-Active-Chan-HBP16-depth12","DIGITDCTime-Active-Chan-HBP17-depth12","DIGITDCTime-Active-Chan-HBP18-depth12"],
        }
        {
            name: "DIGIInfor-DeadChan-HBP-depth12",
            plot_title: "Dead Chan HBP depth12",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HBP01-depth12","DIGIInfor-DeadChan-HBP02-depth12","DIGIInfor-DeadChan-HBP03-depth12","DIGIInfor-DeadChan-HBP04-depth12","DIGIInfor-DeadChan-HBP05-depth12","DIGIInfor-DeadChan-HBP06-depth12","DIGIInfor-DeadChan-HBP07-depth12","DIGIInfor-DeadChan-HBP08-depth12","DIGIInfor-DeadChan-HBP09-depth12","DIGIInfor-DeadChan-HBP10-depth12","DIGIInfor-DeadChan-HBP11-depth12","DIGIInfor-DeadChan-HBP12-depth12","DIGIInfor-DeadChan-HBP13-depth12","DIGIInfor-DeadChan-HBP14-depth12","DIGIInfor-DeadChan-HBP15-depth12","DIGIInfor-DeadChan-HBP16-depth12","DIGIInfor-DeadChan-HBP17-depth12","DIGIInfor-DeadChan-HBP18-depth12"],
        }
        {
            name: "DIGITiming-MeanTime-HBP-depth34",
            plot_title: "DIGITiming MeanTime HBP depth34",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HBP01-depth34","DIGITiming-MeanTime-HBP02-depth34","DIGITiming-MeanTime-HBP03-depth34","DIGITiming-MeanTime-HBP04-depth34","DIGITiming-MeanTime-HBP05-depth34","DIGITiming-MeanTime-HBP06-depth34","DIGITiming-MeanTime-HBP07-depth34","DIGITiming-MeanTime-HBP08-depth34","DIGITiming-MeanTime-HBP09-depth34","DIGITiming-MeanTime-HBP10-depth34","DIGITiming-MeanTime-HBP11-depth34","DIGITiming-MeanTime-HBP12-depth34","DIGITiming-MeanTime-HBP13-depth34","DIGITiming-MeanTime-HBP14-depth34","DIGITiming-MeanTime-HBP15-depth34","DIGITiming-MeanTime-HBP16-depth34","DIGITiming-MeanTime-HBP17-depth34","DIGITiming-MeanTime-HBP18-depth34"],
        }
        {
            name: "DIGITiming-Active-Chan-HBP-depth34",
            plot_title: "DIGITiming Active Chan HBP depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HBP01-depth34","DIGITiming-Active-Chan-HBP02-depth34","DIGITiming-Active-Chan-HBP03-depth34","DIGITiming-Active-Chan-HBP04-depth34","DIGITiming-Active-Chan-HBP05-depth34","DIGITiming-Active-Chan-HBP06-depth34","DIGITiming-Active-Chan-HBP07-depth34","DIGITiming-Active-Chan-HBP08-depth34","DIGITiming-Active-Chan-HBP09-depth34","DIGITiming-Active-Chan-HBP10-depth34","DIGITiming-Active-Chan-HBP11-depth34","DIGITiming-Active-Chan-HBP12-depth34","DIGITiming-Active-Chan-HBP13-depth34","DIGITiming-Active-Chan-HBP14-depth34","DIGITiming-Active-Chan-HBP15-depth34","DIGITiming-Active-Chan-HBP16-depth34","DIGITiming-Active-Chan-HBP17-depth34","DIGITiming-Active-Chan-HBP18-depth34"],
        }
        {
            name: "DIGITDCTime-MeanTime-HBP-depth34",
            plot_title: "DIGITDCTime MeanTime HBP depth34",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HBP01-depth34","DIGITDCTime-MeanTime-HBP02-depth34","DIGITDCTime-MeanTime-HBP03-depth34","DIGITDCTime-MeanTime-HBP04-depth34","DIGITDCTime-MeanTime-HBP05-depth34","DIGITDCTime-MeanTime-HBP06-depth34","DIGITDCTime-MeanTime-HBP07-depth34","DIGITDCTime-MeanTime-HBP08-depth34","DIGITDCTime-MeanTime-HBP09-depth34","DIGITDCTime-MeanTime-HBP10-depth34","DIGITDCTime-MeanTime-HBP11-depth34","DIGITDCTime-MeanTime-HBP12-depth34","DIGITDCTime-MeanTime-HBP13-depth34","DIGITDCTime-MeanTime-HBP14-depth34","DIGITDCTime-MeanTime-HBP15-depth34","DIGITDCTime-MeanTime-HBP16-depth34","DIGITDCTime-MeanTime-HBP17-depth34","DIGITDCTime-MeanTime-HBP18-depth34"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HBP-depth34",
            plot_title: "DIGITDCTime Active Chan HBP depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HBP01-depth34","DIGITDCTime-Active-Chan-HBP02-depth34","DIGITDCTime-Active-Chan-HBP03-depth34","DIGITDCTime-Active-Chan-HBP04-depth34","DIGITDCTime-Active-Chan-HBP05-depth34","DIGITDCTime-Active-Chan-HBP06-depth34","DIGITDCTime-Active-Chan-HBP07-depth34","DIGITDCTime-Active-Chan-HBP08-depth34","DIGITDCTime-Active-Chan-HBP09-depth34","DIGITDCTime-Active-Chan-HBP10-depth34","DIGITDCTime-Active-Chan-HBP11-depth34","DIGITDCTime-Active-Chan-HBP12-depth34","DIGITDCTime-Active-Chan-HBP13-depth34","DIGITDCTime-Active-Chan-HBP14-depth34","DIGITDCTime-Active-Chan-HBP15-depth34","DIGITDCTime-Active-Chan-HBP16-depth34","DIGITDCTime-Active-Chan-HBP17-depth34","DIGITDCTime-Active-Chan-HBP18-depth34"],
        }
        {
            name: "DIGIInfor-DeadChan-HBP-depth34",
            plot_title: "Dead Chan HBP depth34",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HBP01-depth34","DIGIInfor-DeadChan-HBP02-depth34","DIGIInfor-DeadChan-HBP03-depth34","DIGIInfor-DeadChan-HBP04-depth34","DIGIInfor-DeadChan-HBP05-depth34","DIGIInfor-DeadChan-HBP06-depth34","DIGIInfor-DeadChan-HBP07-depth34","DIGIInfor-DeadChan-HBP08-depth34","DIGIInfor-DeadChan-HBP09-depth34","DIGIInfor-DeadChan-HBP10-depth34","DIGIInfor-DeadChan-HBP11-depth34","DIGIInfor-DeadChan-HBP12-depth34","DIGIInfor-DeadChan-HBP13-depth34","DIGIInfor-DeadChan-HBP14-depth34","DIGIInfor-DeadChan-HBP15-depth34","DIGIInfor-DeadChan-HBP16-depth34","DIGIInfor-DeadChan-HBP17-depth34","DIGIInfor-DeadChan-HBP18-depth34"],
        }
        {
            name: "DIGITiming-MeanTime-HBP-depth56",
            plot_title: "DIGITiming MeanTime HBP depth56",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HBP01-depth56","DIGITiming-MeanTime-HBP02-depth56","DIGITiming-MeanTime-HBP03-depth56","DIGITiming-MeanTime-HBP04-depth56","DIGITiming-MeanTime-HBP05-depth56","DIGITiming-MeanTime-HBP06-depth56","DIGITiming-MeanTime-HBP07-depth56","DIGITiming-MeanTime-HBP08-depth56","DIGITiming-MeanTime-HBP09-depth56","DIGITiming-MeanTime-HBP10-depth56","DIGITiming-MeanTime-HBP11-depth56","DIGITiming-MeanTime-HBP12-depth56","DIGITiming-MeanTime-HBP13-depth56","DIGITiming-MeanTime-HBP14-depth56","DIGITiming-MeanTime-HBP15-depth56","DIGITiming-MeanTime-HBP16-depth56","DIGITiming-MeanTime-HBP17-depth56","DIGITiming-MeanTime-HBP18-depth56"],
        }
        {
            name: "DIGITiming-Active-Chan-HBP-depth56",
            plot_title: "DIGITiming Active Chan HBP depth56",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HBP01-depth56","DIGITiming-Active-Chan-HBP02-depth56","DIGITiming-Active-Chan-HBP03-depth56","DIGITiming-Active-Chan-HBP04-depth56","DIGITiming-Active-Chan-HBP05-depth56","DIGITiming-Active-Chan-HBP06-depth56","DIGITiming-Active-Chan-HBP07-depth56","DIGITiming-Active-Chan-HBP08-depth56","DIGITiming-Active-Chan-HBP09-depth56","DIGITiming-Active-Chan-HBP10-depth56","DIGITiming-Active-Chan-HBP11-depth56","DIGITiming-Active-Chan-HBP12-depth56","DIGITiming-Active-Chan-HBP13-depth56","DIGITiming-Active-Chan-HBP14-depth56","DIGITiming-Active-Chan-HBP15-depth56","DIGITiming-Active-Chan-HBP16-depth56","DIGITiming-Active-Chan-HBP17-depth56","DIGITiming-Active-Chan-HBP18-depth56"],
        }
        {
            name: "DIGITDCTime-MeanTime-HBP-depth56",
            plot_title: "DIGITDCTime MeanTime HBP depth56",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HBP01-depth56","DIGITDCTime-MeanTime-HBP02-depth56","DIGITDCTime-MeanTime-HBP03-depth56","DIGITDCTime-MeanTime-HBP04-depth56","DIGITDCTime-MeanTime-HBP05-depth56","DIGITDCTime-MeanTime-HBP06-depth56","DIGITDCTime-MeanTime-HBP07-depth56","DIGITDCTime-MeanTime-HBP08-depth56","DIGITDCTime-MeanTime-HBP09-depth56","DIGITDCTime-MeanTime-HBP10-depth56","DIGITDCTime-MeanTime-HBP11-depth56","DIGITDCTime-MeanTime-HBP12-depth56","DIGITDCTime-MeanTime-HBP13-depth56","DIGITDCTime-MeanTime-HBP14-depth56","DIGITDCTime-MeanTime-HBP15-depth56","DIGITDCTime-MeanTime-HBP16-depth56","DIGITDCTime-MeanTime-HBP17-depth56","DIGITDCTime-MeanTime-HBP18-depth56"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HBP-depth56",
            plot_title: "DIGITDCTime Active Chan HBP depth56",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HBP01-depth56","DIGITDCTime-Active-Chan-HBP02-depth56","DIGITDCTime-Active-Chan-HBP03-depth56","DIGITDCTime-Active-Chan-HBP04-depth56","DIGITDCTime-Active-Chan-HBP05-depth56","DIGITDCTime-Active-Chan-HBP06-depth56","DIGITDCTime-Active-Chan-HBP07-depth56","DIGITDCTime-Active-Chan-HBP08-depth56","DIGITDCTime-Active-Chan-HBP09-depth56","DIGITDCTime-Active-Chan-HBP10-depth56","DIGITDCTime-Active-Chan-HBP11-depth56","DIGITDCTime-Active-Chan-HBP12-depth56","DIGITDCTime-Active-Chan-HBP13-depth56","DIGITDCTime-Active-Chan-HBP14-depth56","DIGITDCTime-Active-Chan-HBP15-depth56","DIGITDCTime-Active-Chan-HBP16-depth56","DIGITDCTime-Active-Chan-HBP17-depth56","DIGITDCTime-Active-Chan-HBP18-depth56"],
        }
        {
            name: "DIGIInfor-DeadChan-HBP-depth56",
            plot_title: "Dead Chan HBP depth56",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HBP01-depth56","DIGIInfor-DeadChan-HBP02-depth56","DIGIInfor-DeadChan-HBP03-depth56","DIGIInfor-DeadChan-HBP04-depth56","DIGIInfor-DeadChan-HBP05-depth56","DIGIInfor-DeadChan-HBP06-depth56","DIGIInfor-DeadChan-HBP07-depth56","DIGIInfor-DeadChan-HBP08-depth56","DIGIInfor-DeadChan-HBP09-depth56","DIGIInfor-DeadChan-HBP10-depth56","DIGIInfor-DeadChan-HBP11-depth56","DIGIInfor-DeadChan-HBP12-depth56","DIGIInfor-DeadChan-HBP13-depth56","DIGIInfor-DeadChan-HBP14-depth56","DIGIInfor-DeadChan-HBP15-depth56","DIGIInfor-DeadChan-HBP16-depth56","DIGIInfor-DeadChan-HBP17-depth56","DIGIInfor-DeadChan-HBP18-depth56"],
        }
        {
            name: "DIGITiming-MeanTime-HBM-depth12",
            plot_title: "DIGITiming MeanTime HBM depth12",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HBM01-depth12","DIGITiming-MeanTime-HBM02-depth12","DIGITiming-MeanTime-HBM03-depth12","DIGITiming-MeanTime-HBM04-depth12","DIGITiming-MeanTime-HBM05-depth12","DIGITiming-MeanTime-HBM06-depth12","DIGITiming-MeanTime-HBM07-depth12","DIGITiming-MeanTime-HBM08-depth12","DIGITiming-MeanTime-HBM09-depth12","DIGITiming-MeanTime-HBM10-depth12","DIGITiming-MeanTime-HBM11-depth12","DIGITiming-MeanTime-HBM12-depth12","DIGITiming-MeanTime-HBM13-depth12","DIGITiming-MeanTime-HBM14-depth12","DIGITiming-MeanTime-HBM15-depth12","DIGITiming-MeanTime-HBM16-depth12","DIGITiming-MeanTime-HBM17-depth12","DIGITiming-MeanTime-HBM18-depth12"],
        }
        {
            name: "DIGITiming-Active-Chan-HBM-depth12",
            plot_title: "DIGITiming Active Chan HBM depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HBM01-depth12","DIGITiming-Active-Chan-HBM02-depth12","DIGITiming-Active-Chan-HBM03-depth12","DIGITiming-Active-Chan-HBM04-depth12","DIGITiming-Active-Chan-HBM05-depth12","DIGITiming-Active-Chan-HBM06-depth12","DIGITiming-Active-Chan-HBM07-depth12","DIGITiming-Active-Chan-HBM08-depth12","DIGITiming-Active-Chan-HBM09-depth12","DIGITiming-Active-Chan-HBM10-depth12","DIGITiming-Active-Chan-HBM11-depth12","DIGITiming-Active-Chan-HBM12-depth12","DIGITiming-Active-Chan-HBM13-depth12","DIGITiming-Active-Chan-HBM14-depth12","DIGITiming-Active-Chan-HBM15-depth12","DIGITiming-Active-Chan-HBM16-depth12","DIGITiming-Active-Chan-HBM17-depth12","DIGITiming-Active-Chan-HBM18-depth12"],
        }
        {
            name: "DIGITDCTime-MeanTime-HBM-depth12",
            plot_title: "DIGITDCTime MeanTime HBM depth12",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HBM01-depth12","DIGITDCTime-MeanTime-HBM02-depth12","DIGITDCTime-MeanTime-HBM03-depth12","DIGITDCTime-MeanTime-HBM04-depth12","DIGITDCTime-MeanTime-HBM05-depth12","DIGITDCTime-MeanTime-HBM06-depth12","DIGITDCTime-MeanTime-HBM07-depth12","DIGITDCTime-MeanTime-HBM08-depth12","DIGITDCTime-MeanTime-HBM09-depth12","DIGITDCTime-MeanTime-HBM10-depth12","DIGITDCTime-MeanTime-HBM11-depth12","DIGITDCTime-MeanTime-HBM12-depth12","DIGITDCTime-MeanTime-HBM13-depth12","DIGITDCTime-MeanTime-HBM14-depth12","DIGITDCTime-MeanTime-HBM15-depth12","DIGITDCTime-MeanTime-HBM16-depth12","DIGITDCTime-MeanTime-HBM17-depth12","DIGITDCTime-MeanTime-HBM18-depth12"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HBM-depth12",
            plot_title: "DIGITDCTime Active Chan HBM depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HBM01-depth12","DIGITDCTime-Active-Chan-HBM02-depth12","DIGITDCTime-Active-Chan-HBM03-depth12","DIGITDCTime-Active-Chan-HBM04-depth12","DIGITDCTime-Active-Chan-HBM05-depth12","DIGITDCTime-Active-Chan-HBM06-depth12","DIGITDCTime-Active-Chan-HBM07-depth12","DIGITDCTime-Active-Chan-HBM08-depth12","DIGITDCTime-Active-Chan-HBM09-depth12","DIGITDCTime-Active-Chan-HBM10-depth12","DIGITDCTime-Active-Chan-HBM11-depth12","DIGITDCTime-Active-Chan-HBM12-depth12","DIGITDCTime-Active-Chan-HBM13-depth12","DIGITDCTime-Active-Chan-HBM14-depth12","DIGITDCTime-Active-Chan-HBM15-depth12","DIGITDCTime-Active-Chan-HBM16-depth12","DIGITDCTime-Active-Chan-HBM17-depth12","DIGITDCTime-Active-Chan-HBM18-depth12"],
        }
        {
            name: "DIGIInfor-DeadChan-HBM-depth12",
            plot_title: "Dead Chan HBM depth12",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HBM01-depth12","DIGIInfor-DeadChan-HBM02-depth12","DIGIInfor-DeadChan-HBM03-depth12","DIGIInfor-DeadChan-HBM04-depth12","DIGIInfor-DeadChan-HBM05-depth12","DIGIInfor-DeadChan-HBM06-depth12","DIGIInfor-DeadChan-HBM07-depth12","DIGIInfor-DeadChan-HBM08-depth12","DIGIInfor-DeadChan-HBM09-depth12","DIGIInfor-DeadChan-HBM10-depth12","DIGIInfor-DeadChan-HBM11-depth12","DIGIInfor-DeadChan-HBM12-depth12","DIGIInfor-DeadChan-HBM13-depth12","DIGIInfor-DeadChan-HBM14-depth12","DIGIInfor-DeadChan-HBM15-depth12","DIGIInfor-DeadChan-HBM16-depth12","DIGIInfor-DeadChan-HBM17-depth12","DIGIInfor-DeadChan-HBM18-depth12"],
        }
        {
            name: "DIGITiming-MeanTime-HBM-depth34",
            plot_title: "DIGITiming MeanTime HBM depth34",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HBM01-depth34","DIGITiming-MeanTime-HBM02-depth34","DIGITiming-MeanTime-HBM03-depth34","DIGITiming-MeanTime-HBM04-depth34","DIGITiming-MeanTime-HBM05-depth34","DIGITiming-MeanTime-HBM06-depth34","DIGITiming-MeanTime-HBM07-depth34","DIGITiming-MeanTime-HBM08-depth34","DIGITiming-MeanTime-HBM09-depth34","DIGITiming-MeanTime-HBM10-depth34","DIGITiming-MeanTime-HBM11-depth34","DIGITiming-MeanTime-HBM12-depth34","DIGITiming-MeanTime-HBM13-depth34","DIGITiming-MeanTime-HBM14-depth34","DIGITiming-MeanTime-HBM15-depth34","DIGITiming-MeanTime-HBM16-depth34","DIGITiming-MeanTime-HBM17-depth34","DIGITiming-MeanTime-HBM18-depth34"],
        }
        {
            name: "DIGITiming-Active-Chan-HBM-depth34",
            plot_title: "DIGITiming Active Chan HBM depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HBM01-depth34","DIGITiming-Active-Chan-HBM02-depth34","DIGITiming-Active-Chan-HBM03-depth34","DIGITiming-Active-Chan-HBM04-depth34","DIGITiming-Active-Chan-HBM05-depth34","DIGITiming-Active-Chan-HBM06-depth34","DIGITiming-Active-Chan-HBM07-depth34","DIGITiming-Active-Chan-HBM08-depth34","DIGITiming-Active-Chan-HBM09-depth34","DIGITiming-Active-Chan-HBM10-depth34","DIGITiming-Active-Chan-HBM11-depth34","DIGITiming-Active-Chan-HBM12-depth34","DIGITiming-Active-Chan-HBM13-depth34","DIGITiming-Active-Chan-HBM14-depth34","DIGITiming-Active-Chan-HBM15-depth34","DIGITiming-Active-Chan-HBM16-depth34","DIGITiming-Active-Chan-HBM17-depth34","DIGITiming-Active-Chan-HBM18-depth34"],
        }
        {
            name: "DIGITDCTime-MeanTime-HBM-depth34",
            plot_title: "DIGITDCTime MeanTime HBM depth34",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HBM01-depth34","DIGITDCTime-MeanTime-HBM02-depth34","DIGITDCTime-MeanTime-HBM03-depth34","DIGITDCTime-MeanTime-HBM04-depth34","DIGITDCTime-MeanTime-HBM05-depth34","DIGITDCTime-MeanTime-HBM06-depth34","DIGITDCTime-MeanTime-HBM07-depth34","DIGITDCTime-MeanTime-HBM08-depth34","DIGITDCTime-MeanTime-HBM09-depth34","DIGITDCTime-MeanTime-HBM10-depth34","DIGITDCTime-MeanTime-HBM11-depth34","DIGITDCTime-MeanTime-HBM12-depth34","DIGITDCTime-MeanTime-HBM13-depth34","DIGITDCTime-MeanTime-HBM14-depth34","DIGITDCTime-MeanTime-HBM15-depth34","DIGITDCTime-MeanTime-HBM16-depth34","DIGITDCTime-MeanTime-HBM17-depth34","DIGITDCTime-MeanTime-HBM18-depth34"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HBM-depth34",
            plot_title: "DIGITDCTime Active Chan HBM depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HBM01-depth34","DIGITDCTime-Active-Chan-HBM02-depth34","DIGITDCTime-Active-Chan-HBM03-depth34","DIGITDCTime-Active-Chan-HBM04-depth34","DIGITDCTime-Active-Chan-HBM05-depth34","DIGITDCTime-Active-Chan-HBM06-depth34","DIGITDCTime-Active-Chan-HBM07-depth34","DIGITDCTime-Active-Chan-HBM08-depth34","DIGITDCTime-Active-Chan-HBM09-depth34","DIGITDCTime-Active-Chan-HBM10-depth34","DIGITDCTime-Active-Chan-HBM11-depth34","DIGITDCTime-Active-Chan-HBM12-depth34","DIGITDCTime-Active-Chan-HBM13-depth34","DIGITDCTime-Active-Chan-HBM14-depth34","DIGITDCTime-Active-Chan-HBM15-depth34","DIGITDCTime-Active-Chan-HBM16-depth34","DIGITDCTime-Active-Chan-HBM17-depth34","DIGITDCTime-Active-Chan-HBM18-depth34"],
        }
        {
            name: "DIGIInfor-DeadChan-HBM-depth34",
            plot_title: "Dead Chan HBM depth34",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HBM01-depth34","DIGIInfor-DeadChan-HBM02-depth34","DIGIInfor-DeadChan-HBM03-depth34","DIGIInfor-DeadChan-HBM04-depth34","DIGIInfor-DeadChan-HBM05-depth34","DIGIInfor-DeadChan-HBM06-depth34","DIGIInfor-DeadChan-HBM07-depth34","DIGIInfor-DeadChan-HBM08-depth34","DIGIInfor-DeadChan-HBM09-depth34","DIGIInfor-DeadChan-HBM10-depth34","DIGIInfor-DeadChan-HBM11-depth34","DIGIInfor-DeadChan-HBM12-depth34","DIGIInfor-DeadChan-HBM13-depth34","DIGIInfor-DeadChan-HBM14-depth34","DIGIInfor-DeadChan-HBM15-depth34","DIGIInfor-DeadChan-HBM16-depth34","DIGIInfor-DeadChan-HBM17-depth34","DIGIInfor-DeadChan-HBM18-depth34"],
        }
        {
            name: "DIGITiming-MeanTime-HBM-depth56",
            plot_title: "DIGITiming MeanTime HBM depth56",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HBM01-depth56","DIGITiming-MeanTime-HBM02-depth56","DIGITiming-MeanTime-HBM03-depth56","DIGITiming-MeanTime-HBM04-depth56","DIGITiming-MeanTime-HBM05-depth56","DIGITiming-MeanTime-HBM06-depth56","DIGITiming-MeanTime-HBM07-depth56","DIGITiming-MeanTime-HBM08-depth56","DIGITiming-MeanTime-HBM09-depth56","DIGITiming-MeanTime-HBM10-depth56","DIGITiming-MeanTime-HBM11-depth56","DIGITiming-MeanTime-HBM12-depth56","DIGITiming-MeanTime-HBM13-depth56","DIGITiming-MeanTime-HBM14-depth56","DIGITiming-MeanTime-HBM15-depth56","DIGITiming-MeanTime-HBM16-depth56","DIGITiming-MeanTime-HBM17-depth56","DIGITiming-MeanTime-HBM18-depth56"],
        }
        {
            name: "DIGITiming-Active-Chan-HBM-depth56",
            plot_title: "DIGITiming Active Chan HBM depth56",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HBM01-depth56","DIGITiming-Active-Chan-HBM02-depth56","DIGITiming-Active-Chan-HBM03-depth56","DIGITiming-Active-Chan-HBM04-depth56","DIGITiming-Active-Chan-HBM05-depth56","DIGITiming-Active-Chan-HBM06-depth56","DIGITiming-Active-Chan-HBM07-depth56","DIGITiming-Active-Chan-HBM08-depth56","DIGITiming-Active-Chan-HBM09-depth56","DIGITiming-Active-Chan-HBM10-depth56","DIGITiming-Active-Chan-HBM11-depth56","DIGITiming-Active-Chan-HBM12-depth56","DIGITiming-Active-Chan-HBM13-depth56","DIGITiming-Active-Chan-HBM14-depth56","DIGITiming-Active-Chan-HBM15-depth56","DIGITiming-Active-Chan-HBM16-depth56","DIGITiming-Active-Chan-HBM17-depth56","DIGITiming-Active-Chan-HBM18-depth56"],
        }
        {
            name: "DIGITDCTime-MeanTime-HBM-depth56",
            plot_title: "DIGITDCTime MeanTime HBM depth56",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HBM01-depth56","DIGITDCTime-MeanTime-HBM02-depth56","DIGITDCTime-MeanTime-HBM03-depth56","DIGITDCTime-MeanTime-HBM04-depth56","DIGITDCTime-MeanTime-HBM05-depth56","DIGITDCTime-MeanTime-HBM06-depth56","DIGITDCTime-MeanTime-HBM07-depth56","DIGITDCTime-MeanTime-HBM08-depth56","DIGITDCTime-MeanTime-HBM09-depth56","DIGITDCTime-MeanTime-HBM10-depth56","DIGITDCTime-MeanTime-HBM11-depth56","DIGITDCTime-MeanTime-HBM12-depth56","DIGITDCTime-MeanTime-HBM13-depth56","DIGITDCTime-MeanTime-HBM14-depth56","DIGITDCTime-MeanTime-HBM15-depth56","DIGITDCTime-MeanTime-HBM16-depth56","DIGITDCTime-MeanTime-HBM17-depth56","DIGITDCTime-MeanTime-HBM18-depth56"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HBM-depth56",
            plot_title: "DIGITDCTime Active Chan HBM depth56",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HBM01-depth56","DIGITDCTime-Active-Chan-HBM02-depth56","DIGITDCTime-Active-Chan-HBM03-depth56","DIGITDCTime-Active-Chan-HBM04-depth56","DIGITDCTime-Active-Chan-HBM05-depth56","DIGITDCTime-Active-Chan-HBM06-depth56","DIGITDCTime-Active-Chan-HBM07-depth56","DIGITDCTime-Active-Chan-HBM08-depth56","DIGITDCTime-Active-Chan-HBM09-depth56","DIGITDCTime-Active-Chan-HBM10-depth56","DIGITDCTime-Active-Chan-HBM11-depth56","DIGITDCTime-Active-Chan-HBM12-depth56","DIGITDCTime-Active-Chan-HBM13-depth56","DIGITDCTime-Active-Chan-HBM14-depth56","DIGITDCTime-Active-Chan-HBM15-depth56","DIGITDCTime-Active-Chan-HBM16-depth56","DIGITDCTime-Active-Chan-HBM17-depth56","DIGITDCTime-Active-Chan-HBM18-depth56"],
        }
        {
            name: "DIGIInfor-DeadChan-HBM-depth56",
            plot_title: "Dead Chan HBM depth56",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HBM01-depth56","DIGIInfor-DeadChan-HBM02-depth56","DIGIInfor-DeadChan-HBM03-depth56","DIGIInfor-DeadChan-HBM04-depth56","DIGIInfor-DeadChan-HBM05-depth56","DIGIInfor-DeadChan-HBM06-depth56","DIGIInfor-DeadChan-HBM07-depth56","DIGIInfor-DeadChan-HBM08-depth56","DIGIInfor-DeadChan-HBM09-depth56","DIGIInfor-DeadChan-HBM10-depth56","DIGIInfor-DeadChan-HBM11-depth56","DIGIInfor-DeadChan-HBM12-depth56","DIGIInfor-DeadChan-HBM13-depth56","DIGIInfor-DeadChan-HBM14-depth56","DIGIInfor-DeadChan-HBM15-depth56","DIGIInfor-DeadChan-HBM16-depth56","DIGIInfor-DeadChan-HBM17-depth56","DIGIInfor-DeadChan-HBM18-depth56"],
        }
        {
            name: "DIGITiming-MeanTime-HEP-depth12",
            plot_title: "DIGITiming MeanTime HEP depth12",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HEP01-depth12","DIGITiming-MeanTime-HEP02-depth12","DIGITiming-MeanTime-HEP03-depth12","DIGITiming-MeanTime-HEP04-depth12","DIGITiming-MeanTime-HEP05-depth12","DIGITiming-MeanTime-HEP06-depth12","DIGITiming-MeanTime-HEP07-depth12","DIGITiming-MeanTime-HEP08-depth12","DIGITiming-MeanTime-HEP09-depth12","DIGITiming-MeanTime-HEP10-depth12","DIGITiming-MeanTime-HEP11-depth12","DIGITiming-MeanTime-HEP12-depth12","DIGITiming-MeanTime-HEP13-depth12","DIGITiming-MeanTime-HEP14-depth12","DIGITiming-MeanTime-HEP15-depth12","DIGITiming-MeanTime-HEP16-depth12","DIGITiming-MeanTime-HEP17-depth12","DIGITiming-MeanTime-HEP18-depth12"],
        }
        {
            name: "DIGITiming-Active-Chan-HEP-depth12",
            plot_title: "DIGITiming Active Chan HEP depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HEP01-depth12","DIGITiming-Active-Chan-HEP02-depth12","DIGITiming-Active-Chan-HEP03-depth12","DIGITiming-Active-Chan-HEP04-depth12","DIGITiming-Active-Chan-HEP05-depth12","DIGITiming-Active-Chan-HEP06-depth12","DIGITiming-Active-Chan-HEP07-depth12","DIGITiming-Active-Chan-HEP08-depth12","DIGITiming-Active-Chan-HEP09-depth12","DIGITiming-Active-Chan-HEP10-depth12","DIGITiming-Active-Chan-HEP11-depth12","DIGITiming-Active-Chan-HEP12-depth12","DIGITiming-Active-Chan-HEP13-depth12","DIGITiming-Active-Chan-HEP14-depth12","DIGITiming-Active-Chan-HEP15-depth12","DIGITiming-Active-Chan-HEP16-depth12","DIGITiming-Active-Chan-HEP17-depth12","DIGITiming-Active-Chan-HEP18-depth12"],
        }
        {
            name: "DIGITDCTime-MeanTime-HEP-depth12",
            plot_title: "DIGITDCTime MeanTime HEP depth12",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HEP01-depth12","DIGITDCTime-MeanTime-HEP02-depth12","DIGITDCTime-MeanTime-HEP03-depth12","DIGITDCTime-MeanTime-HEP04-depth12","DIGITDCTime-MeanTime-HEP05-depth12","DIGITDCTime-MeanTime-HEP06-depth12","DIGITDCTime-MeanTime-HEP07-depth12","DIGITDCTime-MeanTime-HEP08-depth12","DIGITDCTime-MeanTime-HEP09-depth12","DIGITDCTime-MeanTime-HEP10-depth12","DIGITDCTime-MeanTime-HEP11-depth12","DIGITDCTime-MeanTime-HEP12-depth12","DIGITDCTime-MeanTime-HEP13-depth12","DIGITDCTime-MeanTime-HEP14-depth12","DIGITDCTime-MeanTime-HEP15-depth12","DIGITDCTime-MeanTime-HEP16-depth12","DIGITDCTime-MeanTime-HEP17-depth12","DIGITDCTime-MeanTime-HEP18-depth12"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HEP-depth12",
            plot_title: "DIGITDCTime Active Chan HEP depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HEP01-depth12","DIGITDCTime-Active-Chan-HEP02-depth12","DIGITDCTime-Active-Chan-HEP03-depth12","DIGITDCTime-Active-Chan-HEP04-depth12","DIGITDCTime-Active-Chan-HEP05-depth12","DIGITDCTime-Active-Chan-HEP06-depth12","DIGITDCTime-Active-Chan-HEP07-depth12","DIGITDCTime-Active-Chan-HEP08-depth12","DIGITDCTime-Active-Chan-HEP09-depth12","DIGITDCTime-Active-Chan-HEP10-depth12","DIGITDCTime-Active-Chan-HEP11-depth12","DIGITDCTime-Active-Chan-HEP12-depth12","DIGITDCTime-Active-Chan-HEP13-depth12","DIGITDCTime-Active-Chan-HEP14-depth12","DIGITDCTime-Active-Chan-HEP15-depth12","DIGITDCTime-Active-Chan-HEP16-depth12","DIGITDCTime-Active-Chan-HEP17-depth12","DIGITDCTime-Active-Chan-HEP18-depth12"],
        }
        {
            name: "DIGIInfor-DeadChan-HEP-depth12",
            plot_title: "Dead Chan HEP depth12",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HEP01-depth12","DIGIInfor-DeadChan-HEP02-depth12","DIGIInfor-DeadChan-HEP03-depth12","DIGIInfor-DeadChan-HEP04-depth12","DIGIInfor-DeadChan-HEP05-depth12","DIGIInfor-DeadChan-HEP06-depth12","DIGIInfor-DeadChan-HEP07-depth12","DIGIInfor-DeadChan-HEP08-depth12","DIGIInfor-DeadChan-HEP09-depth12","DIGIInfor-DeadChan-HEP10-depth12","DIGIInfor-DeadChan-HEP11-depth12","DIGIInfor-DeadChan-HEP12-depth12","DIGIInfor-DeadChan-HEP13-depth12","DIGIInfor-DeadChan-HEP14-depth12","DIGIInfor-DeadChan-HEP15-depth12","DIGIInfor-DeadChan-HEP16-depth12","DIGIInfor-DeadChan-HEP17-depth12","DIGIInfor-DeadChan-HEP18-depth12"],
        }
        {
            name: "DIGITiming-MeanTime-HEP-depth34",
            plot_title: "DIGITiming MeanTime HEP depth34",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HEP01-depth34","DIGITiming-MeanTime-HEP02-depth34","DIGITiming-MeanTime-HEP03-depth34","DIGITiming-MeanTime-HEP04-depth34","DIGITiming-MeanTime-HEP05-depth34","DIGITiming-MeanTime-HEP06-depth34","DIGITiming-MeanTime-HEP07-depth34","DIGITiming-MeanTime-HEP08-depth34","DIGITiming-MeanTime-HEP09-depth34","DIGITiming-MeanTime-HEP10-depth34","DIGITiming-MeanTime-HEP11-depth34","DIGITiming-MeanTime-HEP12-depth34","DIGITiming-MeanTime-HEP13-depth34","DIGITiming-MeanTime-HEP14-depth34","DIGITiming-MeanTime-HEP15-depth34","DIGITiming-MeanTime-HEP16-depth34","DIGITiming-MeanTime-HEP17-depth34","DIGITiming-MeanTime-HEP18-depth34"],
        }
        {
            name: "DIGITiming-Active-Chan-HEP-depth34",
            plot_title: "DIGITiming Active Chan HEP depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HEP01-depth34","DIGITiming-Active-Chan-HEP02-depth34","DIGITiming-Active-Chan-HEP03-depth34","DIGITiming-Active-Chan-HEP04-depth34","DIGITiming-Active-Chan-HEP05-depth34","DIGITiming-Active-Chan-HEP06-depth34","DIGITiming-Active-Chan-HEP07-depth34","DIGITiming-Active-Chan-HEP08-depth34","DIGITiming-Active-Chan-HEP09-depth34","DIGITiming-Active-Chan-HEP10-depth34","DIGITiming-Active-Chan-HEP11-depth34","DIGITiming-Active-Chan-HEP12-depth34","DIGITiming-Active-Chan-HEP13-depth34","DIGITiming-Active-Chan-HEP14-depth34","DIGITiming-Active-Chan-HEP15-depth34","DIGITiming-Active-Chan-HEP16-depth34","DIGITiming-Active-Chan-HEP17-depth34","DIGITiming-Active-Chan-HEP18-depth34"],
        }
        {
            name: "DIGITDCTime-MeanTime-HEP-depth34",
            plot_title: "DIGITDCTime MeanTime HEP depth34",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HEP01-depth34","DIGITDCTime-MeanTime-HEP02-depth34","DIGITDCTime-MeanTime-HEP03-depth34","DIGITDCTime-MeanTime-HEP04-depth34","DIGITDCTime-MeanTime-HEP05-depth34","DIGITDCTime-MeanTime-HEP06-depth34","DIGITDCTime-MeanTime-HEP07-depth34","DIGITDCTime-MeanTime-HEP08-depth34","DIGITDCTime-MeanTime-HEP09-depth34","DIGITDCTime-MeanTime-HEP10-depth34","DIGITDCTime-MeanTime-HEP11-depth34","DIGITDCTime-MeanTime-HEP12-depth34","DIGITDCTime-MeanTime-HEP13-depth34","DIGITDCTime-MeanTime-HEP14-depth34","DIGITDCTime-MeanTime-HEP15-depth34","DIGITDCTime-MeanTime-HEP16-depth34","DIGITDCTime-MeanTime-HEP17-depth34","DIGITDCTime-MeanTime-HEP18-depth34"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HEP-depth34",
            plot_title: "DIGITDCTime Active Chan HEP depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HEP01-depth34","DIGITDCTime-Active-Chan-HEP02-depth34","DIGITDCTime-Active-Chan-HEP03-depth34","DIGITDCTime-Active-Chan-HEP04-depth34","DIGITDCTime-Active-Chan-HEP05-depth34","DIGITDCTime-Active-Chan-HEP06-depth34","DIGITDCTime-Active-Chan-HEP07-depth34","DIGITDCTime-Active-Chan-HEP08-depth34","DIGITDCTime-Active-Chan-HEP09-depth34","DIGITDCTime-Active-Chan-HEP10-depth34","DIGITDCTime-Active-Chan-HEP11-depth34","DIGITDCTime-Active-Chan-HEP12-depth34","DIGITDCTime-Active-Chan-HEP13-depth34","DIGITDCTime-Active-Chan-HEP14-depth34","DIGITDCTime-Active-Chan-HEP15-depth34","DIGITDCTime-Active-Chan-HEP16-depth34","DIGITDCTime-Active-Chan-HEP17-depth34","DIGITDCTime-Active-Chan-HEP18-depth34"],
        }
        {
            name: "DIGIInfor-DeadChan-HEP-depth34",
            plot_title: "Dead Chan HEP depth34",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HEP01-depth34","DIGIInfor-DeadChan-HEP02-depth34","DIGIInfor-DeadChan-HEP03-depth34","DIGIInfor-DeadChan-HEP04-depth34","DIGIInfor-DeadChan-HEP05-depth34","DIGIInfor-DeadChan-HEP06-depth34","DIGIInfor-DeadChan-HEP07-depth34","DIGIInfor-DeadChan-HEP08-depth34","DIGIInfor-DeadChan-HEP09-depth34","DIGIInfor-DeadChan-HEP10-depth34","DIGIInfor-DeadChan-HEP11-depth34","DIGIInfor-DeadChan-HEP12-depth34","DIGIInfor-DeadChan-HEP13-depth34","DIGIInfor-DeadChan-HEP14-depth34","DIGIInfor-DeadChan-HEP15-depth34","DIGIInfor-DeadChan-HEP16-depth34","DIGIInfor-DeadChan-HEP17-depth34","DIGIInfor-DeadChan-HEP18-depth34"],
        }
        {
            name: "DIGITiming-MeanTime-HEP-depth567",
            plot_title: "DIGITiming MeanTime HEP depth567",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HEP01-depth567","DIGITiming-MeanTime-HEP02-depth567","DIGITiming-MeanTime-HEP03-depth567","DIGITiming-MeanTime-HEP04-depth567","DIGITiming-MeanTime-HEP05-depth567","DIGITiming-MeanTime-HEP06-depth567","DIGITiming-MeanTime-HEP07-depth567","DIGITiming-MeanTime-HEP08-depth567","DIGITiming-MeanTime-HEP09-depth567","DIGITiming-MeanTime-HEP10-depth567","DIGITiming-MeanTime-HEP11-depth567","DIGITiming-MeanTime-HEP12-depth567","DIGITiming-MeanTime-HEP13-depth567","DIGITiming-MeanTime-HEP14-depth567","DIGITiming-MeanTime-HEP15-depth567","DIGITiming-MeanTime-HEP16-depth567","DIGITiming-MeanTime-HEP17-depth567","DIGITiming-MeanTime-HEP18-depth567"],
        }
        {
            name: "DIGITiming-Active-Chan-HEP-depth567",
            plot_title: "DIGITiming Active Chan HEP depth567",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HEP01-depth567","DIGITiming-Active-Chan-HEP02-depth567","DIGITiming-Active-Chan-HEP03-depth567","DIGITiming-Active-Chan-HEP04-depth567","DIGITiming-Active-Chan-HEP05-depth567","DIGITiming-Active-Chan-HEP06-depth567","DIGITiming-Active-Chan-HEP07-depth567","DIGITiming-Active-Chan-HEP08-depth567","DIGITiming-Active-Chan-HEP09-depth567","DIGITiming-Active-Chan-HEP10-depth567","DIGITiming-Active-Chan-HEP11-depth567","DIGITiming-Active-Chan-HEP12-depth567","DIGITiming-Active-Chan-HEP13-depth567","DIGITiming-Active-Chan-HEP14-depth567","DIGITiming-Active-Chan-HEP15-depth567","DIGITiming-Active-Chan-HEP16-depth567","DIGITiming-Active-Chan-HEP17-depth567","DIGITiming-Active-Chan-HEP18-depth567"],
        }
        {
            name: "DIGITDCTime-MeanTime-HEP-depth567",
            plot_title: "DIGITDCTime MeanTime HEP depth567",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HEP01-depth567","DIGITDCTime-MeanTime-HEP02-depth567","DIGITDCTime-MeanTime-HEP03-depth567","DIGITDCTime-MeanTime-HEP04-depth567","DIGITDCTime-MeanTime-HEP05-depth567","DIGITDCTime-MeanTime-HEP06-depth567","DIGITDCTime-MeanTime-HEP07-depth567","DIGITDCTime-MeanTime-HEP08-depth567","DIGITDCTime-MeanTime-HEP09-depth567","DIGITDCTime-MeanTime-HEP10-depth567","DIGITDCTime-MeanTime-HEP11-depth567","DIGITDCTime-MeanTime-HEP12-depth567","DIGITDCTime-MeanTime-HEP13-depth567","DIGITDCTime-MeanTime-HEP14-depth567","DIGITDCTime-MeanTime-HEP15-depth567","DIGITDCTime-MeanTime-HEP16-depth567","DIGITDCTime-MeanTime-HEP17-depth567","DIGITDCTime-MeanTime-HEP18-depth567"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HEP-depth567",
            plot_title: "DIGITDCTime Active Chan HEP depth567",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HEP01-depth567","DIGITDCTime-Active-Chan-HEP02-depth567","DIGITDCTime-Active-Chan-HEP03-depth567","DIGITDCTime-Active-Chan-HEP04-depth567","DIGITDCTime-Active-Chan-HEP05-depth567","DIGITDCTime-Active-Chan-HEP06-depth567","DIGITDCTime-Active-Chan-HEP07-depth567","DIGITDCTime-Active-Chan-HEP08-depth567","DIGITDCTime-Active-Chan-HEP09-depth567","DIGITDCTime-Active-Chan-HEP10-depth567","DIGITDCTime-Active-Chan-HEP11-depth567","DIGITDCTime-Active-Chan-HEP12-depth567","DIGITDCTime-Active-Chan-HEP13-depth567","DIGITDCTime-Active-Chan-HEP14-depth567","DIGITDCTime-Active-Chan-HEP15-depth567","DIGITDCTime-Active-Chan-HEP16-depth567","DIGITDCTime-Active-Chan-HEP17-depth567","DIGITDCTime-Active-Chan-HEP18-depth567"],
        }
        {
            name: "DIGIInfor-DeadChan-HEP-depth567",
            plot_title: "Dead Chan HEP depth567",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HEP01-depth567","DIGIInfor-DeadChan-HEP02-depth567","DIGIInfor-DeadChan-HEP03-depth567","DIGIInfor-DeadChan-HEP04-depth567","DIGIInfor-DeadChan-HEP05-depth567","DIGIInfor-DeadChan-HEP06-depth567","DIGIInfor-DeadChan-HEP07-depth567","DIGIInfor-DeadChan-HEP08-depth567","DIGIInfor-DeadChan-HEP09-depth567","DIGIInfor-DeadChan-HEP10-depth567","DIGIInfor-DeadChan-HEP11-depth567","DIGIInfor-DeadChan-HEP12-depth567","DIGIInfor-DeadChan-HEP13-depth567","DIGIInfor-DeadChan-HEP14-depth567","DIGIInfor-DeadChan-HEP15-depth567","DIGIInfor-DeadChan-HEP16-depth567","DIGIInfor-DeadChan-HEP17-depth567","DIGIInfor-DeadChan-HEP18-depth567"],
        }
        {
            name: "DIGITiming-MeanTime-HEM-depth12",
            plot_title: "DIGITiming MeanTime HEM depth12",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HEM01-depth12","DIGITiming-MeanTime-HEM02-depth12","DIGITiming-MeanTime-HEM03-depth12","DIGITiming-MeanTime-HEM04-depth12","DIGITiming-MeanTime-HEM05-depth12","DIGITiming-MeanTime-HEM06-depth12","DIGITiming-MeanTime-HEM07-depth12","DIGITiming-MeanTime-HEM08-depth12","DIGITiming-MeanTime-HEM09-depth12","DIGITiming-MeanTime-HEM10-depth12","DIGITiming-MeanTime-HEM11-depth12","DIGITiming-MeanTime-HEM12-depth12","DIGITiming-MeanTime-HEM13-depth12","DIGITiming-MeanTime-HEM14-depth12","DIGITiming-MeanTime-HEM15-depth12","DIGITiming-MeanTime-HEM16-depth12","DIGITiming-MeanTime-HEM17-depth12","DIGITiming-MeanTime-HEM18-depth12"],
        }
        {
            name: "DIGITiming-Active-Chan-HEM-depth12",
            plot_title: "DIGITiming Active Chan HEM depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HEM01-depth12","DIGITiming-Active-Chan-HEM02-depth12","DIGITiming-Active-Chan-HEM03-depth12","DIGITiming-Active-Chan-HEM04-depth12","DIGITiming-Active-Chan-HEM05-depth12","DIGITiming-Active-Chan-HEM06-depth12","DIGITiming-Active-Chan-HEM07-depth12","DIGITiming-Active-Chan-HEM08-depth12","DIGITiming-Active-Chan-HEM09-depth12","DIGITiming-Active-Chan-HEM10-depth12","DIGITiming-Active-Chan-HEM11-depth12","DIGITiming-Active-Chan-HEM12-depth12","DIGITiming-Active-Chan-HEM13-depth12","DIGITiming-Active-Chan-HEM14-depth12","DIGITiming-Active-Chan-HEM15-depth12","DIGITiming-Active-Chan-HEM16-depth12","DIGITiming-Active-Chan-HEM17-depth12","DIGITiming-Active-Chan-HEM18-depth12"],
        }
        {
            name: "DIGITDCTime-MeanTime-HEM-depth12",
            plot_title: "DIGITDCTime MeanTime HEM depth12",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HEM01-depth12","DIGITDCTime-MeanTime-HEM02-depth12","DIGITDCTime-MeanTime-HEM03-depth12","DIGITDCTime-MeanTime-HEM04-depth12","DIGITDCTime-MeanTime-HEM05-depth12","DIGITDCTime-MeanTime-HEM06-depth12","DIGITDCTime-MeanTime-HEM07-depth12","DIGITDCTime-MeanTime-HEM08-depth12","DIGITDCTime-MeanTime-HEM09-depth12","DIGITDCTime-MeanTime-HEM10-depth12","DIGITDCTime-MeanTime-HEM11-depth12","DIGITDCTime-MeanTime-HEM12-depth12","DIGITDCTime-MeanTime-HEM13-depth12","DIGITDCTime-MeanTime-HEM14-depth12","DIGITDCTime-MeanTime-HEM15-depth12","DIGITDCTime-MeanTime-HEM16-depth12","DIGITDCTime-MeanTime-HEM17-depth12","DIGITDCTime-MeanTime-HEM18-depth12"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HEM-depth12",
            plot_title: "DIGITDCTime Active Chan HEM depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HEM01-depth12","DIGITDCTime-Active-Chan-HEM02-depth12","DIGITDCTime-Active-Chan-HEM03-depth12","DIGITDCTime-Active-Chan-HEM04-depth12","DIGITDCTime-Active-Chan-HEM05-depth12","DIGITDCTime-Active-Chan-HEM06-depth12","DIGITDCTime-Active-Chan-HEM07-depth12","DIGITDCTime-Active-Chan-HEM08-depth12","DIGITDCTime-Active-Chan-HEM09-depth12","DIGITDCTime-Active-Chan-HEM10-depth12","DIGITDCTime-Active-Chan-HEM11-depth12","DIGITDCTime-Active-Chan-HEM12-depth12","DIGITDCTime-Active-Chan-HEM13-depth12","DIGITDCTime-Active-Chan-HEM14-depth12","DIGITDCTime-Active-Chan-HEM15-depth12","DIGITDCTime-Active-Chan-HEM16-depth12","DIGITDCTime-Active-Chan-HEM17-depth12","DIGITDCTime-Active-Chan-HEM18-depth12"],
        }
        {
            name: "DIGIInfor-DeadChan-HEM-depth12",
            plot_title: "Dead Chan HEM depth12",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HEM01-depth12","DIGIInfor-DeadChan-HEM02-depth12","DIGIInfor-DeadChan-HEM03-depth12","DIGIInfor-DeadChan-HEM04-depth12","DIGIInfor-DeadChan-HEM05-depth12","DIGIInfor-DeadChan-HEM06-depth12","DIGIInfor-DeadChan-HEM07-depth12","DIGIInfor-DeadChan-HEM08-depth12","DIGIInfor-DeadChan-HEM09-depth12","DIGIInfor-DeadChan-HEM10-depth12","DIGIInfor-DeadChan-HEM11-depth12","DIGIInfor-DeadChan-HEM12-depth12","DIGIInfor-DeadChan-HEM13-depth12","DIGIInfor-DeadChan-HEM14-depth12","DIGIInfor-DeadChan-HEM15-depth12","DIGIInfor-DeadChan-HEM16-depth12","DIGIInfor-DeadChan-HEM17-depth12","DIGIInfor-DeadChan-HEM18-depth12"],
        }
        {
            name: "DIGITiming-MeanTime-HEM-depth34",
            plot_title: "DIGITiming MeanTime HEM depth34",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HEM01-depth34","DIGITiming-MeanTime-HEM02-depth34","DIGITiming-MeanTime-HEM03-depth34","DIGITiming-MeanTime-HEM04-depth34","DIGITiming-MeanTime-HEM05-depth34","DIGITiming-MeanTime-HEM06-depth34","DIGITiming-MeanTime-HEM07-depth34","DIGITiming-MeanTime-HEM08-depth34","DIGITiming-MeanTime-HEM09-depth34","DIGITiming-MeanTime-HEM10-depth34","DIGITiming-MeanTime-HEM11-depth34","DIGITiming-MeanTime-HEM12-depth34","DIGITiming-MeanTime-HEM13-depth34","DIGITiming-MeanTime-HEM14-depth34","DIGITiming-MeanTime-HEM15-depth34","DIGITiming-MeanTime-HEM16-depth34","DIGITiming-MeanTime-HEM17-depth34","DIGITiming-MeanTime-HEM18-depth34"],
        }
        {
            name: "DIGITiming-Active-Chan-HEM-depth34",
            plot_title: "DIGITiming Active Chan HEM depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HEM01-depth34","DIGITiming-Active-Chan-HEM02-depth34","DIGITiming-Active-Chan-HEM03-depth34","DIGITiming-Active-Chan-HEM04-depth34","DIGITiming-Active-Chan-HEM05-depth34","DIGITiming-Active-Chan-HEM06-depth34","DIGITiming-Active-Chan-HEM07-depth34","DIGITiming-Active-Chan-HEM08-depth34","DIGITiming-Active-Chan-HEM09-depth34","DIGITiming-Active-Chan-HEM10-depth34","DIGITiming-Active-Chan-HEM11-depth34","DIGITiming-Active-Chan-HEM12-depth34","DIGITiming-Active-Chan-HEM13-depth34","DIGITiming-Active-Chan-HEM14-depth34","DIGITiming-Active-Chan-HEM15-depth34","DIGITiming-Active-Chan-HEM16-depth34","DIGITiming-Active-Chan-HEM17-depth34","DIGITiming-Active-Chan-HEM18-depth34"],
        }
        {
            name: "DIGITDCTime-MeanTime-HEM-depth34",
            plot_title: "DIGITDCTime MeanTime HEM depth34",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HEM01-depth34","DIGITDCTime-MeanTime-HEM02-depth34","DIGITDCTime-MeanTime-HEM03-depth34","DIGITDCTime-MeanTime-HEM04-depth34","DIGITDCTime-MeanTime-HEM05-depth34","DIGITDCTime-MeanTime-HEM06-depth34","DIGITDCTime-MeanTime-HEM07-depth34","DIGITDCTime-MeanTime-HEM08-depth34","DIGITDCTime-MeanTime-HEM09-depth34","DIGITDCTime-MeanTime-HEM10-depth34","DIGITDCTime-MeanTime-HEM11-depth34","DIGITDCTime-MeanTime-HEM12-depth34","DIGITDCTime-MeanTime-HEM13-depth34","DIGITDCTime-MeanTime-HEM14-depth34","DIGITDCTime-MeanTime-HEM15-depth34","DIGITDCTime-MeanTime-HEM16-depth34","DIGITDCTime-MeanTime-HEM17-depth34","DIGITDCTime-MeanTime-HEM18-depth34"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HEM-depth34",
            plot_title: "DIGITDCTime Active Chan HEM depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HEM01-depth34","DIGITDCTime-Active-Chan-HEM02-depth34","DIGITDCTime-Active-Chan-HEM03-depth34","DIGITDCTime-Active-Chan-HEM04-depth34","DIGITDCTime-Active-Chan-HEM05-depth34","DIGITDCTime-Active-Chan-HEM06-depth34","DIGITDCTime-Active-Chan-HEM07-depth34","DIGITDCTime-Active-Chan-HEM08-depth34","DIGITDCTime-Active-Chan-HEM09-depth34","DIGITDCTime-Active-Chan-HEM10-depth34","DIGITDCTime-Active-Chan-HEM11-depth34","DIGITDCTime-Active-Chan-HEM12-depth34","DIGITDCTime-Active-Chan-HEM13-depth34","DIGITDCTime-Active-Chan-HEM14-depth34","DIGITDCTime-Active-Chan-HEM15-depth34","DIGITDCTime-Active-Chan-HEM16-depth34","DIGITDCTime-Active-Chan-HEM17-depth34","DIGITDCTime-Active-Chan-HEM18-depth34"],
        }
        {
            name: "DIGIInfor-DeadChan-HEM-depth34",
            plot_title: "Dead Chan HEM depth34",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HEM01-depth34","DIGIInfor-DeadChan-HEM02-depth34","DIGIInfor-DeadChan-HEM03-depth34","DIGIInfor-DeadChan-HEM04-depth34","DIGIInfor-DeadChan-HEM05-depth34","DIGIInfor-DeadChan-HEM06-depth34","DIGIInfor-DeadChan-HEM07-depth34","DIGIInfor-DeadChan-HEM08-depth34","DIGIInfor-DeadChan-HEM09-depth34","DIGIInfor-DeadChan-HEM10-depth34","DIGIInfor-DeadChan-HEM11-depth34","DIGIInfor-DeadChan-HEM12-depth34","DIGIInfor-DeadChan-HEM13-depth34","DIGIInfor-DeadChan-HEM14-depth34","DIGIInfor-DeadChan-HEM15-depth34","DIGIInfor-DeadChan-HEM16-depth34","DIGIInfor-DeadChan-HEM17-depth34","DIGIInfor-DeadChan-HEM18-depth34"],
        }
        {
            name: "DIGITiming-MeanTime-HEM-depth567",
            plot_title: "DIGITiming MeanTime HEM depth567",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HEM01-depth567","DIGITiming-MeanTime-HEM02-depth567","DIGITiming-MeanTime-HEM03-depth567","DIGITiming-MeanTime-HEM04-depth567","DIGITiming-MeanTime-HEM05-depth567","DIGITiming-MeanTime-HEM06-depth567","DIGITiming-MeanTime-HEM07-depth567","DIGITiming-MeanTime-HEM08-depth567","DIGITiming-MeanTime-HEM09-depth567","DIGITiming-MeanTime-HEM10-depth567","DIGITiming-MeanTime-HEM11-depth567","DIGITiming-MeanTime-HEM12-depth567","DIGITiming-MeanTime-HEM13-depth567","DIGITiming-MeanTime-HEM14-depth567","DIGITiming-MeanTime-HEM15-depth567","DIGITiming-MeanTime-HEM16-depth567","DIGITiming-MeanTime-HEM17-depth567","DIGITiming-MeanTime-HEM18-depth567"],
        }
        {
            name: "DIGITiming-Active-Chan-HEM-depth567",
            plot_title: "DIGITiming Active Chan HEM depth567",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HEM01-depth567","DIGITiming-Active-Chan-HEM02-depth567","DIGITiming-Active-Chan-HEM03-depth567","DIGITiming-Active-Chan-HEM04-depth567","DIGITiming-Active-Chan-HEM05-depth567","DIGITiming-Active-Chan-HEM06-depth567","DIGITiming-Active-Chan-HEM07-depth567","DIGITiming-Active-Chan-HEM08-depth567","DIGITiming-Active-Chan-HEM09-depth567","DIGITiming-Active-Chan-HEM10-depth567","DIGITiming-Active-Chan-HEM11-depth567","DIGITiming-Active-Chan-HEM12-depth567","DIGITiming-Active-Chan-HEM13-depth567","DIGITiming-Active-Chan-HEM14-depth567","DIGITiming-Active-Chan-HEM15-depth567","DIGITiming-Active-Chan-HEM16-depth567","DIGITiming-Active-Chan-HEM17-depth567","DIGITiming-Active-Chan-HEM18-depth567"],
        }
        {
            name: "DIGITDCTime-MeanTime-HEM-depth567",
            plot_title: "DIGITDCTime MeanTime HEM depth567",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HEM01-depth567","DIGITDCTime-MeanTime-HEM02-depth567","DIGITDCTime-MeanTime-HEM03-depth567","DIGITDCTime-MeanTime-HEM04-depth567","DIGITDCTime-MeanTime-HEM05-depth567","DIGITDCTime-MeanTime-HEM06-depth567","DIGITDCTime-MeanTime-HEM07-depth567","DIGITDCTime-MeanTime-HEM08-depth567","DIGITDCTime-MeanTime-HEM09-depth567","DIGITDCTime-MeanTime-HEM10-depth567","DIGITDCTime-MeanTime-HEM11-depth567","DIGITDCTime-MeanTime-HEM12-depth567","DIGITDCTime-MeanTime-HEM13-depth567","DIGITDCTime-MeanTime-HEM14-depth567","DIGITDCTime-MeanTime-HEM15-depth567","DIGITDCTime-MeanTime-HEM16-depth567","DIGITDCTime-MeanTime-HEM17-depth567","DIGITDCTime-MeanTime-HEM18-depth567"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HEM-depth567",
            plot_title: "DIGITDCTime Active Chan HEM depth567",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HEM01-depth567","DIGITDCTime-Active-Chan-HEM02-depth567","DIGITDCTime-Active-Chan-HEM03-depth567","DIGITDCTime-Active-Chan-HEM04-depth567","DIGITDCTime-Active-Chan-HEM05-depth567","DIGITDCTime-Active-Chan-HEM06-depth567","DIGITDCTime-Active-Chan-HEM07-depth567","DIGITDCTime-Active-Chan-HEM08-depth567","DIGITDCTime-Active-Chan-HEM09-depth567","DIGITDCTime-Active-Chan-HEM10-depth567","DIGITDCTime-Active-Chan-HEM11-depth567","DIGITDCTime-Active-Chan-HEM12-depth567","DIGITDCTime-Active-Chan-HEM13-depth567","DIGITDCTime-Active-Chan-HEM14-depth567","DIGITDCTime-Active-Chan-HEM15-depth567","DIGITDCTime-Active-Chan-HEM16-depth567","DIGITDCTime-Active-Chan-HEM17-depth567","DIGITDCTime-Active-Chan-HEM18-depth567"],
        }
        {
            name: "DIGIInfor-DeadChan-HEM-depth567",
            plot_title: "Dead Chan HEM depth567",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HEM01-depth567","DIGIInfor-DeadChan-HEM02-depth567","DIGIInfor-DeadChan-HEM03-depth567","DIGIInfor-DeadChan-HEM04-depth567","DIGIInfor-DeadChan-HEM05-depth567","DIGIInfor-DeadChan-HEM06-depth567","DIGIInfor-DeadChan-HEM07-depth567","DIGIInfor-DeadChan-HEM08-depth567","DIGIInfor-DeadChan-HEM09-depth567","DIGIInfor-DeadChan-HEM10-depth567","DIGIInfor-DeadChan-HEM11-depth567","DIGIInfor-DeadChan-HEM12-depth567","DIGIInfor-DeadChan-HEM13-depth567","DIGIInfor-DeadChan-HEM14-depth567","DIGIInfor-DeadChan-HEM15-depth567","DIGIInfor-DeadChan-HEM16-depth567","DIGIInfor-DeadChan-HEM17-depth567","DIGIInfor-DeadChan-HEM18-depth567"],
        }
        {
            name: "DIGITiming-MeanTime-HFP-depth12",
            plot_title: "DIGITiming MeanTime HFP depth12",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HFP01-depth12","DIGITiming-MeanTime-HFP02-depth12","DIGITiming-MeanTime-HFP03-depth12","DIGITiming-MeanTime-HFP04-depth12","DIGITiming-MeanTime-HFP05-depth12","DIGITiming-MeanTime-HFP06-depth12","DIGITiming-MeanTime-HFP07-depth12","DIGITiming-MeanTime-HFP08-depth12"],
        }
        {
            name: "DIGITiming-Active-Chan-HFP-depth12",
            plot_title: "DIGITiming Active Chan HFP depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HFP01-depth12","DIGITiming-Active-Chan-HFP02-depth12","DIGITiming-Active-Chan-HFP03-depth12","DIGITiming-Active-Chan-HFP04-depth12","DIGITiming-Active-Chan-HFP05-depth12","DIGITiming-Active-Chan-HFP06-depth12","DIGITiming-Active-Chan-HFP07-depth12","DIGITiming-Active-Chan-HFP08-depth12"],
        }
        {
            name: "DIGITDCTime-MeanTime-HFP-depth12",
            plot_title: "DIGITDCTime MeanTime HFP depth12",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HFP01-depth12","DIGITDCTime-MeanTime-HFP02-depth12","DIGITDCTime-MeanTime-HFP03-depth12","DIGITDCTime-MeanTime-HFP04-depth12","DIGITDCTime-MeanTime-HFP05-depth12","DIGITDCTime-MeanTime-HFP06-depth12","DIGITDCTime-MeanTime-HFP07-depth12","DIGITDCTime-MeanTime-HFP08-depth12"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HFP-depth12",
            plot_title: "DIGITDCTime Active Chan HFP depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HFP01-depth12","DIGITDCTime-Active-Chan-HFP02-depth12","DIGITDCTime-Active-Chan-HFP03-depth12","DIGITDCTime-Active-Chan-HFP04-depth12","DIGITDCTime-Active-Chan-HFP05-depth12","DIGITDCTime-Active-Chan-HFP06-depth12","DIGITDCTime-Active-Chan-HFP07-depth12","DIGITDCTime-Active-Chan-HFP08-depth12"],
        }
        {
            name: "DIGIInfor-DeadChan-HFP-depth12",
            plot_title: "Dead Chan HFP depth12",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HFP01-depth12","DIGIInfor-DeadChan-HFP02-depth12","DIGIInfor-DeadChan-HFP03-depth12","DIGIInfor-DeadChan-HFP04-depth12","DIGIInfor-DeadChan-HFP05-depth12","DIGIInfor-DeadChan-HFP06-depth12","DIGIInfor-DeadChan-HFP07-depth12","DIGIInfor-DeadChan-HFP08-depth12"],
        }
        {
            name: "DIGITiming-MeanTime-HFP-depth34",
            plot_title: "DIGITiming MeanTime HFP depth34",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HFP01-depth34","DIGITiming-MeanTime-HFP02-depth34","DIGITiming-MeanTime-HFP03-depth34","DIGITiming-MeanTime-HFP04-depth34","DIGITiming-MeanTime-HFP05-depth34","DIGITiming-MeanTime-HFP06-depth34","DIGITiming-MeanTime-HFP07-depth34","DIGITiming-MeanTime-HFP08-depth34"],
        }
        {
            name: "DIGITiming-Active-Chan-HFP-depth34",
            plot_title: "DIGITiming Active Chan HFP depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HFP01-depth34","DIGITiming-Active-Chan-HFP02-depth34","DIGITiming-Active-Chan-HFP03-depth34","DIGITiming-Active-Chan-HFP04-depth34","DIGITiming-Active-Chan-HFP05-depth34","DIGITiming-Active-Chan-HFP06-depth34","DIGITiming-Active-Chan-HFP07-depth34","DIGITiming-Active-Chan-HFP08-depth34"],
        }
        {
            name: "DIGITDCTime-MeanTime-HFP-depth34",
            plot_title: "DIGITDCTime MeanTime HFP depth34",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HFP01-depth34","DIGITDCTime-MeanTime-HFP02-depth34","DIGITDCTime-MeanTime-HFP03-depth34","DIGITDCTime-MeanTime-HFP04-depth34","DIGITDCTime-MeanTime-HFP05-depth34","DIGITDCTime-MeanTime-HFP06-depth34","DIGITDCTime-MeanTime-HFP07-depth34","DIGITDCTime-MeanTime-HFP08-depth34"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HFP-depth34",
            plot_title: "DIGITDCTime Active Chan HFP depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HFP01-depth34","DIGITDCTime-Active-Chan-HFP02-depth34","DIGITDCTime-Active-Chan-HFP03-depth34","DIGITDCTime-Active-Chan-HFP04-depth34","DIGITDCTime-Active-Chan-HFP05-depth34","DIGITDCTime-Active-Chan-HFP06-depth34","DIGITDCTime-Active-Chan-HFP07-depth34","DIGITDCTime-Active-Chan-HFP08-depth34"],
        }
        {
            name: "DIGIInfor-DeadChan-HFP-depth34",
            plot_title: "Dead Chan HFP depth34",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HFP01-depth34","DIGIInfor-DeadChan-HFP02-depth34","DIGIInfor-DeadChan-HFP03-depth34","DIGIInfor-DeadChan-HFP04-depth34","DIGIInfor-DeadChan-HFP05-depth34","DIGIInfor-DeadChan-HFP06-depth34","DIGIInfor-DeadChan-HFP07-depth34","DIGIInfor-DeadChan-HFP08-depth34"],
        }
        {
            name: "DIGITiming-MeanTime-HFP-depth56",
            plot_title: "DIGITiming MeanTime HFP depth56",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HFP01-depth56","DIGITiming-MeanTime-HFP02-depth56","DIGITiming-MeanTime-HFP03-depth56","DIGITiming-MeanTime-HFP04-depth56","DIGITiming-MeanTime-HFP05-depth56","DIGITiming-MeanTime-HFP06-depth56","DIGITiming-MeanTime-HFP07-depth56","DIGITiming-MeanTime-HFP08-depth56"],
        }
        {
            name: "DIGITiming-Active-Chan-HFP-depth56",
            plot_title: "DIGITiming Active Chan HFP depth56",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HFP01-depth56","DIGITiming-Active-Chan-HFP02-depth56","DIGITiming-Active-Chan-HFP03-depth56","DIGITiming-Active-Chan-HFP04-depth56","DIGITiming-Active-Chan-HFP05-depth56","DIGITiming-Active-Chan-HFP06-depth56","DIGITiming-Active-Chan-HFP07-depth56","DIGITiming-Active-Chan-HFP08-depth56"],
        }
        {
            name: "DIGITDCTime-MeanTime-HFP-depth56",
            plot_title: "DIGITDCTime MeanTime HFP depth56",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HFP01-depth56","DIGITDCTime-MeanTime-HFP02-depth56","DIGITDCTime-MeanTime-HFP03-depth56","DIGITDCTime-MeanTime-HFP04-depth56","DIGITDCTime-MeanTime-HFP05-depth56","DIGITDCTime-MeanTime-HFP06-depth56","DIGITDCTime-MeanTime-HFP07-depth56","DIGITDCTime-MeanTime-HFP08-depth56"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HFP-depth56",
            plot_title: "DIGITDCTime Active Chan HFP depth56",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HFP01-depth56","DIGITDCTime-Active-Chan-HFP02-depth56","DIGITDCTime-Active-Chan-HFP03-depth56","DIGITDCTime-Active-Chan-HFP04-depth56","DIGITDCTime-Active-Chan-HFP05-depth56","DIGITDCTime-Active-Chan-HFP06-depth56","DIGITDCTime-Active-Chan-HFP07-depth56","DIGITDCTime-Active-Chan-HFP08-depth56"],
        }
        {
            name: "DIGIInfor-DeadChan-HFP-depth56",
            plot_title: "Dead Chan HFP depth56",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HFP01-depth56","DIGIInfor-DeadChan-HFP02-depth56","DIGIInfor-DeadChan-HFP03-depth56","DIGIInfor-DeadChan-HFP04-depth56","DIGIInfor-DeadChan-HFP05-depth56","DIGIInfor-DeadChan-HFP06-depth56","DIGIInfor-DeadChan-HFP07-depth56","DIGIInfor-DeadChan-HFP08-depth56"],
        }
        {
            name: "DIGITiming-MeanTime-HFM-depth12",
            plot_title: "DIGITiming MeanTime HFM depth12",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HFM01-depth12","DIGITiming-MeanTime-HFM02-depth12","DIGITiming-MeanTime-HFM03-depth12","DIGITiming-MeanTime-HFM04-depth12","DIGITiming-MeanTime-HFM05-depth12","DIGITiming-MeanTime-HFM06-depth12","DIGITiming-MeanTime-HFM07-depth12","DIGITiming-MeanTime-HFM08-depth12"],
        }
        {
            name: "DIGITiming-Active-Chan-HFM-depth12",
            plot_title: "DIGITiming Active Chan HFM depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HFM01-depth12","DIGITiming-Active-Chan-HFM02-depth12","DIGITiming-Active-Chan-HFM03-depth12","DIGITiming-Active-Chan-HFM04-depth12","DIGITiming-Active-Chan-HFM05-depth12","DIGITiming-Active-Chan-HFM06-depth12","DIGITiming-Active-Chan-HFM07-depth12","DIGITiming-Active-Chan-HFM08-depth12"],
        }
        {
            name: "DIGITDCTime-MeanTime-HFM-depth12",
            plot_title: "DIGITDCTime MeanTime HFM depth12",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HFM01-depth12","DIGITDCTime-MeanTime-HFM02-depth12","DIGITDCTime-MeanTime-HFM03-depth12","DIGITDCTime-MeanTime-HFM04-depth12","DIGITDCTime-MeanTime-HFM05-depth12","DIGITDCTime-MeanTime-HFM06-depth12","DIGITDCTime-MeanTime-HFM07-depth12","DIGITDCTime-MeanTime-HFM08-depth12"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HFM-depth12",
            plot_title: "DIGITDCTime Active Chan HFM depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HFM01-depth12","DIGITDCTime-Active-Chan-HFM02-depth12","DIGITDCTime-Active-Chan-HFM03-depth12","DIGITDCTime-Active-Chan-HFM04-depth12","DIGITDCTime-Active-Chan-HFM05-depth12","DIGITDCTime-Active-Chan-HFM06-depth12","DIGITDCTime-Active-Chan-HFM07-depth12","DIGITDCTime-Active-Chan-HFM08-depth12"],
        }
        {
            name: "DIGIInfor-DeadChan-HFM-depth12",
            plot_title: "Dead Chan HFM depth12",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HFM01-depth12","DIGIInfor-DeadChan-HFM02-depth12","DIGIInfor-DeadChan-HFM03-depth12","DIGIInfor-DeadChan-HFM04-depth12","DIGIInfor-DeadChan-HFM05-depth12","DIGIInfor-DeadChan-HFM06-depth12","DIGIInfor-DeadChan-HFM07-depth12","DIGIInfor-DeadChan-HFM08-depth12"],
        }
        {
            name: "DIGITiming-MeanTime-HFM-depth34",
            plot_title: "DIGITiming MeanTime HFM depth34",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HFM01-depth34","DIGITiming-MeanTime-HFM02-depth34","DIGITiming-MeanTime-HFM03-depth34","DIGITiming-MeanTime-HFM04-depth34","DIGITiming-MeanTime-HFM05-depth34","DIGITiming-MeanTime-HFM06-depth34","DIGITiming-MeanTime-HFM07-depth34","DIGITiming-MeanTime-HFM08-depth34"],
        }
        {
            name: "DIGITiming-Active-Chan-HFM-depth34",
            plot_title: "DIGITiming Active Chan HFM depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HFM01-depth34","DIGITiming-Active-Chan-HFM02-depth34","DIGITiming-Active-Chan-HFM03-depth34","DIGITiming-Active-Chan-HFM04-depth34","DIGITiming-Active-Chan-HFM05-depth34","DIGITiming-Active-Chan-HFM06-depth34","DIGITiming-Active-Chan-HFM07-depth34","DIGITiming-Active-Chan-HFM08-depth34"],
        }
        {
            name: "DIGITDCTime-MeanTime-HFM-depth34",
            plot_title: "DIGITDCTime MeanTime HFM depth34",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HFM01-depth34","DIGITDCTime-MeanTime-HFM02-depth34","DIGITDCTime-MeanTime-HFM03-depth34","DIGITDCTime-MeanTime-HFM04-depth34","DIGITDCTime-MeanTime-HFM05-depth34","DIGITDCTime-MeanTime-HFM06-depth34","DIGITDCTime-MeanTime-HFM07-depth34","DIGITDCTime-MeanTime-HFM08-depth34"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HFM-depth34",
            plot_title: "DIGITDCTime Active Chan HFM depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HFM01-depth34","DIGITDCTime-Active-Chan-HFM02-depth34","DIGITDCTime-Active-Chan-HFM03-depth34","DIGITDCTime-Active-Chan-HFM04-depth34","DIGITDCTime-Active-Chan-HFM05-depth34","DIGITDCTime-Active-Chan-HFM06-depth34","DIGITDCTime-Active-Chan-HFM07-depth34","DIGITDCTime-Active-Chan-HFM08-depth34"],
        }
        {
            name: "DIGIInfor-DeadChan-HFM-depth34",
            plot_title: "Dead Chan HFM depth34",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HFM01-depth34","DIGIInfor-DeadChan-HFM02-depth34","DIGIInfor-DeadChan-HFM03-depth34","DIGIInfor-DeadChan-HFM04-depth34","DIGIInfor-DeadChan-HFM05-depth34","DIGIInfor-DeadChan-HFM06-depth34","DIGIInfor-DeadChan-HFM07-depth34","DIGIInfor-DeadChan-HFM08-depth34"],
        }
        {
            name: "DIGITiming-MeanTime-HFM-depth56",
            plot_title: "DIGITiming MeanTime HFM depth56",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HFM01-depth56","DIGITiming-MeanTime-HFM02-depth56","DIGITiming-MeanTime-HFM03-depth56","DIGITiming-MeanTime-HFM04-depth56","DIGITiming-MeanTime-HFM05-depth56","DIGITiming-MeanTime-HFM06-depth56","DIGITiming-MeanTime-HFM07-depth56","DIGITiming-MeanTime-HFM08-depth56"],
        }
        {
            name: "DIGITiming-Active-Chan-HFM-depth56",
            plot_title: "DIGITiming Active Chan HFM depth56",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HFM01-depth56","DIGITiming-Active-Chan-HFM02-depth56","DIGITiming-Active-Chan-HFM03-depth56","DIGITiming-Active-Chan-HFM04-depth56","DIGITiming-Active-Chan-HFM05-depth56","DIGITiming-Active-Chan-HFM06-depth56","DIGITiming-Active-Chan-HFM07-depth56","DIGITiming-Active-Chan-HFM08-depth56"],
        }
        {
            name: "DIGITDCTime-MeanTime-HFM-depth56",
            plot_title: "DIGITDCTime MeanTime HFM depth56",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HFM01-depth56","DIGITDCTime-MeanTime-HFM02-depth56","DIGITDCTime-MeanTime-HFM03-depth56","DIGITDCTime-MeanTime-HFM04-depth56","DIGITDCTime-MeanTime-HFM05-depth56","DIGITDCTime-MeanTime-HFM06-depth56","DIGITDCTime-MeanTime-HFM07-depth56","DIGITDCTime-MeanTime-HFM08-depth56"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HFM-depth56",
            plot_title: "DIGITDCTime Active Chan HFM depth56",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HFM01-depth56","DIGITDCTime-Active-Chan-HFM02-depth56","DIGITDCTime-Active-Chan-HFM03-depth56","DIGITDCTime-Active-Chan-HFM04-depth56","DIGITDCTime-Active-Chan-HFM05-depth56","DIGITDCTime-Active-Chan-HFM06-depth56","DIGITDCTime-Active-Chan-HFM07-depth56","DIGITDCTime-Active-Chan-HFM08-depth56"],
        }
        {
            name: "DIGIInfor-DeadChan-HFM-depth56",
            plot_title: "Dead Chan HFM depth56",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HFM01-depth56","DIGIInfor-DeadChan-HFM02-depth56","DIGIInfor-DeadChan-HFM03-depth56","DIGIInfor-DeadChan-HFM04-depth56","DIGIInfor-DeadChan-HFM05-depth56","DIGIInfor-DeadChan-HFM06-depth56","DIGIInfor-DeadChan-HFM07-depth56","DIGIInfor-DeadChan-HFM08-depth56"],
        }
        {
            name: "DIGITiming-MeanTime-HO0-depth12",
            plot_title: "DIGITiming MeanTime HO0 depth12",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HO001-depth12","DIGITiming-MeanTime-HO002-depth12","DIGITiming-MeanTime-HO003-depth12","DIGITiming-MeanTime-HO004-depth12","DIGITiming-MeanTime-HO005-depth12","DIGITiming-MeanTime-HO006-depth12","DIGITiming-MeanTime-HO007-depth12","DIGITiming-MeanTime-HO008-depth12","DIGITiming-MeanTime-HO009-depth12","DIGITiming-MeanTime-HO010-depth12","DIGITiming-MeanTime-HO011-depth12","DIGITiming-MeanTime-HO012-depth12"],
        }
        {
            name: "DIGITiming-Active-Chan-HO0-depth12",
            plot_title: "DIGITiming Active Chan HO0 depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HO001-depth12","DIGITiming-Active-Chan-HO002-depth12","DIGITiming-Active-Chan-HO003-depth12","DIGITiming-Active-Chan-HO004-depth12","DIGITiming-Active-Chan-HO005-depth12","DIGITiming-Active-Chan-HO006-depth12","DIGITiming-Active-Chan-HO007-depth12","DIGITiming-Active-Chan-HO008-depth12","DIGITiming-Active-Chan-HO009-depth12","DIGITiming-Active-Chan-HO010-depth12","DIGITiming-Active-Chan-HO011-depth12","DIGITiming-Active-Chan-HO012-depth12"],
        }
        {
            name: "DIGITDCTime-MeanTime-HO0-depth12",
            plot_title: "DIGITDCTime MeanTime HO0 depth12",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HO001-depth12","DIGITDCTime-MeanTime-HO002-depth12","DIGITDCTime-MeanTime-HO003-depth12","DIGITDCTime-MeanTime-HO004-depth12","DIGITDCTime-MeanTime-HO005-depth12","DIGITDCTime-MeanTime-HO006-depth12","DIGITDCTime-MeanTime-HO007-depth12","DIGITDCTime-MeanTime-HO008-depth12","DIGITDCTime-MeanTime-HO009-depth12","DIGITDCTime-MeanTime-HO010-depth12","DIGITDCTime-MeanTime-HO011-depth12","DIGITDCTime-MeanTime-HO012-depth12"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HO0-depth12",
            plot_title: "DIGITDCTime Active Chan HO0 depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HO001-depth12","DIGITDCTime-Active-Chan-HO002-depth12","DIGITDCTime-Active-Chan-HO003-depth12","DIGITDCTime-Active-Chan-HO004-depth12","DIGITDCTime-Active-Chan-HO005-depth12","DIGITDCTime-Active-Chan-HO006-depth12","DIGITDCTime-Active-Chan-HO007-depth12","DIGITDCTime-Active-Chan-HO008-depth12","DIGITDCTime-Active-Chan-HO009-depth12","DIGITDCTime-Active-Chan-HO010-depth12","DIGITDCTime-Active-Chan-HO011-depth12","DIGITDCTime-Active-Chan-HO012-depth12"],
        }
        {
            name: "DIGIInfor-DeadChan-HO0-depth12",
            plot_title: "Dead Chan HO0 depth12",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HO001-depth12","DIGIInfor-DeadChan-HO002-depth12","DIGIInfor-DeadChan-HO003-depth12","DIGIInfor-DeadChan-HO004-depth12","DIGIInfor-DeadChan-HO005-depth12","DIGIInfor-DeadChan-HO006-depth12","DIGIInfor-DeadChan-HO007-depth12","DIGIInfor-DeadChan-HO008-depth12","DIGIInfor-DeadChan-HO009-depth12","DIGIInfor-DeadChan-HO010-depth12","DIGIInfor-DeadChan-HO011-depth12","DIGIInfor-DeadChan-HO012-depth12"],
        }
        {
            name: "DIGITiming-MeanTime-HO0-depth34",
            plot_title: "DIGITiming MeanTime HO0 depth34",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HO001-depth34","DIGITiming-MeanTime-HO002-depth34","DIGITiming-MeanTime-HO003-depth34","DIGITiming-MeanTime-HO004-depth34","DIGITiming-MeanTime-HO005-depth34","DIGITiming-MeanTime-HO006-depth34","DIGITiming-MeanTime-HO007-depth34","DIGITiming-MeanTime-HO008-depth34","DIGITiming-MeanTime-HO009-depth34","DIGITiming-MeanTime-HO010-depth34","DIGITiming-MeanTime-HO011-depth34","DIGITiming-MeanTime-HO012-depth34"],
        }
        {
            name: "DIGITiming-Active-Chan-HO0-depth34",
            plot_title: "DIGITiming Active Chan HO0 depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HO001-depth34","DIGITiming-Active-Chan-HO002-depth34","DIGITiming-Active-Chan-HO003-depth34","DIGITiming-Active-Chan-HO004-depth34","DIGITiming-Active-Chan-HO005-depth34","DIGITiming-Active-Chan-HO006-depth34","DIGITiming-Active-Chan-HO007-depth34","DIGITiming-Active-Chan-HO008-depth34","DIGITiming-Active-Chan-HO009-depth34","DIGITiming-Active-Chan-HO010-depth34","DIGITiming-Active-Chan-HO011-depth34","DIGITiming-Active-Chan-HO012-depth34"],
        }
        {
            name: "DIGITDCTime-MeanTime-HO0-depth34",
            plot_title: "DIGITDCTime MeanTime HO0 depth34",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HO001-depth34","DIGITDCTime-MeanTime-HO002-depth34","DIGITDCTime-MeanTime-HO003-depth34","DIGITDCTime-MeanTime-HO004-depth34","DIGITDCTime-MeanTime-HO005-depth34","DIGITDCTime-MeanTime-HO006-depth34","DIGITDCTime-MeanTime-HO007-depth34","DIGITDCTime-MeanTime-HO008-depth34","DIGITDCTime-MeanTime-HO009-depth34","DIGITDCTime-MeanTime-HO010-depth34","DIGITDCTime-MeanTime-HO011-depth34","DIGITDCTime-MeanTime-HO012-depth34"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HO0-depth34",
            plot_title: "DIGITDCTime Active Chan HO0 depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HO001-depth34","DIGITDCTime-Active-Chan-HO002-depth34","DIGITDCTime-Active-Chan-HO003-depth34","DIGITDCTime-Active-Chan-HO004-depth34","DIGITDCTime-Active-Chan-HO005-depth34","DIGITDCTime-Active-Chan-HO006-depth34","DIGITDCTime-Active-Chan-HO007-depth34","DIGITDCTime-Active-Chan-HO008-depth34","DIGITDCTime-Active-Chan-HO009-depth34","DIGITDCTime-Active-Chan-HO010-depth34","DIGITDCTime-Active-Chan-HO011-depth34","DIGITDCTime-Active-Chan-HO012-depth34"],
        }
        {
            name: "DIGIInfor-DeadChan-HO0-depth34",
            plot_title: "Dead Chan HO0 depth34",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HO001-depth34","DIGIInfor-DeadChan-HO002-depth34","DIGIInfor-DeadChan-HO003-depth34","DIGIInfor-DeadChan-HO004-depth34","DIGIInfor-DeadChan-HO005-depth34","DIGIInfor-DeadChan-HO006-depth34","DIGIInfor-DeadChan-HO007-depth34","DIGIInfor-DeadChan-HO008-depth34","DIGIInfor-DeadChan-HO009-depth34","DIGIInfor-DeadChan-HO010-depth34","DIGIInfor-DeadChan-HO011-depth34","DIGIInfor-DeadChan-HO012-depth34"],
        }
        {
            name: "DIGITiming-MeanTime-HO0-depth56",
            plot_title: "DIGITiming MeanTime HO0 depth56",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HO001-depth56","DIGITiming-MeanTime-HO002-depth56","DIGITiming-MeanTime-HO003-depth56","DIGITiming-MeanTime-HO004-depth56","DIGITiming-MeanTime-HO005-depth56","DIGITiming-MeanTime-HO006-depth56","DIGITiming-MeanTime-HO007-depth56","DIGITiming-MeanTime-HO008-depth56","DIGITiming-MeanTime-HO009-depth56","DIGITiming-MeanTime-HO010-depth56","DIGITiming-MeanTime-HO011-depth56","DIGITiming-MeanTime-HO012-depth56"],
        }
        {
            name: "DIGITiming-Active-Chan-HO0-depth56",
            plot_title: "DIGITiming Active Chan HO0 depth56",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HO001-depth56","DIGITiming-Active-Chan-HO002-depth56","DIGITiming-Active-Chan-HO003-depth56","DIGITiming-Active-Chan-HO004-depth56","DIGITiming-Active-Chan-HO005-depth56","DIGITiming-Active-Chan-HO006-depth56","DIGITiming-Active-Chan-HO007-depth56","DIGITiming-Active-Chan-HO008-depth56","DIGITiming-Active-Chan-HO009-depth56","DIGITiming-Active-Chan-HO010-depth56","DIGITiming-Active-Chan-HO011-depth56","DIGITiming-Active-Chan-HO012-depth56"],
        }
        {
            name: "DIGITDCTime-MeanTime-HO0-depth56",
            plot_title: "DIGITDCTime MeanTime HO0 depth56",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HO001-depth56","DIGITDCTime-MeanTime-HO002-depth56","DIGITDCTime-MeanTime-HO003-depth56","DIGITDCTime-MeanTime-HO004-depth56","DIGITDCTime-MeanTime-HO005-depth56","DIGITDCTime-MeanTime-HO006-depth56","DIGITDCTime-MeanTime-HO007-depth56","DIGITDCTime-MeanTime-HO008-depth56","DIGITDCTime-MeanTime-HO009-depth56","DIGITDCTime-MeanTime-HO010-depth56","DIGITDCTime-MeanTime-HO011-depth56","DIGITDCTime-MeanTime-HO012-depth56"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HO0-depth56",
            plot_title: "DIGITDCTime Active Chan HO0 depth56",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HO001-depth56","DIGITDCTime-Active-Chan-HO002-depth56","DIGITDCTime-Active-Chan-HO003-depth56","DIGITDCTime-Active-Chan-HO004-depth56","DIGITDCTime-Active-Chan-HO005-depth56","DIGITDCTime-Active-Chan-HO006-depth56","DIGITDCTime-Active-Chan-HO007-depth56","DIGITDCTime-Active-Chan-HO008-depth56","DIGITDCTime-Active-Chan-HO009-depth56","DIGITDCTime-Active-Chan-HO010-depth56","DIGITDCTime-Active-Chan-HO011-depth56","DIGITDCTime-Active-Chan-HO012-depth56"],
        }
        {
            name: "DIGIInfor-DeadChan-HO0-depth56",
            plot_title: "Dead Chan HO0 depth56",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HO001-depth56","DIGIInfor-DeadChan-HO002-depth56","DIGIInfor-DeadChan-HO003-depth56","DIGIInfor-DeadChan-HO004-depth56","DIGIInfor-DeadChan-HO005-depth56","DIGIInfor-DeadChan-HO006-depth56","DIGIInfor-DeadChan-HO007-depth56","DIGIInfor-DeadChan-HO008-depth56","DIGIInfor-DeadChan-HO009-depth56","DIGIInfor-DeadChan-HO010-depth56","DIGIInfor-DeadChan-HO011-depth56","DIGIInfor-DeadChan-HO012-depth56"],
        }
        {
            name: "DIGITiming-MeanTime-HO1-depth12",
            plot_title: "DIGITiming MeanTime HO1 depth12",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HO1M02-depth12","DIGITiming-MeanTime-HO1M04-depth12","DIGITiming-MeanTime-HO1M06-depth12","DIGITiming-MeanTime-HO1M08-depth12","DIGITiming-MeanTime-HO1M10-depth12","DIGITiming-MeanTime-HO1M12-depth12","DIGITiming-MeanTime-HO1P02-depth12","DIGITiming-MeanTime-HO1P04-depth12","DIGITiming-MeanTime-HO1P06-depth12","DIGITiming-MeanTime-HO1P08-depth12","DIGITiming-MeanTime-HO1P10-depth12","DIGITiming-MeanTime-HO1P12-depth12"],
        }
        {
            name: "DIGITiming-Active-Chan-HO1-depth12",
            plot_title: "DIGITiming Active Chan HO1 depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HO1M02-depth12","DIGITiming-Active-Chan-HO1M04-depth12","DIGITiming-Active-Chan-HO1M06-depth12","DIGITiming-Active-Chan-HO1M08-depth12","DIGITiming-Active-Chan-HO1M10-depth12","DIGITiming-Active-Chan-HO1M12-depth12","DIGITiming-Active-Chan-HO1P02-depth12","DIGITiming-Active-Chan-HO1P04-depth12","DIGITiming-Active-Chan-HO1P06-depth12","DIGITiming-Active-Chan-HO1P08-depth12","DIGITiming-Active-Chan-HO1P10-depth12","DIGITiming-Active-Chan-HO1P12-depth12"],
        }
        {
            name: "DIGITDCTime-MeanTime-HO1-depth12",
            plot_title: "DIGITDCTime MeanTime HO1 depth12",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HO1M02-depth12","DIGITDCTime-MeanTime-HO1M04-depth12","DIGITDCTime-MeanTime-HO1M06-depth12","DIGITDCTime-MeanTime-HO1M08-depth12","DIGITDCTime-MeanTime-HO1M10-depth12","DIGITDCTime-MeanTime-HO1M12-depth12","DIGITDCTime-MeanTime-HO1P02-depth12","DIGITDCTime-MeanTime-HO1P04-depth12","DIGITDCTime-MeanTime-HO1P06-depth12","DIGITDCTime-MeanTime-HO1P08-depth12","DIGITDCTime-MeanTime-HO1P10-depth12","DIGITDCTime-MeanTime-HO1P12-depth12"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HO1-depth12",
            plot_title: "DIGITDCTime Active Chan HO1 depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HO1M02-depth12","DIGITDCTime-Active-Chan-HO1M04-depth12","DIGITDCTime-Active-Chan-HO1M06-depth12","DIGITDCTime-Active-Chan-HO1M08-depth12","DIGITDCTime-Active-Chan-HO1M10-depth12","DIGITDCTime-Active-Chan-HO1M12-depth12","DIGITDCTime-Active-Chan-HO1P02-depth12","DIGITDCTime-Active-Chan-HO1P04-depth12","DIGITDCTime-Active-Chan-HO1P06-depth12","DIGITDCTime-Active-Chan-HO1P08-depth12","DIGITDCTime-Active-Chan-HO1P10-depth12","DIGITDCTime-Active-Chan-HO1P12-depth12"],
        }
        {
            name: "DIGIInfor-DeadChan-HO1-depth12",
            plot_title: "Dead Chan HO1 depth12",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HO1M02-depth12","DIGIInfor-DeadChan-HO1M04-depth12","DIGIInfor-DeadChan-HO1M06-depth12","DIGIInfor-DeadChan-HO1M08-depth12","DIGIInfor-DeadChan-HO1M10-depth12","DIGIInfor-DeadChan-HO1M12-depth12","DIGIInfor-DeadChan-HO1P02-depth12","DIGIInfor-DeadChan-HO1P04-depth12","DIGIInfor-DeadChan-HO1P06-depth12","DIGIInfor-DeadChan-HO1P08-depth12","DIGIInfor-DeadChan-HO1P10-depth12","DIGIInfor-DeadChan-HO1P12-depth12"],
        }
        {
            name: "DIGITiming-MeanTime-HO1-depth34",
            plot_title: "DIGITiming MeanTime HO1 depth34",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HO1M02-depth34","DIGITiming-MeanTime-HO1M04-depth34","DIGITiming-MeanTime-HO1M06-depth34","DIGITiming-MeanTime-HO1M08-depth34","DIGITiming-MeanTime-HO1M10-depth34","DIGITiming-MeanTime-HO1M12-depth34","DIGITiming-MeanTime-HO1P02-depth34","DIGITiming-MeanTime-HO1P04-depth34","DIGITiming-MeanTime-HO1P06-depth34","DIGITiming-MeanTime-HO1P08-depth34","DIGITiming-MeanTime-HO1P10-depth34","DIGITiming-MeanTime-HO1P12-depth34"],
        }
        {
            name: "DIGITiming-Active-Chan-HO1-depth34",
            plot_title: "DIGITiming Active Chan HO1 depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HO1M02-depth34","DIGITiming-Active-Chan-HO1M04-depth34","DIGITiming-Active-Chan-HO1M06-depth34","DIGITiming-Active-Chan-HO1M08-depth34","DIGITiming-Active-Chan-HO1M10-depth34","DIGITiming-Active-Chan-HO1M12-depth34","DIGITiming-Active-Chan-HO1P02-depth34","DIGITiming-Active-Chan-HO1P04-depth34","DIGITiming-Active-Chan-HO1P06-depth34","DIGITiming-Active-Chan-HO1P08-depth34","DIGITiming-Active-Chan-HO1P10-depth34","DIGITiming-Active-Chan-HO1P12-depth34"],
        }
        {
            name: "DIGITDCTime-MeanTime-HO1-depth34",
            plot_title: "DIGITDCTime MeanTime HO1 depth34",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HO1M02-depth34","DIGITDCTime-MeanTime-HO1M04-depth34","DIGITDCTime-MeanTime-HO1M06-depth34","DIGITDCTime-MeanTime-HO1M08-depth34","DIGITDCTime-MeanTime-HO1M10-depth34","DIGITDCTime-MeanTime-HO1M12-depth34","DIGITDCTime-MeanTime-HO1P02-depth34","DIGITDCTime-MeanTime-HO1P04-depth34","DIGITDCTime-MeanTime-HO1P06-depth34","DIGITDCTime-MeanTime-HO1P08-depth34","DIGITDCTime-MeanTime-HO1P10-depth34","DIGITDCTime-MeanTime-HO1P12-depth34"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HO1-depth34",
            plot_title: "DIGITDCTime Active Chan HO1 depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HO1M02-depth34","DIGITDCTime-Active-Chan-HO1M04-depth34","DIGITDCTime-Active-Chan-HO1M06-depth34","DIGITDCTime-Active-Chan-HO1M08-depth34","DIGITDCTime-Active-Chan-HO1M10-depth34","DIGITDCTime-Active-Chan-HO1M12-depth34","DIGITDCTime-Active-Chan-HO1P02-depth34","DIGITDCTime-Active-Chan-HO1P04-depth34","DIGITDCTime-Active-Chan-HO1P06-depth34","DIGITDCTime-Active-Chan-HO1P08-depth34","DIGITDCTime-Active-Chan-HO1P10-depth34","DIGITDCTime-Active-Chan-HO1P12-depth34"],
        }
        {
            name: "DIGIInfor-DeadChan-HO1-depth34",
            plot_title: "Dead Chan HO1 depth34",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HO1M02-depth34","DIGIInfor-DeadChan-HO1M04-depth34","DIGIInfor-DeadChan-HO1M06-depth34","DIGIInfor-DeadChan-HO1M08-depth34","DIGIInfor-DeadChan-HO1M10-depth34","DIGIInfor-DeadChan-HO1M12-depth34","DIGIInfor-DeadChan-HO1P02-depth34","DIGIInfor-DeadChan-HO1P04-depth34","DIGIInfor-DeadChan-HO1P06-depth34","DIGIInfor-DeadChan-HO1P08-depth34","DIGIInfor-DeadChan-HO1P10-depth34","DIGIInfor-DeadChan-HO1P12-depth34"],
        }
        {
            name: "DIGITiming-MeanTime-HO1-depth56",
            plot_title: "DIGITiming MeanTime HO1 depth56",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HO1M02-depth56","DIGITiming-MeanTime-HO1M04-depth56","DIGITiming-MeanTime-HO1M06-depth56","DIGITiming-MeanTime-HO1M08-depth56","DIGITiming-MeanTime-HO1M10-depth56","DIGITiming-MeanTime-HO1M12-depth56","DIGITiming-MeanTime-HO1P02-depth56","DIGITiming-MeanTime-HO1P04-depth56","DIGITiming-MeanTime-HO1P06-depth56","DIGITiming-MeanTime-HO1P08-depth56","DIGITiming-MeanTime-HO1P10-depth56","DIGITiming-MeanTime-HO1P12-depth56"],
        }
        {
            name: "DIGITiming-Active-Chan-HO1-depth56",
            plot_title: "DIGITiming Active Chan HO1 depth56",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HO1M02-depth56","DIGITiming-Active-Chan-HO1M04-depth56","DIGITiming-Active-Chan-HO1M06-depth56","DIGITiming-Active-Chan-HO1M08-depth56","DIGITiming-Active-Chan-HO1M10-depth56","DIGITiming-Active-Chan-HO1M12-depth56","DIGITiming-Active-Chan-HO1P02-depth56","DIGITiming-Active-Chan-HO1P04-depth56","DIGITiming-Active-Chan-HO1P06-depth56","DIGITiming-Active-Chan-HO1P08-depth56","DIGITiming-Active-Chan-HO1P10-depth56","DIGITiming-Active-Chan-HO1P12-depth56"],
        }
        {
            name: "DIGITDCTime-MeanTime-HO1-depth56",
            plot_title: "DIGITDCTime MeanTime HO1 depth56",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HO1M02-depth56","DIGITDCTime-MeanTime-HO1M04-depth56","DIGITDCTime-MeanTime-HO1M06-depth56","DIGITDCTime-MeanTime-HO1M08-depth56","DIGITDCTime-MeanTime-HO1M10-depth56","DIGITDCTime-MeanTime-HO1M12-depth56","DIGITDCTime-MeanTime-HO1P02-depth56","DIGITDCTime-MeanTime-HO1P04-depth56","DIGITDCTime-MeanTime-HO1P06-depth56","DIGITDCTime-MeanTime-HO1P08-depth56","DIGITDCTime-MeanTime-HO1P10-depth56","DIGITDCTime-MeanTime-HO1P12-depth56"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HO1-depth56",
            plot_title: "DIGITDCTime Active Chan HO1 depth56",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HO1M02-depth56","DIGITDCTime-Active-Chan-HO1M04-depth56","DIGITDCTime-Active-Chan-HO1M06-depth56","DIGITDCTime-Active-Chan-HO1M08-depth56","DIGITDCTime-Active-Chan-HO1M10-depth56","DIGITDCTime-Active-Chan-HO1M12-depth56","DIGITDCTime-Active-Chan-HO1P02-depth56","DIGITDCTime-Active-Chan-HO1P04-depth56","DIGITDCTime-Active-Chan-HO1P06-depth56","DIGITDCTime-Active-Chan-HO1P08-depth56","DIGITDCTime-Active-Chan-HO1P10-depth56","DIGITDCTime-Active-Chan-HO1P12-depth56"],
        }
        {
            name: "DIGIInfor-DeadChan-HO1-depth56",
            plot_title: "Dead Chan HO1 depth56",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HO1M02-depth56","DIGIInfor-DeadChan-HO1M04-depth56","DIGIInfor-DeadChan-HO1M06-depth56","DIGIInfor-DeadChan-HO1M08-depth56","DIGIInfor-DeadChan-HO1M10-depth56","DIGIInfor-DeadChan-HO1M12-depth56","DIGIInfor-DeadChan-HO1P02-depth56","DIGIInfor-DeadChan-HO1P04-depth56","DIGIInfor-DeadChan-HO1P06-depth56","DIGIInfor-DeadChan-HO1P08-depth56","DIGIInfor-DeadChan-HO1P10-depth56","DIGIInfor-DeadChan-HO1P12-depth56"],
        }
        {
            name: "DIGITiming-MeanTime-HO2-depth12",
            plot_title: "DIGITiming MeanTime HO2 depth12",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HO2M02-depth12","DIGITiming-MeanTime-HO2M04-depth12","DIGITiming-MeanTime-HO2M06-depth12","DIGITiming-MeanTime-HO2M08-depth12","DIGITiming-MeanTime-HO2M10-depth12","DIGITiming-MeanTime-HO2M12-depth12","DIGITiming-MeanTime-HO2P02-depth12","DIGITiming-MeanTime-HO2P04-depth12","DIGITiming-MeanTime-HO2P06-depth12","DIGITiming-MeanTime-HO2P08-depth12","DIGITiming-MeanTime-HO2P10-depth12","DIGITiming-MeanTime-HO2P12-depth12"],
        }
        {
            name: "DIGITiming-Active-Chan-HO2-depth12",
            plot_title: "DIGITiming Active Chan HO2 depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HO2M02-depth12","DIGITiming-Active-Chan-HO2M04-depth12","DIGITiming-Active-Chan-HO2M06-depth12","DIGITiming-Active-Chan-HO2M08-depth12","DIGITiming-Active-Chan-HO2M10-depth12","DIGITiming-Active-Chan-HO2M12-depth12","DIGITiming-Active-Chan-HO2P02-depth12","DIGITiming-Active-Chan-HO2P04-depth12","DIGITiming-Active-Chan-HO2P06-depth12","DIGITiming-Active-Chan-HO2P08-depth12","DIGITiming-Active-Chan-HO2P10-depth12","DIGITiming-Active-Chan-HO2P12-depth12"],
        }
        {
            name: "DIGITDCTime-MeanTime-HO2-depth12",
            plot_title: "DIGITDCTime MeanTime HO2 depth12",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HO2M02-depth12","DIGITDCTime-MeanTime-HO2M04-depth12","DIGITDCTime-MeanTime-HO2M06-depth12","DIGITDCTime-MeanTime-HO2M08-depth12","DIGITDCTime-MeanTime-HO2M10-depth12","DIGITDCTime-MeanTime-HO2M12-depth12","DIGITDCTime-MeanTime-HO2P02-depth12","DIGITDCTime-MeanTime-HO2P04-depth12","DIGITDCTime-MeanTime-HO2P06-depth12","DIGITDCTime-MeanTime-HO2P08-depth12","DIGITDCTime-MeanTime-HO2P10-depth12","DIGITDCTime-MeanTime-HO2P12-depth12"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HO2-depth12",
            plot_title: "DIGITDCTime Active Chan HO2 depth12",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HO2M02-depth12","DIGITDCTime-Active-Chan-HO2M04-depth12","DIGITDCTime-Active-Chan-HO2M06-depth12","DIGITDCTime-Active-Chan-HO2M08-depth12","DIGITDCTime-Active-Chan-HO2M10-depth12","DIGITDCTime-Active-Chan-HO2M12-depth12","DIGITDCTime-Active-Chan-HO2P02-depth12","DIGITDCTime-Active-Chan-HO2P04-depth12","DIGITDCTime-Active-Chan-HO2P06-depth12","DIGITDCTime-Active-Chan-HO2P08-depth12","DIGITDCTime-Active-Chan-HO2P10-depth12","DIGITDCTime-Active-Chan-HO2P12-depth12"],
        }
        {
            name: "DIGIInfor-DeadChan-HO2-depth12",
            plot_title: "Dead Chan HO2 depth12",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HO2M02-depth12","DIGIInfor-DeadChan-HO2M04-depth12","DIGIInfor-DeadChan-HO2M06-depth12","DIGIInfor-DeadChan-HO2M08-depth12","DIGIInfor-DeadChan-HO2M10-depth12","DIGIInfor-DeadChan-HO2M12-depth12","DIGIInfor-DeadChan-HO2P02-depth12","DIGIInfor-DeadChan-HO2P04-depth12","DIGIInfor-DeadChan-HO2P06-depth12","DIGIInfor-DeadChan-HO2P08-depth12","DIGIInfor-DeadChan-HO2P10-depth12","DIGIInfor-DeadChan-HO2P12-depth12"],
        }
        {
            name: "DIGITiming-MeanTime-HO2-depth34",
            plot_title: "DIGITiming MeanTime HO2 depth34",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HO2M02-depth34","DIGITiming-MeanTime-HO2M04-depth34","DIGITiming-MeanTime-HO2M06-depth34","DIGITiming-MeanTime-HO2M08-depth34","DIGITiming-MeanTime-HO2M10-depth34","DIGITiming-MeanTime-HO2M12-depth34","DIGITiming-MeanTime-HO2P02-depth34","DIGITiming-MeanTime-HO2P04-depth34","DIGITiming-MeanTime-HO2P06-depth34","DIGITiming-MeanTime-HO2P08-depth34","DIGITiming-MeanTime-HO2P10-depth34","DIGITiming-MeanTime-HO2P12-depth34"],
        }
        {
            name: "DIGITiming-Active-Chan-HO2-depth34",
            plot_title: "DIGITiming Active Chan HO2 depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HO2M02-depth34","DIGITiming-Active-Chan-HO2M04-depth34","DIGITiming-Active-Chan-HO2M06-depth34","DIGITiming-Active-Chan-HO2M08-depth34","DIGITiming-Active-Chan-HO2M10-depth34","DIGITiming-Active-Chan-HO2M12-depth34","DIGITiming-Active-Chan-HO2P02-depth34","DIGITiming-Active-Chan-HO2P04-depth34","DIGITiming-Active-Chan-HO2P06-depth34","DIGITiming-Active-Chan-HO2P08-depth34","DIGITiming-Active-Chan-HO2P10-depth34","DIGITiming-Active-Chan-HO2P12-depth34"],
        }
        {
            name: "DIGITDCTime-MeanTime-HO2-depth34",
            plot_title: "DIGITDCTime MeanTime HO2 depth34",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HO2M02-depth34","DIGITDCTime-MeanTime-HO2M04-depth34","DIGITDCTime-MeanTime-HO2M06-depth34","DIGITDCTime-MeanTime-HO2M08-depth34","DIGITDCTime-MeanTime-HO2M10-depth34","DIGITDCTime-MeanTime-HO2M12-depth34","DIGITDCTime-MeanTime-HO2P02-depth34","DIGITDCTime-MeanTime-HO2P04-depth34","DIGITDCTime-MeanTime-HO2P06-depth34","DIGITDCTime-MeanTime-HO2P08-depth34","DIGITDCTime-MeanTime-HO2P10-depth34","DIGITDCTime-MeanTime-HO2P12-depth34"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HO2-depth34",
            plot_title: "DIGITDCTime Active Chan HO2 depth34",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HO2M02-depth34","DIGITDCTime-Active-Chan-HO2M04-depth34","DIGITDCTime-Active-Chan-HO2M06-depth34","DIGITDCTime-Active-Chan-HO2M08-depth34","DIGITDCTime-Active-Chan-HO2M10-depth34","DIGITDCTime-Active-Chan-HO2M12-depth34","DIGITDCTime-Active-Chan-HO2P02-depth34","DIGITDCTime-Active-Chan-HO2P04-depth34","DIGITDCTime-Active-Chan-HO2P06-depth34","DIGITDCTime-Active-Chan-HO2P08-depth34","DIGITDCTime-Active-Chan-HO2P10-depth34","DIGITDCTime-Active-Chan-HO2P12-depth34"],
        }
        {
            name: "DIGIInfor-DeadChan-HO2-depth34",
            plot_title: "Dead Chan HO2 depth34",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HO2M02-depth34","DIGIInfor-DeadChan-HO2M04-depth34","DIGIInfor-DeadChan-HO2M06-depth34","DIGIInfor-DeadChan-HO2M08-depth34","DIGIInfor-DeadChan-HO2M10-depth34","DIGIInfor-DeadChan-HO2M12-depth34","DIGIInfor-DeadChan-HO2P02-depth34","DIGIInfor-DeadChan-HO2P04-depth34","DIGIInfor-DeadChan-HO2P06-depth34","DIGIInfor-DeadChan-HO2P08-depth34","DIGIInfor-DeadChan-HO2P10-depth34","DIGIInfor-DeadChan-HO2P12-depth34"],
        }
        {
            name: "DIGITiming-MeanTime-HO2-depth56",
            plot_title: "DIGITiming MeanTime HO2 depth56",
            y_title: "Mean of DIGITiming [TS]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-MeanTime-HO2M02-depth56","DIGITiming-MeanTime-HO2M04-depth56","DIGITiming-MeanTime-HO2M06-depth56","DIGITiming-MeanTime-HO2M08-depth56","DIGITiming-MeanTime-HO2M10-depth56","DIGITiming-MeanTime-HO2M12-depth56","DIGITiming-MeanTime-HO2P02-depth56","DIGITiming-MeanTime-HO2P04-depth56","DIGITiming-MeanTime-HO2P06-depth56","DIGITiming-MeanTime-HO2P08-depth56","DIGITiming-MeanTime-HO2P10-depth56","DIGITiming-MeanTime-HO2P12-depth56"],
        }
        {
            name: "DIGITiming-Active-Chan-HO2-depth56",
            plot_title: "DIGITiming Active Chan HO2 depth56",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITiming-Active-Chan-HO2M02-depth56","DIGITiming-Active-Chan-HO2M04-depth56","DIGITiming-Active-Chan-HO2M06-depth56","DIGITiming-Active-Chan-HO2M08-depth56","DIGITiming-Active-Chan-HO2M10-depth56","DIGITiming-Active-Chan-HO2M12-depth56","DIGITiming-Active-Chan-HO2P02-depth56","DIGITiming-Active-Chan-HO2P04-depth56","DIGITiming-Active-Chan-HO2P06-depth56","DIGITiming-Active-Chan-HO2P08-depth56","DIGITiming-Active-Chan-HO2P10-depth56","DIGITiming-Active-Chan-HO2P12-depth56"],
        }
        {
            name: "DIGITDCTime-MeanTime-HO2-depth56",
            plot_title: "DIGITDCTime MeanTime HO2 depth56",
            y_title: "Mean of DIGITDCTime [ns]",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-MeanTime-HO2M02-depth56","DIGITDCTime-MeanTime-HO2M04-depth56","DIGITDCTime-MeanTime-HO2M06-depth56","DIGITDCTime-MeanTime-HO2M08-depth56","DIGITDCTime-MeanTime-HO2M10-depth56","DIGITDCTime-MeanTime-HO2M12-depth56","DIGITDCTime-MeanTime-HO2P02-depth56","DIGITDCTime-MeanTime-HO2P04-depth56","DIGITDCTime-MeanTime-HO2P06-depth56","DIGITDCTime-MeanTime-HO2P08-depth56","DIGITDCTime-MeanTime-HO2P10-depth56","DIGITDCTime-MeanTime-HO2P12-depth56"],
        }
        {
            name: "DIGITDCTime-Active-Chan-HO2-depth56",
            plot_title: "DIGITDCTime Active Chan HO2 depth56",
            y_title: "Number of Active Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGITDCTime-Active-Chan-HO2M02-depth56","DIGITDCTime-Active-Chan-HO2M04-depth56","DIGITDCTime-Active-Chan-HO2M06-depth56","DIGITDCTime-Active-Chan-HO2M08-depth56","DIGITDCTime-Active-Chan-HO2M10-depth56","DIGITDCTime-Active-Chan-HO2M12-depth56","DIGITDCTime-Active-Chan-HO2P02-depth56","DIGITDCTime-Active-Chan-HO2P04-depth56","DIGITDCTime-Active-Chan-HO2P06-depth56","DIGITDCTime-Active-Chan-HO2P08-depth56","DIGITDCTime-Active-Chan-HO2P10-depth56","DIGITDCTime-Active-Chan-HO2P12-depth56"],
        }
        {
            name: "DIGIInfor-DeadChan-HO2-depth56",
            plot_title: "Dead Chan HO2 depth56",
            y_title: "Number of Dead Channel",
            subsystem: "HCAL",
            correlation: false,
            series: ["DIGIInfor-DeadChan-HO2M02-depth56","DIGIInfor-DeadChan-HO2M04-depth56","DIGIInfor-DeadChan-HO2M06-depth56","DIGIInfor-DeadChan-HO2M08-depth56","DIGIInfor-DeadChan-HO2M10-depth56","DIGIInfor-DeadChan-HO2M12-depth56","DIGIInfor-DeadChan-HO2P02-depth56","DIGIInfor-DeadChan-HO2P04-depth56","DIGIInfor-DeadChan-HO2P06-depth56","DIGIInfor-DeadChan-HO2P08-depth56","DIGIInfor-DeadChan-HO2P10-depth56","DIGIInfor-DeadChan-HO2P12-depth56"],
        }

        
        
    ]
    
    return {
        displayGroups: displayGroups
    }
}())
