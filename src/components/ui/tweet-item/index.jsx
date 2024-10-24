import moment from "moment";
import { getMedia, notification } from "../../../utils/helperUtil";
import Verify from "../verify";
import { apiDelete, apiPost } from "../../../api/clinet";
import { TWEET_ENDPOINT } from "../../../api/tweetEndpoint";
import { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Image from "../image";
import { FiBookmark } from "react-icons/fi";
import { BOOKMARK_ENDPOINT } from "../../../api/bookmarkEndpoint";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";

function TweetItem(
    { 
        tweet, 
        onRefresh, 
        isBookmark = false,
    }
) {

    const [isLike, setIsLike] = useState(false)
    const [isBookmarkState, setIsBookmarkState] = useState(isBookmark)

    const handleLike = async () => {
        const res = await apiPost(TWEET_ENDPOINT.tweetLike.replace(':id', tweet.id))

        if (res.status === 200) {
            notification(res.data.message, 'success')
            setIsLike(true)
            onRefresh?.()
        }

    }

    const handleRetweet = async () => {
        const res = await apiPost(TWEET_ENDPOINT.tweetRetweet.replace(':id', tweet.id))

        if (res.status === 200) {
            notification(res.data.message, 'success')
            onRefresh?.()
        }

    }

    const handleBookmark = async () => {
        let res;
        if (isBookmarkState) {
            res = await apiDelete(BOOKMARK_ENDPOINT.bookmarkDelete.replace(':tweetId', tweet.id))
            setIsBookmarkState(false)
        }
        else {
            res = await apiPost(BOOKMARK_ENDPOINT.bookmarks, {tweet_id: tweet.id})
            setIsBookmarkState(true)
        }
        
        if (res.status === 201 || res.status === 200) {
            onRefresh?.()
            notification(res.data.message)
        }

    }

    return (
        <div className="flex items-start gap-[12px] py-[13px] px-[16px]">
            <Image
                className="size-[48px] shrink-0"
                src={getMedia(tweet.user.profile_image)}
                imgClassName="rounded-full"
            />
            <div className="flex-1">
                <div className="flex items-center">
                    <Link to={`/profile/${tweet.user.username}`} className="font-bold text-[15px] gap-[3px] flex items-center">
                        <span className="font-bold dark:text-[#D9D9D9]">{tweet.user.name} {tweet.user.surname}</span>
                        <Verify />
                        <span className="text-[#6E767D] text-[15px] font-[300] ms-[4px]">
                            {" "}
                            @{tweet.user.username}
                        </span>
                    </Link>
                    <span className="dark:text-[#6E767D] ms-[4px]">.</span>
                    <span className="dark:text-[#6E767D] text-[15px] font-[300] ms-[4px]">{moment(tweet.created_at).format('DD-MMM-YYYY HH:mm')}</span>
                </div>
                <p className="dark:text-[#D9D9D9] text-gray-700 font-[400] text-[13px] md:text-[15px] mt-[5px]">
                    {tweet.content}
                </p>
                {(tweet.media && tweet.media.length > 0) && (
                    <>
                        {tweet.media.map((item, index) => (
                            <img key={index} className="w-full h-[180px] md:h-[283px] rounded-[30px] mt-[12px] object-cover" src={getMedia(item.url)} alt="" />
                        ))}
                    </>
                )}

                <div className="flex items-center justify-between w-full mt-[19px]">
                    <ul className="flex items-center w-[90%] md:w-[70%] justify-between gap-5">
                        <li>
                            <button className="flex items-center text-[#6E767D] text-[13px] font-[300] gap-[15px]">
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.705 1.86833L8.24834 1.86H8.24667C4.60167 1.86 1.74667 4.71583 1.74667 8.36167C1.74667 11.7767 4.40167 14.3667 7.96751 14.5033V17.6933C7.96751 17.7833 8.00417 17.9317 8.06751 18.0292C8.18584 18.2167 8.38751 18.3183 8.59417 18.3183C8.70917 18.3183 8.82501 18.2867 8.92917 18.22C9.14917 18.08 14.3233 14.77 15.6692 13.6317C17.2542 12.29 18.2025 10.3233 18.205 8.37167V8.3575C18.2 4.71833 15.3467 1.86833 11.705 1.8675V1.86833ZM14.8608 12.6783C13.9158 13.4783 10.8092 15.5158 9.21751 16.5475V13.8917C9.21751 13.5467 8.93834 13.2667 8.59251 13.2667H8.26251C5.21251 13.2667 2.99751 11.2033 2.99751 8.36167C2.99751 5.41667 5.30417 3.11 8.24751 3.11L11.7033 3.11833H11.705C14.6483 3.11833 16.955 5.42333 16.9567 8.365C16.9542 9.95667 16.1717 11.5683 14.8617 12.6783H14.8608Z"
                                        fill="#6E767D"
                                    />
                                </svg>
                                {tweet.reply_count}
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleRetweet()} className="flex items-center text-[#6E767D] text-[13px] font-[300] gap-[15px]">
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M19.8083 13.0583C19.565 12.8142 19.1692 12.8142 18.925 13.0583L17.075 14.9083V6.375C17.075 4.65167 15.6725 3.25 13.95 3.25H9.075C8.73 3.25 8.45 3.53 8.45 3.875C8.45 4.22 8.73 4.5 9.075 4.5H13.95C14.9833 4.5 15.825 5.34167 15.825 6.375V14.9083L13.975 13.0583C13.7308 12.8142 13.335 12.8142 13.0917 13.0583C12.8483 13.3025 12.8467 13.6983 13.0917 13.9417L16.0083 16.8583C16.1292 16.9808 16.2892 17.0417 16.45 17.0417C16.6108 17.0417 16.7692 16.9817 16.8917 16.8583L19.8083 13.9417C20.0533 13.6983 20.0533 13.3025 19.8083 13.0583ZM10.925 15.7917H6.05C5.01667 15.7917 4.175 14.95 4.175 13.9167V5.38333L6.025 7.23333C6.14833 7.35583 6.30833 7.41667 6.46833 7.41667C6.62833 7.41667 6.78833 7.35583 6.91 7.23333C7.15416 6.98917 7.15416 6.59333 6.91 6.35L3.99333 3.43333C3.74917 3.18833 3.35333 3.18833 3.11 3.43333L0.193332 6.35C-0.0516675 6.59333 -0.0516675 6.98917 0.193332 7.23333C0.438332 7.4775 0.832499 7.4775 1.07667 7.23333L2.92667 5.38333V13.9167C2.92667 15.64 4.32917 17.0417 6.05167 17.0417H10.9267C11.2717 17.0417 11.5517 16.7617 11.5517 16.4167C11.5517 16.0717 11.2708 15.7917 10.9267 15.7917H10.925Z"
                                        fill="#6E767D"
                                    />
                                </svg>
                                {tweet.retweet_count}
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleLike()} className={classNames(
                                'flex items-center text-[#6E767D] text-[13px] font-[300] gap-[15px]',
                                {
                                    '!text-red-500': isLike
                                }
                            )}>
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10 18.0317H9.98833C7.83583 17.9917 1.625 12.38 1.625 7.065C1.625 4.51167 3.72917 2.27 6.1275 2.27C8.03583 2.27 9.31917 3.58667 9.99917 4.545C10.6775 3.58833 11.9608 2.27 13.87 2.27C16.27 2.27 18.3733 4.51167 18.3733 7.06583C18.3733 12.3792 12.1617 17.9908 10.0092 18.03H10V18.0317ZM6.12833 3.52083C4.395 3.52083 2.87583 5.1775 2.87583 7.06667C2.87583 11.85 8.7375 16.73 10.0008 16.7817C11.2658 16.73 17.1258 11.8508 17.1258 7.06667C17.1258 5.1775 15.6067 3.52083 13.8733 3.52083C11.7667 3.52083 10.59 5.9675 10.58 5.99167C10.3883 6.46 9.61667 6.46 9.42417 5.99167C9.4125 5.96667 8.23667 3.52083 6.12917 3.52083H6.12833Z"
                                        fill={isLike ? 'red' : '#6E767D'}
                                    />
                                </svg>
                                {tweet.like_count}
                            </button>
                        </li>
                        <li>
                            <button className="flex items-center text-[#6E767D] text-[13px] font-[300] gap-[15px]">
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M14.6084 6.225L10.4417 2.05833C10.1975 1.81417 9.8017 1.81417 9.55836 2.05833L5.3917 6.225C5.1467 6.46917 5.1467 6.865 5.3917 7.10833C5.6367 7.35167 6.03086 7.35333 6.27503 7.10833L9.37503 4.00833V12.5C9.37503 12.845 9.65503 13.125 10 13.125C10.345 13.125 10.625 12.845 10.625 12.5V4.00833L13.725 7.10833C13.8467 7.23083 14.0067 7.29167 14.1667 7.29167C14.3267 7.29167 14.4867 7.23167 14.6084 7.10833C14.8525 6.86417 14.8525 6.46917 14.6084 6.225Z"
                                        fill="#6E767D"
                                    />
                                    <path
                                        d="M16.4234 18.2867H3.57669C2.52335 18.2867 1.66669 17.43 1.66669 16.3767V11.6667C1.66669 11.3217 1.94669 11.0417 2.29169 11.0417C2.63669 11.0417 2.91669 11.3217 2.91669 11.6667V16.3767C2.91669 16.7408 3.21252 17.0367 3.57669 17.0367H16.4234C16.7875 17.0367 17.0834 16.7408 17.0834 16.3767V11.6667C17.0834 11.3217 17.3634 11.0417 17.7084 11.0417C18.0534 11.0417 18.3334 11.3217 18.3334 11.6667V16.3767C18.3334 17.43 17.4767 18.2867 16.4234 18.2867Z"
                                        fill="#6E767D"
                                    />
                                </svg>
                            </button>
                        </li>
                    </ul>

                    <button onClick={() => handleBookmark()} className={classNames(
                        'flex items-center text-[#6E767D] text-lg font-[300] gap-[15px]',
                    )}>
                        {isBookmarkState ? <FaBookmark/> : <FaRegBookmark />}
                    </button>
                </div>


            </div>
        </div>

    );
}

export default TweetItem;