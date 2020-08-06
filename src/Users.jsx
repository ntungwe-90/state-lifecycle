import React from 'react';

const Users = (props) => {
    return (
        <div>
            <p>Title:{props.title} </p>
            <p>Author:{props.author} </p>
            <p>Genre:{props.genre} </p>
            <p>Publisher:{props.publisher}</p>
            <hr/>
        </div>
    );
}

export default Users;
