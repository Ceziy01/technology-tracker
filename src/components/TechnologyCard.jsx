import { useState, useEffect } from "react";
import "../styles/TechnologyCard.css";

function TechnologyCard({ tech, onClick }) {

  const noteKey = `tech-note-${tech.id}`;
  const [note, setNote] = useState("");

  useEffect(() => {
    const savedNote = localStorage.getItem(noteKey);
    if (savedNote) {
      setNote(savedNote);
    }
  }, [noteKey]);

  useEffect(() => {
    localStorage.setItem(noteKey, note);
  }, [note, noteKey]);

  let st_emoji = "";
  switch (tech.status) {
    case "completed": st_emoji = "✅"; break;
    case "in-progress": st_emoji = "⌛"; break;
    case "not-started": st_emoji = "❌"; break;
    default: tech.status = "error"; st_emoji = "❓"; break;
  }

  return (
    <div onClick={onClick} className={`tech-card status-${tech.status}`}>

      <h3 className="tech-title">
        {tech.title} {st_emoji}
      </h3>

      <p className="tech-desc">{tech.description}</p>

      <textarea
        className="tech-note"
        placeholder="Заметка..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        onClick={(e) => e.stopPropagation()}
      />

    </div>
  );
}

export default TechnologyCard;
