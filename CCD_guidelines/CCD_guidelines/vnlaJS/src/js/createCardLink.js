function createCardLink(localCategory){
    console.log(  Boolean(document.getElementById(localCategory)))
    if( !Boolean(document.getElementById(localCategory))){
        return true
    }
    localSelectedDiv = document.getElementById(localCategory)


    // Create the link
    const linkElement = document.createElement('div');
    const seeFullTextSpan = document.createElement('span');
    seeFullTextSpan.innerText = "See full Guideline: "
    const createLinkSpan = document.createElement('span');
    seeFullTextSpan.classList.add('font_0', 'c_primary-2', 'm-t_3');
    const createLinkA = document.createElement('a');
    createLinkA.setAttribute('href',  guidlineLinkoutInfo[localCategory].url)
    createLinkA.setAttribute('target', "_blank")
    createLinkA.innerText =  guidlineLinkoutInfo[localCategory].text
    createLinkA.classList.add('font_0', 'c_accent', 'h:c_accent-3', 'm-t_3', 'underline');
    createLinkSpan.appendChild(createLinkA)
    linkElement.appendChild(seeFullTextSpan)
    linkElement.appendChild(createLinkSpan)


    localSelectedDiv.lastElementChild.appendChild(linkElement);


}
