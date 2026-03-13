let random = Math.floor(Math.random() * 100) + 1;

let attempts = 0;
function check() {
    let user = document.getElementById("guess").value;
    if (user < 1 || user > 100) {
        document.getElementById("result").innerText = `Enter Number between 1 to 100`;
        return;
    }
    attempts++;
    document.getElementById("attempts").innerText = attempts;

    if (user == random) {
        document.getElementById("result").innerText = `Correct! You guess in  ${attempts} attempts`;
    }

    else if (user > random) {
        document.getElementById("result").innerText = "Too High";
    }

    else {
        document.getElementById("result").innerText = "Too Low";
    }
}

function restartGame() {
    random = Math.floor(Math.random() * 100 + 1);
    attempts = 0;
    document.getElementById("attempts").innerText = 0;
    document.getElementById("result").innerText = "";
    document.getElementById("guess").value = "";
}