//your JS code here. If required.
const inputText = document.querySelector("#text")
const delayField = document.querySelector("#delay");
const submitBtn = document.querySelector("#btn");
const outputField = document.querySelector("#output")

async function displayDelayedOutput() {
 let display = new Promise((resolve)=>{
    setTimeout(() => {
        resolve(inputText.value)
        
    }, delayField.value);
 }) 
 let result = await display;
 outputField.innerHTML = result;  
}

submitBtn.addEventListener('click', displayDelayedOutput);