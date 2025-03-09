

const forDyslexia = () => {
    const dyslexiaStyles = ['font-family: Verdana, Arial, sans-serif !important;',
        'font-size: min(16px) !important;',
        'letter-spacing: 0.35ch !important;',
        'word-spacing: letter-spacing * 3.5 !important;',
        'line-height: word-spacing * 1.5 !important;'
    ];

    let style = document.createElement("style");
    let a;
    let x = document.createTextNode("body {");
    for (let style in dyslexiaStyles) {
        a = document.createTextNode(style);
        x.appendChild(a);
    }
    a = document.createTextNode("}");
    x.appendChild(a);

    a = document.createTextNode("i { font-style: normal !important");
    x.appendChild(a);
    a = document.createTextNode("font-weight: bold !important");
    x.appendChild(a);

    document.head.appendChild(x);
}


const forRG = () => {
    
}


const forYB = () => {

}

const forC = () => {

}

