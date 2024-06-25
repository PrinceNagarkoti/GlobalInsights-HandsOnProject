import Header from './Components/Header'
import { Outlet } from 'react-router-dom'

import './App.css'
import { ThemeProvider } from './Context/ThemeContext'

const App = () => {
  return (
    <ThemeProvider>
     <Header/>
      <Outlet />
    </ThemeProvider>
  )
}

export default App