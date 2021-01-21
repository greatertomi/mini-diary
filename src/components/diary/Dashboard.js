import React, {useState} from 'react';
import NoteCard from "./NoteCard";
import { RiBookletLine } from "react-icons/ri";
// import NoSelectedNote from "./NoSelectedNote";
import NoteDetail from "./NoteDetail";
import CreateNote from "./CreateNote";

const Dashboard = () => {
  const [showEditor, setShowEditor] = useState(false)

  const handleNoteEdit = (value) => {
    console.log(value)
    setShowEditor(value)
  }

  return (
    <div className='row mt-5 px-4'>
      <div className='col-md-4'>
        <div className='row mb-5'>
          <div className='col-md-8 col-sm-8'>
            <input type='text' name='search' placeholder='Search' className='form-control'/>
          </div>
          <div className='col-md-4 col-sm-4'>
            <button className='btn btn-dark'>
              <RiBookletLine color='white'/> New
            </button>
          </div>
        </div>
        <NoteCard />
        <NoteCard />
      </div>
      <div className='col-md-8'>
        {/*<NoSelectedNote />*/}
        {showEditor ?
          <CreateNote saveNote={handleNoteEdit} /> :
          <NoteDetail handleEdit={handleNoteEdit}/>}
      </div>
    </div>
  );
};

export default Dashboard;
