import React, { Component } from 'react'
import './StarWarsCharacterLists.css';

export default class StarWarsCharacterList extends Component
 {
    state = {
        isLoading: true,
        characters: [],
        error: ''
    }

    componentDidMount() 
    {
        fetch("https://swapi.dev/api/people/")
            .then(response => response.json())
            .then(data => {
                this.setState({
                    characters: data.results,
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
        const {isLoading, error, characters} = this.state;
        
        return (
            <div className="StarWarsCharacterList">
                <h2>StarWarsCharacterList</h2>
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}

                {
                    characters.map((character, idx) => 
                    {
                    return (
                        <div className="StarWarsCharacterLists" key={idx}>
                            <h3>{character.name}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }
}