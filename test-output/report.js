$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Rasheed/workspace/BDDFreeCRM/src/main/java/feature/login.feature");
formatter.feature({
  "line": 1,
  "name": "Free CRM login feature",
  "description": "",
  "id": "free-crm-login-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Free CRM login scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-scenario",
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
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-scenario;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 13,
      "id": "free-crm-login-feature;free-crm-login-scenario;;1"
    },
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 14,
      "id": "free-crm-login-feature;free-crm-login-scenario;;2"
    },
    {
      "cells": [
        "tom",
        "test@123"
      ],
      "line": 15,
      "id": "free-crm-login-feature;free-crm-login-scenario;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Free CRM login scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-scenario;;2",
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
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSetpDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 13589507858,
  "status": "passed"
});
formatter.match({
  "location": "LoginSetpDefinition.title_of_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 24948839,
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
  "location": "LoginSetpDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 409343405,
  "status": "passed"
});
formatter.match({
  "location": "LoginSetpDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 5842391926,
  "status": "passed"
});
formatter.match({
  "location": "LoginSetpDefinition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 7792975,
  "status": "passed"
});
formatter.match({
  "location": "LoginSetpDefinition.close_browser()"
});
formatter.result({
  "duration": 729694914,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Free CRM login scenario",
  "description": "",
  "id": "free-crm-login-feature;free-crm-login-scenario;;3",
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
  "name": "user enters \"tom\" and \"test@123\"",
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
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSetpDefinition.user_is_already_on_login_page()"
});
formatter.result({
  "duration": 10728784251,
  "status": "passed"
});
formatter.match({
  "location": "LoginSetpDefinition.title_of_login_page_is_FreeCRM()"
});
formatter.result({
  "duration": 19293273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tom",
      "offset": 13
    },
    {
      "val": "test@123",
      "offset": 23
    }
  ],
  "location": "LoginSetpDefinition.user_enters_username_and_password(String,String)"
});
formatter.result({
  "duration": 283787984,
  "status": "passed"
});
formatter.match({
  "location": "LoginSetpDefinition.user_clicks_on_login_button()"
});
formatter.result({
  "duration": 1524677419,
  "status": "passed"
});
formatter.match({
  "location": "LoginSetpDefinition.user_is_on_Home_page()"
});
formatter.result({
  "duration": 14627996,
  "error_message": "junit.framework.ComparisonFailure: expected:\u003c[CRMPRO]\u003e but was:\u003c[#1 Free CRM software in the cloud for sales and service]\u003e\r\n\tat junit.framework.Assert.assertEquals(Assert.java:100)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:107)\r\n\tat stepDefinition.LoginSetpDefinition.user_is_on_Home_page(LoginSetpDefinition.java:55)\r\n\tat ✽.And user is on Home page(C:/Users/Rasheed/workspace/BDDFreeCRM/src/main/java/feature/login.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginSetpDefinition.close_browser()"
});
formatter.result({
  "status": "skipped"
});
});