import React from 'react'
import Box from './Box'

// [[1,1,1],[1,1,1],[1,1,1]],
export default function Face({face}) {
    return (
        <div>
            This is a face
            {face.map(row => (
                <div className='rows'>
                    {row.map(box => (
                        <Box box={box} />
                    ))}
                </div>
            ))}
        </div>
    )
}
