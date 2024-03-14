let usersScore=0;
let compscore=0; 
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usersScorepra=document.querySelector("#user-score");
const CompScorepra=document.querySelector("#comp-score");
const genComputer=()=>{
  const option=["rock","paper","scissors"];
  const randidx= Math.floor(Math.random()*3);
  return option[randidx];
}
const drawGame=()=>{
    msg.innerText="game was draw. play Again";
    msg.style.backgroundColor="#081b31";
}
const  showWinner=(userwin,userChoice,compchoice)=>{
if (userwin){
    usersScore++;
    usersScorepra.innerText=usersScore;
    msg.innerText=`You Win. your ${userChoice} beats ${compchoice}`;
    msg.style.backgroundColor="green"; 
}else{
     compscore++;
     CompScorepra.innerText=compscore;
    msg.innerText=`You lose! ${compchoice} beats your ${userChoice}`;
    msg.style.backgroundColor="red";
}
}
const playGame=(userChoice)=>{
 const compchoice=genComputer();
 if(userChoice===compchoice){
     drawGame();
 }
 else{
    let  userwin=true;
    if(userChoice==="rock"){
        //scissor,paper
      userwin=compchoice==="paper"?false:true;
    } else if(userChoice==="paper"){
    //rock,scissor
      userwin=compchoice==="scissors"?false:true;
    }
    else{
    //rock,paper
    userwin=compchoice==="rock"?false:true;
    }
    showWinner (userwin,userChoice,compchoice);
 }
}
choices.forEach((choice)=>{
     choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
     })

})