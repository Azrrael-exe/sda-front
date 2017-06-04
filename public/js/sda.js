var app = angular.module("app-sda",['ngResource']);

app.factory("user", function($resource){
  var url = "http://10.161.39.220:8080/client/"
  return $resource(url, {}, {
    lista: {
      method : 'GET',
      params: {},
      isArray : true
    }
  })
})

app.factory("cliente", function($resource){
  var url = "http://10.161.39.220:8080/client/"
  return $resource(url + '/:user')
})


app.controller('controlle-sda', function($scope, user, $q, cliente){
  $scope.user = "marcela"
  var clientes = user.lista()

  $scope.selectClient = function (client) {
    console.log(client)
    var client = cliente.get({user: client.userid})
    client.$promise.then(function(result) {
      console.log(result)
    })
  }

  clientes.$promise.then(function(result){
    $scope.clients = result
  })
})
