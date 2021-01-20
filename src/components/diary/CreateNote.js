import React, {useState} from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {BsBookmarkCheck} from 'react-icons/bs'

const CreateNote = ({saveNote}) => {
  const [text, setText] = useState('')

  const handleChange = (value) => {
    setText(value)
  }

  const handleSave = () => {
    // 1. Save into the database
    // 2. Notify the parent component that it has been saved
    saveNote(false)
  }

  const modules = {
    toolbar: [
      [{ header: []}],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, 'code-block'],
      ['link', 'clean']
    ],
    clipboard: {
      matchVisual: false,
    }
  }

  return (
    <div className='editorDiv'>
      <ReactQuill value={text}
                  onChange={handleChange}
                  className='reactQuill'
                  placeholder='Write your note here'
                  modules={modules}
      />
      <div>
        <button className='btn btn-dark float-right mt-1' onClick={handleSave}>
          <BsBookmarkCheck fontSize={20}/> Save
        </button>
      </div>
    </div>
  );
};

export default CreateNote;