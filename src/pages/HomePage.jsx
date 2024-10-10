import TweetForm from "../components/ui/tweet-form";
import TweetItem from "../components/ui/tweet-item";

function HomePage() {
    return (
        <div className="divide-y divide-borderColor">
            <TweetForm/>
            {[...Array(10).keys()].map((_, index) => (
                <TweetItem key={index}/>
            ))}
        </div>
    );
}

export default HomePage;