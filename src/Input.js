import { useRef, useState } from "react";
import "./input.css";

const Input = ({ dropdownList, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef();

  const onInputChange = (e) => {
    const value = e.target.value;
    setValue(value);
    onChange?.(value);
  };

  const onItemClick = (item) => {
    inputRef.current.focus();
    setValue(item);
  };

  return (
    <div className="input-container">
      <input
        ref={inputRef}
        className="input"
        value={value}
        onChange={onInputChange}
        onFocus={() => setIsFocused(true)}
      />
      {isFocused && (
        <>
          <div
            className="dropdown-overlay"
            onClick={() => setIsFocused(false)}
            onBlur={() => setIsFocused(false)}
          />
          <div className="dropdown">
            {dropdownList.map((item) => (
              <div className="dropdown-item" onClick={() => onItemClick(item)}>
                {item}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

Input.defaultProps = {
  dropdownList: []
};

export default Input;
