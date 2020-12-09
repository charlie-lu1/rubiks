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

  function click(commands){
    let command
    for (command in commands){
      console.log(`case '${commands[command]}':
      break`)
    }

  }

  function commandInterpreter(funcName){
    switch(funcName){
      case 'l1':
        break
      case 'l2':
        const myCube = cube
        const holder = cube[1][1]
        myCube[1][1] = cube[2][1]
        myCube[2][1] = cube[3][1]
        myCube[3][1] = cube[4][1]
        myCube[4][1] = holder
        // setCube(myCube)
        setCube([...cube, myCube])
        console.log(cube)
      case 'l3':
        break
      case 'r1':
        break
      case 'r2':
        break
      case 'r3':
        break
      case 'u1':
        break
      case 'u2':
        break
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
    <div className="App" onClick={() => click(commands)}>
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
