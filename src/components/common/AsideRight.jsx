import Scrollbar from "../ui/scrollbar";
import SearchSection from "./components/SearchSection";
import TrendsSection from "./components/TrendsSection";
import WhoToFollowSection from "./components/WhoToFollowSection";

function AsideRight() {
    return (
        <div className="min-w-[360px] pt-2 pl-5 border-l dark:border-[#2F3336] hidden lg:block">

            <div className=" w-[360px] h-full fixed flex-shrink-0 pe-3">
                <Scrollbar className="pr-4 pb-20">
                    <SearchSection />

                    <TrendsSection />

                    <WhoToFollowSection />

                    <ul className="text-[#6E767D] text-[13px] font-[300] flex flex-wrap mt-[18px] gap-[15px] leading-[10px]">
                        <li>
                            <a href="#">Terms of Service</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Cookie Policy</a>
                        </li>
                        <li>
                            <a href="#">Imprint</a>
                        </li>
                        <li>
                            <a href="#">Ads info</a>
                        </li>
                        <li>
                            <a href="#">More ...</a>
                        </li>
                        <li>© 2021 Twitter, Inc.</li>
                    </ul>
                </Scrollbar>
            </div>

        </div>

    );
}

export default AsideRight;