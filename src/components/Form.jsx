import { useState } from "react";

export const Form = () => {
  return (
    <div className="m-auto px-4 col-12 col-sm-10 col-lg-6">
      <form className="mb-3">
        <label htmlFor="todo" className="form-label mt-3">À faire</label>
        <input type="text" className="form-control" id="todo"/>
        <button className="mt-2 btn btn-primary d-block">Ajouter</button>
      </form>

      <h2>Liste des choses à faire : </h2>
      <ul className="list-group">
        
      </ul>
      
    </div>
  )
}
