// /* eslint-disable array-callback-return */
// import React, { useEffect, useState } from "react";
// import { Country, State, City } from "country-state-city";
// import Select from "../Select/Select";
// import Input from "../Input/Input";
// interface CountryStateCityProps {
//   item?: any;
//   CountryStateCityCallback?: any;
// }

// type formDataProps = {
//   country: string;
//   state: string;
// };
// const CountryStateCity = ({
//   item,
//   CountryStateCityCallback,
// }: CountryStateCityProps): JSX.Element => {
//   const [formData, setFormData] = useState<formDataProps>();
//   const [stateList, setStateList] = useState([]);
//   const [cityList, setCityList] = useState([]);

//   const onChangeSingleCallback = (data: any) => {
//     console.log("data", data);

//     setFormData((prevState) => ({
//       ...prevState,
//       ...data,
//     }));
//   };

//   const CountryList = Country.getAllCountries();

//   let CountryListUpdated: any = [];
//   if (CountryList.length !== 0) {
//     CountryList.map((item) => {
//       let obj = {
//         text: item.name,
//         value: item.isoCode,
//         id: item.currency,
//       };
//       CountryListUpdated.push(obj);
//     });
//   }

//   useEffect(() => {
//     if (
//       formData?.country !== undefined &&
//       formData?.country !== null &&
//       formData?.country.length !== 0
//     ) {
//       const stateOption = State.getStatesOfCountry(formData?.country);
//       let StateListUpdated: any = [];
//       if (stateOption.length !== 0) {
//         stateOption.map((item) => {
//           let obj = {
//             text: item.name,
//             value: item.isoCode,
//           };
//           StateListUpdated.push(obj);
//         });
//       }
//       setStateList(StateListUpdated);
//     }
//   }, [formData?.country]);

//   useEffect(() => {
//     console.log("formData?.state", formData);
//     if (
//       formData?.state !== undefined &&
//       formData?.state !== null &&
//       formData?.state.length !== 0
//     ) {
//       const stateOption = City.getCitiesOfState(
//         formData?.country,
//         formData?.state
//       );

//       let StateListUpdated: any = [];
//       if (stateOption.length !== 0) {
//         stateOption.map((item) => {
//           let obj = {
//             text: item.name,
//             value: item.name,
//           };
//           StateListUpdated.push(obj);
//         });
//       }

//       setCityList(StateListUpdated);
//     }
//   }, [formData?.country, formData?.state]);

//   useEffect(() => {
//     CountryStateCityCallback?.(formData);
//   }, [formData]);

//   return (
//     <>
//       <Select
//         inputName="country"
//         labelName="Country"
//         placeholder="Select Country"
//         options={CountryListUpdated}
//         showValue={true}
//         selectedItem={CountryListUpdated[0]}
//         onChangeSingleCallback={onChangeSingleCallback}
//         col="3"
//         isLoading={CountryList.length !== 0}
//         required={true}
//       ></Select>
//       <Select
//         inputName="state"
//         labelName="State"
//         placeholder="Select State"
//         options={stateList}
//         showValue={true}
//         selectedItem={stateList[0]}
//         onChangeSingleCallback={onChangeSingleCallback}
//         col="3"
//         isLoading={stateList.length !== 0}
//         isLoadingMsg={"Please Select first county"}
//         required={true}
//       ></Select>
//       <Select
//         inputName="city"
//         labelName="City"
//         placeholder="Select City"
//         options={cityList}
//         showValue={true}
//         selectedItem={cityList[0]}
//         onChangeSingleCallback={onChangeSingleCallback}
//         col="3"
//         isLoading={cityList.length !== 0}
//         isLoadingMsg={"Please Select first state"}
//         required={true}
//       ></Select>
//       <Input
//         inputName="pincode"
//         inputType="number"
//         labelName={"Pincode"}
//         placeholder="Enter pincode"
//         required={true}
//         // onChangeCallback={onChangeCallback}
//         onChangeSingleCallback={onChangeSingleCallback}
//         minLength={6}
//         maxLength={6}
//         col="3"
//       />
//     </>
//   );
// };




const CountryStateCity = () => {

}

export default CountryStateCity;