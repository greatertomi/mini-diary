import React from 'react';
import {FcLinux} from 'react-icons/fc'

const NoSelectedNote = () => {
  return (
    <div className='noNoteSelected'>
      <FcLinux fontSize={150} />
      <div>No note selected</div>
    </div>
  );
};

export default NoSelectedNote;
