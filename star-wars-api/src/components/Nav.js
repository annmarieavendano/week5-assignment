import React from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component
 {
    render() 
    {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/list">Star Wars Character List</Link></li>
                </ul>
            </div>
        );
    }
}