const margin = {
    top: 50,
    right: 1,
    bottom: 6,
    left: 1
};

const width = window.innerWidth * .9 - margin.left - margin.right;
const height = 900 - margin.top - margin.bottom;
const formatNumber = d3.format(',.0f');
const format = d => d.toLocaleString("en-US");
const color = d3.scaleOrdinal(d3.schemeBrBG[9])//schemeCategory10);

const svg = d3.select('#sankeyChart').append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', `translate(${margin.left},${margin.top})`);

svg.append('text')
    .text('View the makeup of Global CVD')
    .attr("x", (width / 2) - 170)
    .attr("y", -20)
    .attr('font-size', "2em")
    .attr('font-weight', 100)

const sankey = d3_sankey.sankey()
    .nodeWidth(15)
    .nodePadding(10)
    .size([width, height]);

const path = sankey.link();

// d3.json('./energy_sankyDataSample.json', jsonData => {
d3.json('../data/sankey/sankey_locations_v2.json', jsonData => {
    console.log("jsonData:::: ", jsonData)
    sankey
        .nodes(jsonData.nodes)
        .links(jsonData.links)
        .layout(32);

    const link = svg.append('g').selectAll('.link')
        .data(jsonData.links)
        .enter().append('path')
        .attr('class', 'link')
        .attr('d', path)
        .style('stroke-width', d => Math.max(1, d.dy))
        .sort((a, b) => b.dy - a.dy);

    link.append('title')
        // .attr("ee", d => console.log(d))
        .text(d => `${d.source.name} → ${d.target.name}\n${format(d.value)} \n Uncertainty intervals available online (healthdata.org/xxxxx)`);

    const node = svg.append('g').selectAll('.node')
        .data(jsonData.nodes)
        .enter().append('g')
        .attr('class', 'node')
        .attr('transform', d => `translate(${d.x},${d.y})`)
        .call(d3.drag()
            .subject(d => d)
            .on('start', function () {
                this.parentNode.appendChild(this);
            })
            .on('drag', dragmove));

    node.append('rect')
        .attr('height', d => d.dy)
        .attr('width', sankey.nodeWidth())
        .style('fill', d => d.color = color(d.name.replace(/ .*/, '')))
        .style('stroke', d => d3.rgb(d.color).darker(2))
        .append('title')
        .text(d => `${d.name}\n${format(d.value)}`);

    node.append('text')
        .attr('x', -6)
        .attr('y', d => d.dy / 2)
        .attr('dy', '.35em')
        .attr('text-anchor', 'end')
        .attr('transform', null)
        .text(d => d.name)
        .filter(d => d.x < width / 2)
        .attr('x', 6 + sankey.nodeWidth())
        .attr('text-anchor', 'start');

    function dragmove(d) {
        d3.select(this).attr('transform', `translate(${d.x},${d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))})`);
        sankey.relayout();
        link.attr('d', path);
    }


    // //// Start zoom ////
    // var zoomfactor = 1;

    // var zoomlistener = d3.behavior.zoom()
    //     .on("zoom", redraw);

    // d3.select(".zoomin").on("click", function () {
    //     zoomfactor = zoomfactor + 0.2;
    //     zoomlistener.scale(zoomfactor).event(d3.select(".graph"));
    // });

    // d3.select(".zoomout").on("click", function () {
    //     zoomfactor = zoomfactor - 0.2;
    //     zoomlistener.scale(zoomfactor).event(d3.select(".graph"));
    // });

    // function redraw() {
    //     console.log("here", d3.event.translate, d3.event.scale);
    //     g.attr("transform", "translate(" + d3.event.translate + ")" + " scale(" + d3.event.scale + ")");
    // }

    // /// End Zoom ////
});