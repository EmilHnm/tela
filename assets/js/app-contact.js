"use strict";
document.getElementById('contact-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    Swal.fire({
        title: 'Sending message...',
        allowOutsideClick: false,
        showConfirmButton: false,
    });
    fetch('/send_email.php', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            'name': document.getElementById('name')?.value ?? null,
            'email': document.getElementById('email')?.value ?? null,
            'content': document.getElementById('content')?.value ?? null,
        })
    })
        .then(result => result.json())
        .then(result => {
        if (result.status === 'error') {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: result.message,
            });
            return;
        }
        Swal.fire({
            icon: 'success',
            title: 'Thanks for contacting Tela. We will respond to you shortly!',
            showConfirmButton: false,
            timer: 1500
        });
    })
        .catch(err => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
        });
    });
});
//# sourceMappingURL=app-contact.js.map