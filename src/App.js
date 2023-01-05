import logo from './logo.svg';
import './App.css';
import Base from './Base/Base';
import AllUsers from './User/AllUsers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UpdateUser from './User/UpdateUser';
import ViewUser from './User/ViewUser';



function App() {
  return (
    <div className="App">
      <Base>
      <BrowserRouter>
    <Routes>
      <Route path="AllUsers" element={<AllUsers/>} ></Route>
      <Route path="UpdateUser" element={<UpdateUser/>} ></Route>
      <Route path="ViewUser" element={<ViewUser/>} ></Route>
     

    </Routes>
   </BrowserRouter>
      </Base>
    </div>
  );
}

export default App;
