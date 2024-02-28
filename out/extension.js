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
exports.activate = void 0;
const vscode = __importStar(require("vscode"));
function activate(context) {
    console.log('Congratulations, your extension "intapass" is now active!');
    const provider1 = vscode.languages.registerCompletionItemProvider('python', {
        provideCompletionItems(document, position, token, context) {
            // a simple completion item which inserts `Hello World!`
            const simpleCompletion = new vscode.CompletionItem('Hello World!');
            // a completion item that inserts its text as snippet,
            // the `insertText`-property is a `SnippetString` which will be
            // honored by the editor.
            const snippetCompletion = new vscode.CompletionItem('Good part of the day');
            snippetCompletion.insertText = new vscode.SnippetString('Good ${1|morning,afternoon,evening|}. It is ${1}, right?');
            const docs = new vscode.MarkdownString("Inserts a snippet that lets you select [link](x.ts).");
            snippetCompletion.documentation = docs;
            docs.baseUri = vscode.Uri.parse('http://example.com/a/b/c/');
            // a completion item that can be accepted by a commit character,
            // the `commitCharacters`-property is set which means that the completion will
            // be inserted and then the character will be typed.
            const commitCharacterCompletion = new vscode.CompletionItem('console');
            commitCharacterCompletion.commitCharacters = ['.'];
            commitCharacterCompletion.documentation = new vscode.MarkdownString('Press `.` to get `console.`');
            // a completion item that retriggers IntelliSense when being accepted,
            // the `command`-property is set which the editor will execute after 
            // completion has been inserted. Also, the `insertText` is set so that 
            // a space is inserted after `new`
            const commandCompletion = new vscode.CompletionItem('new');
            commandCompletion.kind = vscode.CompletionItemKind.Keyword;
            commandCompletion.insertText = 'new ';
            commandCompletion.command = { command: 'editor.action.triggerSuggest', title: 'Re-trigger completions...' };
            let comment = `
"""Transfers money to the specified account.

This function initiates a transaction to send money to the account associated with the provided name. It performs necessary validations on the account details and ensures the account exists and is active before proceeding with the transaction.

Parameters:
- account (int): The account number to which money will be sent. Must be a valid and active account number.
- name (str): The name of the account holder. This is used for additional validation to ensure the account number matches the account holder's name.

Returns:
- bool: True if the transaction was successful, False otherwise. A return value of False could indicate an invalid account number, a mismatch between the account number and the holder's name, or a failure in the transaction process.

Raises:
- ValueError: If the \`account\` or \`name\` parameters do not meet validation criteria, such as if they are empty or in an invalid format.
- ConnectionError: If there is a problem connecting to the bank's transaction system.

Note:
- This is a simplified example for documentation purposes. Actual implementation details, such as connecting to a bank's API and handling transactions, are not covered here."""`;
            const autoComment = new vscode.CompletionItem('comment');
            autoComment.insertText = new vscode.SnippetString(comment);
            const commentDocs = new vscode.MarkdownString("Generate comment");
            autoComment.documentation = commentDocs;
            commentDocs.baseUri = vscode.Uri.parse('http://example.com/a/b/c/');
            // return all completion items as array
            return [
                simpleCompletion,
                snippetCompletion,
                commitCharacterCompletion,
                commandCompletion,
                autoComment
            ];
        }
    });
    const provider2 = vscode.languages.registerCompletionItemProvider('plaintext', {
        provideCompletionItems(document, position) {
            // get all text until the `position` and check if it reads `console.`
            // and if so then complete if `log`, `warn`, and `error`
            const linePrefix = document.lineAt(position).text.slice(0, position.character);
            if (!linePrefix.endsWith('console.')) {
                return undefined;
            }
            return [
                new vscode.CompletionItem('log', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('warn', vscode.CompletionItemKind.Method),
                new vscode.CompletionItem('error', vscode.CompletionItemKind.Method),
            ];
        }
    }, '.' // triggered whenever a '.' is being typed
    );
    context.subscriptions.push(provider1, provider2);
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
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map