function agregarTarea() {
    let input = document.getElementById("tarea");
    let horaInput = document.getElementById("hora");

    let texto = input.value;
    let hora = horaInput.value;

    if (texto === "" || hora === "") {
        alert("Escribe una tarea y selecciona una hora");
        return;
    }

    let li = document.createElement("li");

    // Texto de la tarea
    let span = document.createElement("span");
    span.textContent = texto + " - " + hora;


    span.onclick = function () {
        span.style.textDecoration = 
            span.style.textDecoration === "line-through" 
            ? "none" 
            : "line-through";
    };


    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.onclick = function () {
        li.remove();
    };


    let btnEditar = document.createElement("button");
    btnEditar.textContent = "Actualizar";
    btnEditar.onclick = function () {
        let nuevoTexto = prompt("Nueva tarea:", texto);
        let nuevaHora = prompt("Nueva hora:", hora);

        if (nuevoTexto && nuevaHora) {
            texto = nuevoTexto;
            hora = nuevaHora;
            span.textContent = texto + " - " + hora;
        }
    };

    li.appendChild(span);
    li.appendChild(btnEditar);
    li.appendChild(btnEliminar);

    document.getElementById("lista").appendChild(li);

    input.value = "";
    horaInput.value = "";
}