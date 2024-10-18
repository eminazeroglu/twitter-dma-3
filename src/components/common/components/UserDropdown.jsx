import { FiLock, FiMoreHorizontal } from "react-icons/fi";
import { useContextGlobal } from "../../../context/GlobalContext";
import Image from "../../ui/image";
import { getMedia } from "../../../utils/helperUtil";

function UserDropdown() {

    const { storage: { user } } = useContextGlobal()

    return (
        <div className="flex items-center gap-[12px] mt-20">
            <Image
                src={getMedia(user.profile_image)}
                imgClassName="w-[40px] h-[40px] rounded-full object-cover"
                alt={user.name}
            />
            <div className="flex items-center">
                <div className="w-[calc(100%_-_50px)] mr-2">
                    <span className="dark:text-[#D9D9D9] space-x-2 font-bold text-[15px] flex items-center gap-[3px]">
                        <span className="line-clamp-1">{user.name} {user.surname}</span>
                        <span className="dark:text-[#d9d9d9]"><FiLock /></span>
                    </span>
                    <span className="dark:text-[#6E767D] line-clamp-1 text-gray-600 font-bold text-[15px]"> @{user.username} </span>
                </div>
                <button>
                    <FiMoreHorizontal className="dark:text-[#d9d9d9]" />
                </button>
            </div>
        </div>
    );
}

export default UserDropdown