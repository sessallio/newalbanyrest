angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.newAlbanyRestaurant', {
    url: '/home',
    views: {
      'side-menu21': {
        templateUrl: 'templates/newAlbanyRestaurant.html',
        controller: 'newAlbanyRestaurantCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.ourStory', {
    url: '/OurStory',
    views: {
      'side-menu21': {
        templateUrl: 'templates/ourStory.html',
        controller: 'ourStoryCtrl'
      }
    }
  })

  .state('menu.menu2', {
    url: '/menu',
    views: {
      'side-menu21': {
        templateUrl: 'templates/menu2.html',
        controller: 'menu2Ctrl'
      }
    }
  })

  .state('menu.location', {
    url: '/location',
    views: {
      'side-menu21': {
        templateUrl: 'templates/location.html',
        controller: 'locationCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/side-menu/home')

  

});