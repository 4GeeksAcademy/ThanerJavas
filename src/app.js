import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector('#btn').addEventListener("Click", () => {
  document.querySelector('the-excuse').innerHTML = generateExcuse();
  });
  console.log('Hello Rigo from the console! ');
};

let generateExcuse = () => {
  
  let pronoun = ['A','The'];
  let subject = ['jogger','racoon','dog','driver','comedian','pincone'];
  let action = ['took my','threw my','yelled at my','stole my','bit my'];
  let possetion = ['homework','toe','car','shoe'];
  let where = ['on the street','in my house','in my driveway'];

  let pronounIndx = Math.floor(Math.random() * pronoun.length);
  let subjectIndx = Math.floor(Math.random() * subject.length);
  let actionIndex = Math.floor(Math.random() * action.length);
  let possetionIndex = Math.floor(Math.random() * possetion.length);
  let WhereIndex = Math.floor(Math.random() * where.length);

    return pronoun[pronounIndx] + ' ' + subject[subjectIndx] + ' ' + action[actionIndex] + ' ' + possetion[possetionIndex] + ' ' + where[WhereIndex];
};
