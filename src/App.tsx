import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppTitle from './component/header/app-title.component';
import FormInput from './component/log-in-form/log-in-form.component';
import EmployeeList from './component/employee-list/employee-list-component';
import CreateUser from './component/create-user/create-user.component';

function App() {
  return (
      <Routes>
      <Route path='/' element={<AppTitle />}>
          <Route index element={<FormInput />}/>
          <Route path='employeeList' element={<EmployeeList />}/>
          <Route path='create' element={<CreateUser />}/>
      </Route>
    </Routes>
  );
}

export default App;
