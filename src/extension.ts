import * as vscode from 'vscode';
import axios from 'axios';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('extension.intapassReview', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showInformationMessage('No open file to review');
            return;
        }
        
        const document = editor.document;
        const text = document.getText();

        axios.post('https://api.intapass.com/review', {
            code: text,
            lang: 'python' // Determine language dynamically based on file extension if necessary
        })
        .then(response => {
            const outputChannel = vscode.window.createOutputChannel('Intapass Review');
            outputChannel.clear();
            outputChannel.appendLine('Review Results:');
            outputChannel.appendLine(JSON.stringify(response.data, null, 2));
            outputChannel.show(true);
        })
        .catch(error => {
            vscode.window.showErrorMessage('Failed to review code');
            console.error(error);
        });
    });

    context.subscriptions.push(disposable);
}
