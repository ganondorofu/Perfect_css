// ボタンと要素を取得
const gamingButton = document.getElementById("gaming-button");
const bubble = document.getElementById("bubble");
const body = document.body;

// ボタンが押されたらゲーミングモードをON/OFF
gamingButton.addEventListener("click", () => {
    if (body.classList.contains("gaming-bg")) {
        body.classList.remove("gaming-bg");
        bubble.classList.remove("gaming");
        gamingButton.textContent = "ゲーミング開始";
    } else {
        body.classList.add("gaming-bg");
        bubble.classList.add("gaming");
        gamingButton.textContent = "ゲーミング終了";
    }
});
