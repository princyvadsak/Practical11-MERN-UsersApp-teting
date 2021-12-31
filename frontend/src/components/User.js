import axios from "axios";

function User() {
    const user = {
        username:"",
        password:"",
        name:"",
        age:0,
    }
    var getData = "";
    const userData = () => {
        axios.post("/api/userdata",user).then((res) => {getData = res.data;console.log(getData)});
    };

    return(
        <div className="container-fluid">
            <h1>User Data</h1>

            <label>User Name</label>
            <input placeholder="Enter username" onChange={(e) => user.username = e.target.value}/><br/>
            <button onClick={userData} li>Display</button>
        </div>
    );
}

export default User;