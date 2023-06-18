//set default button empty state object
const buttonSelection =
{
    "mi": "",
    "diabetes": "",
    "hxHFrEF": "",
    "LVEFlessOrEqual40": "",
    "LVEF41to49": "",
    "LVEFgreaterOrEqual50": "",
    "LDL-C_goal": "",
    "maxStatin": "",
    "betaBlocker": "",
    "bloodPressureGoal": ""
}

///  spreadsheet data as nested object
let dataSetObj =
[
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
        "category": "SGLT2 Inhibitors and GLP-1 Receptor Agonists",
        "cor": 1,
        "userOutput": "SGLT2 inhibitor or GLP-1 receptor agonists is recommended",
        "sectionLinkText": "4.2.8. SGLT2 Inhibitors and GLP-1 Receptor Agonists"
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
        "category": "SGLT2 Inhibitors and GLP-1 Receptor Agonists",
        "cor": 1,
        "userOutput": "SGLT2 inhibitor is recommended irrespective of diabetes status",
        "sectionLinkText": "4.2.8. SGLT2 Inhibitors and GLP-1 Receptor Agonists"
    },
    {
        "fullRec": "In patients with CCD and heart failure with LVEF >40%, use of an SGLT2 inhibitor can be beneficial in decreasing heart failure hospitalizations and to improve QOL, irrespective of diabetes status (COR 2a/LOE B-R).",
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
        "category": "SGLT2 Inhibitors and GLP-1 Receptor Agonists",
        "cor": "2a",
        "userOutput": "SGLT2 inhibitor can be beneficial  irrespective of diabetes status",
        "sectionLinkText": "4.2.8. SGLT2 Inhibitors and GLP-1 Receptor Agonists"
    },
    {
        "fullRec": "In patients with CCD and LVEFlessOrEqual40with or without previous MI, the use of beta-blocker therapy is recommended to reduce the risk of future MACE, including cardiovascular death (COR 1/LOE A).",
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
        "category": "Beta Blockers",
        "cor": 1,
        "userOutput": "Beta-blocker therapy is recommended",
        "sectionLinkText": "4.3.2. Beta Blockers"
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
        "category": "Beta Blockers",
        "cor": 1,
        "userOutput": "Sustained release metoprolol succinate, carvedilol, or bisoprolol with titration to target doses is recommended in preference to other beta-blockers",
        "sectionLinkText": "4.3.2. Beta Blockers"
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
        "category": "Beta Blockers",
        "cor": "2b",
        "userOutput": "It may be reasonable to reassess the indication for long-term (>1 year) use of beta-blocker therapy",
        "sectionLinkText": "4.3.2. Beta Blockers"
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
        "category": "Beta Blockers",
        "cor": "3: No benefit",
        "userOutput": "Beta-blocker therapy is not beneficial",
        "sectionLinkText": "4.3.2. Beta Blockers"
    },
    {
        "fullRec": "In patients in whom high-intensity statin therapy is contraindicated or not tolerated, moderate-intensity statin therapy is recommended with the aim of achieving a 30% to 49% reduction in LDL-C levels to reduce the risk of MACE (COR 1/LOE A).",
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
        "category": "Lipid Management",
        "cor": 1,
        "userOutput": "Moderate intensity statin therapy is recommended.",
        "sectionLinkText": "4.2.6. Lipid Management "
    },
    {
        "fullRec": "In patients with CCD who are judged to be at very high risk and on maximally tolerated statin therapy with an LDL-C level ≥70 mg/dL (≥1.8 mmol/L), ezetimibe can be beneficial to further reduce the risk of MACE (COR 2a/ LOE B-R).",
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
        "category": "Lipid Management",
        "cor": "2a",
        "userOutput": "Other treatment options may be beneficial.",
        "sectionLinkText": "4.2.6. Lipid Management "
    },
    {
        "fullRec": "In adults with CCD who have hypertension, a BP target of <130/<80 mm Hg is recommended to reduce CVD events and all-cause death (COR 1/ LOE B-R).",
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
        "category": "Blood Pressure Management",
        "cor": 1,
        "userOutput": "BP target of <130/<80 mm Hg is recommended.",
        "sectionLinkText": "4.2.7. Blood Pressure Management "
    },
    {
        "fullRec": "In patients with CCD who also have hypertension, diabetes, LVEF ≤40%, or CKD, the use of ACE inhibitors, or ARBs if ACE inhibitor–intolerant, is recommended to reduce cardiovascular events (COR 1/ LOE A).",
        "mi": "",
        "diabetes": "Y OR",
        "hxHFrEF": "",
        "LVEFlessOrEqual40": "Y OR",
        "LVEF41to49": "",
        "LVEFgreaterOrEqual50": "",
        "LDL-C_goal": "",
        "maxStatin": "",
        "betaBlocker": "",
        "bloodPressureGoal": "Y OR",
        "angina": "",
        "category": "Renin-Angiotensin-Aldosterone Inhibitors",
        "cor": 1,
        "userOutput": "ACE inhibitors, or ARBs if ACE inhibitor–intolerant, is recommended",
        "sectionLinkText": "4.3.3. Renin-Angiotensin-Aldosterone Inhibitors "
    },
    {
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
        "category": "Renin-Angiotensin-Aldosterone Inhibitors",
        "cor": "2b",
        "userOutput": "ACE inhibitors or ARBs may be considered",
        "sectionLinkText": "4.3.3. Renin-Angiotensin-Aldosterone Inhibitors "
    },
    {
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
        "category": "Medical Therapy for Relief of Angina",
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
        "category": "Medical Therapy for Relief of Angina",
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
        "category": "Medical Therapy for Relief of Angina",
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
        "category": "Medical Therapy for Relief of Angina",
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
        "category": "Medical Therapy for Relief of Angina",
        "cor": "3: Harm",
        "userOutput": "Ivabradine is potentially harmful",
        "sectionLinkText": "4.3.6. Medical Therapy for Relief of Angina"
    }
]


//     ,
//     {
//         "fullRec": "All recs in section 4.1.1",
//         "mi": "Y/N OR",
//         "diabetes": "Y/N OR",
//         "hxHFrEF": "Y/N OR",
//         "LVEFlessOrEqual40": "Y/N OR",
//         "LVEF41to49": "Y/N OR",
//         "LVEFgreaterOrEqual50": "Y/N OR",
//         "LDL-C_goal": "Y/N OR",
//         "maxStatin": "Y/N OR",
//         "betaBlocker": "Y/N OR",
//         "bloodPressureGoal": "Y/N OR",
//         "angina": "Y/N OR",
//         "category": "Antiplatelet Therapy and Oral Anticoagulants",
//         "cor": "N/A",
//         "userOutput": "See guideline for information on Antiplatelet Therapy and Oral Anticoagulants.",
//         "sectionLinkText": "4.3.1. Antiplatelet Therapy and Oral Anticoagulants "
//     },
//     {
//         "fullRec": "In patients with CCD, the addition of colchicine for secondary prevention may be considered to reduce recurrent ASCVD events (COR 2b/ LOE B-R).",
//         "mi": "Y/N OR",
//         "diabetes": "Y/N OR",
//         "hxHFrEF": "Y/N OR",
//         "LVEFlessOrEqual40": "Y/N OR",
//         "LVEF41to49": "Y/N OR",
//         "LVEFgreaterOrEqual50": "Y/N OR",
//         "LDL-C_goal": "Y/N OR",
//         "maxStatin": "Y/N OR",
//         "betaBlocker": "Y/N OR",
//         "bloodPressureGoal": "Y/N OR",
//         "angina": "Y/N OR",
//         "category": "Colchicine",
//         "cor": "2b",
//         "userOutput": "Colchicine for secondary prevention may be considered",
//         "sectionLinkText": "4.3.4. Colchicine "
//     },
//     {
//         "fullRec": "In patients with CCD, the use of nonprescription or dietary supplements, including omega-3 fatty acid, vitamins C, D, E, beta-carotene, and calcium, is not beneficial to reduce the risk of acute CVD events. (COR 3: No Benefit/LOE B-NR)",
//         "mi": "Y/N OR",
//         "diabetes": "Y/N OR",
//         "hxHFrEF": "Y/N OR",
//         "LVEFlessOrEqual40": "Y/N OR",
//         "LVEF41to49": "Y/N OR",
//         "LVEFgreaterOrEqual50": "Y/N OR",
//         "LDL-C_goal": "Y/N OR",
//         "maxStatin": "Y/N OR",
//         "betaBlocker": "Y/N OR",
//         "bloodPressureGoal": "Y/N OR",
//         "angina": "Y/N OR",
//         "category": "Nutrition Supplements",
//         "cor": "3",
//         "userOutput": "Use of nonprescription or dietary supplements is not beneficial",
//         "sectionLinkText": "4.2.1. Nutrition, Including Supplements"
//     }
// ]


let autoAddRecs =
[

    {
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
        "category": "Antiplatelet Therapy and Oral Anticoagulants",
        "cor": "N/A",
        "userOutput": "See guideline for information on Antiplatelet Therapy and Oral Anticoagulants.",
        "sectionLinkText": "4.3.1. Antiplatelet Therapy and Oral Anticoagulants "
    },
    {
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
        "category": "Colchicine",
        "cor": "2b",
        "userOutput": "Colchicine for secondary prevention may be considered",
        "sectionLinkText": "4.3.4. Colchicine "
    },
    {
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
        "category": "Nutrition Supplements",
        "cor": "3",
        "userOutput": "Use of nonprescription or dietary supplements is not beneficial",
        "sectionLinkText": "4.2.1. Nutrition, Including Supplements"
    }
]



//   console.log(uniqueNumbers);

let dataSetObjAlt = {
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
            "sectionLinkText": "4.2.8. SGLT2 Inhibitors and GLP-1 Receptor Agonists"
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
            "sectionLinkText": "4.2.8. SGLT2 Inhibitors and GLP-1 Receptor Agonists"
        },
        {
            "fullRec": "In patients with CCD and heart failure with LVEF >40%, use of an SGLT2 inhibitor can be beneficial in decreasing heart failure hospitalizations and to improve QOL, irrespective of diabetes status (COR 2a/LOE B-R).",
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
            "sectionLinkText": "4.2.8. SGLT2 Inhibitors and GLP-1 Receptor Agonists"
        }
    ],
    "Beta_Blockers": [
        {
            "fullRec": "In patients with CCD and LVEFlessOrEqual40with or without previous MI, the use of beta-blocker therapy is recommended to reduce the risk of future MACE, including cardiovascular death (COR 1/LOE A).",
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
            "sectionLinkText": "4.3.2. Beta Blockers"
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
            "sectionLinkText": "4.3.2. Beta Blockers"
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
            "sectionLinkText": "4.3.2. Beta Blockers"
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
            "sectionLinkText": "4.3.2. Beta Blockers"
        }
    ],
    "Lipid_Management": [
        {
            "name": "Lipid Management",
            "fullRec": "In patients in whom high-intensity statin therapy is contraindicated or not tolerated, moderate-intensity statin therapy is recommended with the aim of achieving a 30% to 49% reduction in LDL-C levels to reduce the risk of MACE (COR 1/LOE A).",
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
            "userOutput": "Moderate intensity statin therapy is recommended.",
            "sectionLinkText": "4.2.6. Lipid Management "
        },
        {
            "name": "Lipid Management",
            "fullRec": "In patients with CCD who are judged to be at very high risk and on maximally tolerated statin therapy with an LDL-C level ≥70 mg/dL (≥1.8 mmol/L), ezetimibe can be beneficial to further reduce the risk of MACE (COR 2a/ LOE B-R).",
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
            "userOutput": "Other treatment options may be beneficial.",
            "sectionLinkText": "4.2.6. Lipid Management "
        }
    ],
    "Blood_Pressur_Management": [
        {
            "name": "Blood Pressur Management",
            "fullRec": "In adults with CCD who have hypertension, a BP target of <130/<80 mm Hg is recommended to reduce CVD events and all-cause death (COR 1/ LOE B-R).",
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
            "userOutput": "BP target of <130/<80 mm Hg is recommended.",
            "sectionLinkText": "4.2.7. Blood Pressure Management "
        }
    ],
    "Renin_Angiotensin_Aldosterone_Inhibitors": [
        {
            "name": "Renin Angiotensin Aldosterone Inhibitors",
            "fullRec": "In patients with CCD who also have hypertension, diabetes, LVEF ≤40%, or CKD, the use of ACE inhibitors, or ARBs if ACE inhibitor–intolerant, is recommended to reduce cardiovascular events (COR 1/ LOE A).",
            "mi": "",
            "diabetes": "Y OR",
            "hxHFrEF": "",
            "LVEFlessOrEqual40": "Y OR",
            "LVEF41to49": "",
            "LVEFgreaterOrEqual50": "",
            "LDL-C_goal": "",
            "maxStatin": "",
            "betaBlocker": "",
            "bloodPressureGoal": "Y OR",
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
            "userOutput": "See guideline for information on Antiplatelet Therapy and Oral Anticoagulants.",
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
            "userOutput": "Colchicine for secondary prevention may be considered",
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

let categoryNamesUnderscores =
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
],
categoryNames =
[
    "SGLT2 Inhibitors and GLP-1 Receptor Agonists",
    "Beta Blockers",
    "Lipid Management",
    "Blood Pressur Management",
    "Renin Angiotensin Aldosterone Inhibitors",
    "Medical Therapy for Relief of Angina",
    "Antiplatelet Therapy and Oral Anticoagulants",
    "Colchicine",
    "Nutrition Supplements"
]

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

/*


////////// dataSetObj1 structure with objects based on category ///////
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
      */


function findMatchingOutput(buttonSelection, dataSet) {
const matchedObjects = dataSet.filter(obj => {
    return Object.entries(buttonSelection).every(([prop, value]) => {
    if (Array.isArray(value)) {
        // Handle multiple options
        return value.includes(obj[prop]);
    }
    // Ignore empty values and only match "Y" or "N"
    return value === "" && value != "Y" && value != "N" || (obj[prop] === value && (value === "Y" || value === "N"));
    });
});

const result = [];

matchedObjects.forEach(obj => {
    const { category, userOutput, cor, sectionLinkText } = obj;

    const categoryObj = result.find(item => item.hasOwnProperty(category));

    if (categoryObj) {
    categoryObj[category].push({ userOutput, cor, sectionLinkText });
    } else {
    const newObj = { [category]: [{ userOutput, cor, sectionLinkText }] };
    result.push(newObj);
    }
});

return result;
}




    //   const matchedOutput = findMatchingOutput(buttonSelection, dataSetObj) //, 'Beta_Blockers');
    //   console.log( buttonSelection, matchedOutput);


var filteredGuidelineResults = {}
////Add guidelines to card
function  addToCard(){
    // console.log(buttonSelection, findMatchingOutput(buttonSelection, dataSetObj))
    findMatchingOutput(buttonSelection, dataSetObj)

    filteredGuidelineResults = findMatchingOutput(buttonSelection, dataSetObj)
    console.log(buttonSelection, "\n",  filteredGuidelineResults)

    let selectedDiv = document.querySelector("#displayReturnRecs")



    console.log( "filteredGuidelineResults", filteredGuidelineResults)
    filteredGuidelineResults.forEach( ( filteredGuidelineItem)=>{



function createGuidelindCardAndHeader (category, title){
     //Create the main container div
     const mainContainer = document.createElement('div');
     mainContainer.classList.add('br_1', 'br_primary', 'br_solid', 'font_2', 'font_light', 'p_2', 'p_3', 'm-t_4', 'bg_white');

     // Create the header section
     const headerDiv = document.createElement('div');
     headerDiv.classList.add('br-b_1', 'br_solid', 'br_primary-3', 'flex');
     headerDiv.setAttribute('data-category', category);
     headerDiv.id = category;

     const headerImage = document.createElement('img');
     headerImage.src = `./imgs/Betablockers.png`  //${Object.values(filteredGuidelineItem)[0][0].userOutput}.png`;
     headerImage.alt = 'icon SGLT2_Inhibitors_GLP1_Receptor_Agonists';
     headerImage.classList.add('aspect_1x1', 'h_2xlh', 'm-t_0', 'm_3', 'p-t_0', 'p_3', 'w_10');

     const headerTitle = document.createElement('h1');
     headerTitle.classList.add('font_2', 'c_primary', 'font_medium', 'p-b_1', 'p-t_0', 'p_2', 'm-t_0');
     headerTitle.textContent =  title

     headerDiv.appendChild(headerImage);
     headerDiv.appendChild(headerTitle);

     // Append the main container div to the main tag
     mainContainer.appendChild(headerDiv);
     selectedDiv.appendChild(mainContainer)
}


//auto recs
console.log("autoAddRecs", autoAddRecs)
 autoAddRecs.forEach((category, i) => {
    let guidelineDivParent = document.querySelector(`div[data-category="${category.category}"]`)
    // let guidelineDivParent = document.getElementById(category.category)

        // createGuidelindCardAndHeader(category, category.category )

        //Create the main container div
        const mainContainer = document.createElement('div');
        mainContainer.classList.add('br_1', 'br_primary', 'br_solid', 'font_2', 'font_light', 'p_2', 'p_3', 'm-t_4', 'bg_white');

        // Create the header section
        const headerDiv = document.createElement('div');
        headerDiv.classList.add('br-b_1', 'br_solid', 'br_primary-3', 'flex');
        headerDiv.setAttribute('data-category', category.category)
        headerDiv.id = category.category


        const headerImage = document.createElement('img');
        headerImage.src = `./imgs/Betablockers.png`  //${Object.values(filteredGuidelineItem)[0][0].userOutput}.png`;
        headerImage.alt = 'icon SGLT2_Inhibitors_GLP1_Receptor_Agonists';
        headerImage.classList.add('aspect_1x1', 'h_2xlh', 'm-t_0', 'm_3', 'p-t_0', 'p_3', 'w_10');

        const headerTitle = document.createElement('h1');
        headerTitle.classList.add('font_2', 'c_primary', 'font_medium', 'p-b_1', 'p-t_0', 'p_2', 'm-t_0');
        headerTitle.textContent =  category.category

        headerDiv.appendChild(headerImage);
        headerDiv.appendChild(headerTitle);

        // Append the main container div to the main tag
        mainContainer.appendChild(headerDiv);
        selectedDiv.appendChild(mainContainer)


         /////// // Create the guideline section ///////////
          const guidelineDiv = document.createElement('div');
          guidelineDiv.classList.add('flex', 'items_center', 'justify_center', 'm-b_2', 'm-t_2');

          const guidelineNumber = document.createElement('div');
          guidelineNumber.classList.add('bg_cor-I', 'h_10', 'w_10', 'flex', 'items_center', 'justify_center', 'c_white');
          guidelineNumber.textContent =category.cor

          const guidelineItem = document.createElement('div');
          guidelineItem.classList.add('guidelineItem', 'guidelineItem', 'p-l_4', 'w_90', 'flex', 'items_center');
          guidelineItem.textContent = category.userOutput

          guidelineDiv.appendChild(guidelineNumber);
          guidelineDiv.appendChild(guidelineItem);

          // Create the horizontal line
          const horizontalLine = document.createElement('div');
          horizontalLine.classList.add('br-b_1', 'br_solid', 'br_primary-5', 'p-b_2');

          // Create the paragraph element
          const paragraphElement = document.createElement('p');
          paragraphElement.classList.add('guidelineItem', 'IIb', 'br-l_10', 'br_cor-IIB', 'br_solid', 'guidelineItem', 'p-l_4');


        // Create the link
        const linkElement = document.createElement('div');
        const seeFullTextSpan = document.createElement('span');
        seeFullTextSpan.innerText = "See full Guideline: "
        const createLinkSpan = document.createElement('span');
        seeFullTextSpan.classList.add('font_0', 'c_primary-2', 'm-t_3');
        const createLinkA = document.createElement('a');
        createLinkA.setAttribute('href', "https://www.jacc.org/guidelines/guideline-hubs")
        createLinkA.setAttribute('target', "_blank")
        createLinkA.innerText = category.sectionLinkText
        createLinkA.classList.add('font_0', 'c_accent', 'h:c_accent-3', 'm-t_3', 'underline');
        createLinkSpan.appendChild(createLinkA)
        linkElement.appendChild(seeFullTextSpan)
        linkElement.appendChild(createLinkSpan)

        // console.log( document.querySelector(`div[data-category="${category.category}"]`) ) //guidelineDiv)

          // Append all elements to the main container div
        //   console.log(document.querySelector(`div[data-category="${category.category}"]`))
          document.querySelector(`div[data-category="${category.category}"]`).parentElement.appendChild(guidelineDiv);
          document.querySelector(`div[data-category="${category.category}"]`).parentElement.appendChild(horizontalLine);
          document.querySelector(`div[data-category="${category.category}"]`).parentElement.appendChild(linkElement);
        //   document.querySelector(`div[data-category="${category.category}"]`).insertAdjacentElement('afterend', linkElement);

})




        //check if category card exists
        categoryNames.forEach(category => {
          const existingChild = Array.from(selectedDiv.children).find(child => child.dataset.category === category);

          if (!existingChild &&  category === Object.keys(filteredGuidelineItem)[0]) {
            createGuidelindCardAndHeader(category, Object.keys(filteredGuidelineItem))
          }
        });



        for( category of categoryNames){
            let guidelineDivParent = document.querySelector(`div[data-category="${category}"]`)

            if( categoryNames = Object.keys(filteredGuidelineItem)[0]){


                    // Create the guideline section
                    const guidelineDiv = document.createElement('div');
                    guidelineDiv.classList.add('flex', 'items_center', 'justify_center', 'm-b_2', 'm-t_2');

                    const guidelineNumber = document.createElement('div');
                    guidelineNumber.classList.add('bg_cor-I', 'h_10', 'w_10', 'flex', 'items_center', 'justify_center', 'c_white');
                    guidelineNumber.textContent = Object.values(filteredGuidelineItem)[0][0].cor

                    const guidelineItem = document.createElement('div');
                    guidelineItem.classList.add('guidelineItem', 'guidelineItem', 'p-l_4', 'w_90', 'flex', 'items_center');
                    guidelineItem.textContent = Object.values(filteredGuidelineItem)[0][0].userOutput

                    guidelineDiv.appendChild(guidelineNumber);
                    guidelineDiv.appendChild(guidelineItem);

                    // Create the horizontal line
                    const horizontalLine = document.createElement('div');
                    horizontalLine.classList.add('br-b_1', 'br_solid', 'br_primary-5', 'p-b_2');

                    // Create the paragraph element
                    const paragraphElement = document.createElement('p');
                    paragraphElement.classList.add('guidelineItem', 'IIb', 'br-l_10', 'br_cor-IIB', 'br_solid', 'guidelineItem', 'p-l_4');


                    // Append all elements to the main container div
                    // guidelineDivParent.parentElement.appendChild(guidelineDiv);
                    // guidelineDivParent.parentElement.appendChild(horizontalLine);

            }
            // Create the link
            const linkElement = document.createElement('div');
            const seeFullTextSpan = document.createElement('span');
            seeFullTextSpan.innerText = "See full Guideline: "
            const createLinkSpan = document.createElement('span');
            seeFullTextSpan.classList.add('font_0', 'c_primary-2', 'm-t_3');
            const createLinkA = document.createElement('a');
            createLinkA.setAttribute('href', "https://www.jacc.org/guidelines/guideline-hubs")
            createLinkA.setAttribute('target', "_blank")
            createLinkA.innerText = Object.values(filteredGuidelineItem)[0][0].sectionLinkText
            createLinkA.classList.add('font_0', 'c_accent', 'h:c_accent-3', 'm-t_3', 'underline');
            createLinkSpan.appendChild(createLinkA)
            linkElement.appendChild(seeFullTextSpan)
            linkElement.appendChild(createLinkSpan)


            selectedDiv.lastChild.appendChild(linkElement);

        }
        // dataSetObj.SGLT2_Inhibitors_GLP1_Receptor_Agonists
    })


}

addToCard()



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
