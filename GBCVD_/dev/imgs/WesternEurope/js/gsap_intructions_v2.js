gsap.registerPlugin(ScrollTrigger);

let changeTitleText = (text) => {
    // grabChart1Title.classList.toggle("attentionScale")

    grabChart1Title.classList.add("attentionScale")
    window.setTimeout(() => grabChart1Title.classList.remove("attentionScale"), 1000)


    grabChart1Title.innerText = text;
}

let loadHypertensiveHDStart = () => {
    chart1.unload({
        ids: ["F- W.Europe CVD",
            "M- W.Europe CVD",
            "F- Global CVD",
            "M- Global CVD",
            "all- W.Europe CVD",
            "all- Global CVD"]
    })
}

let loadCardiovascularMandF = () => {
    chart1.load({
        json: {
            "MF- W.Europe CVD": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.w_europe.female,
            "MF- Global CVD": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.global.male

        },
        types: types_Cardio_only_MF
    })
}

loadCardiovascularMandF = () => {
    chart1.toggle(
        ["MF- W.Europe CVD",
            "MF- Global CVD"]
    )
}


let loadCardiovascular_M_F = () => {
    chart1.load({
        json: {
            "all- W.Europe CVD": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.w_europe.maleAndFemale,
            "all- Global CVD": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.global.maleAndFemale,
            "F- W.Europe CVD": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.w_europe.female,
            "M- W.Europe CVD": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.w_europe.male,
            "F- Global CVD": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.global.female,
            "M- Global CVD": chartData.CauseOfDeath_Rate.Deaths.Cardiovascular.global.male
        },
        types: types_Cardio_only
    })
}

let toggleCardiovascular_M_F = () => {
    chart1.toggle(
        ["F- W.Europe CVD",
            "F- W.Europe CVD",
            "M- W.Europe CVD",
            "F- Global CVD",
            "M- Global CVD"]
    )
}

let toggleHypertensive = () => {
    chart1.toggle(
        // ["F- W.Europe HHD",
        //     "M- W.Europe HHD",
        //     "F- Global HHD",
        //     "M- Global HHD"]
        ["MF- W.Europe CVD",
            "MF- Global CVD"]
    )
}


let loadHypertensiveHD = () => {
    chart1.load({
        json: {
            "F- W.Europe HHD": chartData.CauseOfDeath_Rate.Deaths.HypertensiveHD.w_europe.female,
            "M- W.Europe HHD": chartData.CauseOfDeath_Rate.Deaths.HypertensiveHD.w_europe.male,
            "F- Global HHD": chartData.CauseOfDeath_Rate.Deaths.HypertensiveHD.global.female,
            "M- Global HHD": chartData.CauseOfDeath_Rate.Deaths.HypertensiveHD.global.male
        }
    })
}

let doubleHeight = window.innerHeight;

let tl = gsap.timeline()

// tl.to(
//     ".chartArea", {
//     y: 100,
//     duration: 3,
//     delay: 0,
//     onStart: () => {
//         changeTitleText("Heart Disease Rate: Western Europe vs Global");
//         loadCardiovascularMandF();
//     },
//     onReverseComplete: () => {
//         changeTitleText("Hypertensive Heart Disease Rate: Western Europe vs Global");
//         toggleHypertensive()
//     },
// }).to(
//     ".chartArea", {
//     y: 500,
//     duration: 30,
//     delay: 10,
//     onStart: () => {
//         // unloadHypertensiveHD()
//         toggleHypertensive()

//     },
//     onReverseComplete: () => {
//         toggleHypertensive()
//         // unloadHypertensiveHD()
//     }
// })


// ScrollTrigger.create({
//     trigger: ".chartArea",
//     animation: tl,
//     start: "top 10%",
//     end: "bottom 10%",
//     scrub: true,
//     // markers: true,
// })

// ScrollTrigger.create({
//     trigger: ".chartArea",
//     start: "top 100%",// end when the bottom hits x of the way down the viewport
//     end: "top 20%", // start when the top hits x of the way down the viewport
//     y: -700,
//     duration: 1,
//     scrub: true,
//     markers: true,
// })

gsap.to([".chartArea", ".dataTextBox"], {
    scrollTrigger: {
        trigger: ".chartArea",
        start: "top 50%",
        end: "top 30%",
        scrub: true,
        // markers: true,
        delay: 0,
    },
    y: 50,
    duration: 2,
    onStart: () => {
        changeTitleText("Heart Disease Rate: Western Europe vs Global");
        loadCardiovascularMandF();
    },
    onReverseComplete: () => {
        changeTitleText("Hypertensive Heart Disease Rate: Western Europe vs Global");
        toggleHypertensive()
    }
    // onEnd: () => {
    //     changeTitleText("Recent upward trend in Female Western Europe");
    //     // loadCardiovascularMandF();
    // }
})


gsap.to(".chartArea", {
    scrollTrigger: {
        trigger: "#three",
        start: "top 80%",
        end: "top 90%",
        scrub: true,
        markers: true,
        delay: 0,
    },
    y: 500,
    duration: .5,
    onStart: () => {
        changeTitleText("Recent upward trend in Female Western Europe");
        loadCardiovascular_M_F();
    },
    onReverseComplete: () => {
        toggleCardiovascular_M_F()
    }
})
