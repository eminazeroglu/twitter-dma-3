import { NavLink } from "react-router-dom";
import { getMenus } from "../../../router";
import TweetButton from "./TweetButton";

function Navbar() {

    const menus = getMenus();

    return (
        <ul className="flex flex-col gap-y-[8px] mt-5 dark:text-[#D9D9D9]">
            {menus.map((menu, index) => (
                <li key={index} className="relative">
                    <NavLink
                        className="flex h-[50px] items-center gap-[20px] text-[19px] font-bold"
                        to={menu.path}
                    >
                        {({ isActive }) => (
                            <>
                                <span className={`text-2xl ${isActive ? 'text-[#1D9BF0]' : ''}`}>
                                    {menu.icon}
                                </span>
                                <span className={`${isActive ? 'text-[#1D9BF0]' : ''}`}>{menu.label}</span>

                                {menu?.count && (
                                    <span className="absolute -top-[3px] left-[12px] size-5  rounded-full text-white  bg-[#1D9BF0] grid place-items-center text-[10px]">{menu.count}</span>
                                )}
                            </>
                        )}
                    </NavLink>
                </li>
            ))}
            <TweetButton/>
        </ul>
    );
}

export default Navbar;