import Scrollbar from "../ui/scrollbar";
import UserDropdown from "./components/UserDropdown";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";

function AsideLeft() {
    return (
        <aside className="min-w-[275px] pt-[17px] hidden lg:block border-r dark:border-[#2F3336] h-full">
            <div className="flex min-w-[275px] h-full fixed top-[17px]">
                <Scrollbar className=" w-full mr-3 pr-5 flex flex-col justify-between pb-10">
                    <div>
                        <Logo/>
                        <Navbar/>
                    </div>
                    
                    <UserDropdown/>
                </Scrollbar>
            </div>
        </aside>
    );
}

export default AsideLeft;