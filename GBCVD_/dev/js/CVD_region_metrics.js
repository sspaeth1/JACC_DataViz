/////Start CVD METRICS ////////

let cvdRegionMetricChart = bb.generate({
    data: {
        columns: [
            ["country_a", 23, 23, 34, 45, 34],
            ["country_b", 83, 43, 34, 45, 20]
        ],
        type: "bar",
        groups: [
            ["country_a", "country_b"]
        ]
    },
    bindto: "#regionMetricsChart"
})


let _select = (selection) => {
    return document.querySelector(selection)
}

let buttonText
let regionMetricsButtons = document.querySelectorAll(".metricToggle")
console.log(regionMetricsButtons)

for (button of regionMetricsButtons) {
    button.addEventListener('click', (button) => {
        buttonText = button.target.dataset.name;

        console.log(cvdMtricData.metrics[buttonText])
        cvdRegionMetricChart.load({
            columns:
                cvdMtricData.metrics[buttonText]
        })

    })
}



let cvdMtricData =
{
    metrics: {
        "Prevalence Cases (Count)":
            [
                ["country_a", 23, 23, 34, 45, 34],
                ["country_b", 83, 43, 34, 45, 20]
            ]
        ,
        "Deaths (Count)":
            [
                ["country_a", 43, 23, 34, 45, 34],
                ["country_b", 23, 43, 34, 45, 20]
            ]
        ,
        "Prevalence Cases (Rate)":
            [
                ["country_a", 13, 23, 34, 45, 34],
                ["country_b", 33, 43, 34, 45, 20]
            ]
        ,
        "Deaths (Rate)":
            [
                ["country_a", 3, 23, 34, 45, 34],
                ["country_b", 43, 43, 34, 45, 20]
            ]
        ,
        "DALYs (Rate)":
            [
                ["country_a", 13, 23, 34, 45, 34],
                ["country_b", 42, 43, 34, 45, 20]
            ]

    }
}

///////// END CVD MEtrics




/*

//////////// Start SocioEconomic scatter///////


// let sciScatter = bb.generate({
//     bindto: "#sciScatterPlot",
//     type: "scatter",
//     data: {
//         json: [
//             { region: "East Asia and Oceania", mortality: 0.2, SCI: 2000 },
//             { region: "East Asia", mortality: 0.3249, SCI: 1000 },
//             { region: "East Asia", mortality: 0.3249, SCI: 1000 }
//         ]
//     },
//     keys: {
//         values: ["mortality", "SCI"]
//     }
// })



// let MortDataArr = SDIData.map(region => `region ${region.Mort}`)

let MortDataArr = []


// function pushScatterXaxis_TOARRAY() {

//     SDIData.forEach(region => MortDataArr.push(region.Mort))
//     SDIData.unshift()
// }
// pushScatterXaxis_TOARRAY()


for (i of SDIData) {
    MortDataArr.push([i.region, i.Mort], [i.region + "_x", i.SDI])

}
console.log(">>>>>>>>>>>>>>>", MortDataArr)

let sciScatterPlot = bb.generate({
    bindto: "#sciScatterPlot",
    data: {
        type: "scatter", // for ESM specify as: line()
        // json: [
        //     { name: "www.site1.com", "Mortality": 100, "SDI": 200, total: 400 },
        //     { name: "www.site2.com", "Mortality": 100, "SDI": 300, total: 400 },
        //     { name: "www.site3.com", "Mortality": 300, "SDI": 200, total: 500 },
        //     { name: "www.site4.com", "Mortality": 400, "SDI": 100, total: 500 }
        // ],
        columns: [
            MortDataArr
        ],
        keys: {
            // x: "name", // it's possible to specify "x" when category axis
            value: ["Mortality", "SDI"],
        }
    },
    axis: {
        x: {
            type: "category"
        }
    }
});


//////  End scatter ////
*/


//// Start Risks horizontal bar chart /////
let riskData = {
    regions: {
        regionNameA: {
            "Environmental": [
                ["country_a", 23, 23, 34, 45, 34],
                ["country_b", 83, 43, 34, 45, 20]
            ],
            "Metabolic": [
                ["country_a", 30, 43, 54, 45, 4],
                ["country_b", 3, 53, 24, 75, 10]
            ],
            "Behavioral": [
                ["country_a", 3, 13, 14, 65, 14],
                ["country_b", 33, 23, 14, 25, 10]
            ]
        }
    },

}


let categoryEnvironmental = [
    "Ambient particulate matter pollution",
    "High temperature",
    "Household air pollution from solid fuels",
    "Lead exposure",
    "Low temperature"
]

let categoryBehavioral = [
    "Dietary risks",
    "High alcohol use",
    "High body-mass index",
    "Low physical activity",
    "Secondhand smoke",
    "Smoking"
]
let risksBarChart = bb.generate({
    bindto: "#risksChart",
    data: {
        columns: riskData.regions.regionNameA.Environmental,
        groups: [
            ["country_a", "country_b"]
        ]
        ,
        type: "bar",
    },
    axis: {
        rotated: true,
        x: {
            type: "category",
            categories: categoryEnvironmental
        }
    }
})

let selectedTiskType = null
let riskSelect = document.getElementById("riskSelect");
// riskSelect.addEventListener('change', (el) => window.localStorage.setItem('riskType', JSON.stringify(el.target.options[el.target.selectedIndex].text)))
riskSelect.addEventListener('change', (el) => {
    selectedTiskType = el.target.options[el.target.selectedIndex].text
    risksBarChart.load({
        columns: riskData.regions.regionNameA[selectedTiskType],
    },
    )
});

/// End Risks////



//// Start Age and date /////
let agrDataData = [
    ["Male 1990", -83, -143, -100, -120, -150, -85],
    ["Female 1990", 130, 100, 140, 175, 150, 50],
    ["Male 2020", -23, -43, -10, -10, -10, -105],
    ["Female 2020", 10, 10, 10, 75, 50, 80]
]


var chart = bb.generate({
    size: {
        height: 200
    },
    data: {
        columns: agrDataData,
        type: "bar", // for ESM specify as: bar()
        groups: [
            [
                "Male 1990",
                "Female 1990"
            ],
            // [
            //     "Male 2020",
            //     "Female 2020"
            // ]
        ],
        labels: {
            format: function (v, id) {
                return Math.abs(v);
            }
        }
    },
    axis: {
        rotated: true,
        x: {
            show: false,
        },
        y: {
            tick: {
                format: function (v) {
                    return Math.abs(v);
                }
            }
        }
    },
    grid: {
        y: {
            show: true,
            lines: [
                {
                    value: 0,
                    class: "base-line"
                }
            ]
        }
    },
    tooltip: {
        format: {
            value: function (v) {
                return Math.abs(v);
            }
        }
    },
    bindto: "#dateAgeChart"
});

