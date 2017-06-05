var app = angular.module("app-sda",['ngResource']);

app.factory("cliente", function($resource){
  var url = "http://solarpes.herokuapp.com/client/:id"
  return $resource(url, {}, {
    lista: {
      method : 'GET',
      params: {},
      isArray : true
    },
    getOne : {
      method : 'GET',
      params : {id:'@id'},
      isArray : false
    },
    getPanel : {
      url : 'http://solarpes.herokuapp.com/client/:id/:panel/reads',
      method : 'GET',
      params : {
        id : '@id',
        panel : '@panel'
      },
      isArray : false
    }
  })
})


app.controller('controlle-sda', function($scope, $q, cliente){
  var clientes = cliente.lista()
  $scope.panel_list_show = false;

  clientes.$promise.then(function(result){
    $scope.clients = result
  })

  var selected_client = null;

  $scope.selectClient = function (client) {
    var client = cliente.getOne({id: client.userid})
    client.$promise.then(function(result) {
      $scope.selected_client = result
      selected_client = result;
      $scope.panel_list_show = true;
      $scope.panels = result.panels
    })
  }

  $scope.selectPanel = function(panel) {
    var panel = cliente.getPanel({
      id : selected_client.userid,
      panel : panel.panelid
    })

    panel.$promise.then(function(result){
      $scope.read_list_show = true;
      $scope.reads = result.reads
      console.log(result.reads)
    })
  }

})
