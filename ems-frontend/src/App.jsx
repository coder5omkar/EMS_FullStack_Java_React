import './App.css'
import EmployeeComponent from './Components/EmployeeComponent'
import FooterComponent from './Components/FooterComponent'
import HeaderComponent from './Components/HeaderComponent'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          {/* //htttp:localhost:3000 */}
          <Route path='/' element ={< ListEmployeeComponent />} ></Route>
          {/* //htttp:localhost:3000/employees */}
          <Route path='/employees' element ={< ListEmployeeComponent />} ></Route>
         {/* //htttp:localhost:3000/add-employee */}
          <Route path='/add-employee' element ={<EmployeeComponent />}></Route>
          {/* //htttp:localhost:3000/edit-employee/1 */}
          <Route path='/edit-employee/:id' element ={<EmployeeComponent />}></Route>
        </Routes>
        <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
