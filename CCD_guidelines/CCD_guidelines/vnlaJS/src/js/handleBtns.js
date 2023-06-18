//handle add Return To Eval Button
function addReturnToEvalButton(){

    const buttonDiv = document.createElement('div');
            buttonDiv.id = 'btnReturn';


            const buttonElement = document.createElement('p');
            buttonElement.classList.add("p_4",  "c_white","h:bg_accent-3", "h:c_alert",  "h:c_primary", "m_3","m-t_5", "m-r_0", "float_right", "font_2", "br_radius", "text_center", "bg_accent");
            buttonElement.textContent = 'Return to evaluation';


            buttonDiv.appendChild(buttonElement);
         selectedDiv.appendChild(buttonDiv);

 }


//Handle three choice buttons/ LVEF
     grabLVEFBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
          event.target.classList.toggle('shadow_emboss-bold')

          selectedChoiseAddedToDataset(event)
          grabLVEFBtns.forEach(otherBtn => {
            if (otherBtn === btn) {
              // otherBtn.style.backgroundColor = 'bg_success';
              event.target.classList.toggle('bg_success')
              // console.log(buttonSelection[event.target.id])
               buttonSelection[otherBtn.id] = "Y"
              //  event.target.dataset.yn = "Y"
              console.log( "btn:", btn.id)
            } else {
              // otherBtn.style.backgroundColor = 'bg_grey';
              otherBtn.classList.contains('bg_success') ? otherBtn.classList.remove('bg_success') : "";
              otherBtn.classList.contains('bg_alert') ? otherBtn.classList.add('bg_alert') : "";
              otherBtn.classList.contains('shadow_emboss-bold') ? otherBtn.classList.remove('shadow_emboss-bold') : "";

              console.log( "otherBtn:", otherBtn.id)
              buttonSelection[otherBtn.id] = "N"

            }
          });
        });
      });


//Handle color change btns
    let toggleClass = (event) => {


        if (event.target.classList.contains('btnYes')) {
          event.target.classList.toggle('bg_grey')
          event.target.classList.toggle('bg_success')
          event.target.classList.toggle('shadow_emboss-bold')

          event.target.nextElementSibling.classList.contains('shadow_emboss-bold') ? event.target.nextElementSibling.classList.remove('shadow_emboss-bold') : "";

          event.target.nextElementSibling.classList.contains('bg_alert') ? event.target.nextElementSibling.classList.remove('bg_alert','shadow_emboss-bold') : "";
          event.target.nextElementSibling.classList.contains('bg_grey') ? "" : event.target.nextElementSibling.classList.add('bg_grey')

        }

        if (event.target.classList.contains('btnNo')) {
          event.target.classList.toggle('bg_grey')
          event.target.classList.toggle('bg_alert')
          event.target.classList.toggle('shadow_emboss-bold')

          event.target.previousElementSibling.classList.contains('shadow_emboss-bold') ? event.target.previousElementSibling.classList.remove('shadow_emboss-bold') : "";

          event.target.previousElementSibling.classList.contains('bg_success') ? event.target.previousElementSibling.classList.remove('bg_success','shadow_emboss-bold') : "";
          event.target.previousElementSibling.classList.contains('bg_grey') ? "" : event.target.previousElementSibling.classList.add('bg_grey')
        }
      }


// handle lockUnlockBtnSubmit
function lockUnlockBtnSubmit() {
        console.log(buttonSelection) //Object.values(buttonSelection))

        if(Object.values(buttonSelection).every(item=> item != "")){
                btnCCD_Submit.classList.remove('texture_cross')
                btnCCD_Submit.classList.add('bg_accent')
        }
};



//// Handle  selection buttons ////
    grabYesNoBtns.forEach(element => {
        element.addEventListener('click', (event) => {
          toggleClass(event);
          selectedChoiseAddedToDataset(event)
          lockUnlockBtnSubmit()
        })
      });



 // handle Reset all btn
      grabBtnResetAll.addEventListener('click', () => {
        grabYesNoBtns.forEach(element => {
          element.classList.contains('bg_success') ? element.classList.remove('bg_success', 'shadow_emboss-bold') : "";
          element.classList.contains('bg_alert') ? element.classList.remove('bg_alert','shadow_emboss-bold') : "";
          element.classList.contains('bg_grey') ? '' : element.classList.add('bg_grey');
        })
        grabLVEFBtns.forEach(element => {
          element.classList.contains('bg_success') ? element.classList.remove('bg_success','shadow_emboss-bold') : "";
          element.classList.contains('bg_grey') ? '' : element.classList.add('bg_grey');
        })

       btnCCD_Submit.classList.contains('bg_accent')? btnCCD_Submit.classList.remove('bg_accent'): "";
       btnCCD_Submit.classList.add('texture_cross')


        setbuttonSelectionToEmpty()

           selectedDiv.innerHTML = `<div class="br_1 br_primary br_solid font_2 font_light p_2 p_4 m-t_4 bg_white">
                      Please complete all of the evaluation questions in  the Evaluate tab then click submit to see recommendations here
                  </div>`
       addReturnToEvalButton()
       btnReturn= document.getElementById('btnReturn'),
        btnReturn.addEventListener('click', () => showEvalsHideRecsTab())

      })



// handle submit btn

btnCCD_Submit.addEventListener('click', () => {
        let buttonIsDisabbled = btnCCD_Submit.classList.contains("texture_cross")
             if(buttonIsDisabbled){
                 launch_toast()
                 // alert('All fields required, please complete and click Submit')
                 return false
             }
           showRecsHideEvalTab()
               //clear previous
         selectedDiv.innerHTML = ""
           performMatchingAndAddGuidelines()
           selectedDiv.innerHTML += automaticRecs
           addReturnToEvalButton()
           btnReturn= document.getElementById('btnReturn'),
           btnReturn.addEventListener('click', () => showEvalsHideRecsTab())
       })


     //handle hidden submit button
       btnHiddenSubmit.addEventListener('click', () => {
        let buttonIsDisabbled = btnHiddenSubmit.classList.contains("texture_cross")
           showRecsHideEvalTab()

         //clear previous
         selectedDiv.innerHTML = ""
           performMatchingAndAddGuidelines()
           selectedDiv.innerHTML += automaticRecs
           addReturnToEvalButton()
           btnReturn= document.getElementById('btnReturn'),
           btnReturn.addEventListener('click', () => showEvalsHideRecsTab())
       })



    // handle change buttonSelection - value selected object
    function selectedChoiseAddedToDataset(event) {
      // console.log(event.target.parentElement.id)
      // console.log(event.target.dataset.yn)
      buttonSelection[event.target.parentElement.id] = event.target.dataset.yn
    }


    btnReturn.addEventListener('click', () => showEvalsHideRecsTab())