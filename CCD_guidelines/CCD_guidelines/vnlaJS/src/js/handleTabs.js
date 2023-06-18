    //Handle tabs
    function showRecsHideEvalTab() {
        displayReturnRecs.classList.contains('display_none') ? displayReturnRecs.classList.remove('display_none') : '';
        btnTabRec.classList.contains('ccdSelectedTab') ? '' : btnTabRec.classList.add('ccdSelectedTab');

        displayEvalQuestions.classList.contains('display_none') ? '' : displayEvalQuestions.classList.add('display_none');
        btnTabEval.classList.contains('ccdSelectedTab') ? btnTabEval.classList.remove('ccdSelectedTab') : '';
      }

      function showEvalsHideRecsTab() {
        displayEvalQuestions.classList.contains('display_none') ? displayEvalQuestions.classList.remove('display_none') : '';
        btnTabEval.classList.contains('ccdSelectedTab') ? '' : btnTabEval.classList.add('ccdSelectedTab');

        displayReturnRecs.classList.contains('display_none') ? '' : displayReturnRecs.classList.add('display_none');
        btnTabRec.classList.contains('ccdSelectedTab') ? btnTabRec.classList.remove('ccdSelectedTab') : '';
      }
