var text = window.getSelection().toString() || document.elementFromPoint(
    document.body.offsetWidth / 2, document.body.offsetHeight / 2
  );
const getText = () =>{
    text = window.getSelection().toString()
    console.log(text)
    chrome.runtime.sendMessage({text})
}
this.addEventListener("mouseup", getText)
