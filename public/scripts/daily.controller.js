angular.module('waterApp').controller('DailyController', function($http, $location, DailyService) {
  console.log('DailyController is loaded');

  var ctrl = this;

  ctrl.intakeList = [];

  ctrl.getIntake = function() {
    DailyService.getIntake().then(function(response) {
      console.log('Logging response inside getIntake', response);
      
      ctrl.intakeList = response.data;
      console.log('intake list ', ctrl.intakeList);
      // console.log('response data', data);
    });
  };//end getIntake

  ctrl.getIntake();









  // ctrl.getIntake = function() {
  //   IntakeService.getIntake().then(function(response) {
  //     console.log('Intake added', response);
  //     ctrl.intakeList = response.data;
  //     console.log('responsedata', response.data);
  //   });
  // };
  // ctrl.getIntake();

});//end controller