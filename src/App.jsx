import React, { useState } from "react";
import AddNotes from "./components/AddNotes";
import YourNotes from "./components/YourNotes";
const App = () => {
  const [note, setNote] = useState([]);
  const addnote = (newnote) => {
    setNote([...note, newnote]);
  };

  const deletenote = (id) => {
    const updatedNotes = [...note];
    updatedNotes.splice(id, 1);
    setNote(updatedNotes);
  };

  return (
    <div className="h-screen w-full bg-[#04040f] text-white gap-4 lg:flex">
      <AddNotes addNote={addnote} />
      <YourNotes notes={note} deleteNote={deletenote} />
    </div>
  );
};

export default App;
