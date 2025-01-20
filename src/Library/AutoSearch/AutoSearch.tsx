import React, { useEffect, useRef, useState } from "react";
import { validateEmail, validateUrl } from "../Utility/Utility";
import InfoBox from "../InfoBox/InfoBox";
interface InputProps {
    inputType?: "text" | "number" | "email" | "password" | "url" | "textarea" | "color";
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
    data?: any
    searchKeys?: any
    displayKeys?: any
}

const AutoSearch = ({
    inputType = "text",
    className,
    children,
    icon,
    placeholder = "",
    inputName,
    labelName,
    id,
    value,
    required = false,
    min,
    max,
    maxLength,
    minLength,
    disabled,
    col = "12",
    inputSubType,
    readonly = false,
    data,
    searchKeys,
    displayKeys,
    onChangeSingleCallback
}: InputProps): JSX.Element => {
    const [inputValue, setInputValue] = useState<string | number>("");
    const [query, setQuery] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    // Handle selection
    const handleSelect = (value: string) => {
        setQuery(value); // Set input to selected value
        setFilteredData([]); // Clear suggestions
    };


    const handleSearch = (input: any) => {
        setQuery(input);

        if (input) {
            const results: any = data.filter(
                (item: any) =>
                    item?.[searchKeys?.[0]]?.toLowerCase().includes(input.toLowerCase()) ||
                    item?.[searchKeys?.[1]].toLowerCase().includes(input.toLowerCase()) ||
                    item?.[searchKeys?.[2]].toLowerCase().includes(input.toLowerCase())
            );
            setFilteredData(results);
        } else {
            setFilteredData(data); // Reset to original data if input is empty
        }
    };

    const [value2, setValue2] = useState('');
    const ref: any = useRef(null);

    const handleBlur = () => {
        setValue2(ref.current.innerText);
        console.log("ref.current.innerText", ref.current.innerText)
    };

    // const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [selectedTags, setSelectedTags] = useState<any>([]);



    const handleInputChange = (e: any) => {
        const value = e.target.value;
        setInputValue(value);
        console.log("value", value)
        if (value) {

            const res = data.filter((item: any) => {
                console.log("item", item)
                return item?.[searchKeys?.[0]]?.toLowerCase()?.includes(value.toLowerCase()) ||
                    item?.[searchKeys?.[1]]?.toLowerCase()?.includes(value.toLowerCase()) ||
                    item?.[searchKeys?.[2]]?.toLowerCase()?.includes(value.toLowerCase())
            })

            setSuggestions(res);
        } else {
            setSuggestions([]);
        }
    };

    const handleTagClick = (tag: any) => {
        console.log("tag handleTagClick", tag)
        if (!selectedTags.includes(tag)) {
            setSelectedTags((prev: any) => [...prev, tag]);
        }
        setInputValue("");
        setSuggestions([]);
    };

    const handleTagRemove = (tag: any) => {
        setSelectedTags((prev: any) => prev.filter((t: any) => t !== tag));
    };

    useEffect(() => {
        if (selectedTags?.length > 0) {
            onChangeSingleCallback({ [inputName]: selectedTags })
        }
    }, [inputName, selectedTags])

    return (
        <>
            <div className={`mb-3 col-md-${col}`}>
                {labelName && (
                    <label>
                        {labelName} {required ? <span className="red">*</span> : ""}
                    </label>
                )}
                <div className="customSearchInput">
                    {selectedTags?.length > 0 &&
                        <div style={{ display: "flex", gap: "5px" }}>
                            {selectedTags.map((tag: any, index: any) => (
                                <div
                                    key={index}
                                    style={{
                                        display: "flex",
                                        gap: "5px",
                                        background: "#e0e0e0",
                                        borderRadius: "15px",
                                        padding: "5px 10px",
                                    }}
                                >
                                    <div>{`${tag?.first_name}${tag?.last_name}`}</div>
                                    <button
                                        style={{
                                            marginLeft: "5px",
                                            border: "none",
                                            background: "none",
                                            cursor: "pointer",
                                            color: "red",
                                        }}
                                        onClick={() => handleTagRemove(tag)}
                                    >
                                        ×
                                    </button>
                                </div>
                            ))}
                        </div>
                    }
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder={placeholder}
                        className={`form-control ${className}} 
                      ${icon ? "has-icon" : ""}`}
                    />

                </div>
                {suggestions.length > 0 && (
                    <div className="autoSuggestions">
                        <ul
                            style={{
                                listStyleType: "none",
                                margin: 0,
                                padding: 0,
                                border: "1px solid #ccc",
                                borderRadius: "4px",
                                maxHeight: "150px",
                                overflowY: "auto",
                            }}
                        >
                            {suggestions.map((suggestion, index) => (
                                <li
                                    key={index}
                                    onClick={() => handleTagClick(suggestion)}
                                >
                                    <InfoBox data={suggestion}></InfoBox>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </>
    );
};

export default AutoSearch;

// import React, { useState } from "react";

// const AutoSearch = () => {
//     const [inputValue, setInputValue] = useState("");
//     const [suggestions, setSuggestions] = useState([]);
//     const [selectedTags, setSelectedTags] = useState<any>([]);

//     const data = [
//         "React",
//         "JavaScript",
//         "CSS",
//         "HTML",
//         "Node.js",
//         "TypeScript",
//         "Redux",
//         "GraphQL",
//         "MongoDB",
//         "Express",
//     ];

//     const handleInputChange = (e: any) => {
//         const value = e.target.value;
//         setInputValue(value);

//         if (value) {
//             const filteredSuggestions: any = data.filter((tag) =>
//                 tag.toLowerCase().includes(value.toLowerCase())
//             );
//             setSuggestions(filteredSuggestions);
//         } else {
//             setSuggestions([]);
//         }
//     };

//     const handleTagClick = (tag: any) => {
//         if (!selectedTags.includes(tag)) {
//             setSelectedTags((prev: any) => [...prev, tag]);
//         }
//         setInputValue("");
//         setSuggestions([]);
//     };

//     const handleTagRemove = (tag: any) => {
//         setSelectedTags((prev: any) => prev.filter((t: any) => t !== tag));
//     };

//     return (
//         <div style={{ width: "300px", margin: "20px auto", fontFamily: "Arial" }}>
//             <div style={{ display: "flex", flexWrap: "wrap", gap: "5px" }}>
//                 {selectedTags.map((tag: any, index: any) => (
//                     <div
//                         key={index}
//                         style={{
//                             display: "inline-flex",
//                             alignItems: "center",
//                             background: "#e0e0e0",
//                             borderRadius: "15px",
//                             padding: "5px 10px",
//                         }}
//                     >
//                         {tag}
//                         <button
//                             style={{
//                                 marginLeft: "5px",
//                                 border: "none",
//                                 background: "none",
//                                 cursor: "pointer",
//                                 color: "red",
//                             }}
//                             onClick={() => handleTagRemove(tag)}
//                         >
//                             ×
//                         </button>
//                     </div>
//                 ))}
//             </div>
//             <input
//                 type="text"
//                 value={inputValue}
//                 onChange={handleInputChange}
//                 placeholder="Search and add tags..."
//                 style={{
//                     width: "100%",
//                     padding: "8px",
//                     marginTop: "10px",
//                     boxSizing: "border-box",
//                     border: "1px solid #ccc",
//                     borderRadius: "4px",
//                 }}
//             />
//             {suggestions.length > 0 && (
//                 <ul
//                     style={{
//                         listStyleType: "none",
//                         margin: 0,
//                         padding: 0,
//                         border: "1px solid #ccc",
//                         borderRadius: "4px",
//                         maxHeight: "150px",
//                         overflowY: "auto",
//                     }}
//                 >
//                     {suggestions.map((suggestion, index) => (
//                         <li
//                             key={index}
//                             onClick={() => handleTagClick(suggestion)}
//                             style={{
//                                 padding: "8px",
//                                 cursor: "pointer",
//                                 backgroundColor: "#fff",
//                                 borderBottom: "1px solid #ddd",
//                             }}
//                         >
//                             {suggestion}
//                         </li>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

// export default AutoSearch;
