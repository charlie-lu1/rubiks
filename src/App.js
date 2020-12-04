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

  function l2(){
    const myCube = cube
    const holder = cube[1][1]
    myCube[1][1] = cube[2][1]
    myCube[2][1] = cube[3][1]
    myCube[3][1] = cube[4][1]
    myCube[4][1] = holder
    // setCube(myCube)
    setCube([...cube, myCube])
    console.log(cube)
  }

  return (
    <div className="App" onClick={l2}>
      Rubrik's Cube
      <Face className = 'top' face={cube[0]} />
      <div className ='middleFaces'>
        <Face className='middle' face={cube[1]} />
        <Face className='middle' face={cube[2]} />
        <Face className='middle' face={cube[3]} />
        <Face className='middle' face={cube[4]} />
      </div>
      <Face className='bottom' face={cube[5]} />

      <img src="https://i.imgur.com/fYuQ3JQ.png" alt="reference" />
    </div>
  );
}

export default App;
