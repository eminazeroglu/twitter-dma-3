import { useEffect } from "react";
import TweetForm from "../components/ui/tweet-form";
import TweetItem from "../components/ui/tweet-item";
import { useFetchTweets } from "../hooks/useFetch";

function HomePage() {

    const [tweetItems, fetchTweetItems] = useFetchTweets()

    useEffect(() => {
        fetchTweetItems()
    }, [])
    

    return (
        <div className="divide-y dark:divide-borderColor">
            <TweetForm onSuccess={() => fetchTweetItems()} />
            {tweetItems?.data?.map((tweet, index) => (
                <TweetItem onRefresh={() => fetchTweetItems()} tweet={tweet} key={index}/>
            ))}
        </div>
    );
}

export default HomePage;