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
exports.deactivate = exports.activate = void 0;
const vscode = __importStar(require("vscode"));
const vscode_1 = require("vscode");
function activate(context) {
    console.log('Congratulations, your extension "intapass" is now active!');
    context.subscriptions.push(vscode.commands.registerCommand('intapass.genComments', () => {
        vscode.window.showInformationMessage('Generated comments!');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('intapass.genUnitTest', () => {
        vscode.window.showInformationMessage('Generated unit tests!');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('intapass.genDocker', () => {
        vscode.window.showInformationMessage('Generated Docker!');
    }));
    context.subscriptions.push(vscode.commands.registerCommand('intapass.genAnsible', () => {
        vscode.window.showInformationMessage('Generated Ansible!');
    }));
    // Autocompletion
    // const provider: vscode.InlineCompletionItemProvider = {
    // 	async provideInlineCompletionItems(document, position, context, token) {
    // 		console.log('provideInlineCompletionItems triggered');
    // 		const regexp = /\/\/ \[(.+?),(.+?)\)(.*?):(.*)/;
    // 		if (position.line <= 0) {
    // 			return;
    // 		}
    // 		const result: vscode.InlineCompletionList = {
    // 			items: []
    // 		};
    // 		let offset = 1;
    // 		while (offset > 0) {
    // 			if (position.line - offset < 0) {
    // 				break;
    // 			}
    // 			const lineBefore = document.lineAt(position.line - offset).text;
    // 			const matches = lineBefore.match(regexp);
    // 			if (!matches) {
    // 				break;
    // 			}
    // 			offset++;
    // 			const start = matches[1];
    // 			const startInt = parseInt(start, 10);
    // 			const end = matches[2];
    // 			const endInt =
    // 				end === '*'
    // 					? document.lineAt(position.line).text.length
    // 					: parseInt(end, 10);
    // 			const flags = matches[3];
    // 			const isSnippet = flags.includes('s');
    // 			const text = matches[4].replace(/\\n/g, '\n');
    // 			result.items.push({
    // 				insertText: isSnippet ? new vscode.SnippetString(text) : text,
    // 				range: new Range(position.line, startInt, position.line, endInt),
    // 				filterText: "/**",
    // 				command: {
    // 					command: 'intapass.genComments',
    // 					title: 'My Inline Completion Demo Command'
    // 				},
    // 			});
    // 		}
    // 		return result;
    // 	}
    // };
    const provider = {
        async provideInlineCompletionItems(document, position, context, token) {
            console.log('provideInlineCompletionItems triggered');
            // const regexp = /\/\/ \[(.+?),(.+?)\)(.*?):(.*)/;
            if (position.line <= 0) {
                return;
            }
            const result = {
                items: []
            };
            let insertText = "Hello world";
            let endInt = document.lineAt(position.line).text.length;
            result.items.push({
                insertText: new vscode.SnippetString(insertText),
                range: new vscode_1.Range(position.line, 4, position.line, endInt),
                command: {
                    command: 'intapass.genComments',
                    title: 'My Inline Completion Demo Command'
                },
            });
            // let offset = 1;
            // while (offset > 0) {
            // 	if (position.line - offset < 0) {
            // 		break;
            // 	}
            // 	const lineBefore = document.lineAt(position.line - offset).text;
            // 	const matches = lineBefore.match(regexp);
            // 	if (!matches) {
            // 		break;
            // 	}
            // 	offset++;
            // 	const start = matches[1];
            // 	const startInt = parseInt(start, 10);
            // 	const end = matches[2];
            // 	const endInt =
            // 		end === '*'
            // 			? document.lineAt(position.line).text.length
            // 			: parseInt(end, 10);
            // 	const flags = matches[3];
            // 	const isSnippet = flags.includes('s');
            // 	const text = matches[4].replace(/\\n/g, '\n');
            // 	result.items.push({
            // 		insertText: isSnippet ? new vscode.SnippetString(text) : text,
            // 		range: new Range(position.line, startInt, position.line, endInt),
            // 		filterText: "/**",
            // 		command: {
            // 			command: 'intapass.genComments',
            // 			title: 'My Inline Completion Demo Command'
            // 		},
            // 	});
            // }
            return result;
        }
    };
    context.subscriptions.push(vscode.languages.registerInlineCompletionItemProvider({ pattern: '**' }, provider));
}
exports.activate = activate;
// This method is called when your extension is deactivated
function deactivate() { }
exports.deactivate = deactivate;
//# sourceMappingURL=extension_old.js.map