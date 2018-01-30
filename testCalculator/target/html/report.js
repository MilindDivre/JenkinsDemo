$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("test/cucumber/test1.feature");
formatter.feature({
  "line": 1,
  "name": "Calculator",
  "description": "",
  "id": "calculator",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "calculate add",
  "description": "",
  "id": "calculator;calculate-add",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I have a calc with 12 3",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I ask it to say add",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "it should answer with add 15",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 19
    },
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "calculatorStepDefs.i_have_a_calc_with(int,int)"
});
formatter.result({
  "duration": 303262636,
  "status": "passed"
});
formatter.match({
  "location": "calculatorStepDefs.i_ask_it_to_say_add()"
});
formatter.result({
  "duration": 58424,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15",
      "offset": 26
    }
  ],
  "location": "calculatorStepDefs.it_should_answer_with_add(int)"
});
formatter.result({
  "duration": 2526451,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "calculate subtract",
  "description": "",
  "id": "calculator;calculate-subtract",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I have a calc with 12 3",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I ask it to say subtract",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "it should answer with sub 9",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 19
    },
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "calculatorStepDefs.i_have_a_calc_with(int,int)"
});
formatter.result({
  "duration": 290937,
  "status": "passed"
});
formatter.match({
  "location": "calculatorStepDefs.i_ask_it_to_say_subtract()"
});
formatter.result({
  "duration": 53687,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9",
      "offset": 26
    }
  ],
  "location": "calculatorStepDefs.it_should_answer_with_sub(int)"
});
formatter.result({
  "duration": 127902,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "calculate divide",
  "description": "",
  "id": "calculator;calculate-divide",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I have a calc with 12 3",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I ask it to say divide",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "it should answer with div 4",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "12",
      "offset": 19
    },
    {
      "val": "3",
      "offset": 22
    }
  ],
  "location": "calculatorStepDefs.i_have_a_calc_with(int,int)"
});
formatter.result({
  "duration": 207248,
  "status": "passed"
});
formatter.match({
  "location": "calculatorStepDefs.i_ask_it_to_say_divide()"
});
formatter.result({
  "duration": 54477,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 26
    }
  ],
  "location": "calculatorStepDefs.it_should_answer_with_div(int)"
});
formatter.result({
  "duration": 138955,
  "status": "passed"
});
});