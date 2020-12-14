import React, { useState } from "react";
import './App.css';
import Nav from './Components/Nav';
import About from './Components/About';


function App() {
  const [pages] = useState([
    {
      name: 'About me',
      id: 'about'
    },
    {
      name: 'Portfolio',
      id: 'portfolio'
    },
    {
      name: 'Contact',
      id: 'contact'
    },
    {
      name: 'Resume',
      id: 'resume'
    },
  ])
  const [currentPage, setCurrentPage] = useState(pages[0])   

  return (
    <div>
      <Nav
        pages={pages}
        currentPage={currentPage}
        setCurrentPage = {setCurrentPage}
      />
      <main>
        {currentPage.id === 'about' ? (<About pages={pages} setCurrentPage={setCurrentPage}/>)
         : currentPage.id === 'portfolio' ? 'value2'
         : currentPage.id === 'contact' ? 'value3'
         : 'value4'}
      </main>
      
    </div>
  );
}

export default App;
