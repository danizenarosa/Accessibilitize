let dOn = false;
let cOn = false;


async function dyslexia() {
    let [tab] = await chrome.tabs.query({ active: true});
    if (!dOn) {
        dOn = true;
        try {
            chrome.scripting.insertCSS({
                target: {tabId: tab.id},
                files: ["./forDyslexia.css"],
                origin: USER
            });
        } catch {
            console.error(`failed to insert CSS: ${err}`);
        }
    } else {
        dOn = false;
        try {
            chrome.scripting.removeCSS({
                target: {tabId: tab.id},
                files: ["./forDyslexia.css"],
            });
        } catch {
            console.error(`failed to remove CSS: ${err}`);
        }
    }
}

async function colourBlindness() {
    let [tab] = await chrome.tabs.query({ active: true});
    if (!cOn) {
        cOn = true;
        try {
            chrome.scripting.insertCSS({
                target: {tabId: tab.id},
                files: ["./forColourBlind.css"],
                origin: USER
            });
        } catch {
            console.error(`failed to insert CSS: ${err}`);
        }
    } else {
        cOn = false;
        try {
            chrome.scripting.removeCSS({
                target: {tabId: tab.id},
                files: ["./forColourBlind.css"],
            });
        } catch {
            console.error(`failed to remove CSS: ${err}`);
        }
    }
}

document.getElementsByClassName("dyslexia").addEventListener("change", dyslexia);
document.getElementsByClassName("decrease").addEventListener("click", colourBlindness);