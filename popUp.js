function setup() {
    const { text } = chrome.extension.getBackgroundPage();
    createP(text)
}