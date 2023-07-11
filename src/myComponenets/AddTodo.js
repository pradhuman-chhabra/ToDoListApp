import React, { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  // here we have imported addTodo using desctructuring {addTodo} we could have imported them as props also
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  // we will be using the useState hooks (mind you useState is a variable)
  const submit = (e) => {
    e.preventDefault();
    // this prevent default will prevent it from reloading the page every time we press submit
    if (!title || !desc) {
      alert("title or description can not be blank");
      // if title or description is empty then it will give a prompt
    }
    addTodo(title, desc);
    // if they are not empty the on submit we will add the following in the
  };
  return (
    // <div className="container text-center my-3"> text-center will center aligny my text its a bootstrap class

    <div className="container my-3">
      <h3>Add a To Do</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            ToDO Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
          />
          {/* But merely adding the value ={title will not make the form to take input we will have to take the use of eth full functionality of teh useState hook for that we will be using the onChange method , i'll be making an arrow function inside the onChange method and i'll be passing an event e and i will write setTitle and e ko kya chaiye , usko chaiye -> e.target.value*/}
          {/* Using this useState we can update the text inside the text box */}
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Enter Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>

        <button type="submit" className="btn btn-sm btn-success">
          Add ToDo
        </button>
      </form>
    </div>
  );
};
