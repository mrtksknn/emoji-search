import React from "react";
import "./SearchInput.css";

const SearchInput = ({textChange}) => {
  return (
    <div className="component-search-input">
      <div>
        <input data-testid="inputid" onChange={(event) => textChange(event)} />
      </div>
    </div>
  );
}

export default SearchInput;