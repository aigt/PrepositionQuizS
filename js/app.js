"use strict";

var app = angular.module('app', []);

app.controller('QuizCtrl', function($scope, quizFactory){
	$scope.questionQuantity = questions.length;

	$scope.startQuiz = function(){
		$scope.isListMode = false;
		$scope.questions = [];
		quizFactory.shuffleQuestions();
		$scope.correctAnswers = 0;
		$scope.currentQuiestionN = -1;
		$scope.inProgress = true;
		$scope.nextQuestion();
	};

	$scope.mistake = function(){
		$scope.isWrongAnswer = true;
	};

	$scope.inlineOnlyCorrectAnswers = function(answers){
		let filteredAnswers = [];
		answers.forEach(function(element, index, array) {
			if(element.isCorrect){
				filteredAnswers.push(element.text);
			}
		});
		return filteredAnswers.join(" / ");
	};

	$scope.showList = function(){
		$scope.isListMode = true;
		$scope.inProgress = false;
		$scope.questions = questions;
	};

	$scope.checkAnswers = function(){
		$('label.ans-preposition-true')
			.map(function() {
				return $(this).addClass('active');
			});
		$('label.nans-preposition-true')
			.map(function() {
				if(($(this).hasClass('active'))){
						$(this).removeClass('btn-success');
						$(this).addClass('btn-warning');
						$scope.isWrongAnswer = true;
				}
				return $(this).removeClass('active');
			});

		if(!$scope.isWrongAnswer && !$scope.isCheckedQuestion){
			$scope.correctAnswers++;
		}
		$scope.isCheckedQuestion = true;
	};

	$scope.nextQuestion = function(){
		$('label.nans-preposition-true')
			.map(function() {
				if(($(this).hasClass('btn-warning'))){
						$(this).removeClass('btn-warning');
						$(this).addClass('btn-success');
				}
				return $(this).addClass('active');
			});
		$('label.ans-preposition-true')
			.map(function() {
				return $(this).removeClass('active');
			});
			$('label.nans-preposition-false')
			.map(function() {
				return $(this).addClass('active');
			});
		$('label.ans-preposition-false')
			.map(function() {
				return $(this).removeClass('active');
			});

		$scope.isWrongAnswer = false;

		$scope.currentQuiestionN++;
		$scope.question = quizFactory.getQuestion($scope.currentQuiestionN);
		if(!$scope.question){
			$scope.inProgress = false;
		}

		$scope.isCheckedQuestion = false;
	};
});

app.factory('quizFactory', function() {
	const retQuestions = questions;

	return {

		getQuestion: function(id) {
			if(id < retQuestions.length) {
				const question = retQuestions[id];

				//shuffle prepositions in each complement
				question.complements.forEach(function(compl){
					for (let i = compl.prepositions.length; i; i--) {
						let j = Math.floor(Math.random() * i);
						[compl.prepositions[i - 1], compl.prepositions[j]] = [compl.prepositions[j], compl.prepositions[i - 1]];
					}
				});

				return question;
			} else {
				return false;
			}
		},

		shuffleQuestions: function() {
			for (let i = retQuestions.length; i; i--) {
				let j = Math.floor(Math.random() * i);
				[retQuestions[i - 1], retQuestions[j]] = [retQuestions[j], retQuestions[i - 1]];
			}
		}

	};
});