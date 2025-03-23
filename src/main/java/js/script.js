function adicionarTarefa() {
    let tarefa = document.getElementById('tarefaInput').value;
    if(tarefa) {
        let lista = document.getElementById('listaTarefas');
        let item = document.createElement('li');
        item.textContent = tarefa;
        lista.appendChild(item);
    }
}
