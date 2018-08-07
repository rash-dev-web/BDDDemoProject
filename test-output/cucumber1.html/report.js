$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Rasheed/workspace/BDDFreeCRM/src/main/java/feature/contact.feature");
formatter.feature({
  "line": 1,
  "name": "Create user scenario",
  "description": "",
  "id": "create-user-scenario",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User is able to create a new contact",
  "description": "",
  "id": "create-user-scenario;user-is-able-to-create-a-new-contact",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is on Home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user moves to new Contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"\u003cfirstname\u003e\" and \"\u003clastname\u003e\" and \"\u003cposition\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "create-user-scenario;user-is-able-to-create-a-new-contact;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "firstname",
        "lastname",
        "position"
      ],
      "line": 15,
      "id": "create-user-scenario;user-is-able-to-create-a-new-contact;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "Tom",
        "Peter",
        "QA"
      ],
      "line": 16,
      "id": "create-user-scenario;user-is-able-to-create-a-new-contact;;2"
    },
    {
      "cells": [
        "naveenk",
        "test@123",
        "David",
        "Will",
        "Dev"
      ],
      "line": 17,
      "id": "create-user-scenario;user-is-able-to-create-a-new-contact;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 16,
  "name": "User is able to create a new contact",
  "description": "",
  "id": "create-user-scenario;user-is-able-to-create-a-new-contact;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is on Home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user moves to new Contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"Tom\" and \"Peter\" and \"QA\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ContactStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 17452596844,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.title_of_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 34968551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "ContactStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 380847308,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 6753581110,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 11041935,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.user_moves_to_new_Contact_page()"
});
formatter.result({
  "duration": 2689392136,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tom",
      "offset": 29
    },
    {
      "val": "Peter",
      "offset": 39
    },
    {
      "val": "QA",
      "offset": 51
    }
  ],
  "location": "ContactStepDefinition.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 3418699827,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.close_browser()"
});
formatter.result({
  "duration": 684204229,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "User is able to create a new contact",
  "description": "",
  "id": "create-user-scenario;user-is-able-to-create-a-new-contact;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "user is already on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page is FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters \"naveenk\" and \"test@123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user clicks on login button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "user is on Home page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user moves to new Contact page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user enters contact details \"David\" and \"Will\" and \"Dev\"",
  "matchedColumns": [
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "ContactStepDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 9196867208,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.title_of_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 42806797,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "naveenk",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 27
    }
  ],
  "location": "ContactStepDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 824279321,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5662891978,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 51408172,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.user_moves_to_new_Contact_page()"
});
formatter.result({
  "duration": 2597827506,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "David",
      "offset": 29
    },
    {
      "val": "Will",
      "offset": 41
    },
    {
      "val": "Dev",
      "offset": 52
    }
  ],
  "location": "ContactStepDefinition.user_enters_contact_details_and_and(String,String,String)"
});
formatter.result({
  "duration": 3068079399,
  "status": "passed"
});
formatter.match({
  "location": "ContactStepDefinition.close_browser()"
});
formatter.result({
  "duration": 645810892,
  "status": "passed"
});
});