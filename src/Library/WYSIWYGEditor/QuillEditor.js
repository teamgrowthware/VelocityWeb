import React, { useEffect, useRef, useState } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';
import QuillBetterTable from 'quill-better-table';
import 'quill-better-table/dist/quill-better-table.css';
import TableModule from './tableModule';
import "./table.css"
import MediaPopup from '../../container/Media/MediaPopup';
import { Button, SideDrawer } from '../Module';
const Font = Quill.import('formats/font');


// Register Quill Better Table module
Quill.register({
    'modules/better-table': QuillBetterTable
},
    true
);

Font.whitelist = ['serif']; // Add your desired fonts
Quill.register(Font, true);

// Add sizes to whitelist and register them
const Size = Quill.import("formats/size");
Size.whitelist = ["extra-small", "small", "medium", "large"];
Quill.register(Size, true);


const QuillEditor = ({
    inputName,
    labelName = " ",
    placeholder,
    required,
    onChangeSingleCallback,
    col = "12",
    disabled,
    value,
    defaultalue
}) => {
    const editorRef = useRef(null);
    const [html, setHtml] = useState('');
    const [editor, setEditor] = useState(null);


    useEffect(() => {
        console.log("editorRef", editorRef)
        const quill = new Quill(editorRef.current, {
            theme: 'snow',
            modules: {
                table: false,
                toolbar: {
                    container: [
                        [{ 'font': Font.whitelist }],   // Font family options
                        [{ header: [1, 2, 3, 4, 5, 6, false] }],
                        ['bold', 'italic', 'underline', 'link'],
                        [{ list: 'ordered' }, { list: 'bullet' }],
                        ['image', 'video', 'code-block'],
                        ['table'],
                    ],
                    handlers: {
                        'video': () => imageHandler,
                        image: () => {
                            const input = document.createElement('input');
                            input.setAttribute('type', 'file');
                            input.setAttribute('accept', 'image/*');
                            input.click();
                            input.onchange = () => {
                                const file = input.files[0];
                                const reader = new FileReader();
                                reader.onload = (e) => {
                                    const range = quill.getSelection();
                                    quill.insertEmbed(range.index, 'image', e.target.result);
                                };
                                reader.readAsDataURL(file);
                            };
                        },
                    },
                },
                'better-table': {
                    operationMenu: {
                        items: {
                            unmergeCells: {
                                text: 'Another unmerge cells name'
                            }
                        },
                        color: {
                            colors: ['green', 'red', 'yellow', 'blue', 'white'],
                            text: 'Background Colors:'
                        }
                    }
                },
                clipboard: {
                    matchVisual: false,
                    bindings: QuillBetterTable.keyboardBindings
                },
            },


        });

        // quill.clipboard.addMatcher(Node.ELEMENT_NODE, (node, delta) => {
        //     // Handle tables
        //     console.log("delta delta table", node.tagName, delta)
        //     if (node.tagName === 'TABLE') {
        //         delta.ops = delta.ops.map((op) => {
        //             if (op.insert && typeof op.insert === 'string') {
        //                 // Normalize the pasted table content here
        //                 op.insert = op.insert.replace(/\t/g, '      '); // Replace tabs with spaces, for example
        //             }
        //             return op;
        //         });
        //     }

        //     // Handle lists
        //     if (node.tagName === 'UL' || node.tagName === 'OL') {
        //         delta.ops = delta.ops.map((op) => {
        //             if (op.insert && typeof op.insert === 'string') {
        //                 // Normalize list content here
        //                 op.insert = op.insert.replace(/\t/g, '    ');
        //             }
        //             return op;
        //         });
        //     }

        //     // Handle links
        //     if (node.tagName === 'A') {
        //         const href = node.getAttribute('href');
        //         delta.ops = delta.ops.map((op) => {
        //             if (op.insert && typeof op.insert === 'string') {
        //                 op.attributes = { ...op.attributes, link: href };
        //             }
        //             return op;
        //         });
        //     }

        //     // You can add more conditions to handle different elements as needed

        //     return delta;
        // });
        setEditor(quill);

        const imageHandler = () => {
            const range = quill.getSelection();
            const value = prompt('What is the image URL');
            if (value) {
                quill.insertEmbed(range.index, 'image', value);
            }
        };

        quill.getModule('toolbar').addHandler('video', imageHandler);

        // Update HTML when the content changes
        quill.on('text-change', () => {
            const content = quill.root.innerHTML;
            setHtml(content);
        });

        TableModule(quill); // Register the table module

        if (defaultalue) {
            quill.root.innerHTML = defaultalue
        }


        return () => {
            // Cleanup the Quill instance when the component unmounts
            quill.off('text-change');
        };

    }, []);

    const [isSourceCode, setIsSourceCode] = useState(false)
    const sourceCode = () => {
        setIsSourceCode(true)
    }
    const CloseDrawer = () => {
        setIsSourceCode(false)
    }

    const handleUpdateFromHtml = () => {
        if (editor) {
            editor.root.innerHTML = html;
            setIsSourceCode(false)
        }
    };

    // Function to handle HTML input
    const handleHtmlChange = (event) => {
        setHtml(event.target.value);
    };

    console.log("html html", html)

    const onChange = (e) => {
        console.log("E OnChange", e)
    }

    useEffect(() => {
        if (html) {
            onChangeSingleCallback?.({ [inputName]: html })
        }
    }, [html, inputName])

    const onUploadSingleCallback = (data) => {
        console.log("data", data?.editor_image)
        const range = editor?.getSelection();
        console.log("range.index", range, range.index)
        if (data?.editor_image) {
            editor.insertEmbed(range?.index ?? 0, 'image', process.env.react_app_base_url + '/' + data?.editor_image);
        }
    }



    return (
        <div className={`mb-3 col-md-${col}`}>
            <div className="text-editor">
                <div className='editor_header mb-2'>
                    {labelName && (
                        <label className='capital_case'>
                            {labelName} {required ? <span className="red">*</span> : ""}
                        </label>
                    )}
                    {/* <div className='buttonGroup'>
                        <Button onClick={() => sourceCode()}>HTML</Button>
                        <MediaPopup
                            onSelectChange={onUploadSingleCallback}
                            disabled={disabled}
                            title={'Select Image'}
                            inputName="editor_image"
                            containerClass="asdasd"
                        />
                    </div> */}
                </div>
                <div onChange={(e) => onChange(e)} ref={editorRef} style={{ height: '250px' }} />
                {isSourceCode &&
                    <SideDrawer
                        size={'850px'}
                        pagetitle={`Update Details`}
                        action={CloseDrawer}
                    >
                        <div className='inner'>
                            <textarea
                                value={html}
                                onChange={handleHtmlChange}
                                placeholder="Edit HTML source code here"
                                rows="10"
                                cols="80"
                            />

                            <Button onClick={() => setIsSourceCode(false)}>Cancel</Button>
                            <Button onClick={() => handleUpdateFromHtml()}>Submit</Button>
                            <div className='clearfix'></div>
                        </div>
                    </SideDrawer>
                }
            </div>
        </div>
    );
};

export default QuillEditor;
