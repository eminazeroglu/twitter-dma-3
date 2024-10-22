import { useState } from "react"
import { apiGet } from "../api/clinet"
import { TWEET_ENDPOINT } from "../api/tweetEndpoint"
import { USER_ENDPOINT } from "../api/userEndpoint"
import { HASHTAG_ENDPOINT } from "../api/hashtagEndpoint"
import { BOOKMARK_ENDPOINT } from "../api/bookmarkEndpoint"

const useFetch = ({ initialState }) => {
    const [data, setData] = useState(initialState)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const fetchData = async (api, params = {}) => {
        try {
            setLoading(true)
            const res = await apiGet(api, { params });
            if (res.data) {
                setData(res.data)
                return res.data;
            }
        }
        catch (e) {
            setError(e.status)
        }
        finally {
            setLoading(false)
        }
    }

    return {
        data,
        fetchData,
        loading,
        error
    }
}


export const useFetchTweets = () => {
    const { data, fetchData, loading } = useFetch([])

    const fetch = () => {
        fetchData(TWEET_ENDPOINT.tweets)
    }

    return [
        data,
        fetch,
        loading
    ]
}

export const useFetchUserByUsername = () => {
    const { data, fetchData, loading } = useFetch({})

    const fetch = (username) => {
        return fetchData(USER_ENDPOINT.fetchByUsername.replace(':username', username))
    }

    return [
        data || {},
        fetch,
        loading
    ]
}

export const useFetchUserFollowingByUsername = () => {
    const { data, fetchData, loading } = useFetch({})

    const fetch = (username) => {
        fetchData(USER_ENDPOINT.fetchFollowingByUsername.replace(':username', username))
    }

    return [
        data || {},
        fetch,
        loading
    ]
}

export const useFetchUserFollowerByUsername = () => {
    const { data, fetchData, loading } = useFetch({})

    const fetch = (username) => {
        fetchData(USER_ENDPOINT.fetchFollowersByUsername.replace(':username', username))
    }

    return [
        data || {},
        fetch,
        loading
    ]
}

export const useFetchUserTweetsByUsername = () => {
    const { data, fetchData, loading } = useFetch({})

    const fetch = (username) => {
        fetchData(USER_ENDPOINT.fetchTweetsByUsername.replace(':username', username))
    }

    return [
        data || {},
        fetch,
        loading
    ]
}

export const useFetchUsers = () => {
    const { data, fetchData, loading } = useFetch({})

    const fetch = (params = {}) => {
        fetchData(USER_ENDPOINT.fetchUsers, params)
    }

    return [
        data || [],
        fetch,
        loading
    ]
}

export const useFetchHashtagTrending = () => {
    const { data, fetchData, loading } = useFetch({})

    const fetch = () => {
        fetchData(HASHTAG_ENDPOINT.fetchHashtagTrending)
    }

    return [
        data || {},
        fetch,
        loading
    ]
}

export const useFetchHashtagTweets = () => {
    const { data, fetchData, loading, error } = useFetch({})

    const fetch = (hashtag) => {
        fetchData(HASHTAG_ENDPOINT.fetchHashtagTweets.replace(':hashtag', hashtag))
    }

    return [
        data || {},
        fetch,
        loading,
        error
    ]
}

export const useFetchBookmarks = () => {
    const { data, fetchData, loading, error } = useFetch({})

    const fetch = () => {
        fetchData(BOOKMARK_ENDPOINT.bookmarks)
    }

    return [
        data?.data || [],
        fetch,
        loading,
        error
    ]
}