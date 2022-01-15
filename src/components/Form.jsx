import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Item } from "./Item";

export const Form = () => {
  const [dataTodo, setDataTodo] = useState([
    // { text: "Terminer mon port folio", id:uuidv4()},
    // { text: "Terminer formation React", id:uuidv4()},
    // { text: "Faire plein de bisous à Kévin", id:uuidv4()}
  ]);

  const [stateInput, setStateInput] = useState();

  //Delete to do function
  const deleteTodo = id => {
    const filteredState = dataTodo.filter(todo => {
        return todo.id !== id;
    })
    setDataTodo(filteredState);
    console.log(id);
  }

  const linkedInput = (e) => {
   setStateInput(e);
  }

  //Add to do function
  const addTodo = (e) => {
    e.preventDefault();
    const newArrTodo = [...dataTodo];
    const newTodo = {};
    newTodo.text = stateInput;
    newTodo.id = uuidv4();
    newArrTodo.push(newTodo);
    setDataTodo(newArrTodo);
    setStateInput("");
  }

  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form className="mb-3" onSubmit={ e => addTodo(e)}>
        <label htmlFor="todo" className="form-label mt-3">
          À faire
        </label>
        <input 
        value={stateInput}
        onInput={e => linkedInput(e.target.value)}
        type="text" className="form-control" id="todo" />
        <button className="mt-2 btn btn-primary d-block">Ajouter</button>
      </form>

      <h2>Liste des choses à faire : </h2>
      <ul className="list-group">
        {dataTodo.map((todo) => {
          return (
            <Item
            text={todo.text}
            key={todo.id}
            id={todo.id}
            deleteFunc={deleteTodo}
            />
          ) 
        })}
      </ul>
    </div>
  );
};
