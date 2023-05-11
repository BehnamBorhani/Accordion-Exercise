import "./App.css";
import Accordion from "./components/accordions/Accordion";

function App() {
   return (
      <>
         <header className="App-header">
            <Accordion id={1}/>
            <Accordion id={2}/>
            <Accordion id={3}/>
            <Accordion id={4}/>
         </header>
      </>
   );
}

export default App;
