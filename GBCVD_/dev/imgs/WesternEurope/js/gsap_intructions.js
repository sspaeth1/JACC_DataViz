

getChartArea = document.querySelector('.chartArea');

getChartArea.style.top = window.scrollY;


gsap.registerPlugin(ScrollTrigger);

// gsap.to(".chartArea", {
//     x: 700,
//     duration: 3,
//     scrollTrigger: {
//         trigger: "#two",
//         start: "top 60%",
//         end: "bottom 30%",
//         markers: true,
//         scrub: true,
//         toggleClass: 'red'
//     }
// })

// .data(grabChart1Title.innerText = "Heart Disease Rate: Western Europe vs Global")

let changeTitleText = (text) => {
    grabChart1Title.classList.add("attentionScale")
    window.setTimeout(grabChart1Title.classList.remove("attentionScale"), 2000)
    grabChart1Title.innerText = text;
}

let loadHypertensiveHDStart = () => {
    chart1.unload({
        ids: ["F- W.Europe Cardiovascular",
            "M- W.Europe Cardiovascular",
            "F- Global Cardiovascular",
            "M- Global Cardiovascular",
            "all- W.Europe Cardiovascular",
            "all- Global Cardiovascular"]
    })
}


let loadCardiovascularMandF = () => {
    chart1.load({
        json: {
            // "all- W.Europe Cardiovascular": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.w_europe.bothGenders,
            // "all- Global Cardiovascular": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.global.bothGenders,
            "F- W.Europe Cardiovascular": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.w_europe.female,
            "M- W.Europe Cardiovascular": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.w_europe.male,
            "F- Global Cardiovascular": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.global.female,
            "M- Global Cardiovascular": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.global.male
        },
        types: types_Cardio_only
        //{
        // "all- W.Europe Cardiovascular": "area-spline-range",
        // "all- Global Cardiovascular": "area-spline-range"
        //}
        ,
        unload:
            [
                "all- W.Europe Cardiovascular",
                "all- Global Cardiovascular"
            ]
    })
}

let toggleHypertensive = () => {
    chart1.toggle(
        ["F- W.Europe Hypertensive HD",
            "M- W.Europe Hypertensive HD",
            "F- Global Hypertensive HD",
            "M- Global Hypertensive HD"]
    )
}

let unloadHypertensiveHD = () => {
    chart1.load({
        json: {
            "F- W.Europe Cardiovascular": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.w_europe.female,
            "M- W.Europe Cardiovascular": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.w_europe.male,
            "F- Global Cardiovascular": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.global.female,
            "M- Global Cardiovascular": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.global.male
        },
        unload: ["F- W.Europe Hypertensive HD",
            "M- W.Europe Hypertensive HD",
            "F- Global Hypertensive HD",
            "M- Global Hypertensive HD"]
    })


    // chart1.unload({
    //     ids: ["F- W.Europe Hypertensive HD",
    //         "M- W.Europe Hypertensive HD",
    //         "F- Global Hypertensive HD",
    //         "M- Global Hypertensive HD"]
    // })
}

let loadHypertensiveHD = () => {
    chart1.load({
        json: {
            "F- W.Europe Hypertensive HD": chartData.CauseOfDeath_Rate.Deaths.HypertensiveHD.w_europe.female,
            "M- W.Europe Hypertensive HD": chartData.CauseOfDeath_Rate.Deaths.HypertensiveHD.w_europe.male,
            "F- Global Hypertensive HD": chartData.CauseOfDeath_Rate.Deaths.HypertensiveHD.global.female,
            "M- Global Hypertensive HD": chartData.CauseOfDeath_Rate.Deaths.HypertensiveHD.global.male
        }
    })
}

let doubleHeight = window.innerHeight;

let tl = gsap.timeline()

tl.to(
    ".chartArea", {
    y: 100,
    duration: 7,
    delay: 0,
    onStart: () => {
        changeTitleText("Heart Disease Rate: Western Europe vs Global");
        loadCardiovascularMandF();
    },
    onReverseComplete: () => {
        changeTitleText("Hypertensive Heart Disease Rate: Western Europe vs Global");
        loadHypertensiveHDStart()
    },
}).to(
    ".chartArea", {
    y: 500,
    duration: 30,
    delay: 10,
    onStart: () => {
        // unloadHypertensiveHD()
        toggleHypertensive()

    },
    onReverseComplete: () => {
        toggleHypertensive()
        // unloadHypertensiveHD()
    }
})

// let fadeMap = gsap.to("#bgMap", { opacity: .1 })

// ScrollTrigger.create({
//     trigger: "#two",
//     animation: fadeMap,
//     start: "top 100%",
//     end: "top 20%",
//     scrub: true,
//     markers: true
// })


ScrollTrigger.create({
    trigger: ".chartArea",
    animation: tl,
    start: "top 10%",
    end: "bottom 10%",
    scrub: true,
    // markers: true,
})

ScrollTrigger.create({
    trigger: ".chartArea",
    start: "top 10%",
    end: "top 120%", // start when the top hits x of the way down the viewport
    start: 'top 80%', // end when the bottom hits x of the way down the viewport
    y: -700,
    duration: 1,
    scrub: true,
    // markers: true,
})

ScrollTrigger.create({
    trigger: ".chartArea",
    y: 800,
    duration: 120,
    start: "bottom 100%",
    end: "top 0%",
    delay: 10,
    // markers: true,
    onEnd: () => {
        changeTitleText("Recent upward trend in Female Western Europe");
        loadCardiovascularMandF();
    },

})


/*



if (window.scrollY > 250) {
    console.log("greater than 300")

    chart1.load({
        json: {
            "F- W.Europe Cardiovascular": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.w_europe.female,
            "M- W.Europe Cardiovascular": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.w_europe.male,
            "F- Global Cardiovascular": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.global.female,
            "M- Global Cardiovascular": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.global.male
        },
        types: types_Cardio_only,
        unload: [
            [
                "all- W.Europe Cardiovascular",
                "all- Global Cardiovascular",
            ]
        ]
    })

    // chart1.unload({
    //     ids: [
    //         "all- W.Europe Cardiovascular",
    //         "all- Global Cardiovascular",
    //         "F- W.Europe Hypertensive HD",
    //         "M- W.Europe Hypertensive HD",
    //         "F- Global Hypertensive HD",
    //         "M- Global Hypertensive HD"
    //     ]
    // })
}

  // HIDE CHART
  // if (window.scrollY > 900) {
  //     grabChartArea.classList.add('fadeOut')
  //     window.setTimeout(() => {
  //         grabChartArea.style.position = "relative";
  //     }, 2000);
  // }


  // ZOOM TO END  to end to view FEMALE INCREASE
  // if (window.scrollY > 800) {
  //     chart1.load({
  //         json: {
  //             "F- W.Europe Hypertensive HD": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.w_europe.femaleIncrease
  //         },
  //         unload:
  //             ["M- W.Europe Cardiovascular",
  //                 "F- W.Europe Cardiovascular",
  //                 "M- W.Europe Hypertensive HD",
  //                 "F- W.Europe Hypertensive HD",
  //                 "M- W.Europe Hypertensive HD",
  //                 "F- Global Hypertensive HD",
  //                 "M- Global Hypertensive HD"
  //             ]

  //     })
  // }




  // chart1.load({
  //     json: {
  //         "F- W.Europe Hypertensive HD": chartData.CauseOfDeath_Rate.Deaths.HypertensiveHD.w_europe.female,
  //         "M- W.Europe Hypertensive HD": chartData.CauseOfDeath_Rate.Deaths.HypertensiveHD.w_europe.male,
  //         "F- Global Hypertensive HD": chartData.CauseOfDeath_Rate.Deaths.HypertensiveHD.global.female,
  //         "M- Global Hypertensive HD": chartData.CauseOfDeath_Rate.Deaths.HypertensiveHD.global.male
  //     },
  //     types: {
  //         "F- W.Europe Hypertensive HD": "area-spline-range",
  //         "M- W.Europe Hypertensive HD": "area-spline-range",
  //         "F- Global Hypertensive HD": "area-spline-range",
  //         "M- Global Hypertensive HD": "area-spline-range"
  //     },
  //     unload: [
  //         "F- W.Europe Cardiovascular",
  //         "M- W.Europe Cardiovascular",
  //         "F- Global Cardiovascular",
  //         "M- Global Cardiovascular",
  //         "all- W.Europe Cardiovascular",
  //         "all- Global Cardiovascular"]
  // })

  */