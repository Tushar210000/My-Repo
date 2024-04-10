let inputSlider=document.getElementById("inputSlider");
let SliderValue=document.getElementById("SliderValue");
let passBox=document.getElementById("passBox");
let lowerCase=document.getElementById("lowerCase");
let uppercase=document.getElementById("uppercase");
let numbers=document.getElementById("numbers");
let symbols=document.getElementById("symbols");
let genBtn=document.getElementById("genBtn");
let copyIcon=document.getElementById("copyIcon");
let upperChars="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerChars="abcdefghijklmnopqrstuvwxyz";
let allNumber="0123456789";
let allSymbol="~!@#$%^&*"; 
SliderValue.textContent=inputSlider.value;
inputSlider.addEventListener("click",()=>{
    SliderValue.textContent=inputSlider.value;
});
genBtn.addEventListener("click",()=>{
    passBox.value=generatePassword();
});
function generatePassword(){
    let genPassword="";
    let allChars="";
    allChars+= lowerCase.checked ? lowerChars :"";
    allChars+= uppercase.checked ? upperChars :"";
    allChars+= symbols.checked ? allSymbol :"";
    allChars+= numbers.checked ? allNumber :"";
    if(allChars=="" || allChars.length==0){
        return genPassword;
    }
    let i=1;
    while(i<=inputSlider.value){
    genPassword+=allChars.charAt(Math.floor(Math.random()*allChars.length));
    i++;
    }
    return genPassword;
}
copyIcon.addEventListener("click",()=>{
     if(passBox!="" || passBox.value.length!=0){
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText="check";
        copyIcon.title="Password Copied";
     
setTimeout(()=>{
    copyIcon.innerHTML="content_copy";
    copyIcon.title="";
},3000)
     }
    });