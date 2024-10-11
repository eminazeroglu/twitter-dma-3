import { FiLock, FiMoreHorizontal } from "react-icons/fi";

function UserDropdown() {
    return (
        <div className="flex items-center gap-[12px] mt-20">
            <img
                className="w-[40px] h-[40px] rounded-full object-cover"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgT-R52bE5nFi11FvXv3Er0ADTmXuBd3ieeQ&s"
                alt="Azar Ahmadov"
            />
            <div className="flex items-center justify-between w-full">
                <a href="#">
                    <span className="dark:text-[#D9D9D9] space-x-2 font-bold text-[15px] flex items-center gap-[3px]">
                        <span>Azar Ahmadov</span>
                        <span className="dark:text-[#d9d9d9]"><FiLock/></span>
                    </span>
                    <span className="dark:text-[#6E767D] text-gray-600 font-bold text-[15px]"> @azar </span>
                </a>
                <button>
                    <FiMoreHorizontal className="dark:text-[#d9d9d9]"/>
                </button>
            </div>
        </div>
    );
}

export default UserDropdown