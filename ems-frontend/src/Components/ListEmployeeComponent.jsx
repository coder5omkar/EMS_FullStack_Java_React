import React, { useEffect,useState } from 'react'
import { deleteEmployee, listEmployee } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    const [employee,setEmployee]= useState([])
    const navigator = useNavigate();
    
    useEffect(()=>{
        getAllEmployee();

    },[])

    function getAllEmployee(){
        listEmployee().then((response)=>{
            setEmployee(response.data)
        }).catch(error => {
            console.error(error);
        })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/edit-employee/${id}`)
    }

    function removeEmployee(id) {
        // Show a confirmation popup
        const confirmDelete = window.confirm(
          "Are you sure you want to delete this employee?"
        );
      
        if (confirmDelete) {
          // If the user confirms, proceed with the deletion
          deleteEmployee(id)
            .then((response) => {
              alert("Employee deleted successfully!"); // Success alert
              getAllEmployee(); // Refresh the employee list
            })
            .catch((error) => {
              console.error(error);
              alert("Error occurred while deleting the employee."); // Error alert
            });
        } else {
          // If the user cancels, log and take no action
          console.log("Employee deletion canceled.");
        }
      }

  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>
        <table className="table table-striped table-bordered table-sm">
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email Id</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    employee.map(emp =>
                     <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.firstName}</td>
                        <td>{emp.lastName}</td>
                        <td>{emp.email}</td>
                        <td>
                            <button className='btn btn-info' onClick={()=> updateEmployee(emp.id)}>Update</button>
                            <button className='btn btn-danger' onClick={()=> removeEmployee(emp.id)} style={{marginLeft:'10px'}}>Delete</button>
                        </td>
                    </tr>)
                }
                <tr>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent

 // const dummyData = [
    //     {
    //         "id":1,
    //         "firstName":"Omkar",
    //         "lastName":"Amale",
    //         "email":"abc@gmail.com"
    //     },
    //     {
    //         "id":2,
    //         "firstName":"Surabhi",
    //         "lastName":"Amale",
    //         "email":"surabhi@gmail.com"
    //     },
    //     {
    //         "id":3,
    //         "firstName":"RajLaxmi",
    //         "lastName":"Amale",
    //         "email":"rajLaxmi@gmail.com"
    //     },
    //     {
    //         "id":4,
    //         "firstName":"Padmaja",
    //         "lastName":"Amale",
    //         "email":"padmaja@gmail.com"
    //     }
    // ]