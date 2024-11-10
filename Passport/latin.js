const changer = document.getElementById("button")

function change_all(){
    
   if (document.getElementsByTagName('div')[0].innerText='GU OF THE MOIAOR';){  
       
    document.getElementsByTagName('div')[0].innerText='ГУ МВД РОССИИ ПО' 
    document.getElementsByTagName('div')[1].innerText='Г.САНКТ-ПЕТЕРБУРГУ И ЛЕНИНГРАДСКОЙ';
    document.getElementsByTagName('div')[2].innerText='ОБЛАСТИ';
    document.getElementsByTagName('div')[5].innerText='СТАРОСТИНА';
    document.getElementsByTagName('div')[6].innerText='АРИНА';
    document.getElementsByTagName('div')[7].innerText='ЕВГЕНЬЕВНА';
    document.getElementsByTagName('div')[8].innerText='ЖЕН';
    document.getElementsByTagName('div')[10].innerText=' Г. &nbsp; ИЖЕВСК ';
   }   
   else{
       if (document.getElementsByTagName('div')[0].innerText='ГУ МВД РОССИИ ПО';){  
           document.getElementsByTagName('div')[0].innerText='GU OF THE MOIAOR';  
           document.getElementsByTagName('div')[1].innerText='IN ST. PETERSBURG AND THE LENINGRAD';
           document.getElementsByTagName('div')[2].innerText='REGION';
           document.getElementsByTagName('div')[5].innerText='STAROSTINA';
           document.getElementsByTagName('div')[6].innerText='ARINA';
           document.getElementsByTagName('div')[7].innerText='EUGENEVNA';
           document.getElementsByTagName('div')[8].innerText='FEM';
           document.getElementsByTagName('div')[10].innerText='IZHEVSK';
       }   
   }
}

changer.addEventListener("click",change_all)
