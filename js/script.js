function submitForm(form) {
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
    return false;
}