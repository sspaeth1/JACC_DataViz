
//set default button empty state object
let buttonSelection = {}


let  categoryNames =
        [
        "SGLT2 Inhibitors and GLP-1 Receptor Agonists",
        "Beta Blockers",
        "Lipid Management",
        "Blood Pressure Management",
        "Renin Angiotensin Aldosterone Inhibitors",
        "Medical Therapy for Relief of Angina",
        "Antiplatelet Therapy and Oral Anticoagulants",
        "Colchicine",
        "Nutrition Supplements"
        ]

///  spreadsheet data as nested object
let guidlineLinkoutInfo = {
        "SGLT2 Inhibitors and GLP-1 Receptor Agonists":
            {
            "text": "4.2.8. SGLT2 Inhibitors and GLP-1 Receptor Agonists",
            "url": "www.jacc.org"
            },
        "Beta Blockers":
            {
            "text": "4.3.2. Beta Blockers",
            "url": "www.jacc.org"
            },
        "Lipid Management":
            {
            "text": "4.2.6. Lipid Management",
            "url": "www.jacc.org"
            },
        "Blood Pressure Management":
            {
            "text": "4.2.7. Blood Pressure Management ",
            "url": "www.jacc.org"
            },
        "Renin Angiotensin Aldosterone Inhibitors":
            {
            "text": "4.3.3. Renin-Angiotensin-Aldosterone Inhibitors ",
            "url": "www.jacc.org"
            },
        "Medical Therapy for Relief of Angina":
            {
            "text": "4.3.6. Medical Therapy for Relief of Angina",
            "url": "www.jacc.org"
            },
        "Antiplatelet Therapy and Oral Anticoagulants":
            {
            "text": "4.3.1. Antiplatelet Therapy and Oral Anticoagulants",
            "url": "www.jacc.org"
            },
        "Colchicine" :
            {
            "text": "4.3.4. Colchicine ",
            "url": "www.jacc.org"
            },
        "Nutrition Supplements":
            {
            "text": "4.2.1. Nutrition, Including Supplements",
            "url": "www.jacc.org"
            }
  }

let selectedDiv = document.querySelector("#displayReturnRecs")
  let guidelineDivParent


let localSelectedDiv;



/////
let corObj = {
    "1": { "num": "1", "color": "bg_cor-I" },
    "2a": { "num": "2a", "color": "bg_cor-IIA" },
    "2b": { "num": "2b", "color": "bg_cor-IIB" },
    "3": { "num": "3", "color": "bg_cor-III" },
    "3harm": { "num": "3", "color": "bg_cor-III-HARM" },
    "3noBenefit": { "num": "3", "color": "bg_cor-III-NOBENIFIT" }
};


//Btn vars

const grabYesBtns = document.querySelectorAll('.btnYes'),
grabNoBtns = document.querySelectorAll('.btnNo'),
grabLVEFBtns = document.querySelectorAll('.btnLVEF'),
grabAllBtnSets = document.querySelectorAll('.btnSet');

let btnReturn= document.getElementById('btnReturn');



let grabYesNoBtns = [...grabYesBtns, ...grabNoBtns]

let grabBtnResetAll = document.getElementById('btnResetAll')


const btnTabRec = document.getElementById('btnTabRec'),
btnTabEval = document.getElementById('btnTabEval'),
displayEvalQuestions = document.getElementById('displayEvalQuestions'),
displayReturnRecs = document.getElementById('displayReturnRecs');


const grabrecsDefault = document.getElementById('recsDefault'),
grabBetaBlockers = document.getElementById('Beta_Blockers'),
grabSGLT2_GLP1 = document.getElementById('SGLT2_GLP-1')

const btnCCD_Submit = document.getElementById('btnCCD_Submit')
let btnSubmitUnlocked = false;

let btnHiddenSubmit = document.getElementById('hiddenSubmit')
