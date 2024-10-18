import { FiSettings } from "react-icons/fi";
import Card from "../../ui/card";
import { useFetchHashtagTrending } from "../../../hooks/useFetch";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Item({item}) {
    return (
        <li className="flex items-start justify-between">
            <div className="flex flex-col gap-[4px]">
                <Link to={`/tweet/${item.name}`} className="dark:text-white text-[15px] font-bold uppercase">
                    #{item.name}
                </Link>
                <span className="text-[#6E767D] text-[13px] font-[400]">
                    {item.tweet_count} Tweets
                </span>
            </div>
            <button className="pt-2">
                <svg
                    width={14}
                    height={4}
                    viewBox="0 0 14 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M1.75 3.5C2.57843 3.5 3.25 2.82843 3.25 2C3.25 1.17157 2.57843 0.5 1.75 0.5C0.921573 0.5 0.25 1.17157 0.25 2C0.25 2.82843 0.921573 3.5 1.75 3.5Z"
                        fill="#6E767D"
                    />
                    <path
                        d="M7 3.5C7.82843 3.5 8.5 2.82843 8.5 2C8.5 1.17157 7.82843 0.5 7 0.5C6.17157 0.5 5.5 1.17157 5.5 2C5.5 2.82843 6.17157 3.5 7 3.5Z"
                        fill="#6E767D"
                    />
                    <path
                        d="M12.25 3.5C13.0784 3.5 13.75 2.82843 13.75 2C13.75 1.17157 13.0784 0.5 12.25 0.5C11.4216 0.5 10.75 1.17157 10.75 2C10.75 2.82843 11.4216 3.5 12.25 3.5Z"
                        fill="#6E767D"
                    />
                </svg>
            </button>
        </li>
    )
}

function TrendsSection() {

    const [hashtags, fetchHashtags] = useFetchHashtagTrending();

    useEffect(() => {
        fetchHashtags()
    }, [])

    return (
        <Card title="Trends for you" icon={<FiSettings className="dark:text-white" />}>
            <div className="mt-[12px] flex justify-between items-start">
                <ul className="flex flex-col w-full gap-[20px]">
                    {hashtags?.data?.map((hastag, index) => (
                        <Item item={hastag} key={index}/>
                    ))}
                </ul>
            </div>
        </Card>
    );
}

export default TrendsSection;