<!-- Controller -->
angular.module('app').controller('zumbisCtrl', function($scope, $rootScope) {
    $rootScope.$on('cep', function(event, data) {
        $scope.ocorrencia.bairro = data.bairro;
    });

    $scope.ocorrencias = [];

    $scope.adiciona = function(ocorrenciaParametro) {
        if(ocorrenciaParametro.id !== 'undefined' && ocorrenciaParametro.id > 0 ){
          var index = ocorrenciaParametro.id - 1;
          $scope.ocorrencias.splice(index, 1);
        }
        else{
          var id = $scope.ocorrencias.length + 1;
          ocorrenciaParametro.id = id;
        }
        $scope.ocorrencias.push(angular.copy(ocorrenciaParametro));
        $scope.ocorrencia.cep = "";
        $scope.ocorrencia.bairro = "";
        $scope.ocorrencia.numero = "";
        $scope.ocorrencia.id = "";
        $scope.$apply();
    };

    $scope.remove = function(ocorrencia){
      var index = $scope.ocorrencias.indexOf(ocorrencia);
      $scope.ocorrencias.splice(index, 1);
      $scope.$apply();
    };

    $scope.editar = function(ocorrencia) {
      $scope.ocorrencia.cep = ocorrencia.cep;
      $scope.ocorrencia.bairro = ocorrencia.bairro;
      $scope.ocorrencia.numero = ocorrencia.numero;
      $scope.ocorrencia.id = ocorrencia.id;
    };

});
