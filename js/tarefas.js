const idUserLogado = localStorage.getItem('idUser')


window.onload = async function LoadTask() {

    const objUser = await fetch(`http://localhost:5500/usuarios/${idUserLogado}`)
    const user = await objUser.json()

    const url = 'http://localhost:5500/tarefas'

    const tasks = await fetch(url)
    const listTasks = await tasks.json()

    const container = document.getElementById('card')
    const nome = document.createElement('p')

    nome.textContent = `Olá, ${user.nome}`
    nome.className = 'hello'

    listTasks.forEach(task => {

        console.log(task);



        if (user.id === task.idUsuario) {

            const card = document.createElement('div')
            const titulo = document.createElement('h2')
            const buttons = document.createElement('div')

            card.className = 'myCard'
            buttons.className = 'buttons'

            buttons.id = 'buttons'

            titulo.textContent = `${task.descricao}`

            card.appendChild(titulo)
            card.appendChild(buttons)

            container.appendChild(card)

        } else {
            const card = document.createElement('div')
            const titulo = document.createElement('h2')
            const buttons = document.createElement('div')

            card.className = 'card'
            buttons.className = 'buttons'

            titulo.textContent = `${task.descricao}`

            card.appendChild(titulo)
            card.appendChild(buttons)

            container.appendChild(card)
        }

    });

}