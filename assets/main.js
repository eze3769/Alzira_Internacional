const langChange = ()=>{
    console.log("listo")
    fetch('./assets/eng.json')
    .then(res => res.json())
    .then(res =>{
        console.log(res)
        console.log(res.nav1)

    })

}

addEventListener('click',langChange)

