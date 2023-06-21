// handle lockUnlockBtnSubmit
function lockUnlockBtnSubmit() {
    console.log(buttonSelection) //Object.values(buttonSelection))

    if(Object.values(buttonSelection).every(item=> item != "")){
      btnCCD_Submit.classList.remove('bg_black-5')
            btnCCD_Submit.classList.remove('texture_cross')
            btnCCD_Submit.classList.add('bg_primary')
    }
};
