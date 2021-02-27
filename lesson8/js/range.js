const inputvalme = document.getElementById ("valueselecter");
const currentValue = document.getElementById("range-value");

const setCurrentValue =(val) => {
    currentValue.innerText = val;
}

const rangeChange =(e)=>{
    setCurrentValue(e.target.value);
}

window.onload =()=>{
    inputvalme.addEventListener("input",rangeChange);
    setCurrentValue(inputvalme.value);
}