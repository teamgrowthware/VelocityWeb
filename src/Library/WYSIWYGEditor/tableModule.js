import Quill from 'quill';

export default function TableModule(quill) {
  const toolbar = quill.getModule('toolbar');
  toolbar.addHandler('table', () => {
    const range = quill.getSelection();
    const tableHtml = `
      <table border="1" style="width:100%; border-collapse: collapse;">
        <tr><td> </td><td> </td><td> </td></tr>
        <tr><td> </td><td> </td><td> </td></tr>
        <tr><td> </td><td> </td><td> </td></tr>
      </table>`;
    quill.clipboard.dangerouslyPasteHTML(range.index, tableHtml);
  });
}
