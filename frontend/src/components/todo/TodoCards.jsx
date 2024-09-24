import React, { useState } from 'react';
import { GrDocumentUpdate } from 'react-icons/gr';
import { AiFillDelete } from 'react-icons/ai';

const TodoCards = ({ title, body, updateId, toBeUpdate, display, delid, id }) => {
  const [showBody, setShowBody] = useState(false);

  return (
    <div className="p-3 todo-card">
      <div onClick={() => setShowBody(!showBody)} style={{ cursor: 'pointer' }}>
        <h5>{title}</h5>
        {/* Exibe o corpo completo apenas se showBody for true */}
        {showBody && <p className="todo-card-p">{body}</p>}
      </div>
      <div className="d-flex justify-content-around">
        <div
          className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1"
          onClick={() => {
            display("block");
            toBeUpdate(updateId);
          }}
        >
          <GrDocumentUpdate className="card-icons" /> Update
        </div>
        <div
          className="d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger"
          onClick={() => delid(id)}
        >
          <AiFillDelete className="card-icons del" /> Delete
        </div>
      </div>
    </div>
  );
};

export default TodoCards;
