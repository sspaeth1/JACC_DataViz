//Handle three choice buttons/ LVEF
     grabLVEFBtns.forEach(btn => {
        btn.addEventListener('click', (event) => {
          event.target.classList.toggle('shadow_emboss-bold')

          selectedChoiseAddedToDataset(event)
          grabLVEFBtns.forEach(otherBtn => {
            if (otherBtn === btn) {
              // otherBtn.style.backgroundColor = 'bg_success';
              event.target.classList.toggle('bg_success')
              event.target.classList.toggle('bg_black-4')
              // console.log(buttonSelection[event.target.id])
               buttonSelection[otherBtn.id] = "Y"
              //  event.target.dataset.yn = "Y"
              console.log( "btn:", btn.id)
            } else {
              if(otherBtn.classList.contains('bg_success')){
                otherBtn.classList.remove('bg_success') ;
                 otherBtn.classList.add('bg_black-4')
              }
              // otherBtn.classList.contains('bg_black-4') ? otherBtn.classList.add('bg_black-4') : "";
              otherBtn.classList.contains('shadow_emboss-bold') ? otherBtn.classList.remove('shadow_emboss-bold') : "";
              buttonSelection[otherBtn.id] = "N"

            }
          });
        });
      });


//Handle color change btns
    let toggleClass = (event) => {


        if (event.target.classList.contains('btnYes')) {
          event.target.classList.toggle('bg_black-4')
          event.target.classList.toggle('bg_success')
          event.target.classList.toggle('shadow_emboss-bold')

          event.target.nextElementSibling.classList.contains('shadow_emboss-bold') ? event.target.nextElementSibling.classList.remove('shadow_emboss-bold') : "";

          event.target.nextElementSibling.classList.contains('bg_alert') ? event.target.nextElementSibling.classList.remove('bg_alert','shadow_emboss-bold') : "";
          event.target.nextElementSibling.classList.contains('bg_black-4') ? "" : event.target.nextElementSibling.classList.add('bg_black-4')

        }

        if (event.target.classList.contains('btnNo')) {
          event.target.classList.toggle('bg_black-4')
          event.target.classList.toggle('bg_alert')
          event.target.classList.toggle('shadow_emboss-bold')

          event.target.previousElementSibling.classList.contains('shadow_emboss-bold') ? event.target.previousElementSibling.classList.remove('shadow_emboss-bold') : "";

          event.target.previousElementSibling.classList.contains('bg_success') ? event.target.previousElementSibling.classList.remove('bg_success','shadow_emboss-bold') : "";
          event.target.previousElementSibling.classList.contains('bg_black-4') ? "" : event.target.previousElementSibling.classList.add('bg_black-4')
        }
      }




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
          element.classList.contains('bg_black-4') ? '' : element.classList.add('bg_black-4');
        })
        grabLVEFBtns.forEach(element => {
          element.classList.contains('bg_success') ? element.classList.remove('bg_success','shadow_emboss-bold') : "";
          element.classList.contains('bg_black-4') ? '' : element.classList.add('bg_black-4');
        })

       btnCCD_Submit.classList.contains('bg_accent')? btnCCD_Submit.classList.remove('bg_accent'): "";
       btnCCD_Submit.classList.add('texture_cross')


        setbuttonSelectionToEmpty()

      selectedDiv.innerHTML = `<div class="br_1 br_primary br_solid font_2 font_light p_2 p_4 m-t_4 bg_white">
                      Please complete all of the evaluation questions in  the Evaluate tab then click submit to see recommendations here
                  </div>`


       addReturnToEvalButton()
        btnReturn.addEventListener('click', () => showEvalsHideRecsTab())

      })



// handle submit btn

btnCCD_Submit.addEventListener('click', () => {
           showRecsHideEvalTab()
               //clear previous
           performMatchingAndAddGuidelines()
           addDefaultRecs()
           addReturnToEvalButton()
           btnReturn.addEventListener('click', () => showEvalsHideRecsTab())
       })



   // handle change buttonSelection - value selected object
    function selectedChoiseAddedToDataset(event) {
      // console.log(event.target.parentElement.id)
      // console.log(event.target.dataset.yn)
      buttonSelection[event.target.parentElement.id] = event.target.dataset.yn
    }


    btnReturn.addEventListener('click', () => showEvalsHideRecsTab())