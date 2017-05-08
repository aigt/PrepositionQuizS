"use strict";

var app = angular.module('app', []);

app.controller('QuizCtrl', ['$scope', 'quizFactory', function($scope, quizFactory){
	$scope.questionsPerQuiz = 20;
	$scope.quizButtons = [];
	$scope.wrongAnswers = [];

	$scope.startQuiz = function(){
		$scope.startSubQuiz(0,1);
	};

	$scope.startSubQuiz = function(questionNum, quizNum){
		$scope.isListMode = false;
		$scope.questions = [];
		$scope.wrongAnswers = [];
		quizFactory.setQuestionsPerQuiz(questionNum);
		quizFactory.setCurrentQuiz(quizNum);
		quizFactory.shuffleQuestions();
		$scope.correctAnswers = 0;
		$scope.currentQuiestionN = -1;
		$scope.inProgress = true;
		$scope.nextQuestion();
	};

	$scope.stopQuiz = function(questionNum, quizNum){
		$scope.correctAnswers = 0;
		$scope.currentQuiestionN = -1;
		$scope.inProgress = false;
		$scope.wrongAnswers = [];
	};
	
	$scope.restartQuiz = function(questionNum, quizNum){
		$scope.isListMode = false;
		$scope.questions = [];
		$scope.wrongAnswers = [];
		$scope.correctAnswers = 0;
		$scope.currentQuiestionN = -1;
		quizFactory.shuffleQuestions();
		$scope.inProgress = true;
		$scope.nextQuestion();
	};

	$scope.startForm = function(questionNum, quizNum){
		$scope.isListMode = false;
		$scope.correctAnswers = 0;
		$scope.currentQuiestionN = -1;
		$scope.inProgress = false;
	};

	$scope.generateSubQuizButtons = function(questionsPerQuiz){
		$scope.quizButtons.length = 0;
		quizFactory.setQuestionsPerQuiz(questionsPerQuiz);
		const retArray = [];
		for(let i=1; i<=quizFactory.getQuizesQuantity(); i++){
			retArray.push({id:i, text:'Start quiz #'+i});
		}
		$scope.questionsPerQuiz = questionsPerQuiz;
		$scope.quizButtons = retArray;
	};

	$scope.startQuiz = function(){
		$scope.startSubQuiz(0,1);
	};

	$scope.getQuestionsQuantityInQuiz = function(){
		return quizFactory.getQuestionsQuantityInQuiz();
	}

	$scope.getTotalQuestionNumber = function(){
		return quizFactory.getTotalQuestionNumber();
	}

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

		if($scope.isWrongAnswer){
			$scope.wrongAnswers.push($scope.question);
		}

		$scope.isWrongAnswer = false;

		$scope.currentQuiestionN++;
		$scope.question = quizFactory.getQuestion($scope.currentQuiestionN);
		if(!$scope.question){
			$scope.inProgress = false;
		}

		$scope.isCheckedQuestion = false;
	};
}]);

app.factory('quizFactory', function() {
	let retQuestions = questions;
	let questionsPerQuiz = 0;
	let currentQuiz = 1;

	let updateQuestions = function(){
			const totalQuizes = Math.ceil(questions.length / questionsPerQuiz);

			if(questionsPerQuiz <= 0){
				retQuestions = questions;
				currentQuiz = 1;
			}
			else{
				if(currentQuiz >= totalQuizes){
					currentQuiz = totalQuizes;
					retQuestions = questions.slice(questionsPerQuiz*(currentQuiz-1));
				}
				else{
					retQuestions = questions.slice(questionsPerQuiz*(currentQuiz-1), questionsPerQuiz*currentQuiz);
				}
				shuffleQuestions(retQuestions);
			}
	};

	let shuffleQuestions = function(){
		let x;
		for (let i = retQuestions.length; i; i--) {
			let j = Math.floor(Math.random() * i);
			// IE doesn't support
			// [retQuestions[i - 1], retQuestions[j]] = [retQuestions[j], retQuestions[i - 1]];
			x = retQuestions[i - 1];
			retQuestions[i - 1] = retQuestions[j];
			retQuestions[j] = x;
		}
	};

	return {
		getTotalQuestionNumber:function() {
			return questions.length;
		},

		getQuestionsQuantityInQuiz:function() {
			return retQuestions.length;
		},

		getQuizesQuantity:function() {
			return Math.ceil(questions.length / questionsPerQuiz);
		},

		getCurrentQuiz:function() {
			return currentQuiz;
		},

		setCurrentQuiz:function(num) {
			currentQuiz = num;
			updateQuestions();
		},

		getQuestionsPerQuiz:function() {
			return questionsPerQuiz;
		},

		setQuestionsPerQuiz:function(questionsQuantity) {
			questionsPerQuiz = questionsQuantity;
			updateQuestions();
		},

		getQuestion: function(id) {
			if(id < retQuestions.length) {
				const question = retQuestions[id];

				//shuffle prepositions in each complement
				let x;
				question.complements.forEach(function(compl){
					for (let i = compl.prepositions.length; i; i--) {
						let j = Math.floor(Math.random() * i);
						// IE doesn't support
						// [compl.prepositions[i - 1], compl.prepositions[j]] = [compl.prepositions[j], compl.prepositions[i - 1]];
						x = compl.prepositions[i - 1];
						compl.prepositions[i - 1] = compl.prepositions[j];
						compl.prepositions[j] = x;
					}
				});

				return question;
			} else {
				return false;
			}
		},

		shuffleQuestions: function() {
			shuffleQuestions();
		}
	};
});