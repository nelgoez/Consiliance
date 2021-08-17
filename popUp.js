

window.addEventListener('DOMContentLoaded', (event) => {
    const { text } = chrome.extension.getBackgroundPage();
    const popup = document.getElementById("popup")
    popup.innerHTML = text
});
