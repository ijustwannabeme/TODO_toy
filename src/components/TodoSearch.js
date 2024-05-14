import React from "react";

function Search(props) {
  return (
    <div>
      <input
        type="text"
        value={props.value}
        onChange={props.onChange}
        style={{
          marginBottom: "30px",
        }}
      ></input>

      <button onClick={props.onSearch}>검색</button>
    </div>
  );
}

export default Search;
