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
// console.log(regionMetricsButtons)

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




//// Start Risks horizontal bar chart /////
let selectedLocation = "Central Europe",
    selectedRiskType = "Behavioral",
    Ischemic_heart_disease_arr = [],
    Ischemic_stroke_arr = [],
    Intracerebral_hemorrhage_arr = [],
    Subarachnoid_hemorrhage_arr = [],
    Hypertensive_heart_disease_arr = [],
    Atrial_fibrillation_and_flutter_arr = [],
    Aortic_aneurysm_arr = [],
    Lower_extremity_peripheral_arterial_disease_arr = [],
    Alcoholic_cardiomyopathy_arr = [];

CauseArrs = [Ischemic_heart_disease_arr,
    Ischemic_stroke_arr,
    Intracerebral_hemorrhage_arr,
    Subarachnoid_hemorrhage_arr,
    Hypertensive_heart_disease_arr,
    Atrial_fibrillation_and_flutter_arr,
    Aortic_aneurysm_arr,
    Lower_extremity_peripheral_arterial_disease_arr,
    Alcoholic_cardiomyopathy_arr
]



let categoriesSelect = {
    Environmental: [
        "Ambient particulate matter pollution",
        "High temperature",
        "Household air pollution from solid fuels",
        "Lead exposure",
        "Low temperature"
    ],
    Metabolic: [
        "High fasting plasma glucose",
        "High LDL cholesterol",
        "High systolic blood pressure",
        "Kidney dysfunction"
    ],
    Behavioral: [
        "Dietary risks",
        "High alcohol use",
        "High body-mass index",
        "Low physical activity",
        "Secondhand smoke",
        "Smoking"
    ]
}

let = causeNameArr = [
    "Ischemic heart disease",
    "Ischemic stroke",
    "Intracerebral hemorrhage",
    "Subarachnoid hemorrhage",
    "Hypertensive heart disease",
    "Atrial fibrillation and flutter",
    "Aortic aneurysm",
    "Lower extremity peripheral arterial disease",
    "Alcoholic cardiomyopathy"
]



let fillCauseArrs = (matchCause, DalyNum) => {
    switch (matchCause) {
        case "Ischemic heart disease":
            Ischemic_heart_disease_arr.push(DalyNum)
            break
        case "Ischemic stroke":
            Ischemic_stroke_arr.push(DalyNum)
            break
        case "Intracerebral hemorrhage":
            Intracerebral_hemorrhage_arr.push(DalyNum)
            break
        case "Subarachnoid hemorrhage":
            Subarachnoid_hemorrhage_arr.push(DalyNum)
            break
        case "Hypertensive heart disease":
            Hypertensive_heart_disease_arr.push(DalyNum)
            break
        case "Atrial fibrillation and flutter":
            Atrial_fibrillation_and_flutter_arr.push(DalyNum)
            break
        case "Aortic aneurysm":
            Aortic_aneurysm_arr.push(DalyNum)
            break
        case "Lower extremity peripheral arterial disease":
            Lower_extremity_peripheral_arterial_disease_arr.push(DalyNum)
            break
        case "Alcoholic cardiomyopathy":
            Alcoholic_cardiomyopathy_arr.push(DalyNum)
            break
        default:
            console.log("error: non listed cause")
    }
}

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



let riskFilterSelection = (location_name_selection, risk_type_selection) => {
    let filters = { location_name: location_name_selection, risk_type: risk_type_selection };
    console.log("   ::::  ", location_name_selection, risk_type_selection)
    let filteredArray = riskData2.filter(item => Object.keys(filters).every(key => item[key] === filters[key]))
    let vals = filteredArray.map(item => Number(item.val))

    let dalyArr = []
    dalyArr = filteredArray.map(item => item.Daly)
    // const cause_nameArr = filteredArray.map(item => item.cause_name)  /// DEDUPE cause list line 1 of 2
    // const deduCauseNameArr = [...new Set(cause_nameArr)]

    dalyArr.unshift('Dalys')

    // filteredArray.forEach(item => {
    //     clearCauseArrs()
    // })

    filteredArray.forEach(item => {
        fillCauseArrs(item.cause_name.replace("_", /\s/g), item.Daly)
    });

    //add name for each array
    CauseArrs.forEach((arr, i) => arr.unshift(causeNameArr[i]))
    CauseArrs.unshift(causeNameArr)
    console.log("CauseArrs: ", CauseArrs)
    return [CauseArrs]
}


let riskFilterSelection_ = riskFilterSelection(selectedLocation, selectedRiskType)
// var dataConcatArr = [];
// for (i in filteredArray) {
//     dataConcatArr.push([rei_nameArr[i], causeNameArr[i], dalyArr[i]])
// }



console.log(categoriesSelect[selectedRiskType])
let createRiskBarChart = () => {
    let risksBarChart = bb.generate({
        bindto: "#risksChart",
        data: {
            columns: riskData.regions.regionNameA[selectedRiskType],
            // rows: riskFilterSelection_,
            type: "bar",
            groups: [causeNameArr]
        },
        axis: {
            rotated: true,
            x: {
                type: "category",
                categories: categoriesSelect[selectedRiskType]
            }
        }
    })
}

createRiskBarChart()


let riskSelect = document.getElementById("riskSelect");
// riskSelect.addEventListener('change', (el) => window.localStorage.setItem('riskType', JSON.stringify(el.target.options[el.target.selectedIndex].text)))
riskSelect.addEventListener('change', (el) => {
    selectedRiskType = el.target.options[el.target.selectedIndex].text
    riskFilterSelection_ = riskFilterSelection(selectedLocation, selectedRiskType)
    console.log("riskFilterSelection_: ", [riskFilterSelection_[0]])

    createRiskBarChart()

});

/// End Risks////


