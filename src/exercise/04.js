// Prop Collections and Getters
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {Switch} from '../switch'

function useToggle() {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  const togglerProps = (props) => ({
    'aria-pressed': on,
    onClick: toggle,
    ...props
  })

  // 🐨 Add a property called `togglerProps`. It should be an object that has
  // `aria-pressed` and `onClick` properties.
  // 💰 {'aria-pressed': on, onClick: toggle}
  return {on, toggle, togglerProps}
}

function App() {
  const {on, toggle, togglerProps} = useToggle()
  return (
    <div>
      <Switch on={on} {...togglerProps({
          'aria-label': 'custom-button',
          id: 'custom-button-id',
        })} />
      <hr />
      <button aria-label="custom-button" {...togglerProps()}>
        {on ? 'on' : 'off'}
      </button>
    </div>
  )
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
