import React from "react";

export const ToDoItem = ({ todo, onDelete }) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => {
          onDelete(todo);
        }}
      >
        {/* what does this arrow function do, whenever there is a call i.e onDelete then the arrow function ko onDelete ko task ke saath call kar dena hai
        Here we were just passing the onDelte function using onClick={OnDelete} , and if we use onClick={onDelete()} or onClick={onDelete(todo)} then it would be calling the arrow function , we don't want that because agr aise hoga toh rendering ke time par hi fucntion call ho jayega teeno instances ke liye , 
        Why did we use arrow function ?
        Because if we called he function directly toh woh rendering ke time par hi call ho jaata , but arrow function mein daal kar main function pass kar rha hoo call nahi kar rha, jo hame karna hain
        func - means passing a function , func() means calling the function
        toh basically hamne ek function bana diya jisme hamne function call daal diya aur woh function hamne pass kar diya , arrow function pass hua usme onDelete(todo) function call daal di
        */}
        Delete
      </button>
      {/* isme likha hai jaise hi koi click kare main yeh ondelete method ko rrun karwa dunga , yeh method jo maine todo se todoitem mein pass karwaya hai */}
      {/* desructuring is a js concept here in the top line , we could have written props
      export const ToDoItem = (props)
      
      but instead we used two curly braces and put whatever we wanted to pass as props seperately , i.e todo and onDelete, agr props pass karenge toh har jagah props.onDelete likha padhega warna aise hi likh ke kaam ho jayega
      
      destructuring mein ek concept hota hai ki main export const ToDoItem = (props) likh  du ya props mein jo cheez hai woh likh du , i.e export const ToDoItem = ({ todo, onDelete }) agr porps likhunga toh pure program mein props.onDelete aur props.todo.title, props.todo.desc likhna padhega
      */}
    </div>
  );
};
