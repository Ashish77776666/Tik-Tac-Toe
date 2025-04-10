// let water = {
//     heros :["ironman", "hulk", "batman"],
//     marks : [76, 24, 23, 86],
//     herfrnd :[ "tony", "soniya", "Rashmi"],
//     herf :[ "tony", "soniya", "puja", "Rashmi"]
// }
// let length=0;
// let str = "thunder"
// for(let key in str){
//     length++;
// console.log(key)
// console.log(length)
// console.log(key)
// console.log(`i know ${water.heros[2]}'s marks that is ${water.marks[2]} and her firend that is ${water.herGf[2]}`)
// }
// let arr=[32,23,45,56,89]
// console.log(length)

// let herfrnd = [ "tony", "soniya", "puja", "Rashmi"]
// herfrnd[2]="WATER"
// console.log(herGf[2])

// let arr=[250, 645, 300, 900, 50]
// for(let i in arr){
//     arr[i]=arr[i]-(arr[i]*0.1);
//     // arr[i]*0.1
//     // console.log(arr[i])
//     // console.log(arr[i]+2)
// }
// console.log(arr)

// let arr = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"]
// arr.splice(0,1)
// arr.splice(1,1)
// arr.splice(1,0,"Ola")
// arr.push("Amazon")
// console.log(arr);

// const vowl= (str) =>{
//     let count=0;
//     for(let i of str){
//         let arr=[ "a","e","i","o","u","A","E","I","O","U"]
//         for(let j of arr){
//             if (i===j){
//                 count++
//             }
//         }
//     }
//     console.log(count);
//     return count;
// }

// // let str = prompt("Enter any string");
// // console.log(vowl(str));

// const printhello= (water)=>{
//     console.log("printingggg...")
// }


// let arr = [0,1,2,3,4,5,6];
// arr.forEach(function printVal(val){
//     console.log(val*val);
// })

// arr.forEach((val)=>{
//     console.log(val*val,arr);
// })

// let marks= [97,64,32,49,99,96,86]
// let newMarks= marks.filter( (val)=>{
//     return val>=90;
// })
// console.log(newMarks)

// let num= prompt("enter any number");
// console.log("water") 
// let head= document.getElementById("heading")
// console.log(head);
// let headings= document.getElementsByClassName("top")
// console.log(headings);
// console.dir(headings);
// let para= document.getElementsByTagName("p")
// console.log(para)
// console.dir(para)
// let mixer = document.querySelector(".top")
// console.log(mixer.tagName)
// console.dir(mixer)
// mixer.tagName
// let divv= document.querySelectorAll(".box");
// console.dir(divv)
// for(let key of divv){
//     console.log(key.innerText)
// }
// let button = document.createElement("button");
// button.innerText="Click Me"
// let body = document.querySelector("body")
// body.prepend(button)
// let butt = document.querySelector("button")
// butt.style.color="red"
// butt.style.backgroundColor="green"
// console.log("water")
// let div= document.querySelector("#div");
// div.onmouseover=()=>{
//     console.log("btn1 was clicked");
//     let a=25;
//     a++;
//     console.log(a);
// }
// para.classList.add("water")
// para.appendAttribute("class","water")
// para.setAttribute
// let btn1 = document.querySelectorAll(".thunder");
// let currentMode = "black";
// btn1.addEventListener("click", () => {
//     if (currentMode === "white") {
//         currentMode="black"
//         btn1.classList.add("black");
//         btn1.classList.remove("green");
//         console.log("current mode black")
//     }
//     else {
//         currentMode="white"
//         btn1.classList.add("green");
//         btn1.classList.remove("black");
//         console.log("current mode green")
//     }
// })

// btn1.addEventListener("click",()=>{
//     body.style.backgroundColor="white";
// })
// const handler2= ()=>{
//     console.log("button was clicked - handler2");
// }
// btn1.addEventListener("click",handler2)
// btn1.addEventListener("click",()=>{
//     console.log("button was clicked - handler3");
// })

// btn1.removeEventListener("click",handler2) 

// let buttons = document.querySelectorAll(".thunder");

// buttons.forEach((btn) => {
//     let currentMode = "black";
//     btn.addEventListener("click", () => {
//         if (currentMode === "white") {
//             currentMode = "black";
//             btn.classList.add("black");
//             btn.classList.remove("green");
//             console.log("current mode black");
//         } else {
//             currentMode = "white";
//             btn.classList.add("green");
//             btn.classList.remove("black");
//             console.log("current mode green");
//         }
//     });
// });

let buttons = document.querySelectorAll(".thunder");
let Winner = document.querySelectorAll("h2");
let resetbtn = document.querySelector(".reset");
const disButt = () =>{
    buttons.forEach((btn)=>{
        btn.disabled=true;
    })
}
let thunder = () => {
    let vari = "match not started"
    let b0 = buttons[0].className[8]
    let b1 = buttons[1].className[8]
    let b2 = buttons[2].className[8]
    let b3 = buttons[3].className[8]
    let b4 = buttons[4].className[8]
    let b5 = buttons[5].className[8]
    let b6 = buttons[6].className[8]
    let b7 = buttons[7].className[8]
    let b8 = buttons[8].className[8]
    let arr = [
        [b0, b1, b2], [b3, b4, b5], [b6, b7, b8],
        [b0, b3, b6], [b1, b4, b7], [b2, b5, b8],
        [b0, b4, b8], [b2, b4, b6]
    ]
    for (let i in arr) {
        let gre = 0;
        let bla = 0;
        for (let j of arr[i]) {
            if (j === 'g') {
                gre++;
            } else if (j === 'b') {
                bla++;
            }
        }
        if (gre === 3) {
            vari = "green wins";
            Winner[1].classList.remove("hide")
            disButt();
            break;
        } else if (bla === 3) {
            vari = "black win";
            Winner[0].classList.remove("hide")
            disButt();
            break;
        }
    }
    console.log(arr)
    return vari;
}

let currentMode = "black"; // Independent state for each button
buttons.forEach((btn) => {
    resetbtn.addEventListener("click", () => {
        Winner[0].classList.add("hide")
        Winner[1].classList.add("hide")
        // currentMode = "black";
        buttons.forEach((btn1) => {
            btn1.className = "thunder"; 
            btn1.innerText = "click me"
            btn.disabled=false;
            // btn1.addEventListener("click", handleClick);
        });
        console.log(thunder());
    })
    const handleClick = () => {
        if (currentMode === "white") {
            currentMode = "black";
            btn.classList.add("black");
            btn.classList.remove("green");
            btn.innerText="X"
            console.log(`current mode green and ${thunder()} `);
            
        } else {
            currentMode = "white";
            btn.classList.add("green");
            btn.classList.remove("black");
            btn.innerText="O"
            console.log(`current mode green and ${thunder()} `);
        }

        btn.disabled=true; // Prevent further clicks
    };
    btn.addEventListener("click", handleClick);
});

// if(buttons[0]===)



