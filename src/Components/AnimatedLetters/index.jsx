import React from 'react'
import './index.scss'
const AnimatedLetters = ( {letter,string,index} ) => {
  return (
<span>
{
  string.map( (char,i)=>(
    <span key={char+i} className={`${letter} _${i+index} `}>
      {char}
      </span>
  )  )
}
</span>  )
}

export default AnimatedLetters 