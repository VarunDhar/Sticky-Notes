import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Notes, addNote] = React.useState([]);

  function handleNoteadd(title, content) {
    const tempnote = { notetitle: title, notecontent: content };
    addNote((prev) => {
      return [...prev, tempnote];
    });
  }
  function handleDelete(idx) {
    console.log("delete pressed");

    addNote((prev) => {
      return prev.filter((note, id) => {
        return idx !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea addNote={handleNoteadd} />
      {Notes.map((note, idex) => {
        return Notes.length ? (
          <Note
            title={note.notetitle}
            idx={idex}
            deleteNote={handleDelete}
            content={note.notecontent}
          />
        ) : null;
      })}
      <Footer />
    </div>
  );
}

export default App;
