import React from 'react';
import logo from '../logo.png';
import './Home.css';

export default class Home extends React.Component
{
    render() 
    {
        return (
            <div class="homePageImage">
                <img src={logo} alt="StarWars" />
            </div>
        );
    }
}