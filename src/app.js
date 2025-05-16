import "bootstrap";
import "./style.css";

// CODIGO ANTES 

//window.onload = () => {
  //document.querySelector('#btn').addEventListener("click", () => {
  //document.querySelector('#the-excuse').innerHTML = generateExcuse();
  //});
  //};
//
//let generateExcuse = () => {
  
  //let pronoun = ['A','The'];
  //let subject = ['jogger','racoon','dog','driver','comedian','pincone'];
  //let action = ['took my','threw my','yelled at my','stole my','bit my'];
  //let possetion = ['homework','toe','car','shoe'];
 // let where = ['on the street','in my house','in my driveway'];

  //let pronounIndx = Math.floor(Math.random() * pronoun.length);
  //let subjectIndx = Math.floor(Math.random() * subject.length);
  //let actionIndex = Math.floor(Math.random() * action.length);
  //let possetionIndex = Math.floor(Math.random() * possetion.length);
  //let WhereIndex = Math.floor(Math.random() * where.length);

    //return pronoun[pronounIndx] + ' ' + subject[subjectIndx] + ' ' + action[actionIndex] + ' ' + possetion[possetionIndex] + ' ' + where[WhereIndex];
//}
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector('#btn').addEventListener("click", () => {
    document.querySelector('#the-excuse').innerHTML = generateExcuse();
  });
};

// Hice Arreglos con las partes que componen la excusa de let a const ya que no se cambiara el valor
const generateExcuse = () => {
  const pronoun = ['A', 'The'];
  const subject = ['jogger', 'raccoon', 'dog', 'driver', 'comedian', 'pinecone'];
  const action = ['took my', 'threw my', 'yelled at my', 'stole my', 'bit my'];
  const possession = ['homework', 'toe', 'car', 'shoe'];
  const where = ['on the street', 'in my house', 'in my driveway'];
// hice abreviaciones en forma de letras para que al final pueda hacer el codigo mas corto 
  const p = Math.floor(Math.random() * pronoun.length);
  const s = Math.floor(Math.random() * subject.length);
  const a = Math.floor(Math.random() * action.length);
  const o = Math.floor(Math.random() * possession.length);
  const w = Math.floor(Math.random() * where.length);
 // aca la devuelvo con una cadena de texto y usando $ que hace que la operacion sea mas comprimida que la anterior
  return `${pronoun[p]} ${subject[s]} ${action[a]} ${possession[o]} ${where[w]}.`;
};



