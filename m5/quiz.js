var data = { 
  "questions": [ 
    {
        "questn" : "1. Which car manufacturer was the first to win 100 F1 races?",
        "options" : [
          {
          "option" : "Ferrari",
          "correct" : true,
          "response" :"Correct Answer!"
        },
        {
          "option" : "Nissan",
          "correct" : false,
          "response" :"Wrong Answer!"
        }
    ],
    
    "hints" : [
      "hint."
    ]
  },


  {
        "questn" : "2. one plus one?",
        "options" : [
          {
          "option" : "2",
          "correct" : true,
          "response" :"Correct Answer!"
        },
        {
          "option" : "3",
          "correct" : false,
          "response" :"Wrong Answer!"
        }
    ],
    
    "hints" : [
      "hint."
    ]
  },


  {
        "questn" : "3. what are you?",
        "options" : [
          {
          "option" : "human",
          "correct" : false,
          "response" :"Wrong Answer!"
        },
        {
          "option" : "dog",
          "correct" : true,
          "response" :"Correct Answer!"
        }
    ],
    
    "hints" : [
      "hint."
    ]
  },
  ]
};

var data = JSON.stringify(data);
var obj = JSON.parse(data);


function load() {
  for(var i=1; i<4; i++) {
    var question_id="q" + i;
    document.getElementById(question_id).innerHTML = obj.questions[i-1].questn;
    document.getElementById(question_id+1+1).innerHTML = obj.questions[i-1].options[0].option;
    document.getElementById(question_id+2+2).innerHTML = obj.questions[i-1].options[1].option;
  }
}


function check(text) {
  var question = parseInt(text[1], 10);
  var option = parseInt(text[2], 10);
  if(obj.questions[question-1].options[option-1].correct) {
    document.getElementById("ans" + text[1]).innerHTML = '<div class = "alert alert-warning alert-dismissible correct">' + 
          '<a href="#" class="close" data-dismiss="alert" aria-label="close">&gt;&times;</a>' +
          "<b>correct: </b>" + obj.questions[question-1].options[option-1].response +
        '</div>';
  } else {
    document.getElementById("ans" + text[1]).innerHTML = '<div class = "alert alert-warning alert-dismissible incorrect">' + 
          '<a href="#" class="close" data-dismiss="alert" aria-label="close">&gt;&times;</a>' +
          "<b>Incorrect: </b>" + obj.questions[question-1].options[option-1].response +
        '</div>';
  }
}


function hint(text) {
  var question= parseInt(text[1],10);
  document.getElementById("ans" + text[1]).innerHTML = '<div class = "alert alert-warning alert-dismissible hint">' + 
          '<a href="#" class="close" data-dismiss="alert" aria-label="close">&gt;&times;</a>' +
          "<b>hint </b>" + obj.questions[question-1].hints[0] +
        '</div>';
}



// <label><i class="fa fa-car">   In which Programming language was Ruby written?</i></label><br>
// <div class="alert alert-warning">
//   <strong>Hint!</strong> You can Google..Duh!
// </div>
//   <input class="with-gap" type="radio" name="Quiz" value="C" checked />  C<br>
//   <input class="with-gap" type="radio" name="Quiz" value="Java">  Java<br>
//   <input class="with-gap" type="radio" name="Quiz" value="Python"> Python<br>
//   <div class="alert alert-success">
//   <strong>Correct!</strong> Ruby was written in C. Ruby on rails in Ruby.
// </div>

//  <lable class="fa fa-car">   Are you a dog lover?</lable><br>
//  <div class="alert alert-warning">
//   <strong>Hint!</strong> Dogs are awesome!!!
// </div>
//    <input type="radio" name="Quiz" value="C">  No<br>
//   <input type="radio" name="Quiz" value="Java">  Yes<br>
//   <input type="radio" name="Quiz" value="Python">  I'm a dog.<br>
//   <div class="alert alert-danger">
//   <strong>YOU'RE WRONG!</strong> NOOO!! Start liking dogs!
// </div>

//   <lable class="fa fa-car">   How often do you pet dogs?</lable><br>
//   <div class="alert alert-warning">
//   <strong>Hint!</strong> Dogs are friendly.
// </div>
//    <input type="radio" name="Quiz" value="C">  When ever I see a dog.<br>
//   <input type="radio" name="Quiz" value="Java">  Never<br>
//   <input type="radio" name="Quiz" value="Python">  Sometimes...<br>
//   <div class="alert alert-danger">
//   <strong>YOU'RE WRONG!</strong> You'll have to pet a dog when you see it. YOU'VE GOT NO OTHER CHOICE!.
// </div>