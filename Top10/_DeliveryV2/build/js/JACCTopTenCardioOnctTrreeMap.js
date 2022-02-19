

var data = {
  "name": "cluster",
  "children": [
    { 
        "name": "CV Risk Factors Associated With Future Cancer",
         "usage": "9,956",
          "link": "https://www.jacc.org/doi/10.1016/j.jaccao.2020.12.003",
          "image":"./build/imgs/Ho-JCO110820-0479DR.jpg",
          "usageSD":11366
    },
    { 
        "name": "Mitochondria Transfer Mitigates Anthracycline Cardiomyopathy",
         "usage": "9,287", 
         "link":"https://www.jacc.org/doi/10.1016/j.jaccao.2021.05.006",
         "image":"./build/imgs/Yang-JCO031421-0103DR.jpg",
         "usageSD":10410
    },
    { 
        "name": "Coronary Artery Disease In Young Women After Radiation", 
        "usage": "9,197" , 
        "link":"https://www.jacc.org/doi/10.1016/j.jaccao.2021.07.008",
        "image":"./build/imgs/Watt-JCO051121-0237DR.jpg",
        "usageSD":10281
    },
    { 
        "name": "Venous And Arterial Thromboembolism In Cancer Patients", 
        "usage": "9,039", 
        "link": "https://www.jacc.org/doi/10.1016/j.jaccao.2021.03.001",
        "image":"./build/imgs/Khorana-JCO111420-0488RR.jpg",
        "usageSD":10056
    },
    { 
        "name": "Past, Present, And Future of Radiation Cardiotoxicity", 
        "usage": "8,701",
         "link": "https://www.jacc.org/doi/10.1016/j.jaccao.2021.06.007",
         "image":"./build/imgs/Bergom-JCO050421-0224DR.jpg",
         "usageSD":9573
    },
    { 
        "name": "CV Disease and Radiation:  ICOS Expert Consensus", 
        "usage": "8,267", 
        "link": "https://www.jacc.org/doi/10.1016/j.jaccao.2021.06.003",
        "image":"./build/imgs/Mitchell JCO040221-0140DR.jpg",
        "usageSD":8953
    },
    { 
        "name": "Immunotherapy and Cardiotoxicity",
         "usage": "7,305", 
         "link": "https://www.jacc.org/doi/10.1016/j.jaccao.2020.11.012",
         "image":"./build/imgs/Neilan-JCO080320-0324DR.jpg",
         "usageSD":7579
    },
    { 
        "name": "BSE And BCOS Echo Guidelines for Doxorubicin and Trastuzumab",
         "usage": "6,901", 
         "link": "https://www.jacc.org/doi/10.1016/j.jaccao.2021.01.011",
         "image":"./build/imgs/Dobson-JCO080420-0329DRRR CI.jpg",
         "usageSD":7001
    },
    { 
        "name": "Sustained Increases In Igfbp-7 with Doxorubicin", 
        "usage": "6,300", 
        "link":"https://www.jacc.org/doi/10.1016/j.jaccao.2021.06.005",
        "image":"./build/imgs/Ky-JCO052821-0264DR.jpg",
        "usageSD":6143
    },
    { 
        "name": "TAVR Compared to SAVR After Chest Radiation", 
        "usage": "4,763", 
        "link": "https://www.jacc.org/doi/10.1016/j.jaccao.2021.07.005",
        "image":"./build/imgs/Kaneko JCO050921-0233DRR.jpg",
        "usageSD":3947
    }
  ]
};

  var width = 100,
     height = 80;
var treemap =
  d3.layout.treemap()
  .ratio(.8)
  .size([width, height])
  .padding(0)
  .value(function(d) { return d.usageSD; });

var div = d3.select(".treemap");

function position() {
  this
    .style("right", function(d) { return d.x + "vw"; })
    .style("bottom", function(d) { return d.y + "vh"; })
    .style("width", function(d) { return d.dx + "vw"; })
    .style("height", function(d) { return d.dy + "vh"; });
}

function getLabel(d) {
  return d.name
}

function displayUsage(d){
    return "Usage: " + d.usage;
}


  div.datum(data).selectAll(".node")
  .data(treemap.nodes)
  .enter()
  .append("a")
  .attr('href', function(d){return d.link })
  .attr('target', "_blank")
  .append("div")
  .attr("class", "node")
  .call(position)
  .append("h3")
  .attr('data-id', function(d){return d.usage})
  .text(getLabel)
  .append('p')
  .attr('class', 'usage')
  .text(displayUsage)
  .append("img")
  .attr('src', function(d){return d.image})
  .attr('class', 'treeImage')

 