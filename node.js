const button = document.getElementById('login')

async function validarLogin(){

    const email = document.getElementById('email').value
    const senha = document.getElementById('password').value

    if(email == '' || senha == ''){

        alert('Valores invalidos')
       
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


