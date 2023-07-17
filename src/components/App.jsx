import React, { useEffect, useState } from "react";

import { NotesList } from "./NotesList";
import { NoteForm } from "./NoteForm";

export const App = props => {
  const { service } = props;

  const [notes, setNotes] = useState(service.notes);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    service.getNotes().then(apiNotes => setNotes(apiNotes));
  }, []);

  // Select new empty note
  const newNote = () => {
    setNotes(prevArray => [...prevArray, { text: "", title: "" }]);
  };

  // Set note as selected
  const onSelect = note => setSelected(note);

  // Save note to service
  const onSubmit = async () => {
    await service.saveNote({ ...selected, id: selected.id });
    const updatedNotes = await service.getNotes();
    setNotes(updatedNotes);
  };

  // Unselect note
  const onCancel = () => setSelected(null);

  const onChange = data => setSelected(data);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1>React notes</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <NotesList notes={notes} onSelect={onSelect} selected={selected} />
        </div>
        <div className="col-md-8">
          <NoteForm selected={selected} onCancel={onCancel} onSubmit={onSubmit} onChange={onChange} note={selected} />
          {notes[notes.length - 1]?.id && (
            <div>
              <button onClick={newNote} id="new-note" data-testid="new-note">
                New Note
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
