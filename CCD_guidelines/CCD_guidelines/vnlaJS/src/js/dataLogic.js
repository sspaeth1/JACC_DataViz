function performMatchingAndAddGuidelines(){
    //////////////////////////////////
    /////// Data logic Queries ///////
    //////////////////////////////////


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