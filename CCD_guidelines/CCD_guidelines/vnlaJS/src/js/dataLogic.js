function performMatchingAndAddGuidelines(){
    //////////////////////////////////
    /////// Data logic Queries ///////
    //////////////////////////////////

    let corObj = {
        "1": { "num": "1", "color": "bg_cor-I" },
        "2a": { "num": "2a", "color": "bg_cor-IIA" },
        "2b": { "num": "2b", "color": "bg_cor-IIB" },
        "3": { "num": "3", "color": "bg_cor-III" },
    };

    function appendElementToCategory(localCategory, corRating, guideline, cor3optional="") {
        let grablocalCategory = document.getElementById(localCategory);

        // Create the elements
        let guidelineContainer = document.createElement("div");
        guidelineContainer.className = "flex items_center justify_center m-b_2 m-t_2";
        let div_corIndicator = document.createElement("div");
        // div_corIndicator.className = `${corObj[corRating].color} h_10 w_10 flex items_center justify_center c_white`;
        div_corIndicator.className = ` h_10 w_10 flex items_center justify_center c_white`;
        div_corIndicator.classList.add(corObj[corRating].color)
        div_corIndicator.textContent = corObj[corRating].num;
        let div_guidelineTextOuter = document.createElement("div");
        div_guidelineTextOuter.className = "guidelineItem p-l_4 w_90 flex items_center";
        let div_guidelineTextInner = document.createElement("div");
        div_guidelineTextInner.textContent = guideline;
        let span_cor3 = document.createElement("span");
        span_cor3.classList.add('m-l_2');
        span_cor3.innerText = cor3optional;
        let divLine = document.createElement("div");
        divLine.className = "br-b_1 br_solid br_primary-5 p-b_2";

        // Append the elements to the category
        div_guidelineTextOuter.appendChild(div_guidelineTextInner)
        guidelineContainer.appendChild(div_corIndicator);
        div_guidelineTextInner.appendChild(span_cor3);
        guidelineContainer.appendChild(div_guidelineTextOuter);
        grablocalCategory.appendChild(guidelineContainer);
        grablocalCategory.appendChild(divLine);


    }





let localCategory = "SGLT2 Inhibitors and GLP-1 Receptor Agonists"



    if( buttonSelection.diabetes === "Y"){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "1", "SGLT2 inhibitor or GLP-1 receptor agonists is recommended");

         }

    if( buttonSelection.LVEFlessOrEqual40 === "Y"){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "2a", "SGLT2 inhibitor is recommended irrespective of diabetes status");

         }

    if( buttonSelection.LVEF41to49 === "Y" ||  buttonSelection.LVEFgreaterOrEqual50 === "Y" ){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "2b", "SGLT2 inhibitor can be beneficial irrespective of diabetes status");

         }

createCardLink(localCategory)


localCategory = "Beta Blockers"

    if( buttonSelection.LVEFlessOrEqual40 === "Y" &&  buttonSelection.betaBlocker === "N" ){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "1", "Beta-blocker therapy is recommended");

         }

    if( buttonSelection.LVEFlessOrEqual40 === "Y" || buttonSelection.LVEF41to49 === "Y" ){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "1", "Sustained release metoprolol succinate, carvedilol, or bisoprolol with titration to target doses is recommended in preference to other beta-blockers");

        }

    if( buttonSelection.mi === "N" &&  buttonSelection.hxHFrEF === "N" &&
        buttonSelection.LVEFgreaterOrEqual50 === "Y" &&  buttonSelection.betaBlocker === "Y" &&
        buttonSelection.bloodPressureGoal === "N" &&  buttonSelection.angina === "N"){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "2b", "It may be reasonable to reassess the indication for long-term (>1 year) use of beta-blocker therapy");

        }

    if( buttonSelection["mi"] === "N" &&  buttonSelection["hxHFrEF"] === "N" &&
        buttonSelection["LVEFgreaterOrEqual50"] === "Y" &&  buttonSelection["betaBlocker"] === "Y" &&
        buttonSelection["angina"] === "N"){
            createGuidelindCardAndHeader(localCategory)
            appendElementToCategory(localCategory, "3", "Beta-blocker therapy is not beneficial", "(COR 3: No benefit)");

        }

createCardLink(localCategory)


localCategory = "Lipid Management"

    if( buttonSelection["LDL-C_goal"] === "N" &&  buttonSelection["betaBlocker"] === "N" ){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "1", "Moderate intensity statin therapy is recommended.");

        }

    if( buttonSelection["LDL-C_goal"] === "N" &&  buttonSelection["betaBlocker"] === "Y" ){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "2a", "Other treatment options may be beneficial.");

        }

createCardLink(localCategory)


localCategory = "Blood Pressure Management"

    if( buttonSelection["bloodPressureGoal"] === "Y"){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "1", "BP target of <130/<80 mm Hg is recommended.");

    }
    if( buttonSelection["bloodPressureGoal"] === "Y"){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "1", "BP target of <130/<80 mm Hg is recommended.");

    }

createCardLink(localCategory)


 localCategory = "Renin Angiotensin Aldosterone Inhibitors"

    if(  buttonSelection["diabetes"] === "N" &&
    (buttonSelection["LVEFlessOrEqual40"] === "N" || buttonSelection["LVEFlessOrEqual40"] === "Y") &&
    (buttonSelection["bloodPressureGoal"] === "N" || buttonSelection["bloodPressureGoal"] === "Y")
    ){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "1", "ACE inhibitors, or ARBs if ACE inhibitor–intolerant, is recommended");

    }

    if(  (buttonSelection["diabetes"] === "N" || buttonSelection["diabetes"] === "Y") &&
    (buttonSelection["LVEF41to49"] === "N" || buttonSelection["LVEF41to49"] === "Y") &&
    (buttonSelection["LVEFgreaterOrEqual50"] === "N" || buttonSelection["LVEFgreaterOrEqual50"] === "Y") &&
    buttonSelection["bloodPressureGoal"] === "N"
    ){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "2b", "ACE inhibitors or ARBs may be considered");

    }

createCardLink(localCategory)


    localCategory =  "Medical Therapy for Relief of Angina"

    if( buttonSelection["angina"] === "Y"){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "1", "Antianginal therapy with either a beta blocker, CCB, or long-acting nitrate is recommended");
        appendElementToCategory(localCategory, "1", "Addition of a second antianginal agent from a different therapeutic class (beta blockers, CCB, long-acting nitrates) is recommended");
        appendElementToCategory(localCategory, "1", "Ranolazine is recommended in patients who remain symptomatic despite treatment");
        appendElementToCategory(localCategory, "1", "Sublingual nitroglycerin or nitroglycerin spray is recommended for immediate short-term relief of angina");
        appendElementToCategory(localCategory, "3", "Ivabradine is potentially harmful", " " + "(COR 3: harm)" );
    }

createCardLink(localCategory)


}
addReturnToEvalButton()