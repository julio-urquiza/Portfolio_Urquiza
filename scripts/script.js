document.getElementById("miFormulario").addEventListener("submit", function (e) {
    e.preventDefault();

    const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSctSoLMdI2UMcoEIQm1enPTDfjw8AUoeEyCAlcxf1CkF3L_9g/formResponse";

    const formData = new FormData();
    formData.append("entry.4902247", document.getElementById("nombre").value);
    formData.append("entry.27494666", document.getElementById("email").value);
    formData.append("entry.326275124", document.getElementById("mensaje").value);

    fetch(formURL, {
        method: "POST",
        mode: "no-cors",
        body: formData
    }).then(() => {
        alert("Mensaje enviado");
        document.getElementById("miFormulario").reset();
    }).catch(err => {
        console.error("Error:", err);
        alert("Hubo un problema");
    });
});