angular.module('app').directive('ngRemoveOcorrencia', function() {
  return {
    restrict: 'E',
    require: '^^tabs',
    scope: {
      submit: '&',
    },
    template: '<button type="button" class="btn btn-danger">Remove</button>',
    link: function($scope, $element, $attrs, tableCtrl){
        $element.on('click', function() {
            $scope.submit();
        });
    }
  }
});
