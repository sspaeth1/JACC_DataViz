function  addToCard(category, userOutput, cor ){
    // console.log(buttonSelection, category, outPut, cor)



for( category of categoryNames){
     guidelineDivParent = document.querySelector(`div[data-category="${category}"]`)



        // Create the guideline section
        const guidelineDiv = document.createElement('div');
        guidelineDiv.classList.add('flex', 'items_center', 'justify_center', 'm-b_2', 'm-t_2');

        const guidelineNumber = document.createElement('div');
        guidelineNumber.classList.add('bg_cor-I', 'h_10', 'w_10', 'flex', 'items_center', 'justify_center', 'c_white');
        guidelineNumber.textContent =  cor

        const guidelineItem = document.createElement('div');
        guidelineItem.classList.add('guidelineItem', 'guidelineItem', 'p-l_4', 'w_90', 'flex', 'items_center');
        guidelineItem.textContent = userOutput

        guidelineDiv.appendChild(guidelineNumber);
        guidelineDiv.appendChild(guidelineItem);

        // Create the horizontal line
        const horizontalLine = document.createElement('div');
        horizontalLine.classList.add('br-b_1', 'br_solid', 'br_primary-5', 'p-b_2');

        // Create the paragraph element
        const paragraphElement = document.createElement('p');
        paragraphElement.classList.add('guidelineItem', 'br-l_10', 'br_solid', 'guidelineItem', 'p-l_4');
        paragraphElement.classList.add( corColor(cor))




            // Append all elements to the main container div
    guidelineDivParent.parentElement.appendChild(guidelineDiv);
     guidelineDivParent.appendChild(horizontalLine);


    // Create the link
    const linkElement = document.createElement('div');
    const seeFullTextSpan = document.createElement('span');
    seeFullTextSpan.innerText = "See full Guideline: "
    const createLinkSpan = document.createElement('span');
    seeFullTextSpan.classList.add('font_0', 'c_primary-2', 'm-t_3');
    const createLinkA = document.createElement('a');
    createLinkA.setAttribute('href', "https://www.jacc.org/guidelines/guideline-hubs")
    createLinkA.setAttribute('target', "_blank")
    createLinkA.innerText =  guidlineLinkoutInfo.category
    createLinkA.classList.add('font_0', 'c_accent', 'h:c_accent-3', 'm-t_3', 'underline');
    createLinkSpan.appendChild(createLinkA)
    linkElement.appendChild(seeFullTextSpan)
    linkElement.appendChild(createLinkSpan)


    selectedDiv.lastChild.appendChild(linkElement);
  }

}

