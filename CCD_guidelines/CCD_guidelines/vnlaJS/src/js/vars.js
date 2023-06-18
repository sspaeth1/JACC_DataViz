
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

  let automaticRecs = `
<div class="br_1 br_primary br_solid font_2 font_light p_2 p_3 m-t_4 bg_white"><div class="br-b_1 br_solid br_primary-3 flex" data-category="Antiplatelet Therapy and Oral Anticoagulants" id="Antiplatelet Therapy and Oral Anticoagulants"><h1 class="font_2 c_primary font_medium p-b_1 p-t_0 p_2 m-t_0">Antiplatelet Therapy and Oral Anticoagulants</h1></div>
  <div class="flex items_center justify_center m-b_2 m-t_2"><div class="bg_cor-I h_10 w_10 flex items_center justify_center c_white">1</div><div class="guidelineItem p-l_4 w_90 flex items_center">See guideline for information on Antiplatelet Therapy and Oral Anticoagulants.</div>
  </div><div class="br-b_1 br_solid br_primary-5 p-b_2"></div><div><span class="font_0 c_primary-2 m-t_3">See full Guideline: </span><span><a href="www.jacc.org" target="_blank" class="font_0 c_accent h:c_accent-3 m-t_3 underline">4.3.1. Antiplatelet Therapy and Oral Anticoagulants</a></span></div></div><div class="br_1 br_primary br_solid font_2 font_light p_2 p_3 m-t_4 bg_white"><div class="br-b_1 br_solid br_primary-3 flex" data-category="Colchicine" id="Colchicine"><h1 class="font_2 c_primary font_medium p-b_1 p-t_0 p_2 m-t_0">Colchicine</h1></div><div class="flex items_center justify_center m-b_2 m-t_2"><div class="bg_cor-IIB h_10 w_10 flex items_center justify_center c_white">2b</div><div class="guidelineItem p-l_4 w_90 flex items_center">Colchicine for secondary prevention may be considered</div></div><div class="br-b_1 br_solid br_primary-5 p-b_2"></div><div><span class="font_0 c_primary-2 m-t_3">See full Guideline: </span><span><a href="www.jacc.org" target="_blank" class="font_0 c_accent h:c_accent-3 m-t_3 underline">4.3.4. Colchicine </a></span></div></div><div class="br_1 br_primary br_solid font_2 font_light p_2 p_3 m-t_4 bg_white"><div class="br-b_1 br_solid br_primary-3 flex" data-category="Nutrition Supplements" id="Nutrition Supplements"><h1 class="font_2 c_primary font_medium p-b_1 p-t_0 p_2 m-t_0">Nutrition Supplements</h1></div><div class="flex items_center justify_center m-b_2 m-t_2"><div class="bg_cor-III h_10 w_10 flex items_center justify_center c_white">3</div><div class="guidelineItem p-l_4 w_90 flex items_center"><div>Use of nonprescription or dietary supplements is not beneficial <span class="font_medium">(COR  3 No Benefit)</span></div>  </div></div><div class="br-b_1 br_solid br_primary-5 p-b_2"></div><div><span class="font_0 c_primary-2 m-t_3">See full Guideline: </span><span><a href="www.jacc.org" target="_blank" class="font_0 c_accent h:c_accent-3 m-t_3 underline">4.2.1. Nutrition, Including Supplements</a></span></div></div>
`

let localSelectedDiv;

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
