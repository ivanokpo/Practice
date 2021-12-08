import PropTypes from 'prop-types';
import BasketballPage from './BasketballPage';
import salary from './nba.json';
import { Card, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Nav from './Nav';




const Basketballer = ({imagelink, name, team, number, position, salary}) => {
    console.log("PROPS ",imagelink, name, team, number, position, salary);

    const addCard = (e) => {
        console.log(e.target.value);

    }

    let a = {imagelink};
    return (
        <>
        <br></br>
        <div>
            
            
            <Router>
            <nav>
                <Link to="/BasketballPage">
                {name}'s Page
                </Link>
            </nav>
                <Route exact path="/BasketballPage">
                <BasketballPage/>
                </Route>
            </Router>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={imagelink} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                <p>Team: {team}</p>
                <p>Number: {number}</p>
                <p>Position: {position}</p>
                <p>Salary: {salary} </p>
                
                </Card.Text>
                <Button onClick={addCard} variant="primary">Go somewhere</Button>
        </Card.Body>
        </Card>
            
            
        </div>
        
        </>
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