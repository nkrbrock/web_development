import React, {useState} from 'react';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import CreateArea from "./CreateArea.jsx";

function App(){

//add new note to array
    const [notes, setNotes] = useState([]);
//receives the note object
    function addNote(newNote){
        setNotes(prevNotes => {
            return [...prevNotes, newNote];
        });
    }

    function deleteNote(id){
        setNotes(prevNotes => {
            return prevNotes.filter((noteItem, index)=>{
                return index !== id;
            });
        });
    }

    return(
        <div>
            <Header />
            <CreateArea 
                onAdd={addNote}
            />
            {/* renders new notes */}
            {notes.map((noteItem, index)=>{
            return (
                <Note
                key={index}
                id={index}
                title={noteItem.title}
                content={noteItem.content}
                onDelete={deleteNote}
                />
                );
            })}
            <Footer />
        </div>
    );
}

export default App;