let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let octInp = document.getElementById("oct-inp");
let hexInp = document.getElementById("hex-inp");
let errorMsg = document.getElementById("error-inp");


decInp.addEventListener("input", () => {

    let decValue = parseInt(decInp.value);
    binInp.value = decValue.toString(2);
    octInp.value = decValue.toString(8);
    hexInp.value = decValue.toString(16).toUpperCase();
});

binInp.addEventListener("input", () =>{
    
    let binValue = binInp.value;

    if(binValidator(binValue)) {
        decInp.value = parseInt(binValue, 2);
        octInp.value = parseInt(binValue, 2).toString(8);
        hexInp.value = parseInt(binValue, 2).toString(16).toUpperCase();
        errorMsg.textContent = "";
    }else{
        errorMsg.textContent = "Please Enter A Valid Binary Input";
    }

    function binValidator(num){
        for(let i = 0; i < num.length; i++){
            if(num[i]!= "0" && num[i]!= "1"){
                return false;
            }
        }
        return true;
    }
});

octInp.addEventListener("input", () => {
    let octValue = octInp.value;

    if (octValidator(octValue)) {
        decInp.value = parseInt(octValue, 8);
        binInp.value = parseInt(octValue, 8).toString(2);
        hexInp.value = parseInt(octValue, 8).toString(16).toUpperCase();
        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "Please Enter A Valid Octal Input";
    }

    function octValidator(num) {
        for (let i = 0; i < num.length; i++) {
            if (num[i] < "0" || num[i] > "7") {
                return false;
            }
        }
        return true;
    }
});

hexInp.addEventListener("input", () => {
    let hexValue = hexInp.value;

    if (hexValidator(hexValue)) {
        decInp.value = parseInt(hexValue, 16);
        binInp.value = parseInt(hexValue, 16).toString(2);
        octInp.value = parseInt(hexValue, 16).toString(8);
        errorMsg.textContent = "";
    } else {
        errorMsg.textContent = "Please Enter A Valid Hexadecimal Input";
    }

    function hexValidator(num) {
        for (let i = 0; i < num.length; i++) {
            if (!(num[i].match(/[0-9A-Fa-f]/))) {
                return false;
            }
        }
        return true;
    }
});


