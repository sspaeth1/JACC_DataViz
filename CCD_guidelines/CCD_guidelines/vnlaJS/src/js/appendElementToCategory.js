function appendElementToCategory(localCategory, corRating, guideline, cor3optional="") {
    let grablocalCategory = document.getElementById(localCategory);

    // Create the elements
    let guidelineContainer = document.createElement("div");
    guidelineContainer.className = "flex items_center justify_center m-b_2 m-t_2";
    let div_corIndicator = document.createElement("div");
    // div_corIndicator.className = `${corObj[corRating].color} h_10 w_10 flex items_center justify_center c_white`;
    div_corIndicator.className = ` h_10 w_10 flex items_center justify_center c_white font_medium`;
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