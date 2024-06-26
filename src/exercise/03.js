// Flexible Compound Components
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'
import {Switch} from '../switch'

// 🐨 create your ToggleContext context here
// 📜 https://react.dev/reference/react/createContext

const ToggleContext = React.createContext()

function Toggle({children}) {
  const [on, setOn] = React.useState(false)
  const toggle = () => setOn(!on)

  return <ToggleContext.Provider value={[on, toggle]}>{children}</ToggleContext.Provider>
}

const useToggle = () => {
  const context = React.useContext(ToggleContext)
  if (!context) {
    throw new Error('useToggle should be used inside of `Toggle`')
  }

  return context
}

function ToggleOn({children}) {
  const [on] = useToggle()
  return on ? children : null
}

// 🐨 do the same thing to this that you did to the ToggleOn component
function ToggleOff({children}) {
  const [on] = useToggle()

  return on ? null : children
}

// 🐨 get `on` and `toggle` from the ToggleContext with `useContext`
function ToggleButton(props) {
  const [on, toggle] = useToggle()

  return <Switch on={on} onClick={toggle} {...props} />
}

function App() {
  return (<ToggleButton />)
}

export default App

/*
eslint
  no-unused-vars: "off",
*/
