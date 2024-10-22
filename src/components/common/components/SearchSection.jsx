import { useEffect, useRef, useState } from "react";
import { Image } from "../..";
import { FolloweItem } from "../../ui/follower";
import { apiGet } from "../../../api/clinet";
import { SEARCH_ENDPOINT } from "../../../api/searchEndpoint";
import Scrollbar from "../../ui/scrollbar";
import { useLocation } from "react-router-dom";

function SearchSection() {

    const { pathname } = useLocation()
    const [users, setUsers] = useState([])
    const inputRef = useRef(null)

    const handleSearch = async (text) => {
        const q = text.trim()
        if (q.length >= 3) {
            const res = await apiGet(SEARCH_ENDPOINT.users, { params: { q } })
            if (res.status === 200 && res?.data?.data?.length > 0) {
                setUsers(res?.data?.data)
            }
            else {
                setUsers([])
            }
        }
        else {
            setUsers([])
        }
    }

    useEffect(() => {
        setUsers([])
        inputRef.current.value = ''
    }, [pathname])
    

    return (
        <form className="flex relative items-center mt-[6px] dark:bg-gray-800 bg-gray-200 rounded-full p-[13px]">
            <svg
                className="me-[14px]"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M15.1475 14.3525L12.4025 11.6075C13.3963 10.43 14 8.9105 14 7.25C14 3.5225 10.9775 0.5 7.25 0.5C3.5225 0.5 0.5 3.5225 0.5 7.25C0.5 10.9775 3.5225 14 7.25 14C8.91125 14 10.43 13.397 11.606 12.4025L14.351 15.1475C14.4613 15.257 14.606 15.3125 14.7485 15.3125C14.891 15.3125 15.0373 15.2578 15.146 15.1475C15.3673 14.9278 15.3673 14.5722 15.1475 14.3525ZM1.625 7.25C1.625 4.14875 4.14875 1.625 7.25 1.625C10.3513 1.625 12.875 4.14875 12.875 7.25C12.875 10.3512 10.3513 12.875 7.25 12.875C4.14875 12.875 1.625 10.3512 1.625 7.25Z"
                    fill="#6E767D"
                />
            </svg>
            <input
                ref={inputRef}
                onChange={e => handleSearch(e.target.value)}
                type="text"
                placeholder="Serach Twitter"
                className="w-full text-[15px] placeholder:text-[15px] font-[400] placeholder:text-[#6E767D] dark:text-white bg-transparent outline-none"
            />

            {users.length > 0 && (
                <div className="absolute divide-y top-full bg-gray-100 shadow left-0 right-0 rounded-xl">
                    <div className="h-[300px]">
                        <Scrollbar>
                            {users.map((user, index) => (
                                <FolloweItem key={index} item={user} className="p-3" />
                            ))}
                        </Scrollbar>
                    </div>
                </div>
            )}

        </form>
    );
}

export default SearchSection;