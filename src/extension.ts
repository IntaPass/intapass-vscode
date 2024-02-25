import * as vscode from 'vscode';
import { Range } from 'vscode';

export function activate(context: vscode.ExtensionContext) {
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
	const provider: vscode.InlineCompletionItemProvider = {
		async provideInlineCompletionItems(document, position, context, token) {
			console.log('provideInlineCompletionItems triggered');
			const regexp = /\/\/ \[(.+?),(.+?)\)(.*?):(.*)/;
			if (position.line <= 0) {
				return;
			}

			const result: vscode.InlineCompletionList = {
				items: []
			};

			let offset = 1;
			while (offset > 0) {
				if (position.line - offset < 0) {
					break;
				}
				
				const lineBefore = document.lineAt(position.line - offset).text;
				const matches = lineBefore.match(regexp);
				if (!matches) {
					break;
				}
				offset++;

				// const start = matches[1];
				// const startInt = parseInt(start, 10);
				// const end = matches[2];
				// const endInt =
				// 	end === '*'
				// 		? document.lineAt(position.line).text.length
				// 		: parseInt(end, 10);
				// const flags = matches[3];
				// const completeBracketPairs = flags.includes('b');
				// const isSnippet = flags.includes('s');
				// const text = matches[4].replace(/\\n/g, '\n');

				result.items.push({
					insertText: "Hellow bitches" , //isSnippet ? new vscode.SnippetString(text) : text,
					range: new Range(position.line, 0, position.line, 20),//new Range(position.line, startInt, position.line, endInt),
					filterText: "absc",
					// completeBracketPairs,
					command: {
						command: 'intapass.genComments',
						title: 'My Inline Completion Demo Command'
					}
				});
			}
			return result;
		},

		// handleDidShowCompletionItem(completionItem: vscode.InlineCompletionItem): void {
		// 	console.log('handleDidShowCompletionItem');
		// },

		// /**
		//  * Is called when an inline completion item was accepted partially.
		//  * @param acceptedLength The length of the substring of the inline completion that was accepted already.
		//  */
		// handleDidPartiallyAcceptCompletionItem(
		// 	completionItem: vscode.InlineCompletionItem,
		// 	acceptedLength: number
		// ): void {
		// 	console.log('handleDidPartiallyAcceptCompletionItem');
		// },
	};
	context.subscriptions.push(vscode.languages.registerInlineCompletionItemProvider({ pattern: '**' }, provider));
}

// This method is called when your extension is deactivated
export function deactivate() {}
