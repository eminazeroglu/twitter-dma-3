import { useEffect } from "react";
import { useFetchBookmarks } from "../hooks/useFetch";
import TweetItem from "../components/ui/tweet-item";

function BookmarkPage() {

    const [bookmarks, fetchBookmarks] = useFetchBookmarks();

    useEffect(() => {
        fetchBookmarks();
    }, [])

    return (
        <div>
            {bookmarks.map((tweet, index) => (
                <TweetItem
                    onRefresh={() => fetchBookmarks()}
                    key={index}
                    tweet={tweet}
                    isBookmark={true}
                />
            ))}
        </div>
    );
}

export default BookmarkPage;