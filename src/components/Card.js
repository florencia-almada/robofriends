import React from 'react';
import 'tachyons'

const Card = ({id, name, email}) => {
    return(
        <div className='tc bg-lightest-blue dib br3 pa3 ma2 grow pw2 shadow-5'>
            <img src={`https://robohash.org/${id}?50x50`} alt='robot'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card