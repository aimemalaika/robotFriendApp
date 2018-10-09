import React from 'react';

const Card = (props)=>{
    return (
        <div className="bg-light-green dib br3  pa3 ma2 grow bw2 shadow-5">
            <img alt="Robot" src={`https://robohash.org/${props.id}?200x200`} />
            <div>
                <h3>{props.name}</h3>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;