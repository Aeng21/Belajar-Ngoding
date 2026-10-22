import * as vscode from 'vscode';
import { translate } from '@vitalets/google-translate-api'; // Package terjemahan

export function activate(context: vscode.ExtensionContext) {

    // Membuat fitur Hover (muncul saat mouse diarahkan ke kode)
    let hoverProvider = vscode.languages.registerHoverProvider('*', {
        async provideHover(document, position, token) {

            // 1. Ambil semua error (Diagnostics) di file ini
            const diagnostics = vscode.languages.getDiagnostics(document.uri);

            // 2. Cari apakah ada error tepat di posisi mouse saat ini
            const errorDiSini = diagnostics.find(d => d.range.contains(position));

            if (errorDiSini) {
                try {
                    // 3. Terjemahkan pesan error aslinya
                    const pesanInggris = errorDiSini.message;
                    const hasil = await translate(pesanInggris, { to: 'id' });

                    // 4. Tampilkan ke dalam kotak melayang (Hover) menggunakan format Markdown
                    const tampilanMarkdown = new vscode.MarkdownString();
                    tampilanMarkdown.appendMarkdown(`🇮🇩 **Terjemahan Error:**\n\n_${hasil.text}_`);

                    return new vscode.Hover(tampilanMarkdown);
                } catch (err) {
                    return null; // Abaikan jika gagal menerjemahkan
                }
            }
        }
    });

    // Daftarkan ekstensi ke memori VS Code
    context.subscriptions.push(hoverProvider);
}
