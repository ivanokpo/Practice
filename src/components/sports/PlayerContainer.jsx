import Basketballer from './Basketballer';
import Players from './nba.json';
import { useState } from 'react';

import Search from './Search';



function PlayerContainer() {

    const [filter, setFilter] = useState("");

    console.log("Players ", Players);
    return (
        <>

            <Search value={filter} setValue={setFilter}/>
            <br></br>
            {
                Players.filter(play => play.name.toLowerCase().startsWith(filter.toLowerCase())).map(basketballer => <Basketballer {...basketballer}/>)
            }
            


            

        </>
    )
}

export default PlayerContainer;