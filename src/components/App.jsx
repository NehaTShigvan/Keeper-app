import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteInfo) => (
        <Note
          key={noteInfo.key}
          title={noteInfo.title}
          content={noteInfo.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
