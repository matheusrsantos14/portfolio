var modal = document.getElementById('modal');
var modalBtn = document.getElementById("modal-btn");
var span = document.getElementsByClassName("close")[0];

modalBtn.onclick = function() {
    modal.style.display = "inline-block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
