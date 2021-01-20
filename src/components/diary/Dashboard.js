import React from 'react';
import NoteCard from "./NoteCard";
import { RiBookletLine } from "react-icons/ri";
import NoteDetail from "./NoteDetail";

const Dashboard = () => {
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
        <NoteDetail />
      </div>
    </div>
  );
};

export default Dashboard;
