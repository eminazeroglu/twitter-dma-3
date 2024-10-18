import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { FolloweItem } from '../../ui/follower';

const ProfileFollowing = () => {

    const { followings } = useOutletContext()
    
    return (
        <div className="grid grid-cols-1">
            {followings?.data?.map((item, index) => (
                <div key={index} className="p-3 border-b">
                    <FolloweItem item={item} />
                </div>
            ))}
        </div>
    )
}

export default ProfileFollowing