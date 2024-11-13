function verify() {
    let x = parseInt(document.getElementsByTagName("input")[1].value);
    let y = parseInt(document.getElementsByTagName("input")[2].value);
    console.log(x, y)

        result = 1/(x*y)
        document.getElementById("result").innerText = messageText + result;
        check = true;
    } else {
        result = " С не принадлежит заданному диапазону"
        document.getElementById("result").innerText = messageText + result;
        check = false;
    }
}

function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}

function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
let result;
let check = false;

const elementA = document.getElementById("a");
elementA.addEventListener('keyup', verify);
const elementB = document.getElementById("b");
elementB.addEventListener('keyup', verify);
const elementC = document.getElementById("c");
elementC.addEventListener('keyup', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
