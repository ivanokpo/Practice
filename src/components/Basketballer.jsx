import PropTypes from 'prop-types';

import salary from '../nba.json';


const Basketballer = ({imagelink, name, team, number, position, salary}) => {
    console.log("PROPS ",imagelink, name, team, number, position, salary);

    let a = {imagelink};
    return (
        <div>
            
            <img src={a} className="thumbnail" alt="logo" />
            <h3>Name: {name}</h3>
            <p>Team: {team}</p>
            <p>Number: {number}</p>
            <p>Position: {position}</p>
            <p>Salary: {salary} </p>
            
        </div>
        

    )

};

Basketballer.propTypes = {
    imagelink: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    team: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    salary: PropTypes.number.isRequired,
    position: PropTypes.string.isRequired
}

export default Basketballer;