const form = document.getElementById('form-campos');
const campoA = document.getElementById('campo-a');
const campoB = document.getElementById('campo-b');

function validaNumero(A, B) {
    A = campoA.value;
    B = campoB.value;

    if (B > A) {
        console.log('Campo A é menor que o B');
        return false;
    } else {
        console.log('Campo B é maior ou igual ao A');
        return true;
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const containerMensagemSucesso = document.querySelector('.success-message');
    const formEValido = validaNumero();

    if (formEValido) {
        containerMensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        campoA.value = '';
        campoB.value = '';
        document.querySelector('.error-message').style.display = 'none';
    } else {
        containerMensagemSucesso.style.border = '1px solid red';
        document.querySelector('.error-message').style.display = 'block';
        document.querySelector('.success-message').style.display = 'none';
    }
});
