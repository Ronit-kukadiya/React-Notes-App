import React, { useState } from "react";

const AddNotes = ({ addNote }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  let head = document.querySelector("input");

  const formsubmitted = (e) => {
    e.preventDefault();
    if (title == "" || body == "") {
      swal({
        title: "",
        text: "Cannot add empty note!",
        icon: "warning",
        button: {
          text: "[GOT IT]",
          className: "custom-swal-button",
        },
        className: "custom-swal",
      });
      return;
    }
    addNote({ title, body });
    setTitle("");
    setBody("");
    head.focus();
  };
  return (
    <>
      <form
        onSubmit={formsubmitted}
        className="flex gap-4 lg:w-1/2 flex-col items-start p-10"
      >
        <h1 className="text-4xl font-bold text-[#5fff8a] drop-shadow-[0px_0px_35px_rgba(0,255,110,1)]">
          Add Notes
        </h1>
        <input
          value={title}
          className="px-5 py-2 w-full font-medium text-2xl border-2 border-green-200 rounded outline-none focus:bg-green-950"
          type="text"
          placeholder="Title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          value={body}
          className="px-5 py-2 h-32 w-full flex items-start flex-row font-medium text-xl border-2 border-green-200 rounded outline-none  focus:bg-[#041e0f]"
          placeholder="Start Writing. . ."
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
        <button className="bg-green-700 w-full font-medium text-white px-5 py-2 rounded outline-none hover:bg-[#0ba149] hover:scale-101 active:bg-[#00702f] active:scale-99">
          [Add Note]
        </button>
      </form>
    </>
  );
};

export default AddNotes;
