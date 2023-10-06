import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {
  const [getValue, setValue] = useState(1);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (getValue < 100) {
      setTimeout(() => {
        setValue(getValue + 1);
        if (getValue == 100) {
          setSuccess(true);
        }
      }, 30)
    }
  })
  return (
    <>
      <div className="container">
        <h2>Progress Bar With Label</h2>
        <div className="progress">
          <div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: `${getValue}%` }}>
            {getValue}
          </div>
        </div>
        <div>{getValue == 100 ? 'Success' : 'Loading...'}</div>
      </div>
    </>
  )
}

export default App
