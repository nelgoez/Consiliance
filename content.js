

var text = '';
var prevDOM = null;
var srcElement = null;
var MOUSE_VISITED_CLASSNAME = 'visited-element'
var center = document.elementFromPoint(
    Math.ceil(document.body.offsetWidth / 2), Math.floor(document.body.offsetHeight / 2)
)

const getString = ({ type }) => {
    var centerText = center.innerHTML.toString() || 'Nop 1!'
    var selected = window.getSelection() || 'Nop 2!'
    var hover = srcElement || 'Nop 3!'
    var selection = selected.toString()
    const textSources = {
        mouseup: selection,
        load: centerText,
        mouseover: hover,
    }
    text = textSources[type]
    if (!text.length) text = centerText
    chrome.runtime.sendMessage({ text })
}

window.addEventListener("load", getString)
window.addEventListener("mouseup", getString)
window.addEventListener("mouseover", getString)

document.addEventListener('mousemove', function (e) {
    srcElement = e.target.textContent;
    // Lets check if our underlying element is a DIV.
    if (srcElement.nodeName == 'DIV') {

        // For NPE checking, we check safely. We need to remove the class name
        // Since we will be styling the new one after.
        if (prevDOM != null) {
            prevDOM.classList.remove(MOUSE_VISITED_CLASSNAME);
        }

        // Add a visited class name to the element. So we can style it.
        srcElement.classList.add(MOUSE_VISITED_CLASSNAME);

        // The current element is now the previous. So we can remove the class
        // during the next iteration.
        prevDOM = srcElement;
    }
}, false);



const footer = document.createElement('nav')
footer.style.position='sticky'
footer.style.top='100%'
const innerPharaf = document.createElement('p').appendChild(document.createTextNode(window.text.concat(' El footer')))
footer.appendChild(innerPharaf)

const body = document.getElementsByTagName("body")[0]

body.appendChild(footer)


chrome.runtime.connect().onDisconnect.addListener(function () {
    // clean up when content script gets disconnected
    window.removeEventListener()
})
