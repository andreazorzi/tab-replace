// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "tab-replace" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('tab-replace.replace', () => {
		const editor = vscode.window.activeTextEditor;
        
        if (!editor) {
            vscode.window.showErrorMessage('No active editor found');
            return;
        }

        const document = editor.document;
        const fullRange = new vscode.Range(
            document.positionAt(0),
            document.positionAt(document.getText().length)
        );
        
        const text = document.getText();
        const tabsCount = (text.match(/\t/g) || []).length;
        
        if (tabsCount === 0) {
            // vscode.window.showInformationMessage('No tabs found in the document');
            return;
        }

        // Replace all tabs with 4 spaces
		const tabSize = vscode.workspace.getConfiguration('editor', editor.document.uri).get<number>('tabSize') || 4;
        const newText = text.replace(/\t/g, ' '.repeat(tabSize));
        
        editor.edit(editBuilder => {
            editBuilder.replace(fullRange, newText);
        }).then(success => {
            if (success) {
                vscode.window.showInformationMessage(`Converted ${tabsCount} tabs to spaces`);
            } else {
                vscode.window.showErrorMessage('Failed to convert tabs to spaces');
            }
        });
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
