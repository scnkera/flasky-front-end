import PropTypes from 'prop-types';
import {useState} from 'react';

const Cat = ({name, personality, caretaker, color}) => {
    const [petCount, setPetCount] = useState(0);

    const petClicked = () => {
        setPetCount(petCount => petCount + 1);
    };

    return (
        <li>
            <h3>Name: {name}</h3>
            <h3>Color: {color}</h3>
            <h3>Personality: {personality}</h3>
            <h3>Caretaker: {caretaker}</h3>
            <h3># of Pets: {petCount}</h3>
            <p>🐈</p>
            <button onClick={petClicked}>Pet Cat</button>
        </li>
    );
};

Cat.propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    personality: PropTypes.string.isRequired,
    caretaker: PropTypes.string.isRequired
};

export default Cat;

