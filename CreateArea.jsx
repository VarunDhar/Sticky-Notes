import React from "react";

function CreateArea(props) {
  const [notetitle, settitle] = React.useState("");
  const [notecontent, setcontent] = React.useState("");

  function handleChange(event) {
    const val = event.target.value;
    return event.target.name === "title" ? settitle(val) : setcontent(val);
  }
  return (
    <div>
      <form>
        <input
          name="title"
          placeholder="Title"
          value={notetitle}
          onChange={handleChange}
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          value={notecontent}
          onChange={handleChange}
          rows="3"
        />
        <button
          onClick={(event) => {
            props.addNote(notetitle, notecontent);
            setcontent("");
            settitle("");
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
