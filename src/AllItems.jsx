import React from 'react';
import Users from './Users';

const AllItems = (props) => {
    return (
        <div>
            {props.userInfo.map((user, index) => {
                return <Users title={user.title} author={user.author} genre={user.genre} publisher={user.publisher} key={index} />
            })}
        </div>
    );
}

export default AllItems;

