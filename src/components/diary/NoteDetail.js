import React from 'react';
import {AiOutlineEdit} from 'react-icons/ai'

const NoteDetail = () => {
  return (
    <div className='card noteDetail'>
      <div className='card-body'>
        <div className='date'>Wednesday, February 25, 2020</div>
        <h2 className='mb-4 mt-1'>Starting writing in my journal</h2>
        <div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Amet assumenda blanditiis consequatur culpa cumque eius eum
            iste, minus quasi. Et, fuga itaque non quis ratione tempore
            ut voluptatem. Architecto, repellendus!
          </div>
          <div className='mt-3'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Adipisci assumenda atque debitis earum, eligendi enim eos
            eveniet fuga illo inventore ipsum iusto minima quaerat
            qui recusandae soluta veritatis, vero voluptas!
          </div>
          <div>
            <AiOutlineEdit className='editIcon'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteDetail;