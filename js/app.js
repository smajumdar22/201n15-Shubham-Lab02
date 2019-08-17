'use strict';
var userName;
var count = 0;
function userName(){


userName = prompt ('What is your name?');
console.log('user name -' + userName);//adding console log
return userName;

}
userName();
function fiveQuestions(){
  //defining variable and assigning value to variable
var genreMovies = prompt('Do you think I like horror movies?');
//adding console log
console.log('Answer genre movies - ' + genreMovies);
//changing user answer to lower case
genreMovies = genreMovies.toLowerCase();
//initializing counter for score

//validating user response to incremnet score
if (genreMovies === 'yes' || genreMovies === 'y') {
  alert('You are right ' + userName);
  count++;
} else if (genreMovies === 'no' || genreMovies === 'n') {
  alert('No' + userName);
} else {
  alert(userName + ' you dont take instructions very well.');
}
var favFood = prompt('Do you think I like spicy food?');
console.log('Answer fav food -' + favFood);
favFood = favFood.toLowerCase();
if (favFood === 'yes' || favFood === 'y') {
  alert('You are right ' + userName);
  count++;
}
else if (favFood === 'no' || favFood === 'n') {
  alert('No' + userName);
}
else {
  alert(userName + ' you are one stubborn human being.');
}

var favDrink = prompt('Do you think I like soda?');
console.log('Answer fav drink -' + favDrink);
favDrink = favDrink.toLowerCase();

if (favDrink === 'no' || favFood === 'n') {
  alert('You are right' + userName);
  count++;
} else if (favDrink === 'yes' || favFood === 'y') {
  alert('I am sorry that was incorrect ' + userName);
} else {
  alert(userName + ' I dont know what to do with you');
}

var favPet = prompt('Do you think I like dogs?');
console.log('Answer fav pet -' + favPet);
favPet = favPet.toLowerCase();

if (favPet === 'yes' || favPet === 'y') {
  alert('You are right ' + userName);
  count++;
} else if (favPet === 'no' || favPet === 'n') {
  alert('No ' + userName);
} else {
  alert(userName + ' I think you simply cant read');
}

var favPlace = prompt('Do you think I want to visit Antarctica?');
console.log('Answer fav place -' + favPlace);
favPlace = favPlace.toLowerCase();

if (favPlace === 'no' || favPlace === 'n') {
  alert('You are right  ' + userName);
  count++;
} else if (favPlace === 'yes' || favPlace === 'y') {
  alert('You were in correct ' + userName);
}
else {
  alert(userName + ' I have no hope for you');
}
}

fiveQuestions();

function fifthQuestion(totalSteps){
  var i = 0;
  while (i < 4) { 
    i++;
    alert('Attempt number ' + i +'/4');
    var countSteps = prompt(userName + " how many steps did I take this week? ");
    console.log('Total Steps attempt ' + i + ' is ' + countSteps);
    var countStepsInt = parseInt(countSteps);
    if (typeof (countStepsInt) === 'number') {
      if (countStepsInt === totalSteps) {
        alert('Amazing ' + userName + ' you got that right');
       count++;
        break;
      } else if (countStepsInt < 5000) {
        alert('No ' + userName + ' that is too low');
      } else if (countStepsInt > totalSteps) {
        alert('No ' + userName + ' you think too highly of me');
      }
    }
    else if (typeof (countStepsInt) === 'string') {
      alert('Value has to be integer');
    }
  }
}

fifthQuestion(10000);

function sixthQuestion(){
  for (var j = 1; j <= 6; j++){
    var countryNames = ["india", "brasil", "singapore", "malaysia", "england","turkey","indonesia","ireland","italy","hongkong"]
    for (var i = 0; i < countryNames.length; i++) {
      console.log(countryNames[i] + " " + "is a country name");
    }
    alert('Attempt number '+j+'/6');
    var guessCountry = prompt("Name a country I want to visit?")
    
    console.log("Guess country" + " " + guessCountry)
      guessCountry = guessCountry.toLowerCase();
    
    if (countryNames.indexOf(guessCountry) > -1) {
      alert("Awesome" + " " + guessCountry + " " + "is on my top ten list")
      alert('Here is a list of my top ten countries   '+ countryNames);
      count++;
      break;
    } else {
      alert("Sorry" + " " + guessCountry + " " + "is not on my top ten list")
    }
    }
      alert(userName + ' your total score is ' + count + '/7');
}
sixthQuestion();

  //Checking count value to display message
  if (count >= 5) {
    alert(userName + ' you passed');
  }
  else {
    alert(userName + ' you failed');
  }