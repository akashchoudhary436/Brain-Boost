import React, { useMemo } from 'react';
import * as Survey from 'survey-react';
import ReactDOM from 'react-dom';

const json = {
  "title": "QUIZ",
  "showProgressBar": "bottom",
  "showTimerPanel": "top",
  "maxTimeToFinishPage": 10,
  "maxTimeToFinish": 25,
  "firstPageIsStarted": true,
  "startSurveyText": "Start",
  "pages": [
    {
      "elements": [
        {
          "type": "html",
          "html": "You are about to start a quiz. <br>You will have 10 seconds for every question and 25 seconds to end the quiz.<br>Enter your name below and click <b>Start Quiz</b> to begin."
        },
        {
          "type": "text",
          "name": "username",
          "titleLocation": "hidden",
          "isRequired": true,
          "maxLength": 25
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "remainderof21dividedby7",
          "title": "What is the remainder of 21 divided by 7",
          "choices": [
            "27",
            "1",
            "7",
            "None of these"
          ],
          "correctAnswer": "None of these"
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "equation",
          "title": "What is 7% equal to?",
          "choicesOrder": "random",
          "choices": [
            "0.007",
            "0.07",
            "0.7",
            "7"
          ],
          "correctAnswer": "0.07"
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "howmanyyearsinadecade",
          "title": "How many years are there in a decade?",
          "choicesOrder": "random",
          "choices": [
            "5",
            "7",
            "10",
            "100"
          ],
          "correctAnswer": "10"
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "davidsagein2003",
          "title": "If David’s age is 27 years old in 2011. What was his age in 2003",
          "choicesOrder": "random",
          "choices": [
            "17 years",
            "37 years",
            "20 years",
            "19 years"
          ],
          "correctAnswer": "19 years"
        }
      ]
    },
    {
      "elements": [
        {
          "type": "radiogroup",
          "name": "fifthof100",
          "title": "What is three fifth of 100?",
          "choicesOrder": "random",
          "choices": [
            "3",
            "5",
            "20",
            "60"
          ],
          "correctAnswer": "60"
        }
      ]
    }
  ],
  "completedHtml": "<h4>You got <b>{correctAnswers}</b> out of <b>{questionCount}</b> correct answers.</h4>",
  "completedHtmlOnCondition": [
    {
      "expression": "{correctAnswers} == 0",
      "html": "<h4>Unfortunately, none of your answers is correct. Please try again.</h4>"
    },
    {
      "expression": "{correctAnswers} == {questionCount}",
      "html": "<h4>Congratulations! You answered all the questions correctly!</h4>"
    }
  ]
};

function Quiz() {
    const survey = useMemo(() => {
        const s = new Survey.Model(json);
        s.onComplete.add((sender, options) => {
            console.log(JSON.stringify(sender.data, null, 3));
        });
        return s;
    }, []);

    return <Survey.Survey model={survey} />;
}

export default Quiz;
