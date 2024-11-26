function togglePaper() {
    var paper = document.getElementById("paper");
    var botonRegreso = document.getElementById("botonRegreso");

    if (paper.style.display === "none") {
        paper.style.display = "block";
        botonRegreso.style.display = "block";
    } else {
        paper.style.display = "none";
        botonRegreso.style.display = "none";
    }
}
