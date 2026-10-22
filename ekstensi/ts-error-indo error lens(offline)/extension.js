const vscode = require("vscode");
const { translate } = require("./translations");

const SOURCE_ID = "ts-indo";
// Sumber diagnostic yang diterjemahkan (TypeScript language server bawaan VS Code)
const TARGET_SOURCES = new Set(["ts", "ts(plugin)"]);

function activate(context) {
  const collection = vscode.languages.createDiagnosticCollection(SOURCE_ID);
  context.subscriptions.push(collection);

  function refresh(uri) {
    const result = [];
    for (const d of vscode.languages.getDiagnostics(uri)) {
      if (!TARGET_SOURCES.has(d.source)) continue;
      // pesan yang belum ada di kamus tetap ditampilkan (bahasa Inggris) supaya tidak hilang dari Error Lens
      const id = translate(d.message) ?? d.message;
      const nd = new vscode.Diagnostic(d.range, id, d.severity);
      nd.source = SOURCE_ID;
      nd.code = d.code;
      nd.tags = d.tags;
      nd.relatedInformation = d.relatedInformation?.map(
        (r) => new vscode.DiagnosticRelatedInformation(r.location, translate(r.message) ?? r.message)
      );
      result.push(nd);
    }
    if (result.length) collection.set(uri, result);
    else collection.delete(uri);
  }

  context.subscriptions.push(
    vscode.languages.onDidChangeDiagnostics((e) => e.uris.forEach(refresh)),
    vscode.workspace.onDidCloseTextDocument((doc) => collection.delete(doc.uri))
  );

  vscode.workspace.textDocuments.forEach((doc) => refresh(doc.uri));
}

function deactivate() {}

module.exports = { activate, deactivate };
