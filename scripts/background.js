let dOn = false;
let cOn = false;
let On = false;


async function dyslexia() {
    let [tab] = await chrome.tabs.query({ active: true});
    console.log(On);
    if (On) {
        if (!dOn) {
            console.log(dOn);
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
            console.log(dOn);
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
}

async function colourBlindness() {
    let [tab] = await chrome.tabs.query({ active: true});
    console.log(On);
    if (On) {
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
}

function changeState() {
    On = On === true ? false : true;
}

document.getElementById("dyslexia").addEventListener("change", dyslexia);
document.getElementById("decrease").addEventListener("change", colourBlindness);
document.getElementById("on").addEventListener("change", changeState);