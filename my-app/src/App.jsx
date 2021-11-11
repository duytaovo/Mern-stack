import React from 'react'
import 'normalize.css'
import 'src/assets/styles/global.scss'
import 'react-toastify/dist/ReactToastify.css'
import Routes from './Routes'

// import Routes from './Routes'
// import { ToastContainer } from 'react-toastify'
// import Authorization from './components/Authorization/Authorization'
// import Loading from './components/Loading/Loading'
export default function App() {
  return (
    <div className="App">
      <Routes />
    </div>
  )
}
