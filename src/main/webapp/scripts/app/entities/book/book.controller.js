'use strict';

angular.module('jhipster01App')
    .controller('BookController', function ($scope, Book, Author) {
        $scope.books = [];
        $scope.authors = Author.query();
        $scope.loadAll = function() {
            Book.query(function(result) {
               $scope.books = result;
            });
        };
        $scope.loadAll();

        $scope.create = function () {
            Book.save($scope.book,
                function () {
                    $scope.loadAll();
                    $('#saveBookModal').modal('hide');
                    $scope.clear();
                });
        };

        $scope.update = function (id) {
            $scope.book = Book.get({id: id});
            $('#saveBookModal').modal('show');
        };

        $scope.delete = function (id) {
            $scope.book = Book.get({id: id});
            $('#deleteBookConfirmation').modal('show');
        };

        $scope.confirmDelete = function (id) {
            Book.delete({id: id},
                function () {
                    $scope.loadAll();
                    $('#deleteBookConfirmation').modal('hide');
                    $scope.clear();
                });
        };

        $scope.clear = function () {
            $scope.book = {title: null, description: null, publicationDate: null, price: null, id: null};
        };
    });
