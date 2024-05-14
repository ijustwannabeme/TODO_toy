import React from "react";

// DeleteButton.js

function Delete(props) {
  return (
    <input value={props.value} type="button" class="btn btn-danger" onClick={props.onDelete}>
      X
    </input>
  );
}

export default Delete;
