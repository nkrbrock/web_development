import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {

    const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });
//create a constant that keeps track of the title and the content
  function handleChange(event){
    const {name, value} = event.target;

    setNote(prevNote => {
        return{
            ...prevNote,
            [name]: value
        };
    });
  }
//pass new note back to the app
  function submitNote(event){
      props.onAdd(note);
      setNote({ //resets form to empty fields
          title: "",
          content: ""
      })
    event.preventDefault();//doesn't allow page to reload
  }

  function expand(){
      setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />}
        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
