import React from "react";
import { Quill } from "react-quill";
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { htmlEditButton } from 'quill-html-edit-button';
// import Table from 'quill-table-ui';
// import QuillBetterTable from 'quill-better-table'
// import 'quill-better-table/dist/quill-better-table.css';

// import BetterTable from 'quill-better-table';
// import 'quill-better-table/dist/quill-better-table.css';


// Quill.register('modules/htmlEditButton', require('quill-html-edit-button'));
Quill.register(QuillDeltaToHtmlConverter, true);
Quill.register('modules/htmlEditButton', htmlEditButton);
// Quill.register('modules/table', Table);
// Quill.register({
//   'modules/better-table': BetterTable,
//   'formats/table': BetterTable.TableCell,
// }, true);




// Custom Undo button icon component for Quill editor. You can import it directly
// from 'quill/assets/icons/undo.svg' but I found that a number of loaders do not
// handle them correctly
const CustomUndo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10" />
    <path
      className="ql-stroke"
      d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"
    />
  </svg>
);

// Redo button icon component for Quill editor
const CustomRedo = () => (
  <svg viewBox="0 0 18 18">
    <polygon className="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10" />
    <path
      className="ql-stroke"
      d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"
    />
  </svg>
);

// Undo and redo functions for Custom Toolbar
function undoChange() {
  this.quill.history.undo();
}
function redoChange() {
  this.quill.history.redo();
}

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);

// Add fonts to whitelist and register them
const Font = Quill.import("formats/font");
Font.whitelist = [
  "arial",
  "comic-sans",
  "courier-new",
  "georgia",
  "helvetica",
  "lucida"
];
Quill.register(Font, true);

// Modules object for setting up the Quill editor
export const modules = {
  toolbar: {
    container: "#toolbar",
    handlers: {
      undo: undoChange,
      redo: redoChange
    },
    'insertTable': true,
    'insertRowAbove': true,
    'insertRowBelow': true,
    'insertColumnLeft': true,
    'insertColumnRight': true,
    'deleteRow': true,
    'deleteColumn': true,
    'deleteTable': true,
  },
  history: {
    delay: 500,
    maxStack: 100,
    userOnly: true
  },
  htmlEditButton: {
    debug: true, // log events to console
    msg: 'Edit the HTML here.', // Custom message for the prompt
    okText: 'Apply', // Text for the OK button
    cancelText: 'Cancel', // Text for the cancel button
    buttonHTML: '&lt;&gt;', // HTML for the edit button
    buttonTitle: 'Show HTML source' // Button title
  },
  // 'better-table': {
  //   operationMenu: {
  //     items: {
  //       unmergeCells: {
  //         text: 'Unmerge cells'
  //       }
  //     },
  //     color: {
  //       colors: ['#fff', 'red', 'rgb(0, 0, 0)'], // colors in operationMenu
  //       text: 'Background Colors' // tooltip text
  //     }
  //   }
  // },
  clipboard: {
    matchVisual: false,
  },

};

// Formats objects for setting up the Quill editor
export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "align",
  "strike",
  "script",
  "blockquote",
  "background",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "color",
  "code-block",
  'table',
];

// Quill Toolbar component
export const QuillToolbar = () => (
  <div id="toolbar">
    <span className="ql-formats">
      <select className="ql-font" defaultValue="arial">
        <option value="arial">Arial</option>
        <option value="comic-sans">Comic Sans</option>
        <option value="courier-new">Courier New</option>
        <option value="georgia">Georgia</option>
        <option value="helvetica">Helvetica</option>
        <option value="lucida">Lucida</option>
      </select>
      <select className="ql-size" defaultValue="medium">
        <option value="extra-small">Size 1</option>
        <option value="small">Size 2</option>
        <option value="medium">Size 3</option>
        <option value="large">Size 4</option>
      </select>
      <select className="ql-header" defaultValue="3">
        <option value="1">Heading</option>
        <option value="2">Subheading</option>
        <option value="3">Normal</option>
      </select>
    </span>
     <span className="ql-formats">
      <button className="ql-bold" />
      <button className="ql-italic" />
      <button className="ql-underline" />
      <button className="ql-strike" />
    </span>
    <span className="ql-formats">
      <button className="ql-list" value="ordered" />
      <button className="ql-list" value="bullet" />
      <button className="ql-indent" value="-1" />
      <button className="ql-indent" value="+1" />
    </span>
   <span className="ql-formats">
      <button className="ql-script" value="super" />
      <button className="ql-script" value="sub" />
      <button className="ql-blockquote" />
      <button className="ql-direction" />
    </span>
     {/* <span className="ql-formats">
      <select className="ql-align" />
      <select className="ql-color" />
      <select className="ql-background" />
    </span> */}
     <span className="ql-formats">
      <button className="ql-link" />
      <button className="ql-image" />
      <button className="ql-video" />
    </span> 
    <span className="ql-formats">
      <button className="ql-formula" />
      <button className="ql-code-block" />
      <button className="ql-clean" />
    </span>
    <span className="ql-formats">
      <button className="ql-undo">
        <CustomUndo />
      </button>
      <button className="ql-redo">
        <CustomRedo />
      </button>
    </span>
    <span className="ql-insertTable">
      <button className="ql-insertTable" />
    </span>
  </div>
);

export default QuillToolbar;
