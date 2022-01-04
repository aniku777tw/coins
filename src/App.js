import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/Header.js";
import Sidebar from "./components/Sidebar";
import Widgets from "./components/Widgets";

function App() {
  return (
    <div className="app">

      <Header/>

      <div className = "app__body">
        <div className='sidebar'>
        <Sidebar/>
        </div>
        <div className='feed'> 
          <Feed/>
        </div>
        <div className='widgets'>
          <Widgets/>
        </div>
        
      </div>

    </div>
  );
}

export default App;
