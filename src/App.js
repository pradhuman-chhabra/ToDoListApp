import "./App.css";
import Header from "./myComponenets/Header";
// yahan import {Header} from "./myComponenet/Header" nahi likha hua as ham default export function kar rhe hai, tabhi woh bona curly braces ke likha hua hain
import { ToDos } from "./myComponenets/ToDos";
import { Footer } from "./myComponenets/Footer";
// since this is not ecport default function then its inside curly braces

function App() {
  // i'll make an object of all my todos and i'll make an array of all the todos
  let todos=[
    {
      sno:1,
      title: "you need to go to the market",
      desc:"you need to got to the market to get this job done"
    },
    {
      sno:1,
      title: "you need to go to the ghat",
      desc:"you need to got to the market to get this job done2"
    },
    {
      sno:1,
      title: "you need to go to the mall",
      desc:"you need to got to the market to get this job done3"
    },


  ]
  return (
    <>
      <Header title="my to do list" searchBar={false} />
      <ToDos />
      <Footer />
    </>
  );
}

export default App;
