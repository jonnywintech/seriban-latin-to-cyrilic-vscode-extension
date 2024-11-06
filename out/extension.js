"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = activate;
exports.deactivate = deactivate;
const vscode = __importStar(require("vscode"));
function activate(context) {
    let disposable = vscode.commands.registerCommand('extension.convertToSerbian', () => {
        const editor = vscode.window.activeTextEditor;
        if (editor) {
            const document = editor.document;
            const selection = editor.selection;
            const text = document.getText(selection);
            const convertedText = convertLatinToCyrillic(text);
            editor.edit(editBuilder => {
                editBuilder.replace(selection, convertedText);
            });
        }
    });
    context.subscriptions.push(disposable);
}
function convertLatinToCyrillic(text) {
    const latinToCyrillic = {
        'a': 'а', 'b': 'б', 'v': 'в', 'g': 'г', 'd': 'д',
        'đ': 'ђ', 'e': 'е', 'ž': 'ж', 'z': 'з', 'i': 'и',
        'j': 'ј', 'k': 'к', 'l': 'л', 'lj': 'љ', 'm': 'м',
        'n': 'н', 'nj': 'њ', 'o': 'о', 'p': 'п', 'r': 'р',
        's': 'с', 't': 'т', 'ć': 'ћ', 'u': 'у', 'f': 'ф',
        'h': 'х', 'c': 'ц', 'č': 'ч', 'dž': 'џ', 'š': 'ш',
        'A': 'А', 'B': 'Б', 'V': 'В', 'G': 'Г', 'D': 'Д',
        'Đ': 'Ђ', 'E': 'Е', 'Ž': 'Ж', 'Z': 'З', 'I': 'И',
        'J': 'Ј', 'K': 'К', 'L': 'Л', 'Lj': 'Љ', 'M': 'М',
        'N': 'Н', 'Nj': 'Њ', 'O': 'О', 'P': 'П', 'R': 'Р',
        'S': 'С', 'T': 'Т', 'Ć': 'Ћ', 'U': 'У', 'F': 'Ф',
        'H': 'Х', 'C': 'Ц', 'Č': 'Ч', 'Dž': 'Џ', 'Š': 'Ш'
    };
    // Handle special cases first (digraphs)
    text = text.replace(/Lj/g, 'Љ');
    text = text.replace(/lj/g, 'љ');
    text = text.replace(/Nj/g, 'Њ');
    text = text.replace(/nj/g, 'њ');
    text = text.replace(/Dž/g, 'Џ');
    text = text.replace(/dž/g, 'џ');
    // Convert remaining single characters
    return text.split('').map(char => latinToCyrillic[char] || char).join('');
}
function deactivate() { }
//# sourceMappingURL=extension.js.map