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
        buttonSelection.bloodPressureGoal === "Y" &&  buttonSelection.angina === "N"){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "2b", "It may be reasonable to reassess the indication for long-term (>1 year) use of beta-blocker therapy");

        }

    if( buttonSelection["mi"] === "N" &&  buttonSelection["hxHFrEF"] === "N" &&
        buttonSelection["LVEFgreaterOrEqual50"] === "Y" &&  buttonSelection["betaBlocker"] === "Y" &&
        buttonSelection["angina"] === "N"){
            createGuidelindCardAndHeader(localCategory)
            appendElementToCategory(localCategory, "3noBenefit", "Beta-blocker therapy is not beneficial in the absence of another primary indication", "(COR 3: No benefit)");

        }

createCardLink(localCategory)


localCategory = "Lipid Management"

    if( buttonSelection["LDL-C_goal"] === "N" &&  buttonSelection["betaBlocker"] === "N" ){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "1", "If high-intensity statin therapy is contraindicated or not tolerated, moderate intensity statin therapy is recommended");

        }

    if( buttonSelection["LDL-C_goal"] === "N" &&  buttonSelection["betaBlocker"] === "Y" ){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "2a", "Other treatment options such as ezetimibe or PCSK9 monoclonal antibody can be beneficial");

        }

        //auto rec
        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "1", "High-intensity statin therapy is recommended");

createCardLink(localCategory)


localCategory = "Blood Pressure Management"

    if( buttonSelection["bloodPressureGoal"] === "N"){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "1", "BP target of <130/<80 mm Hg is recommended.");
    }


createCardLink(localCategory)


 localCategory = "Renin Angiotensin Aldosterone Inhibitors"

    if(  buttonSelection["diabetes"] === "Y" ||
         buttonSelection["LVEFlessOrEqual40"] === "Y" ||
         buttonSelection["bloodPressureGoal"] === "N"
    ){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "1", "ACE inhibitors, or ARBs if ACE inhibitor–intolerant, is recommended");

    }

    if(  buttonSelection["diabetes"] === "N"
         || buttonSelection["LVEF41to49"] === "Y"
         || buttonSelection["LVEFgreaterOrEqual50"] === "Y"
         &&  buttonSelection["bloodPressureGoal"] === "Y"
    ){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "2b", "ACE inhibitors or ARBs may be considered");

    }

createCardLink(localCategory)


    localCategory =  "Medical Therapy for Relief of Angina"

    if( buttonSelection["angina"] === "Y"){

        createGuidelindCardAndHeader(localCategory)
        appendElementToCategory(localCategory, "1", "Antianginal therapy with either a beta blocker, CCB, or long-acting nitrate is recommended");
        appendElementToCategory(localCategory, "1", "Addition of a second antianginal agent from a different therapeutic class (beta blockers, CCB, long-acting nitrates) is recommended in those who remain symptomatic after initial treatment");
        appendElementToCategory(localCategory, "1", "Ranolazine is recommended in patients who remain symptomatic despite treatment");
        appendElementToCategory(localCategory, "1", "Sublingual nitroglycerin or nitroglycerin spray is recommended for immediate short-term relief of angina");
    }

    if( buttonSelection["angina"] === "Y" &&  buttonSelection.LVEFgreaterOrEqual50 === "Y" ){
        appendElementToCategory(localCategory, "3harm", "Ivabradine is potentially harmful", " " + "(COR 3: harm)" );
    }

createCardLink(localCategory)


}
addReturnToEvalButton()