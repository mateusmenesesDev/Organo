import { useState } from "react";
import { Banner } from "./components/Banner";
import { Formulario } from "./components/Formulário";
import { Team } from "./components/Team";



function App() {
  const teamList = [
    {title: 'Programação', primaryColor: '#57C278', secundaryColor: '#D9F7E9'},
    {title: 'Front End', primaryColor: '#82CFFA', secundaryColor: '#E8F8FF'},
    {title: 'Data Science', primaryColor: '#A6D157', secundaryColor: '#F0F8E2'},
    {title: 'Devops', primaryColor: '#E06B69', secundaryColor: '#FDE7E8'},
    {title: 'UX e Design', primaryColor: '#DB6EBF', secundaryColor: '#FAE9F5'},
    {title: 'Mobile', primaryColor: '#FFBA05', secundaryColor: '#FFF5D9'},
    {title: 'Inovação e Gestão', primaryColor: '#FF8A29', secundaryColor: '#FFEEDF'},
  
  ]

  const[employee, setEmployee] = useState([])
  const addEmployee = (newEmployee)=>{
    setEmployee([...employee, newEmployee])
  }
  console.log(employee)
  return (
    <div>
      <Banner/>
      <Formulario teamList = {teamList} addSubmit={addEmployee}/>
      {teamList.map((team)=>(
      <Team 
        key={team.title} 
        team={team} 
        employeeList={employee.filter((employee)=> employee.team === team.title)}/>
      ))}
    </div>
    
    

    
  );
}

export default App;
