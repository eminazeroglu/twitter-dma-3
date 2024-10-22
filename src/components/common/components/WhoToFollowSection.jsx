import { useEffect } from "react";
import { useFetchUsers } from "../../../hooks/useFetch";
import Card from "../../ui/card";
import { FolloweItem } from "../../ui/follower";


function WhoToFollowSection() {

    const [users, fetchUsers] = useFetchUsers();

    const handleBtn = () => {
        alert('sdasd');
    }

    useEffect(() => {
        fetchUsers({page: 1, limit: 5, random: 1})
    }, [])

    return (
        <Card
            title={'Who to follow'}
            showMore="true"
            btnText={"Show more"}
            onShowMore={handleBtn}
        >
            <ul className="mt-[20px] flex flex-col gap-[20px]">
                {users?.map((user, index) => (
                    <FolloweItem item={user} key={index}/>
                ))}
            </ul>
        </Card>
    );
}

export default WhoToFollowSection;