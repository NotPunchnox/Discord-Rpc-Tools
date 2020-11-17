const {
    remote
} = require('electron');

function appquit() {
    let window = remote.getCurrentWindow();
    window.close();
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("close").addEventListener("click", appquit);
});

function maximize() {
    let window = remote.getCurrentWindow();

    if (!window.isMaximized()) {
        window.maximize();
    } else {
        window.unmaximize();
    }
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("max").addEventListener("click", maximize);
});

function minimiz() {
    let window = remote.getCurrentWindow();
    window.minimize();
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("min").addEventListener("click", minimiz);
});


function infos() {
    document.getElementById("logintoken").classList.remove("visible");
    document.getElementById("logintoken").classList.add("invisible");
    document.getElementById("panel").classList.remove("invisible");
    document.getElementById("panel").classList.add("visible");
}

/* check box
<label class="switch">
  <input type="checkbox" id="test check box" checked="false">
  <span class="slider round"></span>
</label>
*/