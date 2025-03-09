
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
    console.log(a);
}

const inc = () => {changeFontSize(1)};
const dec = () => {changeFontSize(0)};

document.getElementById("increase").addEventListener("click", inc);
document.getElementById("decrease").addEventListener("click", dec);