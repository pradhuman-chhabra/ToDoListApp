import "./App.css";
import Header from "./myComponenets/Header";
// yahan import {Header} from "./myComponenet/Header" nahi likha hua as ham default export function kar rhe hai, tabhi woh bona curly braces ke likha hua hain
import { ToDos } from "./myComponenets/ToDos";
import { Footer } from "./myComponenets/Footer";
// since this is not ecport default function then its inside curly braces
import { useState } from "react";

function App() {
  const onDelete = (todo) => {
    console.log("i am on delete of todo", todo);
    // Deleteing this way does not work in react
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);
    // In react we will delete like this

    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
  };
  // i'll make an object of all my todos and i'll make an array of all the todos
  // let todos=[item1,item2,item3] instead of using this i'll use useState hook to store the array
  // we are using the use state hook const [todos,setTodos]=useState([item 1, item 2,item 3])
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "you need to go to the market",
      desc: "you need to got to the market to get this job done",
    },
    {
      sno: 1,
      title: "you need to go to the ghat",
      desc: "you need to got to the market to get this job done2",
    },
    {
      sno: 1,
      title: "you need to go to the mall",
      desc: "you need to got to the market to get this job done3",
    },
  ]);
  return (
    <>
      <Header title="my to do list" searchBar={false} />
      <ToDos todos={todos} onDelete={onDelete} />
      {/* Here i have passed the props to ToDos.js from App.js, i have passes todos and onDelete to ToDos.js */}
      {/* ToDos.js beta hai App.js ka toh woh usko props mein todos and onDelte pass kar dega,ToDos.js props mein isko store kerga aur inko jaise marji aaye use karega, ToDoItems.js, ToDos.js ka beta hai toh woh usko props dega using props or by destructuring , it will recieve todo (not ToDos, woh map function use kar rha hai todos naam ke array par aur todo return kar rhai , wohi pass ho rha hai) and onDelete and finally it will use the onDelete on onClick event*/}
      <Footer />
    </>
  );
}

export default App;
