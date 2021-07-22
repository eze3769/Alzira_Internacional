const spaFlag = "images/spa-lang.png"
const engFlag = "images/eng-lang.png"
const langStorage = localStorage.getItem("lang")
let textAlert = "Nos comunicaremos a la brevedad"
if(langStorage != null){
    selected = langStorage

}else{
  selected = navigator.language || navigator.userLanguage;
  switch (selected){
    case "es-419":
      selected = "spa"
      break;
    case "en":
      selected= "eng"
      break;
    default:
      selected = "eng"
  }
}

const langChange = (option)=>{
    let setTo;
    let setFrom
    if (option === "eng"){
        setTo = "eng"
        setFrom = "spa"
    }else{
        if(selected === "spa"){
            setTo = "eng"
            setFrom = "spa"
        }else{
            setTo ="spa"
            setFrom = "eng"
        }
    }
     

    $(`.${setTo}-text`).css("display","unset")
    $(`.${setFrom}-text`).css("display","none")
    document.getElementById("lang-button").src = `images/${setFrom}-lang.png`
    
    localStorage.setItem("lang", setTo)
    selected = setTo
}
if(selected === "eng"){
    langChange("eng")
}
document.getElementById("lang-button").addEventListener('click',langChange)

$(document).ready(()=>{
    $(function () {
        $('#myDiv').floatingWhatsApp({
          phone: '+34692801575',
          position: 'right'
        });
      });
})
mybutton = document.getElementById("goUp");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const selText = () =>{
  let msg = []
  if (selected == "eng"){  
    msg = ["Thanks for your message!","We will contact you as soon as possible"]
  }else{
      msg = ["¡Gracias por tu mensaje!","Nos comunicaremos a la brevedad"]
   }
  return msg
}


