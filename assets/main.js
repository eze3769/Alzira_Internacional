const spaFlag = "images/spa-lang.png"
const engFlag = "images/eng-lang.png"
const langStorage = localStorage.getItem("lang")
if(langStorage != null){
    selected = langStorage

}else{
    selected = "spa"
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



