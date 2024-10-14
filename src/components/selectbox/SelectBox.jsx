import { useState } from "react";
import Select from "react-select";
import "./SelectBox.css";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const SelectBox = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <>
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </>
  );
};

export default SelectBox;
