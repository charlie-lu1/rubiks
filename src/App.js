import './App.css';
import React, { useState } from 'react';
import Face from './components/Face';

const initialCube = [
  [['red1','red2','red3'],['red4','red5','red6'],['red7','red8','red9']],
  [['blue1','blue2','blue3'],['blue4','blue5','blue6'],['blue7','blue8','blue9']],
  [['green1','green2','green3'],['green4','green5','green6'],['green7','green8','green9']],
  [['yellow1','yellow2','yellow3'],['yellow4','yellow5','yellow6'],['yellow7','yellow8','yellow9']],
  [['orange1','orange2','orange3'],['orange4','orange5','orange6'],['orange7','orange8','orange9']],
  [['white1','white2','white3'],['white4','white5','white6'],['white7','white8','white9']]
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
    if (direction === 'clockwise'){
      const myCube = cube
      let row
      let row1 = []
      let row2 = []
      let row3 = []
      for (row in myCube[face]){
        let i
        for (i in myCube[face][row]){
          if (i == 0) {
            row1.unshift(myCube[face][row][i])
          } else if (i == 1){
            row2.unshift(myCube[face][row][i])
          } else if (i == 2){
            row3.unshift(myCube[face][row][i])
          }
        }
      }
      myCube[face] = [row1, row2, row3]
      setCube([...cube, myCube])
    }
     else {
      const myCube = cube
      let row
      let row1 = []
      let row2 = []
      let row3 = []
      for (row in myCube[face]){
        let i
        for (i in myCube[face][row]){
          if (i == 0) {
            row3.push(myCube[face][row][i])
          } else if (i == 1){
            row2.push(myCube[face][row][i])
          } else if (i == 2){
            row1.push(myCube[face][row][i])
          }
        }
      }
      myCube[face] = [row1, row2, row3]
      setCube([...cube, myCube])
    }
  }

  function commandInterpreter(funcName){
    switch(funcName){
      case 'l1':
        faceRotate(0, 'clockwise')
        rotate(1,2,3,4,0)
        break
      case 'l2':
        rotate(1,2,3,4,1)
        break
      case 'l3':
        faceRotate(5, 'counterclockwise')
        rotate(1,2,3,4,2)
        break
      case 'r1':
        faceRotate(0, 'counterclockwise')
        rotate(4,3,2,1,0)
        break
      case 'r2':
        rotate(4,3,2,1,1)
      case 'r3':
        faceRotate(5, 'clockwise')
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
