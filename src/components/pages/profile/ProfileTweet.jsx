import { useOutletContext } from "react-router-dom";
import { useFetchUserTweetsByUsername } from "../../../hooks/useFetch";
import { useEffect } from "react";
import TweetItem from "../../ui/tweet-item";
import { Loading } from "../../ui/loading";

function ProfileTweet() {

    const {user} = useOutletContext()

    const [tweets, fetchTweets, loading] = useFetchUserTweetsByUsername()

    useEffect(() => {
        if (user.username) {
            fetchTweets(user.username)
        }
    }, [user])
    

    return (
        <Loading loading={loading}>
            <div>
                {tweets?.data?.map((tweet, index) => (
                    <TweetItem key={index} tweet={tweet}/>
                ))}
            </div>
        </Loading>
    );
}

export default ProfileTweet;