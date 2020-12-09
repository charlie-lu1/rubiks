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

const commands = ['l1', 'l2', 'l3', 'r1', 'r2', 'r3', 'u1', 'u2', 'u3', 'd1', 'd2', 'd3', 't1', 't2', 't3', 'v1', 'v2', 'v3']

function App() {

  const [cube, setCube] = useState(initialCube)

  function rotate(aFace1, aFace2, aFace3, aFace4, row){
    const myCube = cube
    const holder = cube[aFace1][row]
    myCube[aFace1][row] = cube[aFace2][row]
    myCube[aFace2][row] = cube[aFace3][row]
    myCube[aFace3][row] = cube[aFace4][row]
    myCube[aFace4][row] = holder
    setCube([...cube, myCube])
  }

  function faceRotate(face, direction){
    // if direction ==
  }

  function commandInterpreter(funcName){
    switch(funcName){
      case 'l1':
        // faceRotate
        rotate(1,2,3,4,0)
        break
      case 'l2':
        rotate(1,2,3,4,1)
        break
      case 'l3':
        // faceRotate
        rotate(1,2,3,4,2)
        break
      case 'r1':
        // faceRotate
        rotate(4,3,2,1,0)
        break
      case 'r2':
        rotate(4,3,2,1,1)
      case 'r3':
        // faceRotate
        rotate(4,3,2,1,2)
        break
      case 'u1':
        break
      case 'u2':
        // rotate(5,1,3,6)
      case 'u3':
        break
      case 'd1':
        break
      case 'd2':
        break
      case 'd3':
        break
      case 't1':
        break
      case 't2':
        break
      case 't3':
        break
      case 'v1':
        break
      case 'v2':
        break
      case 'v3':
        break

      default:
        console.log('default')
    }
  }

  return (
    <div className="App">
      Rubrik's Cube

      <div className="cube">
        <Face className = 'top' face={cube[0]} />
        <div className ='middleFaces'>
          <Face className='middle' face={cube[1]} />
          <Face className='middle' face={cube[2]} />
          <Face className='middle' face={cube[3]} />
          <Face className='middle' face={cube[4]} />
        </div>
        <Face className='bottom' face={cube[5]} />
      </div>

      <div className="controls">
        <h2>Controls</h2>
        {commands.map(command => (
          <button onClick={() => commandInterpreter(command)}>{command}</button>
        ))}
      </div>

      <img src="https://i.imgur.com/fYuQ3JQ.png" alt="reference" />
    </div>
  );
}

export default App;
