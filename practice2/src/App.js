import React from 'react';
import './App.css';
import IndividualApps from './IndividualApps';

function App() {

  const Yarn = {
    imageUrl: 'https://play-lh.googleusercontent.com/0IVtWPfmiXWiQcvH_Y3dqeAKp_tP_gsxAtHtMv9qKV-9Fw4RziOO1kmhjrb0smHWqv3J=s180',
    title: 'Yarn',
    media: ['https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2019/06/portrait-mode-atticus.jpeg', 'https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2019/06/portrait-mode-atticus.jpeg', 'https://learn.g2.com/hubfs/portrait-mode.jpg']
  }

  return (
    <div style={{display: 'block'}}>
        <IndividualApps app={Yarn}/>
        <IndividualApps app={Yarn}/>
        <IndividualApps app={Yarn}/>
        <IndividualApps app={Yarn}/>
        <IndividualApps app={Yarn}/>
        <IndividualApps app={Yarn}/>
    </div>
  );
}

export default App;
