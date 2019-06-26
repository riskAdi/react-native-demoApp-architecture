import React from 'react';
import {Image} from 'react-native';


const Icon = ({name}) => {

	if(name === 'Home'){
		return (
			<Image source = {require('../images/icons/home.png')}
				style = {{width:25,height:25}}
				/>
		)
    }
    else if(name === 'Profile'){
		return (
			<Image source = {require('../images/icons/heart.png')}
				style = {{width:25,height:25}}
				/>
		)
    }
    else {

        return (
			<Image source = {require('../images/icons/heart.png')}
				style = {{width:25,height:25}}
				/>
		)
    }
};


export default Icon;
