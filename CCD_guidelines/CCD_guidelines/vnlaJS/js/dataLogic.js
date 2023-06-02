//set default button empty state object
const buttonSelection =
{
"mi":"",
"diabetes": "",
"hxHFrEF": "",
"LVEFlessOrEqual40": "",
"LVEF41to49": "",
"LVEFgreaterOrEqual50": "",
"LDL-C_goal": "",
"maxStatin": "",
"betaBlocker": "",
"bloodPressureGoal": "",
"angina": ""
}

///  spreadsheet data as nested object
let dataSetObj = {
    "SGLT2_Inhibitors_GLP1_Receptor_Agonists": [
        {
            "fullRec": "In patients with CCD who have types 2 diabetes, the use of either an SGLT2 inhibitor or a GLP-1 receptor agonist with proven cardiovascular benefit is recommended to reduce the risk of MACE (COR 1/ LOE A).",
            "mi": "",
            "diabetes": "Y",
            "hxHFrEF": "",
            "LVEFlessOrEqual40": "",
            "LVEF41to49": "",
            "LVEFgreaterOrEqual50": "",
            "LDL-C_goal": "",
            "maxStatin": "",
            "betaBlocker": "",
            "bloodPressureGoal": "",
            "angina": "",
            "cor": 1,
            "userOutput": "SGLT2 inhibitor or GLP-1 receptor agonists is recommended",
            "sectionLinkText": "4.2.8. SGLT2 Inhibitors and GLP-1 Receptor Agonists "
        },
        {
            "fullRec": "In patients with CCD and heart failure with LVEF ≤40%, use of an SGLT2 inhibitor is recommended to reduce the risk of cardiovascular death and heart failure hospitalization and to improve QOL, irrespective of diabetes status (COR 1/LOE A).",
            "mi": "",
            "diabetes": "",
            "hxHFrEF": "",
            "LVEFlessOrEqual40": "Y",
            "LVEF41to49": "",
            "LVEFgreaterOrEqual50": "",
            "LDL-C_goal": "",
            "maxStatin": "",
            "betaBlocker": "",
            "bloodPressureGoal": "",
            "angina": "",
            "cor": 1,
            "userOutput": "SGLT2 inhibitor is recommended irrespective of diabetes status",
            "sectionLinkText": "4.2.8. SGLT2 Inhibitors and GLP-1 Receptor Agonists "
        },
        {
            "fullRec": "In patients with CCD and heart failure with LVEF >40%, use of an SGLT2 inhibitor can be beneficial in decreasing heart failure hospitalizations and to improve QOL, irrespective of diabetes status (COR 2a/LOE B-R). ",
            "mi": "",
            "diabetes": "",
            "hxHFrEF": "",
            "LVEFlessOrEqual40": "",
            "LVEF41to49": "Y",
            "LVEFgreaterOrEqual50": "Y",
            "LDL-C_goal": "",
            "maxStatin": "",
            "betaBlocker": "",
            "bloodPressureGoal": "",
            "angina": "",
            "cor": "2a",
            "userOutput": "SGLT2 inhibitor can be beneficial  irrespective of diabetes status",
            "sectionLinkText": "4.2.8. SGLT2 Inhibitors and GLP-1 Receptor Agonists "
        }
    ],
    "Beta_Blockers": [
        {
            "fullRec": "In patients with CCD and LVEFlessOrEqual40with or without previous MI, the use of beta-blocker therapy is recommended to reduce the risk of future MACE, including cardiovascular death (COR 1/LOE A). ",
            "mi": "",
            "diabetes": "",
            "hxHFrEF": "",
            "LVEFlessOrEqual40": "Y",
            "LVEF41to49": "",
            "LVEFgreaterOrEqual50": "",
            "LDL-C_goal": "",
            "maxStatin": "",
            "betaBlocker": "N",
            "bloodPressureGoal": "",
            "angina": "",
            "cor": 1,
            "userOutput": "Beta-blocker therapy is recommended",
            "sectionLinkText": "4.3.2. Beta Blockers "
        },
        {
            "fullRec": "In patients with CCD and LVEF <50%, the use of sustained release metoprolol succinate, carvedilol, or bisoprolol with titration to target doses is recommended in preference to other beta-blockers (COR 1/LOE A).",
            "mi": "",
            "diabetes": "",
            "hxHFrEF": "",
            "LVEFlessOrEqual40": "Y",
            "LVEF41to49": "Y",
            "LVEFgreaterOrEqual50": "",
            "LDL-C_goal": "",
            "maxStatin": "",
            "betaBlocker": "",
            "bloodPressureGoal": "",
            "angina": "",
            "cor": 1,
            "userOutput": "Sustained release metoprolol succinate, carvedilol, or bisoprolol with titration to target doses is recommended in preference to other beta-blockers",
            "sectionLinkText": "4.3.2. Beta Blockers "
        },
        {
            "fullRec": "In patients with CCD who were initiated on beta-blocker therapy for previous MI without a history of or current LVEF ≤50%, angina, arrhythmias, or uncontrolled hypertension, it may be reasonable to reassess the indication for long-term (>1 year) use of beta-blocker therapy for reducing MACE (COR 2b/LOE B-NR).",
            "mi": "N",
            "diabetes": "",
            "hxHFrEF": "N",
            "LVEFlessOrEqual40": "N",
            "LVEF41to49": "N",
            "LVEFgreaterOrEqual50": "Y",
            "LDL-C_goal": "",
            "maxStatin": "",
            "betaBlocker": "Y",
            "bloodPressureGoal": "N",
            "angina": "N",
            "cor": "2b",
            "userOutput": "It may be reasonable to reassess the indication for long-term (>1 year) use of beta-blocker therapy",
            "sectionLinkText": "4.3.2. Beta Blockers "
        },
        {
            "fullRec": "In patients with CCD without previous MI or LVEF ≤50%, the use of beta-blocker therapy is not beneficial in reducing MACE, in the absence of another primary indication for beta-blocker therapy (COR 3: No benefit/ LOE B-NR).",
            "mi": "N",
            "diabetes": "",
            "hxHFrEF": "N",
            "LVEFlessOrEqual40": "N",
            "LVEF41to49": "N",
            "LVEFgreaterOrEqual50": "Y",
            "LDL-C_goal": "",
            "maxStatin": "",
            "betaBlocker": "Y",
            "bloodPressureGoal": "",
            "angina": "N",
            "cor": "3: No benefit",
            "userOutput": "Beta-blocker therapy is not beneficial",
            "sectionLinkText": "4.3.2. Beta Blockers "
        }
    ],
    "Lipid_Management": [
        {
            "name": "Lipid Management",
            "fullRec": "In patients in whom high-intensity statin therapy is contraindicated or not tolerated, moderate-intensity statin therapy is recommended with the aim of achieving a 30% to 49% reduction in LDL-C levels to reduce the risk of MACE (COR 1/LOE A). ",
            "mi": "",
            "diabetes": "",
            "hxHFrEF": "",
            "LVEFlessOrEqual40": "",
            "LVEF41to49": "",
            "LVEFgreaterOrEqual50": "",
            "LDL-C_goal": "N",
            "maxStatin": "N",
            "betaBlocker": "",
            "bloodPressureGoal": "",
            "angina": "",
            "cor": 1,
            "userOutput": "Moderate intensity statin therapy is recommended. ",
            "sectionLinkText": "4.2.6. Lipid Management "
        },
        {
            "name": "Lipid Management",
            "fullRec": "In patients with CCD who are judged to be at very high risk and on maximally tolerated statin therapy with an LDL-C level ≥70 mg/dL (≥1.8 mmol/L), ezetimibe can be beneficial to further reduce the risk of MACE (COR 2a/ LOE B-R). ",
            "mi": "",
            "diabetes": "",
            "hxHFrEF": "",
            "LVEFlessOrEqual40": "",
            "LVEF41to49": "",
            "LVEFgreaterOrEqual50": "",
            "LDL-C_goal": "N",
            "maxStatin": "Y",
            "betaBlocker": "",
            "bloodPressureGoal": "",
            "angina": "",
            "cor": "2a",
            "userOutput": "Other treatment options may be beneficial. ",
            "sectionLinkText": "4.2.6. Lipid Management "
        }
    ],
    "Blood_Pressur_Management": [
        {
            "name": "Blood Pressur Management",
            "fullRec": "In adults with CCD who have hypertension, a BP target of <130/<80 mm Hg is recommended to reduce CVD events and all-cause death (COR 1/ LOE B-R). ",
            "mi": "",
            "diabetes": "",
            "hxHFrEF": "",
            "LVEFlessOrEqual40": "",
            "LVEF41to49": "",
            "LVEFgreaterOrEqual50": "",
            "LDL-C_goal": "",
            "maxStatin": "",
            "betaBlocker": "",
            "bloodPressureGoal": "Y",
            "angina": "",
            "cor": 1,
            "userOutput": "BP target of <130/<80 mm Hg is recommended. ",
            "sectionLinkText": "4.2.7. Blood Pressure Management "
        }
    ],
    "Renin_Angiotensin_Aldosterone_Inhibitors": [
        {
            "name": "Renin Angiotensin Aldosterone Inhibitors",
            "fullRec": "In patients with CCD who also have hypertension, diabetes, LVEF ≤40%, or CKD, the use of ACE inhibitors, or ARBs if ACE inhibitor–intolerant, is recommended to reduce cardiovascular events (COR 1/ LOE A).",
            "mi": "",
            "diabetes": "Y OR ",
            "hxHFrEF": "",
            "LVEFlessOrEqual40": "Y OR ",
            "LVEF41to49": "",
            "LVEFgreaterOrEqual50": "",
            "LDL-C_goal": "",
            "maxStatin": "",
            "betaBlocker": "",
            "bloodPressureGoal": "Y OR ",
            "angina": "",
            "cor": 1,
            "userOutput": "ACE inhibitors, or ARBs if ACE inhibitor–intolerant, is recommended",
            "sectionLinkText": "4.3.3. Renin-Angiotensin-Aldosterone Inhibitors "
        },
        {
            "name": "Renin Angiotensin Aldosterone Inhibitors",
            "fullRec": "In patients with CCD without hypertension, diabetes, or CKD and LVEF >40%, the use of ACE inhibitors or ARBs may be considered to reduce cardiovascular events (COR 2b/ LOE B-R).",
            "mi": "",
            "diabetes": "N",
            "hxHFrEF": "",
            "LVEFlessOrEqual40": "",
            "LVEF41to49": "Y OR",
            "LVEFgreaterOrEqual50": "Y OR",
            "LDL-C_goal": "",
            "maxStatin": "",
            "betaBlocker": "",
            "bloodPressureGoal": "N",
            "angina": "",
            "cor": "2b",
            "userOutput": "ACE inhibitors or ARBs may be considered",
            "sectionLinkText": "4.3.3. Renin-Angiotensin-Aldosterone Inhibitors "
        }
    ],
    "Medical_Therapy_for_Relief_of_Angina": [
        {
            "name": "Medical Therapy for Relief of Angina",
            "fullRec": "In patients with CCD and angina, antianginal therapy with either a beta blocker, CCB, or long-acting nitrate is recommended for relief of angina or equivalent symptoms (COR 1/ LOE B-R).",
            "mi": "",
            "diabetes": "",
            "hxHFrEF": "",
            "LVEFlessOrEqual40": "",
            "LVEF41to49": "",
            "LVEFgreaterOrEqual50": "",
            "LDL-C_goal": "",
            "maxStatin": "",
            "betaBlocker": "",
            "bloodPressureGoal": "",
            "angina": "Y",
            "cor": 1,
            "userOutput": "Antianginal therapy with either a beta blocker, CCB, or long-acting nitrate is recommended",
            "sectionLinkText": "4.3.6. Medical Therapy for Relief of Angina"
        },
        {
            "fullRec": "In patients with CCD and angina who remain symptomatic after initial treatment, addition of a second antianginal agent from a different therapeutic class (beta blockers, CCB, long-acting nitrates) is recommended for relief of angina or equivalent symptoms (COR 1/ LOE B-R)",
            "mi": "",
            "diabetes": "",
            "hxHFrEF": "",
            "LVEFlessOrEqual40": "",
            "LVEF41to49": "",
            "LVEFgreaterOrEqual50": "",
            "LDL-C_goal": "",
            "maxStatin": "",
            "betaBlocker": "",
            "bloodPressureGoal": "",
            "angina": "Y",
            "cor": 1,
            "userOutput": "Addition of a second antianginal agent from a different therapeutic class (beta blockers, CCB, long-acting nitrates) is recommended",
            "sectionLinkText": "4.3.6. Medical Therapy for Relief of Angina"
        },
        {
            "fullRec": "In patients with CCD, ranolazine is recommended in patients who remain symptomatic despite treatment with beta blockers, CCB, or long-acting nitrate therapies (COR 1/ B-R)",
            "mi": "",
            "diabetes": "",
            "hxHFrEF": "",
            "LVEFlessOrEqual40": "",
            "LVEF41to49": "",
            "LVEFgreaterOrEqual50": "",
            "LDL-C_goal": "",
            "maxStatin": "",
            "betaBlocker": "",
            "bloodPressureGoal": "",
            "angina": "Y",
            "cor": 1,
            "userOutput": "Ranolazine is recommended in patients who remain symptomatic despite treatment",
            "sectionLinkText": "4.3.6. Medical Therapy for Relief of Angina"
        },
        {
            "fullRec": "In patients with CCD, sublingual nitroglycerin or nitroglycerin spray is recommended for immediate short-term relief of angina or equivalent symptoms (COR 1/ LOE B-NR).",
            "mi": "",
            "diabetes": "",
            "hxHFrEF": "",
            "LVEFlessOrEqual40": "",
            "LVEF41to49": "",
            "LVEFgreaterOrEqual50": "",
            "LDL-C_goal": "",
            "maxStatin": "",
            "betaBlocker": "",
            "bloodPressureGoal": "",
            "angina": "Y",
            "cor": 1,
            "userOutput": "Sublingual nitroglycerin or nitroglycerin spray is recommended for immediate short-term relief of angina",
            "sectionLinkText": "4.3.6. Medical Therapy for Relief of Angina"
        },
        {
            "fullRec": "In patients with CCD and normal LV function, the addition of ivabradine to standard anti-anginal therapy is potentially harmful (COR 3: Harm/ LOE B-R).",
            "mi": "",
            "diabetes": "",
            "hxHFrEF": "",
            "LVEFlessOrEqual40": "",
            "LVEF41to49": "",
            "LVEFgreaterOrEqual50": "Y",
            "LDL-C_goal": "",
            "maxStatin": "",
            "betaBlocker": "",
            "bloodPressureGoal": "",
            "angina": "Y",
            "cor": "3: Harm",
            "userOutput": "Ivabradine is potentially harmful",
            "sectionLinkText": "4.3.6. Medical Therapy for Relief of Angina"
        }
    ],
    "Antiplatelet_Therapy_and_Oral_Anticoagulants": [
        {
            "name":"Antiplatelet Therapy and Oral Anticoagulants",
            "fullRec": "All recs in section 4.1.1",
            "mi": "Y/N OR",
            "diabetes": "Y/N OR",
            "hxHFrEF": "Y/N OR",
            "LVEFlessOrEqual40": "Y/N OR",
            "LVEF41to49": "Y/N OR",
            "LVEFgreaterOrEqual50": "Y/N OR",
            "LDL-C_goal": "Y/N OR",
            "maxStatin": "Y/N OR",
            "betaBlocker": "Y/N OR",
            "bloodPressureGoal": "Y/N OR",
            "angina": "Y/N OR",
            "cor": "N/A",
            "userOutput": "See guideline for information on Antiplatelet Therapy and Oral Anticoagulants. ",
            "sectionLinkText": "4.3.1. Antiplatelet Therapy and Oral Anticoagulants "
        }
    ],
    "Colchicine": [
        {
            "name": "Colchicine",
            "fullRec": "In patients with CCD, the addition of colchicine for secondary prevention may be considered to reduce recurrent ASCVD events (COR 2b/ LOE B-R).",
            "mi": "Y/N OR",
            "diabetes": "Y/N OR",
            "hxHFrEF": "Y/N OR",
            "LVEFlessOrEqual40": "Y/N OR",
            "LVEF41to49": "Y/N OR",
            "LVEFgreaterOrEqual50": "Y/N OR",
            "LDL-C_goal": "Y/N OR",
            "maxStatin": "Y/N OR",
            "betaBlocker": "Y/N OR",
            "bloodPressureGoal": "Y/N OR",
            "angina": "Y/N OR",
            "cor": "2b",
            "userOutput": "Colchicine for secondary prevention may be considered ",
            "sectionLinkText": "4.3.4. Colchicine "
        }
    ],
    "Nutrition_Supplements": [
        {
            "name": "Nutrition Supplements",
            "fullRec": "In patients with CCD, the use of nonprescription or dietary supplements, including omega-3 fatty acid, vitamins C, D, E, beta-carotene, and calcium, is not beneficial to reduce the risk of acute CVD events. (COR 3: No Benefit/LOE B-NR)",
            "mi": "Y/N OR",
            "diabetes": "Y/N OR",
            "hxHFrEF": "Y/N OR",
            "LVEFlessOrEqual40": "Y/N OR",
            "LVEF41to49": "Y/N OR",
            "LVEFgreaterOrEqual50": "Y/N OR",
            "LDL-C_goal": "Y/N OR",
            "maxStatin": "Y/N OR",
            "betaBlocker": "Y/N OR",
            "bloodPressureGoal": "Y/N OR",
            "angina": "Y/N OR",
            "cor": "3: No benefit",
            "userOutput": "Use of nonprescription or dietary supplements is not beneficial",
            "sectionLinkText": "4.2.1. Nutrition, Including Supplements"
        }
    ]
}

/*
// Match input of buttonSelection to datasetObj
function findMatchingOutput(buttonSelection, dataSetObj) {
    for (const key in dataSetObj) {
        // something in there?
        if (dataSetObj.hasOwnProperty(key)) {
        const objects = dataSetObj[key];
        //cycle seelected category array items
        for (let i = 0; i < objects.length; i++) {
            const obj = objects[i];
            let isMatched = true;
            //
            // for (const prop in buttonSelection) {
            // if (buttonSelection.hasOwnProperty(prop)) {
            //     if (buttonSelection[prop] !== obj[prop]) {
            //         // console.log(obj[prop])
            //     isMatched = false;
            //     break;
            //     }
            // }
            // }

            for (const prop in buttonSelection) {
                if (buttonSelection.hasOwnProperty(prop)) {
                  if (Array.isArray(buttonSelection[prop])) {
                    // Handle multiple options
                    if (!buttonSelection[prop].includes(obj[prop])) {
                      isMatched = false;
                      break;
                    }
                  } else {
                    // Single option comparison
                    if (buttonSelection[prop] !== obj[prop]) {
                      isMatched = false;
                      break;
                    }
                  }
                }
            }


            if (isMatched) {

            return obj.userOutput;
            }
        }
        }
    }
    return null;
    }
    */





    // function findMatchingOutput1(selection, dataset, category) {
    //     const matchedObject = dataset[category].find(obj => {
    //       return Object.entries(selection).every(([prop, value]) => {
    //         if (Array.isArray(value)) {
    //           // Handle multiple options
    //           return value.includes(obj[prop]);
    //         }
    //         // Single option comparison
    //         return obj[prop] === value;
    //       });
    //     });

    //     return matchedObject ? matchedObject.userOutput : null;
    //   }

    //   const matchedOutput1 = findMatchingOutput1(buttonSelection, dataSetObj, 'SGLT2_Inhibitors_GLP1_Receptor_Agonists');
    //   console.log(matchedOutput1); // Output: "This is the right match with Y"




/////// Filter match selectionButtons to datasetObj ////////

/*function findMatchingOutput(selection, dataset, category) {
    //search for the matching object within the specified category.
    const matchedObject = dataset[category].find(obj => {
        // iterates over each property and value in the selection object.
        return Object.entries(selection).every(([prop, value]) => {
        if (Array.isArray(value)) {
            // Handle multiple options
            return value.includes(obj[prop]);
        }
        // Single option comparison
        return obj[prop] === value;
        });
    });
    return matchedObject ? matchedObject.userOutput : null;
    }
    */



    function findMatchingOutput(buttonSelection, dataSetObj, category) {
        const matchedObjects = dataSetObj[category].filter(obj => {
          return Object.entries(buttonSelection).every(([prop, value]) => {
            if (Array.isArray(value)) {
              // Handle multiple options
              return value.includes(obj[prop]);
            }
            // Ignore empty values
            if (value === "") {
              return true;
            }
            // Single option comparison
            return obj[prop] === value;
          });
        });

        const sortedObjects = matchedObjects.sort((a, b) => b.cor - a.cor);

        return sortedObjects.map(obj => {
          const { userOutput, cor } = obj;
          return { userOutput, cor };
        });
      }


      const matchedOutput = findMatchingOutput({
        "mi":"",
        "diabetes": "",
        "hxHFrEF": "",
        "LVEFlessOrEqual40": "",
        "LVEF41to49": "",
        "LVEFgreaterOrEqual50": "",
        "LDL-C_goal": "",
        "maxStatin": "",
        "betaBlocker": "",
        "bloodPressureGoal": "",
        "angina": ""
        }, dataSetObj, 'Beta_Blockers');
      console.log( buttonSelection, matchedOutput); // Output: "This is the right match with Y"

////Add guidelines to card
function  addToCard(category){
    let filteredGuidelineResults =  findMatchingOutput(buttonSelection, dataSetObj, category)
    console.log(buttonSelection, filteredGuidelineResults)
    let selectedDiv = document.querySelector(`div[data-category="${category}"]`)

    filteredGuidelineResults.forEach( (newGuideline)=>{
        //Add associated p and a
        const newPUserOutput = document.createElement('p')
        newPUserOutput.setAttribute('class', 'guidelineItem br-l_10 br_cor-I br_solid guidelineItem p-l_4')

        newPUserOutput.innerText = category.userOutput
        const newPsectionLinkText = document.createElement('p')
        newPsectionLinkText.innerText = newGuideline.userOutput
        const newASectionLink = document.createElement('a')

        newASectionLink.setAttribute('class', 'font_0 c_accent h:c_accent-3 block m-t_3 underline')
        newPUserOutput.appendChild(newASectionLink)
        ////// Insert Matched userOutput
        newASectionLink.innerText =  newGuideline.cor

        selectedDiv.parentElement.appendChild(newPsectionLinkText)


        // dataSetObj.SGLT2_Inhibitors_GLP1_Receptor_Agonists

    })


}


function performMatchingAndAddGuidelines(){
    //////////////////////////////////
    /////// Data logic Queries ///////
    //////////////////////////////////

    if( buttonSelection.diabetes === "Y"){
        addToCard("SGLT2_Inhibitors_GLP1_Receptor_Agonists")
    }
    if( buttonSelection.LVEFlessOrEqual40 === "Y"){
        addToCard("SGLT2_Inhibitors_GLP1_Receptor_Agonists")
    }
    if( buttonSelection.LVEF41to49 === "Y" ||  buttonSelection.LVEFgreaterOrEqual50 === "Y" ){
        addToCard("SGLT2_Inhibitors_GLP1_Receptor_Agonists")
    }
    if( buttonSelection.LVEFlessOrEqual40 === "Y" &&  buttonSelection.betaBlocker === "N" ){
        addToCard("Beta_Blockers")
    }
    if( buttonSelection.LVEFlessOrEqual40 === "Y" || buttonSelection.LVEF41to49 === "Y" ){
        addToCard("Beta_Blockers")
    }
    if( buttonSelection.mi === "N" &&  buttonSelection.hxHFrEF === "N" &&
        buttonSelection.LVEFgreaterOrEqual50 === "Y" &&  buttonSelection.betaBlocker === "Y" &&
        buttonSelection.bloodPressureGoal === "N" &&  buttonSelection.angina === "N"){
        addToCard("Beta_Blockers")
    }
    if( buttonSelection["mi"] === "N" &&  buttonSelection["hxHFrEF"] === "N" &&
        buttonSelection["LVEFgreaterOrEqual50"] === "Y" &&  buttonSelection["betaBlocker"] === "Y" &&
        buttonSelection["angina"] === "N"){
        addToCard("Beta_Blockers")
    }
    if( buttonSelection["LDL-C_goal"] === "N" &&  buttonSelection["betaBlocker"] === "N" ){
        addToCard("Lipid_Management")
    }


    let tempList =
                    {
                "mi":"",
                "diabetes": "Y",
                "hxHFrEF": "",
                "LVEFlessOrEqual40": "",
                "LVEF41to49": "",
                "LVEFgreaterOrEqual50": "",
                "LDL-C_goal": "",
                "maxStatin": "",
                "betaBlocker": "",
                "bloodPressureGoal": "",
                "angina": ""
                },

          tempCategories =
                [
                    "SGLT2_Inhibitors_GLP1_Receptor_Agonists",
                    "Beta_Blockers",
                    "Lipid_Management",
                    "Blood_Pressur_Management",
                    "Renin_Angiotensin_Aldosterone_Inhibitors",
                    "Medical_Therapy_for_Relief_of_Angina",
                    "Antiplatelet_Therapy_and_Oral_Anticoagulants",
                    "Colchicine",
                    "Nutrition_Supplements"
                ]

                //LVEF≤40  LVEF≥50 LVEF=41-49
}



