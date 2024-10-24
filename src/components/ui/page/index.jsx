import { useEffect, useState } from "react";
import { getMenus } from "../../../router";
import { useLocation } from "react-router-dom";
import { useContextGlobal } from "../../../context/GlobalContext";

function Page({ children }) {

    const { pageTitle } = useContextGlobal()
    const { pathname } = useLocation();
    const menus = getMenus();
    const [currentMenu, setCurrentMenu] = useState(false)

    useEffect(() => {
        const find = menus.find(i => i.path === pathname);
        if (find) setCurrentMenu(find)
        else setCurrentMenu(false)
    }, [pathname])


    return (
        <section className="">
            <div className="flex items-center justify-between dark:text-white font-bold text-[20px] py-[12px] px-[15px] border-b dark:border-borderColor">
                <h4>{pageTitle || currentMenu.label}</h4>
                <svg className="dark:fill-white fill-blue-500" width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="34" height="34" rx="17" className="dark:fill-gray-800 fill-gray-100" />
                    <path
                        d="M25.9767 15.755L21.295 13.9283L19.495 8.51168C19.41 8.25584 19.17 8.08334 18.9017 8.08334C18.6333 8.08334 18.3933 8.25584 18.3083 8.51084L16.5083 13.9275L11.825 15.7542C11.5858 15.8475 11.4275 16.0792 11.4275 16.3375C11.4275 16.5958 11.5858 16.825 11.8258 16.9192L16.5092 18.7458L18.3092 24.1625C18.3942 24.4175 18.6342 24.59 18.9025 24.59C19.1708 24.59 19.4108 24.4175 19.4958 24.1625L21.2958 18.7458L25.9792 16.9192C26.2183 16.8258 26.3767 16.5942 26.3767 16.3358C26.3767 16.0775 26.2183 15.8483 25.9783 15.755H25.9767ZM20.5683 17.6883C20.395 17.755 20.26 17.8967 20.2017 18.0717L18.9017 21.9842L17.6017 18.0733C17.5433 17.8983 17.41 17.7567 17.2367 17.6883L13.7742 16.3383L17.2358 14.9867C17.4092 14.92 17.5442 14.7783 17.6025 14.6017L18.9025 10.6908L20.2025 14.6025C20.2608 14.7792 20.3942 14.9208 20.5675 14.9883L24.03 16.3383L20.5675 17.69L20.5683 17.6883ZM12.5525 10.1767H10.9858V8.70834C10.9858 8.36334 10.705 8.08334 10.3608 8.08334C10.0167 8.08334 9.73583 8.36334 9.73583 8.70834V10.1767H8.25C7.905 10.1767 7.625 10.4567 7.625 10.8017C7.625 11.1467 7.905 11.4267 8.25 11.4267H9.735V12.895C9.735 13.24 10.015 13.52 10.36 13.52C10.705 13.52 10.985 13.24 10.985 12.895V11.4267H12.5517C12.8975 11.4267 13.1767 11.1467 13.1767 10.8017C13.1767 10.4567 12.8975 10.1767 12.5517 10.1767H12.5525ZM14.665 23.195H13.7483V22.3483C13.7483 22.0033 13.4692 21.7233 13.1233 21.7233C12.7775 21.7233 12.4983 22.0033 12.4983 22.3483V23.195H11.6417C11.2967 23.195 11.0167 23.475 11.0167 23.82C11.0167 24.165 11.2967 24.445 11.6417 24.445H12.5V25.2917C12.5 25.6367 12.7792 25.9167 13.125 25.9167C13.4708 25.9167 13.75 25.6367 13.75 25.2917V24.445H14.665C15.01 24.445 15.29 24.165 15.29 23.82C15.29 23.475 15.01 23.195 14.665 23.195Z"
                    />
                </svg>
            </div>
            <div>
                {children}
            </div>
        </section>
    );
}

export default Page;