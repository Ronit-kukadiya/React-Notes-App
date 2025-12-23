import React, { useState } from "react";
import { Trash } from "lucide-react";

const YourNotes = ({ notes, deleteNote }) => {
  return (
    <>
      <div className="bg-[#04040f] border-t-2 p-10 lg:w-1/2 lg:border-l-2 lg:border-t-0">
        <h1 className="text-4xl font-bold text-[#5fff8a] drop-shadow-[0px_0px_35px_rgba(0,255,110,1)]">
          Your Notes
        </h1>
        <div className="flex flex-wrap items-start justify-start gap-5 mt-5 h-[90%] overflow-auto">
          {notes.map((elem, id) => {
            return (
              <div
                key={id}
                className="relative h-55 w-40 bg-[#0e1a15] rounded-xl p-4"
              >
                <h3 className="text-xl font-bold leading-tight text-[#2fff74]">
                  {elem.title}
                </h3>
                <hr className="border-[#85ffae] mt-2" />
                <p className="text-[#5fec8e] mt-3 leading-tight font-medium max-h-32 wrap-break-word overflow-auto">
                  {elem.body}
                </p>
                <h2 className="absolute bottom-3 right-3">
                  <Trash
                    onClick={() => {
                      deleteNote(id);
                    }}
                    className="hover:scale-110 active:scale-95 cursor-pointer"
                    size={28}
                    color="#c01818"
                    strokeWidth={2.25}
                  />
                </h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default YourNotes;
