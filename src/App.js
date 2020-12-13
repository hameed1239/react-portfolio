import React, { useState } from "react";
import './App.css';
import Nav from './Components/Nav'


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
    </div>
  );
}

export default App;
