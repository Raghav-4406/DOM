// const button=document.querySelector('#2');

// button.onclick=function (){
//     console.log("you cick me ");
//     console.log(" hope u clicked  me");
// }

// function scream(){
//     console.log("aajjjjajjjj")
//     console.log("kick me")
// }
// button.onmouseenter= scream;


// const btn3=document.querySelector('#3');
// btn3.addEventListener('mouseup',function(){
//     alert("clicked")
// })


// function twist() {
//     console.log("twist")
// }

// function shout() {
//     console.log("shout")
// }
// const tasbutton= document.querySelector('#tas')
// tasbutton.addEventListener('click','tiwst')
// tasbutton.addEventListener('click','shout')

// const button= document.querySelector('button');
// button.addEventListener('click',function(){
//  const r= Math.floor(Math.random() * 255);
//  const g= Math.floor(Math.random() * 255);
//  const b= Math.floor(Math.random() * 255);
//  const newcolor='rgb(${r} ,${g} ,${b})';
//  document.body.style.backgroundColor=newcolor;
// })
// const buttons = document.querySelectorAll('button');

// for(let button of buttons) {
//     button.addEventListener('click',function() {
//     button.style.backgroundColor= makeRandcolor();
//     })
// }

// const input= document.querySelector('input').addEventListener('keydown',function(){
// //    console.log('KEYDOWN')
// })
// const input= document.querySelector('input').addEventListener('keyup',function(){
//     console.log('KEYUP')
//  })

// const form= document.querySelector('#shelterform').addEventListener('submit',function(e){
//     e.preventDefault();
//     console.log('submitted')
// })

// const tweetform= document.querySelector('#tweetform').addEventListener('submit',function(e){
//     console.log('submitted form')
//     e.preventDefault();
// })

const input= document.querySelector('input').addEventListener('input',function(e){
    console.log("INPUTEVENT")
})