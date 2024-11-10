const changer = document.getElementById("button")

function change_all(){
    
   
    document.getElementsByTagName('div')[1].innerText='IN ST. PETERSBURG AND THE LENINGRAD';
    document.getElementsByTagName('div')[2].innerText='REGION';
    document.getElementsByTagName('div')[5].innerText='STAROSTINA';
    document.getElementsByTagName('div')[6].innerText='ARINA';
    document.getElementsByTagName('div')[7].innerText='EUGENEVNA';
    document.getElementsByTagName('div')[8].innerText='FEM';
    document.getElementsByTagName('div')[10].innerText='IZHEVSK';
}
changer.addEventListener("click",change_all)
