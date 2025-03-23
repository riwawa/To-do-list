document.addEventListener('DOMContentLoaded', function () {
    const inputField = document.getElementById('itemInput'); // Campo de entrada
    const addButton = document.getElementById('addButton'); // Botão de adicionar
    const todoList = document.getElementById('todoList'); // Lista onde as tarefas serão adicionadas

    // Função para adicionar uma tarefa
    function addTask(taskContent) {
        // Cria um item de lista
        const li = document.createElement('li');
        
        // Cria a estrutura de cada tarefa
        const taskText = document.createElement('span');
        taskText.textContent = taskContent;

        // Cria o botão de excluir
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir';
        deleteButton.classList.add('deleteButton');

        // Cria o checkbox para marcar como concluído
        const completeCheckbox = document.createElement('input');
        completeCheckbox.type = 'checkbox';
        completeCheckbox.classList.add('completeCheckbox');

        // Adiciona os elementos à tarefa
        li.appendChild(completeCheckbox);
        li.appendChild(taskText);
        li.appendChild(deleteButton);

        // Adiciona a tarefa à lista
        todoList.appendChild(li);

        // Evento para marcar tarefa como concluída
        completeCheckbox.addEventListener('change', function () {
            if (completeCheckbox.checked) {
                taskText.style.textDecoration = 'line-through'; // Marca como concluída
            } else {
                taskText.style.textDecoration = 'none'; // Desmarca a tarefa
            }
        });

        // Evento para excluir a tarefa
        deleteButton.addEventListener('click', function () {
            todoList.removeChild(li); // Remove a tarefa da lista
        });
    }

    // Evento para adicionar tarefa ao clicar no botão
    addButton.addEventListener('click', function () {
        const taskContent = inputField.value.trim(); // Pega o conteúdo do input

        if (taskContent) {
            addTask(taskContent); // Adiciona a tarefa
            inputField.value = ''; // Limpa o campo de entrada
        } else {
            alert("Por favor, digite uma tarefa!"); // Alerta se o campo estiver vazio
        }
    });

    // Evento para adicionar tarefa pressionando a tecla "Enter"
    inputField.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const taskContent = inputField.value.trim(); // Pega o conteúdo do input

            if (taskContent) {
                addTask(taskContent); // Adiciona a tarefa
                inputField.value = ''; // Limpa o campo de entrada
            } else {
                alert("Por favor, digite uma tarefa!"); // Alerta se o campo estiver vazio
            }
        }
    });
});
