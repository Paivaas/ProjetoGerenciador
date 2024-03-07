async function verLogin() {

    const email = document.getElementById('email').value;
    const senha = document.getElementById('password').value;

    if (email === '' || senha === '') {
        alert('Por favor, preencha todos os campos!!')
        return false;

        const toast = document.createElement('section')
        const icon = document.createElement('i')
        const mensagem = document.createElement('p')

        toast.className = 'toast'
        icon.className = 'bi bi-exclamation-circle-fill'
        mensagem.textContent = 'Os dados inseridos estao incorretos'

        // icon.appendChild(toast)
        toast.appendChild(icon)
        toast.appendChild(mensagem)

        header.appendChild(toast)

        toast.addEventListener('click', sumir)

        function sumir() {
            toast.classList.add('toast-sumir')
        }



    }

    try {
        const users = await fetch('http://localhost:5500/usuarios');
        const listUsers = await users.json();

        listUsers.forEach((user) => {
            if (email === user.email && senha === user.senha) {


                Toastify({
                    text: "Usuário Logado com Sucesso!",
                    duration: 5000,
                    style: {
                        background: "linear-gradient(to right, #ffffff, #000000)",
                        width: '200px',
                        height: '30px',
                        textAlign: 'center',
                        alignItems: 'center',
                    }
                }).showToast();

                localStorage.setItem('idUser', user.id)

                window.location.href = '../pages/home.html'
                    // window.location.href = ''

            }
        })

    } catch (error) {
        alert('Erro ao acessar a API !')
            // console.error(error);
    }

}

const button = document.getElementById('login')

button.addEventListener('click', verLogin)