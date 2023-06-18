    // console.log(btnSubmitUnlocked)

    function checkThatAllWQuestionsAreAnswered(){
        buttonSelectionArr = Object.values(buttonSelection)
        buttonSelectionArr.every( item=> item != "")
    }