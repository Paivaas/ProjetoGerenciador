const idUsuarioStorage = localStorage.getItem('idUser')

const idUsuario = parseInt(idUsuarioStorage)


window.onload = async() => {

    // const objUser = await fetch(`http://localhost:5500/usuarios/${idUsuario}`)
    // const user = await objUser.json()
    // const nome = document.createElement('p')

    // nome.textContent = `Olá, ${user.nome}`
    // nome.className = 'hello'
}

async function newTask() {
    const descricao = document.getElementById('titulo').value

    const id = ''


    const newTask = {
        id,
        descricao,
        idUsuario
    }

    console.log(newTask)

    const url = 'http://localhost:5500/tarefas'

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(newTask)
    }

    await fetch(url, options)

    // Toastify({
    //     text: "Tarefa Cadastrada com Sucesso!",
    //     duration: 5000,
    //     style: {
    //         background: "linear-gradient(to right, #00b09b, #96c93d)",
    //         width: '200px',
    //         height: '30px',
    //         textAlign: 'center',
    //         alignItems: 'center',
    //     }
    // }).showToast();

}