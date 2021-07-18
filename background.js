
chrome.runtime.onMessage.addListener((msg, sender, res) => {
    console.log("recived at back", msg.text)
    window.text=msg.text
}); 