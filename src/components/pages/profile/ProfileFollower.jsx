import { useOutletContext } from 'react-router-dom'
import { FolloweItem } from '../../ui/follower';

function ProfileFollower() {
    const { followers } = useOutletContext()
    
    return (
        <div className="grid grid-cols-1">
            {followers?.data?.map((item, index) => (
                <div key={index} className="p-3 border-b">
                    <FolloweItem item={item} />
                </div>
            ))}
        </div>
    )
}

export default ProfileFollower;