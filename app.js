let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let turno=true;
let newbtn=document.querySelector("#new-game");
let msgcont=document.querySelector(".message-container");
let msg=document.querySelector("#msg");
const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turno==true){
            box.innerText="O";
            turno=false;
        }
        else{
            turno=true;
            box.innerText="X";
        }
        box.disabled=true;
        checkWinner();
console.log("box clicked");
    });

});
const checkWinner=function (){
    for(let pattern of winpatterns){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos2!=""){
            if(pos1==pos2 && pos2==pos3){
                console.log("winner"," ",pos1);
                showWinner(pos1);
            }
        }
    }

};
const showWinner=function(winner){
    msg.innerText=`Congratulations the winner is ${winner}`;
    msgcont.classList.remove("hide");
    blockBox();

};
const resetGame=function(){
    turno=true;
    enableBox();
    msgcont.classList.add("hide");
    

};
const blockBox=function(){
    for(let box of boxes){
        box.disabled=true;

    }
};
const enableBox=function(){
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
   
};
newbtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);