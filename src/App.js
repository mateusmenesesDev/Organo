import { Banner } from "./components/Banner";
import { Formulario } from "./components/Formulário";



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
  return (
    <div>
      <header><Banner/></header>
      <Formulario teamList = {teamList}/>
      <h3>Minha Organização:</h3>
    </div>
    
    

    
  );
}

export default App;
