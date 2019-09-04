import React from 'react';


function GithubCard (props) {
    return (<div>
        <h2> User: {props.user.name}</h2>
        <h3> Bio: {props.user.bio} </h3>
        <img src={props.user.avatar_url} />
        <div>
            {props.followers.map(follower => (
                <div key={follower.id}> {follower.login} </div>
            ))}
        </div>
    </div>)
}

export default GithubCard;