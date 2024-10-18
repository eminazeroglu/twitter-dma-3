import React, { useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useFetchHashtagTweets } from '../hooks/useFetch';
import { useContextGlobal } from '../context/GlobalContext';
import TweetItem from '../components/ui/tweet-item';
import { Loading } from '../components/ui/loading';

export const TweetPage = () => {

    const {handleState} = useContextGlobal();

    const {hashtag} = useParams();

    const [tweets, fetchTweets, loading, error] = useFetchHashtagTweets();

    useEffect(() => {
        if (hashtag) {
            handleState('pageTitle', 'Tweet / #' + hashtag)
            fetchTweets(hashtag)
        }

        return () => {
            handleState('pageTitle', '')
        }
    }, [hashtag])

    
    if (error === 404) return <Navigate to={'/'} /> 
    
    return (
        <Loading loading={loading}>
            {tweets?.data?.map((tweet, index) => (
                <TweetItem 
                    key={index}
                    tweet={tweet}
                />
            ))}
        </Loading>
    )
}
