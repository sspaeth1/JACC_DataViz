function createGuidelindCardAndHeader (category){
    const existingChild = Array.from(selectedDiv.children).find(child => child.id === category); ///.forEach(child=> console.log(child.id))
console.log("existingChild", Boolean(existingChild))


        //check if category card exists
        categoryNames.forEach(categoryType => {

            // console.log(category, "\n", categoryType)
   if (!existingChild  &&  category === categoryType){
        //  console.log("doesn't exist")

            //Create the main container div
            const mainContainer = document.createElement('div');
            mainContainer.id = category;

            mainContainer.classList.add('br_1', 'br_primary', 'br_solid', 'font_2', 'font_light', 'p_2', 'p_3', 'm-t_4', 'bg_white');

            // Create the header section
            const headerDiv = document.createElement('div');
            headerDiv.classList.add('br-b_1', 'br_solid', 'br_primary-3', 'flex');
            headerDiv.setAttribute('data-category', category);

            const headerTitle = document.createElement('h1');
            headerTitle.classList.add('font_2', 'c_primary', 'font_medium', 'p-b_1', 'p-t_0', 'p_2', 'm-t_0');
            headerTitle.textContent =  category

            headerDiv.appendChild(headerTitle);

            // Append the main container div to the main tag
            mainContainer.appendChild(headerDiv);
            selectedDiv.appendChild(mainContainer)
        }
    });
}
