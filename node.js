const button = document.getElementById('login')
const header = document.getElementById('header')

async function validarLogin(){

    const email = document.getElementById('email').value
    const senha = document.getElementById('password').value

    if(email == '' || senha == ''){

        // alert('Valores invalidos')
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

        function sumir(){
            toast.classList.add('toast-sumir')
        }


    }else{
        const users = await fetch('http://localhost:8080/usuario')
        const listUsers = await users.json()

        listUsers.forEach((user) => {

            if (email === user.email && senha === user.senha) {
                window.location.href = './pages/home.html'

            }
            console.log("cheguei aqui")
        })
    }
}


window.onload = () => {
    button.addEventListener('click', validarLogin)
}


