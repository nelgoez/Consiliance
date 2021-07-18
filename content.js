
var text = '';
var center = document.elementFromPoint(
    document.body.offsetWidth / 2, document.body.offsetHeight / 2
)
var selected = window.getSelection()
var over = window.onmouseover

const getString = ({ type }) => {
    if (type == "mouseup" && selected) text = selected.toString()
    else if (type == "mouseover" && over) text = over.toString()
    chrome.runtime.sendMessage({ text })
    console.log(text)
}

window.addEventListener("mouseup", getString)
window.addEventListener("mouseover", getString)
window.addEventListener("load", () => {
    if (!text.length) text = center.textContent 
})
