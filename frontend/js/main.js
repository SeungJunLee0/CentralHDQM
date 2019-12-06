
const main = (function() {
    return {
        data: {},
        PLOTS_PER_PAGE: 4,
        currentPage: 1,
        chartsObjects: [],
        plotDatas: [],
        
        submitClicked: async function(event) {
            event.preventDefault()
            await this.submit(1)
        },

        submit: async function(page){
            if($("#filter-select").val() == "json") {
                if($("#filter-input-file")[0].files.length == 0)
                    return
            }

            $("#pagination-container").removeClass("d-none")
            this.clearLinks()

            $("#show-plot-list-button").removeAttr("disabled")

            // Read global options
            optionsController.readValues()
            
            $("#submit-button-spinner").show()
            $("#submit-button-title").hide()
            
            let allSeries = {}

            try {
                const url = await filterController.getApiUrl()
                const response = await fetch(url, {
                    credentials: "same-origin"
                })
                allSeries = await response.json()
            }
            catch(error) {
                console.error(error)
                main.showAlert("There was an error loading selected plots from the server. Please try again later.")
            }

            $("#submit-button-spinner").hide()
            $("#submit-button-title").show()
            
            this.data = this.transformAPIResponseToData(allSeries)

            // Search
            const searchQuery = optionsController.options.searchQuery
            if(searchQuery !== undefined && searchQuery !== null && searchQuery != "")
            {
                filteredBySearchQuery = []
                this.data.forEach(plotData => {
                    if(plotData.plot_title.toLowerCase().includes(searchQuery.toLowerCase()))
                    filteredBySearchQuery.push(plotData)
                })
                this.data = filteredBySearchQuery
            }
            
            await this.displayPage(page)
            this.drawPlotList()
            this.drawPageSelector()
            this.changeUrlToReflectSettings()
        },

        transformAPIResponseToData: function(allSeries) {
            const data = []
            const allSeriesNames = allSeries.map(x => x.metadata.name)

            // Get display groups for the selected subsystem
            const displayGroups = displayConfig.displayGroups.filter(
                group => group.subsystem === selectionController.selectedSubsystem())

            const namesUsedInDisplayGroups = []
            displayGroups.forEach(group => {
                const plotData = {
                    plot_title: group.plot_title,
                    y_title: group.y_title,
                    name: group.name,
                    correlation: group.correlation,
                    series: []
                }

                group.series.forEach(seriesName => {
                    if(allSeriesNames.includes(seriesName)) {
                        plotData.series.push(allSeries.find(x => x.metadata.name == seriesName))
                        namesUsedInDisplayGroups.push(seriesName)
                    }
                })

                if(plotData.series.length !== 0)
                    data.push(plotData)
            })

            // Collect the remaining series
            allSeries.forEach(series => {
                if(!namesUsedInDisplayGroups.includes(series.metadata.name)) {
                    const plotData = {
                        plot_title: series.metadata.plot_title,
                        y_title: series.metadata.y_title,
                        name: series.metadata.name,
                        correlation: false,
                        series: [series]
                    }
                    data.push(plotData)
                }
            })

            return data
        },

        displayPage: async function(page){
            this.destroyAllPresentPlots()
            this.currentPage = page

            const numberOfPastPlots = (page - 1) * this.PLOTS_PER_PAGE
            const numberOfFuturePlots = this.data.length - numberOfPastPlots
            const numberOfPlotsToPresent = Math.min(this.PLOTS_PER_PAGE, numberOfFuturePlots)

            for(let i = 0; i < numberOfPlotsToPresent; i++)
            {
                $(`#plot-card-${i}`).removeClass("d-none")

                const plotData = this.data[((page - 1) * this.PLOTS_PER_PAGE) + i]
                const renderTo = `plot-container-${i}`

                const chartObj = await plotter.draw(plotData, renderTo)
                this.chartsObjects.push(chartObj)
                this.plotDatas.push(plotData)
            }

            for(let i = numberOfPlotsToPresent; i < this.PLOTS_PER_PAGE; i++)
            {
                $(`#plot-card-${i}`).addClass("d-none")
            }
        },

        pageSelected: function(event, page)
        {
            event.preventDefault()
            window.scrollTo(0, 0)

            this.displayPage(page)
            this.drawPageSelector()
            urlController.set("page", page)
        },

        drawPlotList: function()
        {
            const divStart = `<div class="col-auto mr-2 ml-2 d-inline-block align-top">`
            const divEnd = `</div></div>`
            let html = ""
            let column = ""
            
            this.data.forEach((plotData, i) => 
            {
                column += `<div class="row">${plotData.plot_title}</div>`
                if((i + 1) % 4 == 0 || i == plotData.length - 1)
                {
                    const pageNumber = Math.ceil((i + 1) / 4)
                    const pageTitle = `<a class="row small font-italic" href="#" onclick="main.pageSelected(event, ${pageNumber})">Page ${pageNumber}</a>`
                    html += divStart + pageTitle + column + divEnd
                    column = ""
                }
            })

            if(this.data.length === 0)
            {
                html = `<div class="ml-2">No plots found</div>`
                this.showAlert("No plots are available for your selection. Please select different data or enter a different search query.")
            }
            else
            {
                this.hideAlert()
            }

            $("#plot-list-container").html(html)
        },

        drawPageSelector: function()
        {
            const numberOfPages = Math.ceil(this.data.length / this.PLOTS_PER_PAGE)
            let html = ""

            for(let i = 1; i <= numberOfPages; i++)
            {
                if(i == this.currentPage)
                    html += `<li class="page-item active"><a class="page-link">${i}</a></li>`
                else
                    html += `<li class="page-item"><a class="page-link" href="#" onclick="main.pageSelected(event, ${i})">${i}</a></li>`
            }

            $("#pagination-ul").html(html)
        },

        changeUrlToReflectSettings: function()
        {
            // Data selection argument
            urlController.set("subsystem", $("#subsystem-select").val())
            urlController.set("pd", $("#pd-select").val())
            urlController.set("ps", $("#processing-string-select").val())

            // Filter
            urlController.set("filter", $("#filter-select").val())
            urlController.set("filterValue", filterController.getFilterValue())

            // Options
            const optionsBitSum = optionsController.getBitwiseSum()
            urlController.set("options", optionsBitSum)

            // Search query
            const searchQuery = $("#search-query-input").val()
            if(searchQuery === null || searchQuery === "")
                urlController.delete("search")
            else
                urlController.set("search", $("#search-query-input").val())

            // Page
            urlController.set("page", this.currentPage)
        },

        destroyAllPresentPlots: function()
        {
            this.chartsObjects.forEach(x => 
            {
                try
                {
                    x.destroy()
                }
                catch(error)
                {
                    console.error(error)
                }
            })
            this.chartsObjects = []
            this.plotDatas = []
        },

        showAlert: function(message)
        {
            $("#alert").html(message)
            $("#alert").show()
        },

        hideAlert: function()
        {
            $("#alert").html("")
            $("#alert").hide()
        },

        updateLinks: function(parent, plotData, run, seriesIndex) 
        {
            this.clearLinks()
            const dataPoint = plotData.series[seriesIndex].trends.find(x => x.run === run)

            const linksInfo = parent.find(".links-info")
            const omsLink = parent.find(".oms-link")
            const rrLink = parent.find(".rr-link")
            const guiLink = parent.find(".gui-link")
            const imgLink = parent.find(".img-link")

            linksInfo.text("Run " + dataPoint.run + ":")
            omsLink.text("OMS")
            rrLink.text("RR")
            guiLink.text("GUI")
            imgLink.text("IMG")
            
            omsLink.attr("href", "https://cmsoms.cern.ch/cms/runs/report?cms_run=" + dataPoint.run)
            rrLink.attr("href", "https://cmsrunregistry.web.cern.ch/offline/workspaces/global?run_number=" + dataPoint.run)
            guiLink.attr("href", dataPoint.main_gui_url)

            $("#main-plot-gui-url").attr("href", dataPoint.main_gui_url)
            $("#gui-main-plot-modal-image").attr("src", dataPoint.main_image_url)
            $(".fs-run").text(dataPoint.run)
            $("#gui-main-plot-modal-path").text(plotData.series[seriesIndex].metadata.main_me_path)
        },

        clearLinks: function()
        {
            for(let i = 0; i < this.PLOTS_PER_PAGE; i++)
            {
                const parent = $(`#plot-card-${i}`)

                const linksInfo = parent.find(".links-info")
                const omsLink = parent.find(".oms-link")
                const rrLink = parent.find(".rr-link")
                const guiLink = parent.find(".gui-link")
                const imgLink = parent.find(".img-link")

                linksInfo.text("")
                omsLink.text("")
                rrLink.text("")
                guiLink.text("")
                imgLink.text("")
                omsLink.attr("href", "")
                rrLink.attr("href", "")
                guiLink.attr("href", "")
            }
        },
    }
}())

$(document).ready(async function()
{
    await selectionController.documentReady()
    filterController.documentReady()
    optionsController.documentReady()
    fullScreenController.documentReady()

    if(urlController.has("subsystem") && urlController.has("pd") && urlController.has("ps"))
    {
        if(urlController.has("page"))
            main.currentPage = urlController.get("page")

        $("#subsystem-select").val(urlController.get("subsystem"))
        $("#pd-select").val(urlController.get("pd"))
        $("#processing-string-select").val(urlController.get("ps"))
        
        await main.submit(main.currentPage)
    }

    if(urlController.has("fsPlot"))
    {
        await fullScreenController.changeRangesClicked(urlController.get("fsPlot"), false)
    }
})
