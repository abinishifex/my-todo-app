import React from 'react';

function MemberCard(props){
    return(
        <div>
            <h2>{props.Name}</h2>
            <p>{props.Role}</p>
            <p>{props.Bio}</p>
        </div>
    );
}
export default MemberCard;