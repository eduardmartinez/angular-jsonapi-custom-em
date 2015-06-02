(function() {
  'use strict';

  angular.module('angularJsonapiExample')
    .controller('PeopleCtrl', PeopleCtrl);

  function PeopleCtrl(
    $scope,
    people
  ) {
    $scope.people = people;
  }
})();