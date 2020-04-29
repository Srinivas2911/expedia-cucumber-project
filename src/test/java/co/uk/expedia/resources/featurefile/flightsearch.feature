@Flights
Feature: Flight Search Feature
  As a user, I want to find search flights between cities

  Scenario Outline: Verify That User is Able to Search Same Destination Flights

    Given I am on Home page
    When I click on Flights Tab
    And I enter origin city "<flyingfrom>"
    And I enter destination city "<flyingTo>"
    And I enter outbound date of travel "<flyoutDate>"
    And I enter return travel date "<returnDate>"
    And I add no travellers
    And I click on search button
    Then I must see flights to the same destination "<destinationCity>"
    Examples:
      | flyingfrom | flyingTo   | flyoutDate | returnDate | destinationCity                     |
      | London     | Delhi      | 07/08/2020 | 21/08/2020 | Select your departure to Delhi      |
      | Delhi      | Manchester | 15/10/2020 | 12/12/2020 | Select your departure to Manchester |
      | New York   | London     | 20/10/2020 | 22/11/2020 | Select your departure to London     |

  Scenario: Verify That User is NOT Able to Search Wrong Destination Flights

    Given I am on Home page
    When I click on Flights Tab
    And I enter origin city "Washington"
    And I enter destination city "Mount Gambier"
    And I enter outbound date of travel "07/08/2020"
    And I enter return travel date "21/08/2020"
    And I add no travellers
    And I click on search button
    Then I must get No flights message between the cities


