import React from 'react';
import './App.css';
import Select, { components,makeAnimated } from "react-select";
import SvgLai from "./SvgLai";
import SvgPhotopoint from "./SvgPhotopoint";
import SvgPhenocam from "./SvgPhenocam";
import { facetColourStyles } from "./facetColourStyles";


const { Option } = components;
const CustomSelectOption = (props) => {
  console.log("props=", props.data);
  return (
    <Option {...props}>
      {/* <i className={`icon icon-${props.data.icon}`} /> */}
      {/* {props.data.label} */}
      <div className="input-select__single-value">
        {props.data.icon && (
          <span className="input-select__icon">{props.data.icon}</span>
        )}
        <span>{props.data.label}</span>
      </div>
    </Option>
  );
};

const CustomSelectValue = (props) => {
  // console.log("data", props);
  return (
    <div className="input-select">
    <div className="input-select__single-value">
      {props.data.icon && <span className="input-select__icon">{props.data.icon}</span>}
      <span>{props.data.label}</span>
    </div>
  </div>);
};

// const CustomSelectValue = (props) => (
//   <div>
//     <i className={`icon icon-${props.data.icon}`} />
//     {props.data.label}
//   </div>
// );

const options = [
  { value: "lai", label: "Lai (2394)", icon: <SvgLai /> },
  { value: "phenocam", label: "Phenocam (456)", icon: <SvgPhenocam /> },
  { value: "photopoint", label: "Photo point (785)", icon: <SvgPhotopoint /> },
];

function App() {
  return (
    <div>
      <Select
        defaultValue={options[0]}
        options={options}
        styles={facetColourStyles}
        // onChange={changeSelectHandler}
        components={{
          Option: CustomSelectOption,
          SingleValue: CustomSelectValue,
        }}
      />
    </div>
  );
}

export default App;
