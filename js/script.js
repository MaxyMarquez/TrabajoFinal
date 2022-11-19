
function submitForm(form) {
    swal({
        title: 'Mensaje Enviado',
        text: "Gracias por contactarse con nosotros!",
        icon: 'success',
        position: 'center',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    })
        .then(function (isOkay) {
            if (isOkay) {
                form.submit();
            }
        });
    return false;
}