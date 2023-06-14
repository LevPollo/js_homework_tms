let data = {};

function getTodos() {
    return fetch("https://jsonplaceholder.typicode.com/todos")
        .then(response => {
            console.log("respinse:");
            if(!response.ok) {
                throw new Error(`Error: ${response.status}`);
            } 
            return response.json(); 

        })
        .then(data => {
            console.log("data:");
            processToDos(data);
        })
        .catch(error => {
            console.log("Error:", error);
        })
       
}

function processToDos(todos) {
    data = {...todos};
    
    printTodos();
}

function printTodos() {
    const ul = document.createElement("ul");
    ul.classList.add("data-ul");
    
    const div = document.createElement("div");
    div.classList.add("data-div");

    for (let key in data){
        const li = document.createElement("li");
        li.classList.add("data-li");
      
        li.textContent = data[key].id + " " + data[key].title;
        ul.appendChild(li);
    }

    div.appendChild(ul);
    document.body.appendChild(div);
}

getTodos();

