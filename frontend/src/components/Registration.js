import axios from 'axios';
import User from './User';

function Registration() {
  const fetchUsers = () =>{
    axios.get('/api/User').then(res => console.log(res.data));
  };

  const user={
    username:"",
   password:"",
   name :"",
   age :0,
  }
  const registerUser = () => {
    axios.post('/api/Registration',user).then(res => console.log(res.data));
  };
  return (
    <div className="App">
      <div></div>
       <table align="center">
           <tr>
               <th colSpan={2}><h3>Registration</h3></th>
           </tr>

           <tr>
               <td><label>Username</label></td>
               <td><input placeholder = "username" onChange={(e) =>(user.username = e.target.value)}/></td>
           </tr>

           <tr>
               <td><label>Password</label></td>
               <td><input placeholder = "password" onChange={(e) =>(user.password = e.target.value)}/></td>
           </tr>

           <tr>
               <td><label>Name</label></td>
               <td><input placeholder = "name" onChange={(e) =>(user.name = e.target.value)}/></td>
           </tr>

           <tr>
               <td><label>Age</label></td>
               <td><input placeholder = "age" onChange={(e) =>(user.age = Number(e.target.value))}/></td>
           </tr>

           <tr>
               <td></td>
               <td><button onClick={registerUser}>Registration</button></td>
           </tr>
       </table>
    </div>
  );
}

export default Registration;
