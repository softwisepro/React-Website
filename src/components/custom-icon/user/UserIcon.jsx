import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';

const UserIcon = () => {

    const userIconStyle = 'p-2 border rounded-full'

    return (
        <AiOutlineUser fontSize={40} className={(userIconStyle)} />
    )
}

export default UserIcon