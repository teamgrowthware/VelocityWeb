import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

ClassicEditor.create(document.querySelector('#editor'), {
    plugins: [Image],
    toolbar: ['insertImage', /* ... */],
    image: {
        insert: {
            // This is the default configuration, you do not need to provide
            // this configuration key if the list content and order reflects your needs.
            integrations: ['upload', 'assetManager', 'url']
        }
    }
})
    .then( /* ... */)
    .catch( /* ... */);

const Editor = () => {
    const [editorData, setEditorData] = useState('');
    return (
        <div>
            <h2>CKEditor 5 with React</h2>
            <CKEditor
                id={"editor"}
                editor={ClassicEditor}
                data={editorData}
                onReady={(editor) => {
                    console.log('Editor is ready to use!', editor);
                }}
                onChange={(event, editor) => {
                    const data = editor.getData();
                    setEditorData(data);
                }}
                onBlur={(event, editor) => {
                    console.log('Blur.', editor);
                }}
                onFocus={(event, editor) => {
                    console.log('Focus.', editor);
                }}
            />
            <div>
                <h3>Editor Data:</h3>
                <div>{editorData}</div>
            </div>
        </div>
    );
};

export default Editor;
