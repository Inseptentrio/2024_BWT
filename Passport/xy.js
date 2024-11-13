function calculateZ(x,y) {
    if(x===0 || y===0) {
        return "Знаменатель не может быть равен нулю";
    }

    let z = 1 / (x * y);
    return z;
}

function calculate() {
    var x = parseInt(document.getElementById('x').value);
    var y = parseInt(document.getElementById('y').value);
    
    let result = calculateZ(x, y);
    document.getElementById('result').innerHTML = "Результат вычисления: "+ result;
}

function send() {
    if result = calculateZ(x, y);
    }
}

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
