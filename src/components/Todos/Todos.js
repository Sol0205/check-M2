import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Todo } from '../Todo/Todo';

export function Todos({todos, status}) {

  const validateStatus = (todo) => {
    if(todo.status === status){
      return (
        <div>
          <Link to={`/edit/${todo.id}`}>
            <Todo title={todo.title} />
          </Link>
        </div>
      )

    }
  }

  return (
    <div>
      <span>{status}</span>
      {
        todos?.map(validateStatus)
      }
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    todos: state
  }
}

export default connect(mapStateToProps)(Todos);