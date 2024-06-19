
const mathBoldScriptUnicode =  [ 0x1D4EA, 0x1D4EB, 0x1D4EC, 0x1D4ED, 0x1D4EE, 0x1D4EF, 0x1D4F0, 0x1D4F1, 0x1D4F2, 0x1D4F3,
    0x1D4F4, 0x1D4F5, 0x1D4F6, 0x1D4F7, 0x1D4F8, 0x1D4F9, 0x1D4FA, 0x1D4FB, 0x1D4FC, 0x1D4FD, 0x1D4FE, 0x1D4FF, 0x1D500,
    0x1D501, 0x1D502, 0x1D503  ]

function changeFont(characters, font) {
    if(characters.length > 0) {
        let output = '';

        characters.forEach( (character) => {
            if(!character.match(/[a-zA-Z]/i)) {
                output+=character;
            } else {
                let placeholder = '';
                placeholder += character.toLowerCase();
                let code = placeholder.charCodeAt(0);
                code = code - 97;
                switch (font) {
                    case 'freaky':
                        output += parseUnicode(mathBoldScriptUnicode[code]);
                        break;
                    case font === ' ':
                        return 'font not specified.';
                    default:
                        return'no such font: ' + font;
                }
            }
        });
        return output;
    }

}

function parseUnicode(element) {
    return  String.fromCharCode(
        (element - 0x10000) >> 10 | 0xD800,
        (element - 0x10000) & 0x3FF | 0xDC00
    );
}