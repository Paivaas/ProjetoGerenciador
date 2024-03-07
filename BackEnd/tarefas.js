'use strict'

document.addEventListener('DOMContentLoaded', function() {

    const botaoAddTarefa = document.getElementById('botaoAdicionarTarefa');
    const nomeTarefa = document.getElementById('nomeTarefa');
    const listaTarefas = document.getElementById('listaTarefas');

    botaoAddTarefa.addEventListener('click', function() {
        if (nomeTarefa.value) {
            const tarefa = {
                nome: nomeTarefa.value,
            };

            adicionarTarefa(tarefa);

            nomeTarefa.value = '';
        }
    });

    function adicionarTarefa(tarefa) {
        const list = document.createElement('li');
        listaTarefas.appendChild(list);
    }
});