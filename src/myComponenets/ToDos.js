import React from "react";
import { ToDoItem } from "./ToDoItem";
// ./ means the item is in the same folder

export const ToDos = (props) => {
  return (
    <div className="container">
      <h3 className="text-center my-3">ToDos List</h3>
      {/* this classname makes the things center aligned */}
      {/* my-3 gives it a margin */}
      {/* <ToDoItem todo={props.todos[0]}/> */}
      {/* Instead of providing one todo like the above one we will traverse it using loop using the map function */}
      {props.todos.map((todo)=>{
        return(
          <>
          {/* <> Wrapping things inside can return more than one element </> */}
          {/* <h3>this will return more than one things</h3> */} 
          <ToDoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
          {/* maine todo.js se todoitem.js wale componenet mein ek ondelete method pass kiya hain yeh method main onclick run karwa dunga*/}
          </>
        )
      }

      )}
    </div>
  );
};

// we have used rafc which is react arrow based component , this works similar to the rfc, which is the function based componenent