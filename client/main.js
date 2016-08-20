import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import todosList from '../imports/components/todosList/todosList';

angular.module('simple-todos', [
  angularMeteor,
  uiRouter,
  todosList.name
]);
