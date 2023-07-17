import React from "react";

export const NoteForm = props => {
  const { note = { title: "", text: "" }, onCancel, onSubmit, onChange } = props;

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        onSubmit(note);
      }}
    >
      <div className="form-group">
        <label>Title:</label>
        <input
          onChange={event => onChange({ ...note, title: event.target.value })}
          className="form-control"
          data-testid="input-title"
          name="title"
          value={note?.title || ""}
        />
      </div>
      <div className="form-group">
        <label>Note:</label>
        <textarea
          onChange={event => onChange({ ...note, text: event.target.value })}
          className="form-control"
          data-testid="input-text"
          name="text"
          value={note?.text || ""}
        />
      </div>
      <div className="form-group">
        <input
          onClick={onCancel}
          type="button"
          data-testid="cancel-note"
          className="btn btn-default pull-right"
          value="Cancel"
        />
        <input type="submit" data-testid="save-note" className="btn btn-default pull-right" value="Save" />
      </div>
    </form>
  );
};
