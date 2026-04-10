function agregarTarea() {
    let input = document.getElementById("tarea");
    let texto = input.value.trim();

    if (texto === "") {
        alert("Escribe una tarea");
        return;
    }

    let li = document.createElement("li");
    li.textContent = texto;

    // eliminar con animación
    li.onclick = function () {
        li.style.opacity = "0";
        li.style.transform = "translateX(100px)";
        setTimeout(() => li.remove(), 300);
    };

    document.getElementById("lista").appendChild(li);

    input.value = "";
}