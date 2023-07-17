import React from "react";

export const NotesList = props => {
  const { notes = [], onSelect, selected } = props;

  return notes.map(note => (
    <div key={note.id} className="list-group">
      <div
        onClick={() => onSelect(note)}
        data-testid="note-item"
        className={`list-group-item ${selected?.id === note.id && "active"}`}
      >
        <div>{note.title || "-"}</div>
        <div>{note.text || "-"}</div>
      </div>
    </div>
  ));
};
