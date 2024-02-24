// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "intapass" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let genComments = vscode.commands.registerCommand('intapass.genComments', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Generated comments!');
	});

	context.subscriptions.push(genComments);

	let genUnitTest = vscode.commands.registerCommand('intapass.genUnitTest', () => {
		vscode.window.showInformationMessage('Generated unit tests!');
	});

	context.subscriptions.push(genUnitTest);

	let genDocker = vscode.commands.registerCommand('intapass.genDocker', () => {
		vscode.window.showInformationMessage('Generated Docker!');
	});

	context.subscriptions.push(genDocker);

	let genAnsible = vscode.commands.registerCommand('intapass.genAnsible', () => {
		vscode.window.showInformationMessage('Generated Ansible!');
	});

	context.subscriptions.push(genAnsible);
}

// This method is called when your extension is deactivated
export function deactivate() {}
