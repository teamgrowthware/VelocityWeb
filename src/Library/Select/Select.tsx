import Button from "../Button/Button";
import Input from "../Input/Input";
import React, { useEffect, useState } from "react";
import useComponentVisible from "../useComponentVisible";
import downArrow from '../Icon/icons/downArrow.png'

interface SelectProps {
  inputName: string;
  title?: string | null;
  description?: string | null;
  children?: React.ReactNode;
  labelName?: string;
  col?: string;
  required?: boolean;
  options?: Array<Item>;
  selectedItem?: any;
  placeholder?: string;
  showValue?: boolean;
  onChangeSingleCallback?: any;
  isLoading?: boolean;
  isLoadingMsg?: string;
  multiple?: boolean;
  search_option?: boolean;
  disabled?: boolean;
  value?: any;
  selectedItems?: any;
  onChange?: (event?: any) => void;
  allowResult?: boolean
}
interface Item {
  text?: string;
  value?: string;
  id?: number;
}

const Select = ({
  inputName,
  title,
  description,
  children,
  labelName,
  col,
  required,
  options,
  selectedItem,
  placeholder = "Select ",
  showValue = false,
  onChangeSingleCallback,
  isLoading = false,
  isLoadingMsg,
  multiple = false,
  search_option = true,
  disabled,
  value,
  selectedItems,
  onChange,
  allowResult = true
}: SelectProps): JSX.Element => {
  console.log("selectedItems", selectedItems)
  const errorMsg = "This field is required";
  const [hasError, setHasError] = useState(false);
  const [openOption, setOpenOption] = useState(false);
  const [selected, setSelected] = useState<any>(selectedItem);
  const [updatedOption, setUpdatedOption] = useState<any>(options);
  const [multipleSelected, setMultipleSelected] = useState<any>([]);

  useEffect(() => {
    if (selectedItem) {
      setSelected(selectedItem)
    }
  }, [selectedItem])


  useEffect(() => {
    if (isLoading && selectedItems) {
      setMultipleSelected(selectedItems)
    }
  }, [isLoading, selectedItems])

  const onClick = (value: string) => {
    // console.log("radio", value);
    let selectedItem = options?.find((item: any) => {
      return item?.value === value;
    });
    let single = { [inputName]: value };
    onChangeSingleCallback(single);
    setSelected((prevState: any) => ({
      ...prevState,
      ...selectedItem,
    }));

    setOpenOption(!openOption);
  };

  const onMultipleClick = (value: string) => {
    console.log("onMultipleClick", value);
    let selectedItem = options?.find((item: any) => {
      return item?.value === value;
    });
    console.log("selectedItem onMultipleClick", selectedItem);
    // let single = { [inputName]: value };

    setMultipleSelected((prevState: any) => [...prevState, selectedItem]);
    console.log("selectedItem onMultipleClick", selectedItem);
    // onChangeSingleCallback(single);
    // setOpenOption(!openOption);
  };

  useEffect(() => {
    if (multiple) {
      console.log("asdasd", multipleSelected)
      let data = { [inputName]: multipleSelected }
      onChangeSingleCallback(data);
    }
  }, [multipleSelected, inputName, multiple])

  const removeItem = (data: any) => {
    console.log("data", data);
    const removedITem = multipleSelected.filter((item: any) => {
      return item.value !== data.value;
    });
    console.log("removedITem", multipleSelected);
    console.log("removedITem", removedITem);
    setMultipleSelected(removedITem);
  };

  // console.log("multipleSelected", multipleSelected);

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const openOptions = () => {
    setOpenOption(!openOption);
  };
  useEffect(() => {
    if (openOption) {
      setIsComponentVisible(true);
      setUpdatedOption(options);
    } else {
      setIsComponentVisible(false);
      setUpdatedOption(options);
    }
  }, [openOption, options, setIsComponentVisible]);

  useEffect(() => {
    if (!isComponentVisible) {
      setOpenOption(false);
    }
  }, [isComponentVisible]);
  const [userInput, setUserInput] = useState('')
  const onChangeCallback = (search_key_callback: any) => {
    console.log("onChangeCallback", search_key_callback);
    setUserInput(search_key_callback)
    let res: any = [];
    let search_key = search_key_callback.search.toString().toLowerCase();
    options?.filter((obj: any) => {
      return Object.keys(obj).forEach((key) => {
        if (obj[key].toString().toLowerCase().indexOf(search_key) !== -1) {
          res.push(obj);
        }
      });
    });
    setUpdatedOption(res);
    console.log("res", res);
  };


  return (
    <>
      {isLoading &&
        <div className={`selectWrapper mb-3 col-md-${col}`}>
          {labelName && (
            <label className="changeCase">
              {labelName} {required ? <span className="red">*</span> : ""}
            </label>
          )}
          <div className="dropdown">
            <div
              className={`form-control waves-effect waves-light ${disabled ? "disabled" : ""
                }`}
              onClick={openOptions}
            >
              {multiple ? (
                multipleSelected?.length === 0 ?
                  placeholder ?
                    <span className="placeholderText">{placeholder}</span> : '' :
                  <div className="multiSelectWrap float-left">
                    {multipleSelected?.map((item: any) => {
                      return (
                        <Button
                          icon="close"
                          buttonStyleRounded
                          buttonStyleOutline
                          buttonSize="sm"
                          buttonStyleType="dark"
                          className="m-1"
                          onClick={() => removeItem(item)}
                          disabled={disabled}
                        >
                          {" "}
                          {item?.text}{" "}
                        </Button>
                      );
                    })}
                  </div>
              ) :
                selected ?
                  selected?.text
                  : placeholder ?
                    <span className="placeholderText">{placeholder}</span>
                    : ''
              }
              <i className="mdi mdi-chevron-down ml-1 float-end">
                <img className="iconMain" src={downArrow} alt="" title="" />
              </i>
            </div>
            {openOption && !disabled && isComponentVisible && (
              <div className="dropdown-menu2" ref={ref}>
                {search_option && options?.length !== 0 ? (
                  <Input
                    inputName="search"
                    placeholder={`Search ${inputName}`}
                    onChangeSingleCallback={onChangeCallback}
                    className="m-2"
                  ></Input>
                ) : (
                  ""
                )}
                {allowResult &&
                  <ul className="selectList">
                    {updatedOption?.map((item: any) => {
                      const selectedMultiple = multipleSelected?.find((item1: any) => {
                        return item1?.value === item?.value;
                      })
                      console.log("selectedMultiple asdasd", selectedMultiple)
                      return (
                        <li
                          onClick={() =>
                            multiple
                              ? selectedMultiple?.value !== item?.value ? onMultipleClick(item?.value) : removeItem(item)
                              : onClick(item?.value)
                          }
                          id={item?.id}
                          data-value={item?.value}
                          className={
                            item?.value === selected?.value ? "selectedTtem" : selectedMultiple?.value !== item?.value ? "" : 'selectedTtem closeIcon'
                          }
                        >

                          {item?.text}{" "}
                          {showValue ? (
                            <>
                              <span className="showValue">{item?.value}</span>
                            </>
                          ) : (
                            ""
                          )}
                          {multiple && selectedMultiple?.value !== item?.value && ''}
                        </li>
                      );
                    })}
                  </ul>
                }
              </div>
            )}
          </div>

          {children && children}
          {hasError && (
            <span className="error-msg display-block">{errorMsg}</span>
          )}
          {/* {maxLengthError && (
          <span className="error-msg display-block">
            More than {maxLength} characters is not allowed
          </span>
        )}
        {minLengthError && (
          <span className="error-msg display-block">
            Less than {maxLength} characters is not allowed
          </span>
        )}
        {!hasCustomError && (
          <span className="error-msg display-block">{customValidationMsg}</span>
        )} */}
        </div>
      }
    </>
  );
};

export default Select;
