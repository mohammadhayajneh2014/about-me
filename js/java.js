'use strict'

let grade = 0;
function q1(){
  let answer1 = prompt ('do you have any problem?');
  console.log(answer1);
  answer1 =answer1.toLocaleLowerCase();
  console.log(answer1);
  switch(answer1){

  case 'yes':
    alert('you have a problem');
    break;
  case'y':
    alert('you have a problem');
    break;
  case 'no':
    alert(' I have no problem ');
    break;
  case 'n' :
    alert(' I have no problem ');
    grade ++;
    break ;

  }
}

q1();

function q2(){
  let answer2 = prompt ('Did you play football?');
  console.log(answer2);
  answer2 =answer2.toLocaleLowerCase();
  console.log(answer2);
  switch(answer2){

  case 'yes':
  case'y':
    alert('yes i did');
    grade ++;
    break;
  case 'no':
  case 'n' :
    alert(' no ');
    break ;
  }
}
q2();

function q3(){
  let answer3 = prompt ('Do you like apples?');
  console.log(answer3);
  answer3 =answer3.toLocaleLowerCase();
  console.log(answer3);
  switch(answer3){

  case 'yes':
  case'y':
    alert('yes i do');
    grade ++;
    break;
  case 'no':
  case 'n' :
    alert(' no ');
    break ;
  }
}
q3();

function q4(){
  let answer4 = prompt ('Do You have a laptop?');
  console.log(answer4);
  answer4 =answer4.toLocaleLowerCase();
  console.log(answer4);
  switch(answer4){

  case 'yes':
  case'y':
    alert('yes i have');
    grade ++;
    break;
  case 'no':
  case 'n' :
    alert(' no ');
    break ;
  }
}
q4();

function q5(){
  let answer5 = prompt ('do you have a phone?');
  console.log(answer5);
  answer5 =answer5.toLocaleLowerCase();
  console.log(answer5);
  switch(answer5){

  case 'yes':
  case'y':
    alert('yes i have');
    grade ++;
    break;
  case 'no':
  case 'n' :
    alert(' no ');
    break ;
  }
}
q5();

function q6(){
  alert('gis number')
  let number = 5;
  number = parseInt(number);
  let gis =prompt('gis number');
  gis = parseInt(gis);
  for(let i=0; i<=3;i++)
  {
    if (gis===number) {
      alert( 'your number is correct');
      grade++;
      break;

    } else if (gis< number) {
      alert('your number is low or high');
      gis = prompt('gis number');
      gis = parseInt(gis);

    }
    else if ( gis>number) {
      alert('your number is high');
      gis = prompt('gis number');
      gis = parseInt(gis);

    } else if (i=3) {
      alert('the correct answer is 5')
      break ;
    }

  }
}
q6();

function q7(){
  alert ('new gis');
  let clasNumber =['apple','banana','orange','potato','tomato','carrots'];
  let fruit
  fruit=prompt('gis fruit');
  for (let n =0;n<6;n++)
  {
    if(fruit === clasNumber[0] || fruit === clasNumber[1] || fruit === clasNumber[2] || fruit === clasNumber[3] || fruit === clasNumber[4] || fruit=== clasNumber[5]){
      alert('your answer is correct');
      grade++;
      break ;

    }else if(n<5){
      alert('your fruit is uncorrect');
      fruit =prompt('gis fruit');
    }
    else if (n=5) {
      alert('apple  banana  orange  potato  tomato  carrots');
    } }
}
q7();

console.log(grade);

alert(grade);