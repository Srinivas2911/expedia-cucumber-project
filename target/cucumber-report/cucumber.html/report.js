$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/co/uk/expedia/resources/featurefile/flightsearch.feature");
formatter.feature({
  "line": 2,
  "name": "Flight Search Feature",
  "description": "As a user, I want to find search flights between cities",
  "id": "flight-search-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Flights"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Verify That User is Able to Search Same Destination Flights",
  "description": "",
  "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter origin city \"\u003cflyingfrom\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter destination city \"\u003cflyingTo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter outbound date of travel \"\u003cflyoutDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter return travel date \"\u003creturnDate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add no travellers",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I must see flights to the same destination \"\u003cdestinationCity\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights;",
  "rows": [
    {
      "cells": [
        "flyingfrom",
        "flyingTo",
        "flyoutDate",
        "returnDate",
        "destinationCity"
      ],
      "line": 17,
      "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights;;1"
    },
    {
      "cells": [
        "London",
        "Delhi",
        "07/08/2020",
        "21/08/2020",
        "Select your departure to Delhi"
      ],
      "line": 18,
      "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights;;2"
    },
    {
      "cells": [
        "Delhi",
        "Manchester",
        "15/10/2020",
        "12/12/2020",
        "Select your departure to Manchester"
      ],
      "line": 19,
      "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights;;3"
    },
    {
      "cells": [
        "New York",
        "London",
        "20/10/2020",
        "22/11/2020",
        "Select your departure to London"
      ],
      "line": 20,
      "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 24769255400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify That User is Able to Search Same Destination Flights",
  "description": "",
  "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Flights"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter origin city \"London\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter destination city \"Delhi\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter outbound date of travel \"07/08/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter return travel date \"21/08/2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add no travellers",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I must see flights to the same destination \"Select your departure to Delhi\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 452411600,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 2127560500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 21
    }
  ],
  "location": "FlightsSteps.iEnterOriginCity(String)"
});
formatter.result({
  "duration": 2082739600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delhi",
      "offset": 26
    }
  ],
  "location": "FlightsSteps.iEnterDestinationCity(String)"
});
formatter.result({
  "duration": 1472308400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/08/2020",
      "offset": 33
    }
  ],
  "location": "FlightsSteps.iEnterOutboundDateOfTravel(String)"
});
formatter.result({
  "duration": 4620688500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21/08/2020",
      "offset": 28
    }
  ],
  "location": "FlightsSteps.iEnterReturnTravelDate(String)"
});
formatter.result({
  "duration": 6107726300,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iAddNoTravellers()"
});
formatter.result({
  "duration": 24512301600,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 39998553100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to Delhi",
      "offset": 44
    }
  ],
  "location": "FlightsSteps.iMustSeeFlightsToTheSameDestination(String)"
});
formatter.result({
  "duration": 304295800,
  "status": "passed"
});
formatter.after({
  "duration": 3852741300,
  "status": "passed"
});
formatter.before({
  "duration": 16309018900,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify That User is Able to Search Same Destination Flights",
  "description": "",
  "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Flights"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter origin city \"Delhi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter destination city \"Manchester\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter outbound date of travel \"15/10/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter return travel date \"12/12/2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add no travellers",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I must see flights to the same destination \"Select your departure to Manchester\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 285500,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 5719781500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Delhi",
      "offset": 21
    }
  ],
  "location": "FlightsSteps.iEnterOriginCity(String)"
});
formatter.result({
  "duration": 1962376400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Manchester",
      "offset": 26
    }
  ],
  "location": "FlightsSteps.iEnterDestinationCity(String)"
});
formatter.result({
  "duration": 1552804900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "15/10/2020",
      "offset": 33
    }
  ],
  "location": "FlightsSteps.iEnterOutboundDateOfTravel(String)"
});
formatter.result({
  "duration": 1499279800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12/12/2020",
      "offset": 28
    }
  ],
  "location": "FlightsSteps.iEnterReturnTravelDate(String)"
});
formatter.result({
  "duration": 2550596600,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iAddNoTravellers()"
});
formatter.result({
  "duration": 21347462600,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 25877768800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to Manchester",
      "offset": 44
    }
  ],
  "location": "FlightsSteps.iMustSeeFlightsToTheSameDestination(String)"
});
formatter.result({
  "duration": 221724600,
  "status": "passed"
});
formatter.after({
  "duration": 3788987600,
  "status": "passed"
});
formatter.before({
  "duration": 17738320500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify That User is Able to Search Same Destination Flights",
  "description": "",
  "id": "flight-search-feature;verify-that-user-is-able-to-search-same-destination-flights;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Flights"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I enter origin city \"New York\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter destination city \"London\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter outbound date of travel \"20/10/2020\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter return travel date \"22/11/2020\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I add no travellers",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I must see flights to the same destination \"Select your departure to London\"",
  "matchedColumns": [
    4
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 496900,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 3060080100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New York",
      "offset": 21
    }
  ],
  "location": "FlightsSteps.iEnterOriginCity(String)"
});
formatter.result({
  "duration": 2224316400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "London",
      "offset": 26
    }
  ],
  "location": "FlightsSteps.iEnterDestinationCity(String)"
});
formatter.result({
  "duration": 2097963700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20/10/2020",
      "offset": 33
    }
  ],
  "location": "FlightsSteps.iEnterOutboundDateOfTravel(String)"
});
formatter.result({
  "duration": 1582096300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "22/11/2020",
      "offset": 28
    }
  ],
  "location": "FlightsSteps.iEnterReturnTravelDate(String)"
});
formatter.result({
  "duration": 2717752600,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iAddNoTravellers()"
});
formatter.result({
  "duration": 21544491200,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 26013741000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Select your departure to London",
      "offset": 44
    }
  ],
  "location": "FlightsSteps.iMustSeeFlightsToTheSameDestination(String)"
});
formatter.result({
  "duration": 358282700,
  "status": "passed"
});
formatter.after({
  "duration": 4566167300,
  "status": "passed"
});
formatter.before({
  "duration": 20308482400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify That User is NOT Able to Search Wrong Destination Flights",
  "description": "",
  "id": "flight-search-feature;verify-that-user-is-not-able-to-search-wrong-destination-flights",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on Flights Tab",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter origin city \"Washington\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter destination city \"Mount Gambier\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter outbound date of travel \"07/08/2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter return travel date \"21/08/2020\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I add no travellers",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on search button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I must get No flights message between the cities",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 44700,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnFlightsTab()"
});
formatter.result({
  "duration": 3750970300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Washington",
      "offset": 21
    }
  ],
  "location": "FlightsSteps.iEnterOriginCity(String)"
});
formatter.result({
  "duration": 2059430500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mount Gambier",
      "offset": 26
    }
  ],
  "location": "FlightsSteps.iEnterDestinationCity(String)"
});
formatter.result({
  "duration": 2938520200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "07/08/2020",
      "offset": 33
    }
  ],
  "location": "FlightsSteps.iEnterOutboundDateOfTravel(String)"
});
formatter.result({
  "duration": 2089623000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21/08/2020",
      "offset": 28
    }
  ],
  "location": "FlightsSteps.iEnterReturnTravelDate(String)"
});
formatter.result({
  "duration": 3315313700,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iAddNoTravellers()"
});
formatter.result({
  "duration": 21828250000,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iClickOnSearchButton()"
});
formatter.result({
  "duration": 28200027400,
  "status": "passed"
});
formatter.match({
  "location": "FlightsSteps.iMustGetNoFlightsMessageBetweenTheCities()"
});
formatter.result({
  "duration": 161940000,
  "status": "passed"
});
formatter.after({
  "duration": 4005057800,
  "status": "passed"
});
formatter.uri("src/test/java/co/uk/expedia/resources/featurefile/login.feature");
formatter.feature({
  "line": 3,
  "name": "Login feature",
  "description": "\r\nAs a user, I want to login in to expedia.co.uk successfully",
  "id": "login-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.before({
  "duration": 18972904000,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User should login successfully with valid credentials",
  "description": "",
  "id": "login-feature;user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I clickOnAccountTab",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I clickOnSignInTab",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter valid Email \"JamesB1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter valid password \"James123\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 74700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAccountTab()"
});
formatter.result({
  "duration": 1820695600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSignInTab()"
});
formatter.result({
  "duration": 1103431300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JamesB1234@gmail.com",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 8079848200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "James123",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 99278612700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 478018200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldLoginSuccessfully()"
});
formatter.result({
  "duration": 730443600,
  "status": "passed"
});
formatter.after({
  "duration": 4537242000,
  "status": "passed"
});
formatter.before({
  "duration": 18018869800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "User should Not login successfully with invalid credentials",
  "description": "",
  "id": "login-feature;user-should-not-login-successfully-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I am on Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I clickOnAccountTab",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I clickOnSignInTab",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter valid Email \"RogerB1234@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter valid password \"Roger123\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I should Not login successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 50000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnAccountTab()"
});
formatter.result({
  "duration": 2110019400,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnSignInTab()"
});
formatter.result({
  "duration": 1009404700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "RogerB1234@gmail.com",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.iEnterValidEmail(String)"
});
formatter.result({
  "duration": 7219361800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Roger123",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.iEnterValidPassword(String)"
});
formatter.result({
  "duration": 782309000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 321684900,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.iShouldNotLoginSuccessfully()"
});
formatter.result({
  "duration": 405513600,
  "status": "passed"
});
formatter.after({
  "duration": 4022299100,
  "status": "passed"
});
});