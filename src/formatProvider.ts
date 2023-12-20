// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as vscode from "vscode";

export class MakefileDocumentFormatProvider implements vscode.DocumentFormattingEditProvider {
    provideDocumentFormattingEdits(document: vscode.TextDocument, options: vscode.FormattingOptions, token: vscode.CancellationToken): vscode.ProviderResult<vscode.TextEdit[]> {
        const formatterEnabled = vscode.workspace.getConfiguration("makefile").get("formatter.enabled");

        if (!formatterEnabled) {
          return [];
        }
        
        return [vscode.TextEdit.insert(document.lineAt(0).range.start, 'MAKEFILE_FORMATTER\n\n')]
    }
}