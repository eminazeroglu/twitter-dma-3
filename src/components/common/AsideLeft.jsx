import { Link, NavLink } from "react-router-dom";
import { getMenus } from "../../router";

function AsideLeft() {



    const menus = getMenus();

    return (
        <aside className="min-w-[275px] pt-[17px] pe-[24px] hidden lg:block border-r border-[#2F3336] h-full">
            <div className="flex fixed top-[17px] flex-col justify-between h-[96%] overflow-auto gap-[20px]">
                <div>
                    <Link to={'/'}>
                        <svg
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M23.643 4.93701C22.808 5.30701 21.911 5.55701 20.968 5.67001C21.93 5.09401 22.668 4.18001 23.016 3.09201C22.116 3.62601 21.119 4.01401 20.058 4.22201C19.208 3.31801 17.998 2.75201 16.658 2.75201C14.086 2.75201 12 4.83801 12 7.41201C12 7.77601 12.042 8.13001 12.12 8.47201C8.247 8.27701 4.816 6.42201 2.518 3.60401C2.118 4.29401 1.888 5.09401 1.888 5.94601C1.888 7.56201 2.711 8.98901 3.96 9.82401C3.196 9.79901 2.478 9.59001 1.85 9.24101V9.30101C1.85 11.558 3.455 13.441 5.587 13.869C5.195 13.975 4.784 14.031 4.36 14.031C4.06 14.031 3.767 14.003 3.483 13.949C4.076 15.799 5.796 17.147 7.835 17.183C6.24 18.433 4.231 19.178 2.049 19.178C1.673 19.178 1.302 19.156 0.937 19.113C2.999 20.436 5.447 21.206 8.077 21.206C16.647 21.206 21.332 14.108 21.332 7.95201C21.332 7.75201 21.327 7.55001 21.318 7.35001C22.228 6.69201 23.018 5.87301 23.641 4.94001L23.643 4.93701Z"
                                fill="#D9D9D9"
                            />
                        </svg>
                    </Link>
                    <ul className="flex flex-col gap-y-[8px] mt-5 text-[#D9D9D9]">
                        {menus.map((menu, index) => (
                            <li key={index} className="relative">
                                <NavLink
                                    className="flex h-[50px] items-center gap-[20px] text-[19px] font-bold"
                                    to={menu.path}
                                >
                                    {({isActive}) => (
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
                        <li>
                            <button className="w-[225px] mt-10 bg-[#1D9BF0] rounded-full py-[16px] text-white font-bold text-[17px]">
                                Tweet
                            </button>
                        </li>
                    </ul>
                </div>
                <div className="flex items-center gap-[12px]">
                    <img
                        className="w-[40px] h-[40px] rounded-full object-cover"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgT-R52bE5nFi11FvXv3Er0ADTmXuBd3ieeQ&s"
                        alt="Azar Ahmadov"
                    />
                    <div className="flex items-center justify-between w-full">
                        <a href="#">
                            <span className="text-[#D9D9D9] font-bold text-[15px] flex items-center gap-[2px]">
                                Azar Ahmadov
                                <svg
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M16.4583 6.09169H14.8917C14.7333 3.52503 12.6033 1.48669 10 1.48669C7.39667 1.48669 5.26667 3.52669 5.10834 6.09169H3.54167C2.50834 6.09169 1.66667 6.93086 1.66667 7.96669V16.4917C1.66667 17.525 2.50834 18.3667 3.54167 18.3667H16.4583C17.4917 18.3667 18.3333 17.525 18.3333 16.4917V7.96669C18.3333 6.93169 17.4917 6.09169 16.4583 6.09169ZM10.625 13.0725V14.2359C10.625 14.5809 10.345 14.8609 10 14.8609C9.65501 14.8609 9.37501 14.5809 9.37501 14.2359V13.0725C8.73834 12.8225 8.28584 12.2059 8.28584 11.4809C8.28584 10.5334 9.05251 9.76586 10 9.76586C10.9467 9.76586 11.7142 10.5325 11.7142 11.4792C11.7142 12.2042 11.2617 12.8209 10.625 13.0709V13.0725ZM6.37334 6.09169C6.53167 4.21669 8.08751 2.73669 10 2.73669C11.9125 2.73669 13.4692 4.21753 13.6267 6.08919H6.37334V6.09169Z"
                                        fill="#D9D9D9"
                                    />
                                </svg>
                            </span>
                            <span className="text-[#6E767D] font-bold text-[15px]"> @azar </span>
                        </a>
                        <button>
                            <svg
                                width={16}
                                height={4}
                                viewBox="0 0 16 4"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2.16667 3.66665C3.08714 3.66665 3.83333 2.92045 3.83333 1.99998C3.83333 1.0795 3.08714 0.333313 2.16667 0.333313C1.24619 0.333313 0.5 1.0795 0.5 1.99998C0.5 2.92045 1.24619 3.66665 2.16667 3.66665Z"
                                    fill="#D9D9D9"
                                />
                                <path
                                    d="M8.00001 3.66665C8.92048 3.66665 9.66668 2.92045 9.66668 1.99998C9.66668 1.0795 8.92048 0.333313 8.00001 0.333313C7.07954 0.333313 6.33334 1.0795 6.33334 1.99998C6.33334 2.92045 7.07954 3.66665 8.00001 3.66665Z"
                                    fill="#D9D9D9"
                                />
                                <path
                                    d="M13.8333 3.66665C14.7538 3.66665 15.5 2.92045 15.5 1.99998C15.5 1.0795 14.7538 0.333313 13.8333 0.333313C12.9128 0.333313 12.1667 1.0795 12.1667 1.99998C12.1667 2.92045 12.9128 3.66665 13.8333 3.66665Z"
                                    fill="#D9D9D9"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </aside>
    );
}

export default AsideLeft;