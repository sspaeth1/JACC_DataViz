    // console.log(btnSubmitUnlocked)

    function checkThatAllQuestionsAreAnswered(){
        buttonSelectionArr = Object.values(buttonSelection)
        buttonSelectionArr.every( item=> item != "")
    }