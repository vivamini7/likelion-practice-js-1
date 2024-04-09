var Score=40;   
var Grade='None';

if (Score>=90 && Score<=100) {
    Grade='A';
} else if (Score>=80 && Score<90) {
    Grade='B';
} else if (Score>=60 && Score<80) {
    Grade='C';
} else if (Score>=40 && Score<60) {
    Grade='D';
} else if (Score>=0 && Score<40){
    Grade='F';
} 

if (Grade=='None'){
    console.log('Score error');
} else{
    console.log(`학생의 점수는 ${Score}점이고, 레터 그레이드는 ${Grade}입니다.`);
}