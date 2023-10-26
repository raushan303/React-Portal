import { useState } from "react";
import Input from "./Input";

const dropdownList = ["Mango", "Apple", "Tamatar"];

export default function Container() {
  const [data, setData] = useState([]);

  const onChange = (value) => {
    setData(
      dropdownList.filter((text) =>
        text.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <>
      <Input dropdownList={data} onChange={onChange} />
    </>
  );
}
