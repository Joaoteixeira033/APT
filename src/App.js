import React from 'react'
import Navbar from './Components/Navbar';
import Home from './Components/home';
import Video from './Components/video';
import ImgPassar from './Components/imgpassar';
import Contacto from './Components/contacto';

function App() {
  return (
    <div>
      <Navbar />
      <div id="home"><Home /></div>
      <Video />
      <ImgPassar />
      <div id="contacto"><Contacto /></div>
    </div>
  );
}

export default App;
