import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>

        <NavigationItem Link="/" active={true}>Burger Builder</NavigationItem>
        <NavigationItem Link="/">Check Out</NavigationItem>
    </ul>
);

export default navigationItems;