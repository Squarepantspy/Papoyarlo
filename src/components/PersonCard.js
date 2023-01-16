import React from 'react';
class PersonCard extends React.Component{
    render(){
        const {firstName, lastName,age,hairColor}= this.props;
        return(
            <div className='card text-bg-light mb-3'>
                <div className='card-header'>
                    <h2>{lastName}, {firstName}</h2>
                </div>
                <div className='card-body'>
                    <p>Edad : {age}</p>
                    <p>Color de pelo : {hairColor}</p>
                </div>
            </div>
        )
    }
}
export default PersonCard;