import React, { useState } from 'react'

export default function ShowComponent(props) {
  const [ show, setShow ] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>{!show ? 'Mount' : 'Unmount'}</button>
      {show && props.children}
    </div>
  )
}