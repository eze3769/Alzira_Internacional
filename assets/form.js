emailjs.init("user_bldGjbxI6Q2mwlO0yl8Vd"); 

const contactAction = ()=>{
    const name = document.getElementById("validationCustom01")
    const email = document.getElementById("validationCustom02")
    const message = document.getElementById("validationCustom03")
    const subject = document.getElementById("validationCustom04")

    let data = {
        from_name: name,
        from_email: email,
        message: message,
        subject: subject
    }
    emailjs.send("service_fxhk4pv","template_9u99mee", data)
    .then(function(response) {
       console.log(response)
        if(response.text === 'OK'){
            if (selected == "eng"){
                
            }
            Swal.fire({
              title: selText()[0],
              icon: 'success',
              html: selText()[1],
              focusConfirm: true,
              confirmButtonText:'Ok',
              confirmButtonAriaLabel: 'Thumbs up, great!',
              cancelButtonText:
              '<i class="fa fa-thumbs-down"></i>',
                cancelButtonAriaLabel: 'Thumbs down'
            })
            }
    console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
    }, function(err) {
        alert('Ocurrió un problema al enviar el correo');
    console.log("FAILED. error=", err);
    });
}

window.addEventListener('load', function() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation()
        }
        form.classList.add('was-validated');
        if(form.checkValidity() === true){
            contactAction()
        }   
        }, false);
    }, false);


