import { useEffect } from "react";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css"; // Add css for snow theme
// or import 'quill/dist/quill.bubble.css'; // Add css for bubble theme
interface InputProps {
    inputText?: string | null;
    inputType?: "text" | "number" | "email" | "password" | "url" | "textarea";
    className?: string;
    icon?: string;
    children?: any;
    placeholder?: string;
    inputName: string;
    labelName?: string;
    inputSubType?: "incrementer";
    id?: string;
    value?: string | number | undefined;
    required?: boolean;
    min?: number;
    max?: number;
    maxLength?: number;
    minLength?: number;
    disabled?: boolean;
    customValidationMsg?: string;
    onChangeCallback?: any;
    onChangeSingleCallback?: any;
    suffix?: string;
    col?: "1" | "2" | "3" | "4" | "5" | "6" | "9" | "10" | "11" | "12";
    isFormSubmitted?: boolean;
    readonly?: boolean;
}

const CKEditorComp = ({
    inputName,
    labelName,
    onChangeSingleCallback,
    value,
    disabled = false,
    col = "12",
    required = false
}: InputProps): JSX.Element => {
    const { quill, quillRef } = useQuill();


    useEffect(() => {
        if (value) {
            if (quill) {
                quill.clipboard.dangerouslyPasteHTML(value as any);
            }
        }
    }, [quill, value]);


    useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta: any, oldDelta: any, source: any) => {
                // console.log('Text change!');
                // console.log('Text change getText', quill.getText()); // Get text only
                // console.log('Text change getContents', quill.getContents()); // Get delta contents
                // console.log('Text change innerHTML', quill.root.innerHTML); // Get innerHTML using quill
                // console.log('Text change firstChild.innerHTML', quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
                let single = { [inputName]: quill.root.innerHTML };
                onChangeSingleCallback?.(single);
            });
        }
    }, [quill]);

    return (
        <div className={`mb-3 col-md-${col}`}>
            {labelName && (
                <label>
                    {labelName} {required ? <span className="red">*</span> : ""}
                </label>
            )}
            <div className="CKEditor">
                <div className="" style={{ height: '250px', paddingBottom: '40px' }}>
                    <div ref={quillRef} />
                </div>
            </div>
        </div>
    );

}

export default CKEditorComp;

