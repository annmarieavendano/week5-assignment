import React from 'react';
import './item.css';

const imgURL = "https://starwars-visualguide.com/assets/img/characters/";
const characterURL = "https://swapi.dev/api/people/";
let {id} = 0;

export default class StarWarsCharacter extends React.Component 
{
    state = {
        isLoading: true,
        characters: null,
        error: ''
    }

    componentDidMount() 
    {
        id = this.props.match.params.id;
        fetch(`${characterURL}${id}/`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    character: data,
                    isLoading: false
                })
            })
            .catch((error) => {
                this.setState({
                    isLoading: false,
                    error: error.message
                })
            });
    }

    render() 
    {
        const {isLoading, error, character} = this.state;

        if (character && id > 1)
        {
            return (
                <div className = "item">
                    {isLoading && <p>Loading...</p>}
                    {error && <p>{error}</p>}
                    <div className="item-image">
                        <img src= {`${imgURL}${id}.jpg`} alt="Image this is." />
                    </div>
                    <div className="item-title">
                        <h2>name: {character.name}</h2> 
                    </div>
                    <div className="item-description">
                    <p>height: {character.height}</p>
                    </div>
                    <div className="item-description">
                        <p>gender: {character.gender}</p>
                    </div>
                </div>
            );  
        }
        else
        {
            return ("");
        }        
    } 
}