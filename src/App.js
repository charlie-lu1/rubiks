import './App.css';
import React, { useState } from 'react';
import Face from './components/Face';

const initialCube = [
  [['red','red','red'],['red','red','red'],['red','red','red']],
  [['blue','blue','blue'],['blue','blue','blue'],['blue','blue','blue']],
  [['green','green','green'],['green','green','green'],['green','green','green']],
  [['yellow','yellow','yellow'],['yellow','yellow','yellow'],['yellow','yellow','yellow']],
  [['orange','orange','orange'],['orange','orange','orange'],['orange','orange','orange']],
  [['white','white','white'],['white','white','white'],['white','white','white']]
]

function App() {

  const [cube, setCube] = useState(initialCube)

  return (
    <div className="App">
      Rubrik's Cube
      <Face className = 'top' face={cube[0]} />
      <div className ='middleFaces'>
        <Face className='middle' face={cube[1]} />
        <Face className='middle' face={cube[2]} />
        <Face className='middle' face={cube[3]} />
        <Face className='middle' face={cube[4]} />
      </div>
      <Face className='bottom' face={cube[5]} />
    </div>
  );
}

export default App;
