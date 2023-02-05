

// set the dimensions and margins of the graph
var margin = { top: 10, right: 30, bottom: 200, left: 60 },
    width = 960 - margin.left - margin.right,
    height = 600 - margin.top - margin.bottom;

var selectedRegion = 'Eastern Sub-Saharan Africa';

drawScatterPlot(selectedRegion)

let dltOldChart = () => {
    let grabOldChart = document.getElementById("scatterplot");
    // grabOldChart.innerHTML = " "
    grabOldChart.removeChild()

}

function drawScatterPlot(selectedRegion) {
    dltOldChart()
    //Read the data
    d3.json("../../data/cleaned/SDI_plot.json", function (data) {

        // append the svg object to the body of the page
        var svg = d3.select("#scatterplot")
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");

        data = data.filter(d => { return d.super_region_name != '' })

        // Add X axis
        var x = d3.scaleLinear()
            .domain([0, d3.max(data, function (d) { return +d.SDI })])
            .range([0, width]);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x));

        svg.append("text")      // text label for the x axis
            .attr("x", width / 2)
            .attr("y", height + margin.top + 25)
            .style("text-anchor", "middle")
            .text("Socio-Demographic Index");

        // Add Y axis
        var y = d3.scaleLinear()
            .domain(d3.extent(data, function (d) { return +d.Mort }))
            .range([height, 0]).nice();
        svg.append("g")
            .call(d3.axisLeft(y));

        svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("x", 0 - (height / 2))

            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Mortality per 10,000");

        // symbolTriangle
        var sym = d3.symbol().type(d3.symbolTriangle).size(50);

        // Color scale
        var color = d3.scaleOrdinal(d3.schemeCategory10)

        // Add dots
        svg.append('g')
            .selectAll("dot")
            .data(data)
            .enter()
            .append("circle")
            .attr("cx", function (d) { return x(+d.SDI); })
            .attr("cy", function (d) { return y(+d.Mort); })
            .attr("r", 7)
            .style("fill", function (d) { return color(d.super_region_name); })
            .style("stroke", function (d) { return color(d.super_region_name); })
            .attr("stroke-opacity", "0.5")
            .attr("fill-opacity", "0.5").style("stroke-width", "2px")
            .on('mousemove', function (d) {
                d3.select(this).style("cursor", "pointer").attr('r', 10).style("stroke", 'black');
                d3.select("#tooltip")
                    .style('opacity', 1)
                    .html("<b>Super Region Name:</b>" + d.super_region_name +
                        "<br><b>Region Name:</b> " + d.region_name +
                        "<br><b>Regions:</b> " + d.regions +
                        "<br><b>Socio-Demographic Index:</b> " + d.SDI +
                        "<br><b>Mortality per 10,000:</b> " + d.Mort.toFixed(2))
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 40) + "px")
                    .style("fill-opacity", "0.5")
            })
            .on('mouseout', function (d) {
                d3.select(this).style("cursor", "default").attr('r', 7).style("stroke", function (d) { return color(d.super_region_name); });

                d3.select("#tooltip").style('opacity', 0).html('')
                    .style("left", (0) + "px")
                    .style("top", (0) + "px")
            })

        //add exposed variable
        var regionDataset = data.filter(d => { return d.region_name == selectedRegion })

        svg.selectAll("symbols")
            .data(regionDataset)
            .enter().append("path")
            .attr("d", sym)
            .attr("fill", "black")
            .attr("transform", function (d) { return "translate(" + x(+d.SDI) + "," + y(+d.Mort) + ")" })
            .on('mousemove', function (d) {
                d3.select(this).style("cursor", "pointer");
                d3.select("#tooltip")
                    .style('opacity', 1)
                    .html("<b>Super Region Name:</b>" + d.super_region_name +
                        "<br><b>Region Name:</b> " + d.region_name +
                        "<br><b>Regions:</b> " + d.regions +
                        "<br><b>Socio-Demographic Index:</b> " + d.SDI +
                        "<br><b>Mortality per 10,000:</b> " + d.Mort.toFixed(2))
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 40) + "px")
                    .style("fill-opacity", "0.5")
            })
            .on('mouseout', function (d) {
                d3.select(this).style("cursor", "default")
                d3.select("#tooltip").style('opacity', 0).html('')
                    .style("left", (0) + "px")
                    .style("top", (0) + "px")
            })

        //add legend

        svg.append("text")      // text label for the x axis
            .attr("x", width / 2)
            .attr("y", height + margin.top + 65)
            .style("text-anchor", "middle")
            .text("Global Regions and Focus Sub-Region");
        // create a list of keys
        var keys = d3.map(data, d => d.super_region_name).keys()

        var legend = svg.append('g').attr('class', 'legend').attr("transform",
            "translate(" + (margin.left * 2) + "," + (margin.top + height + 80) + ")");


        // Add one dot in the legend for each name.
        legend.selectAll("mydots")
            .data(keys)
            .enter()
            .append("circle")
            .attr("cx", function (d, i) { return (10 + (Math.floor(i / 4) * 400)) })
            .attr("cy", function (d, i) { return (Math.floor(i / 4) == 0) ? (10 + i * 25) : (10 + (i - 4) * 25); }) // 100 is where the first dot appears. 25 is the distance between dots
            .attr("r", 7)
            .style("fill", function (d) { return color(d) })
            .style("stroke", function (d) { return color(d); })
            .attr("stroke-opacity", "0.5")
            .attr("fill-opacity", "0.6").style("stroke-width", "2px");

        // Add one dot in the legend for each name.
        legend.selectAll("mylabels")
            .data(keys)
            .enter()
            .append("text")
            .attr("x", function (d, i) { return (20 + (Math.floor(i / 4) * 400)) })
            .attr("y", function (d, i) { return (Math.floor(i / 4) == 0) ? (10 + i * 25) : (10 + (i - 4) * 25); }) // 100 is where the first dot appears. 25 is the distance between dots
            .style("fill", function (d) { return color(d) })
            .text(function (d) { return d })
            .attr("text-anchor", "left")
            .style("alignment-baseline", "middle")

        //add exposed variable in legend
        legend.append("path")
            .attr("d", sym)
            .attr("fill", "black")
            .attr("transform", "translate(410,82)")

        legend.append("text")
            .attr("x", 420)
            .attr("y", 85).text(selectedRegion)

    })

}