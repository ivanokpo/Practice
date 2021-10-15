import { useState } from "react";
import Basketballer from "./Basketballer";
const AddPlayer = () => {
    const [name, setName] = useState(""); 
    const [team, setTeam] = useState(""); 
    const [position, setPosition] = useState("");
    const [number, setNumber] = useState();
    const [salary, setSalary] = useState(""); 

    const handleSubmit=(event)=> {
        event.preventDefault();
    
        const data = new FormData(event.target);
    
        const value = Object.fromEntries(data.entries());
        
        return(
        
        value.map(basketballer => <Basketballer {...basketballer}/>)
        )
      }
    
     

     return(
         <>
             <h1> Add Player </h1>
            
         
             <form onSubmit={handleSubmit}>
                 <label> Name:</label>
                 <input name="name"
                     type="text"
                     value={name}
                     onChange={e => setName(e.target.value)} />

                 <label> Number: </label>
                 <input name="number"
                     type="text"
                     value={number}
                     onChange={e => setNumber(e.target.value)} />

                 <label> Position:</label>
                 <input name="position"
                     type="text"
                     value={position}
                     onChange={e => setPosition(e.target.value)} />

                 <label> Team:</label>
                 <input name="team"
                     type="text"
                     value={team}
                     onChange={e => setTeam(e.target.value)} />

                <label> Salary:</label>
                 <input name="salary"
                     type="text"
                     value={salary}
                     onChange={e => setSalary(e.target.value)} />

                <h3>Name: {name}</h3>
                <p>Team: {team}</p>
                <p>Number: {number}</p>
                <p>Position: {position}</p>
                <p>Salary: {salary} </p>
                
                 <br />
                <button>Submit</button>             
             </form>
         </>
     );
 }

 export default AddPlayer;