function agregarTarea() {
    let input = document.getElementById("tarea");
    let texto = input.value;

    if (texto === "") {
        alert("Escribe una tarea");
        return;
    }

    let li = document.createElement("li");
    li.textContent = texto;

    li.onclick = function () {
        this.remove();
    };

    document.getElementById("lista").appendChild(li);

    input.value = "";
}