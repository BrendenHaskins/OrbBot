/**
 * fontUtilities module handles all font manipulation
 * @author Brenden Haskins
 */

const mathBoldScriptUnicode =  [ 0x1D4EA, 0x1D4EB, 0x1D4EC, 0x1D4ED, 0x1D4EE, 0x1D4EF, 0x1D4F0, 0x1D4F1, 0x1D4F2, 0x1D4F3,
    0x1D4F4, 0x1D4F5, 0x1D4F6, 0x1D4F7, 0x1D4F8, 0x1D4F9, 0x1D4FA, 0x1D4FB, 0x1D4FC, 0x1D4FD, 0x1D4FE, 0x1D4FF, 0x1D500,
    0x1D501, 0x1D502, 0x1D503  ]

const braille = [0x2801, 0x2803, 0x2809, 0x2819, 0x2811, 0x280B, 0x281B, 0x2813, 0x280A, 0x281A, 0x2805, 0x2807, 0x280D,
     0x281D, 0x2815, 0x280F, 0x281F, 0x2817, 0x280E, 0x281E, 0x2825, 0x2827, 0x283A, 0x282D, 0x283D, 0x2835];

const markdownLanguages = [
    'abap', 'actionscript', 'ada', 'apache', 'applescript', 'asciidoc', 'asm', 
    'asp', 'awk', 'bash', 'basic', 'bsh', 'c', 'csharp', 'cpp', 'css', 'd', 
    'delphi', 'diff', 'dos', 'erlang', 'fsharp', 'fortran', 'gcode', 'go', 
    'groovy', 'haskell', 'haxe', 'http', 'java', 'javascript', 'json', 'julia', 
    'kotlin', 'latex', 'lisp', 'lua', 'makefile', 'markdown', 'matlab', 'nginx', 
    'nim', 'objectivec', 'ocaml', 'perl', 'php', 'plaintext', 'powershell', 
    'prolog', 'protobuf', 'python', 'r', 'ruby', 'rust', 'sas', 'scala', 'scheme', 
    'scss', 'shell', 'sql', 'swift', 'typescript', 'vala', 'vbnet', 'verilog', 
    'vhdl', 'vim', 'xml', 'yaml'
];


function changeFont(body, font) {
    let characters = Array.from(body);

    if(characters.length > 0) {
        let output = '';

        characters.forEach((character) => {
            if(!character.match(/[a-zA-Z]/i)) {
                output+=character;
            } else {
                let placeholder = '';
                placeholder += character.toLowerCase();
                let code = placeholder.charCodeAt(0);
                code = code - 97;
                switch (font) {
                    case 'mbs':
                        output += parseUnicode(mathBoldScriptUnicode[code]);
                        break;
                    case 'brl':
                        output += String.fromCharCode(braille[code]);
                        break;
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

function convertToMarkdown(body, language) {
    if(language && markdownLanguages.includes(language)) {
        return `\`\`\`${language}\n${body}\`\`\``
    } else {
        return `\`\`\`${body}\`\`\``
    }
}

//allow module exporting of functions
module.exports = {
    changeFont,
    convertToMarkdown
};