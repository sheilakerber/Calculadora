//<input type="button" value="Calcular" onclick="">
function somar() {
    document.getElementById("resultado").value = Number(document.getElementById("n1").value) + Number(document.getElementById("n2").value)
    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
}

function subtrair() {
    document.getElementById("resultado").value = Number(document.getElementById("n1").value) - Number(document.getElementById("n2").value)
    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
}

function multiplicar() {
    document.getElementById("resultado").value = Number(document.getElementById("n1").value) * Number(document.getElementById("n2").value)
    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
}

function dividir() {
    document.getElementById("resultado").value = Number(document.getElementById("n1").value) / Number(document.getElementById("n2").value)
    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
}