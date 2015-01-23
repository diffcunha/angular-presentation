'use strict';

/**
 * @ngdoc overview
 * @name angular-addressbook
 * @description
 * # angular-addressbook
 *
 * Main module of the angular-addressbook application.
 */
angular
  .module('angular-addressbook', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'views/contactList.html',
        controller: 'ContactListController',
        resolve: {
          contacts: function(ContactService) { 
            return ContactService.getAll();
          },
        }
      })
      .when('/show/:id', {
        templateUrl: 'views/contactDetail.html',
        controller: 'ContactDetailController',
        resolve: {
          contact: function($route, ContactService) { 
            return ContactService.get($route.current.params.id);
          },
        }
      })
      .otherwise({
        redirectTo: '/list'
      });;
  });
