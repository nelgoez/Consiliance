
window.addEventListener('DOMContentLoaded', (event) => {
    const popup = document.getElementById("popup")
    const { text } = chrome.extension.getBackgroundPage();
    popup.innerHTML = text
});