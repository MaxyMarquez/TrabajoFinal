(() => {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
        }, false)
    })
})();

function formValidation() {
    if (formControl.Nombre.value == 0) {
        formControl.Nombre.value = "";
        formControl.Nombre.focus();
        return false;
    }
    else if (formControl.Apellido.value == 0) {
        formControl.Apellido.value = "";
        formControl.Apellido.focus();
        return false;
    } else if (formControl.Email.value == 0) {
        formControl.Email.value = "";
        formControl.Email.focus();
        return false;
    } else if (formControl.Comentario.value == 0) {
        formControl.Comentario.value = "";
        formControl.Comentario.focus();
        return false;
    }
    else {
        Swal.fire({
            title: 'Mensaje Enviado',
            text: "Gracias por contactarse con nosotros!",
            icon: 'success',
            position: 'center',
            confirmButtonColor: 'rgb(255, 166, 0)',
        })
            .then(function (isOkay) {
                if (isOkay) {
                    form.submit();
                }
            });
    }
}
