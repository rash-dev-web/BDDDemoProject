$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Rasheed/workspace/BDDFreeCRM/src/main/java/feature/deals.feature");
formatter.feature({
  "line": 1,
  "name": "Deal data Creation",
  "description": "",
  "id": "deal-data-creation",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Free CRM create a new deal scenario",
  "description": "",
  "id": "deal-data-creation;free-crm-create-a-new-deal-scenario",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "user is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "title of login page FreeCRM",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user enters username and password",
  "rows": [
    {
      "cells": [
        "naveenk",
        "test@123"
      ],
      "line": 8
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "user clicks on login",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user on Home page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "user moves to new Deals page",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "user enters deals details",
  "rows": [
    {
      "cells": [
        "test deal",
        "1000",
        "50",
        "10"
      ],
      "line": 13
    }
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "DealsStepDefinition.user_is_on_login_page()"
});
formatter.result({
  "duration": 28457972823,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.title_of_login_page_FreeCRM()"
});
formatter.result({
  "duration": 18263231,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_username_and_password(DataTable)"
});
formatter.result({
  "duration": 236981021,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_clicks_on_login()"
});
formatter.result({
  "duration": 7798844159,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_on_Home_page()"
});
formatter.result({
  "duration": 12972699,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_moves_to_new_Deals_page()"
});
formatter.result({
  "duration": 4206046220,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.user_enters_deals_details(DataTable)"
});
formatter.result({
  "duration": 1128678899,
  "status": "passed"
});
formatter.match({
  "location": "DealsStepDefinition.close_browser()"
});
formatter.result({
  "duration": 719399267,
  "status": "passed"
});
});