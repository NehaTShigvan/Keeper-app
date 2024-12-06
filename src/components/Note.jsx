import React from "react";
import notes from "../notes";

function createNote(props) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
    </div>
  );
}
function Note() {
  return notes.map(createNote);
}

export default Note;
