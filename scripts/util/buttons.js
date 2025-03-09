
async function changeFontSize(a) {
    let [tab] = await chrome.tabs.query({ active: true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
            if (a) {
                document.body.style.fontSize += 10;
            } else {
                document.body.style.fontSize -= 10;
            }
        }
    });
}

const inc = () => {changeFontSize(1)};
const dec = () => {changeFontSize(0)};

document.getElementsByClassName("increase").addEventListener("click", inc);
document.getElementsByClassName("decrease").addEventListener("click", dec);