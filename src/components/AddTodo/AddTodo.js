import React from  'react';
import { connect } from 'react-redux';
import { addTodo } from '../../actions'

// Nota 1: Para utilizar el hook `useState` para el manejo de estados de los inputs, tendras que utilizarlo de la siguiente manera
//React.useState

// Nota 2: En este componente tendras que usar la funcion `connect` de react-redux para conectarte al store.
// Si usas el hook `useDispatch` no funcionaran los test.

export function AddTodo(props) {

  const [form, setForm] = React.useState({
    title: "",
    description: "",
    place: "",
    date: ""
  })

  const handleInputChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submit = e => {
    e.preventDefault();
    props.addTodo(form);
  };

  return (
    <div>
      <form onSubmit={submit}>
        <label>Title</label>
        <input type='text' name='title' onChange={handleInputChange} />
        <label>Description</label>
        <textarea name='description' onChange={handleInputChange} />
        <label>Place</label>
        <input type='text' name='place' onChange={handleInputChange} />
        <label>Date</label>
        <input type='text' name='date' onChange={handleInputChange} />
        <button type='submit'>submit</button>
      </form>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    initialState: state,
  };
}

export default connect(mapStateToProps, { addTodo })(AddTodo);