import { useContextGlobal } from "../../../context/GlobalContext";
import Card from "../../ui/card";
import Verify from "../../ui/verify";

function Item({item}) {

    const {theme} = useContextGlobal()

    return (
        <li className="flex gap-[12px] items-center justify-between">
            <div className="flex gap-[12px]">
                <img
                    className="w-[48px] h-[48px] rounded-full object-cover"
                    src="https://pbs.twimg.com/profile_images/1098244578472280064/gjkVMelR_400x400.png"
                    alt=""
                />
                <a href="">
                    <span className="flex items-center gap-[3px] dark:text-[#D9D9D9] font-[400] text-[15px]">
                        The New York Times
                        <Verify/>
                    </span>
                    <span className="text-[15px] text-[#6E767D] font-[300]">
                        {" "}
                        @nytimes
                    </span>
                </a>
            </div>
            <button className="dark:bg-white bg-[#1D9BF0] rounded-full text-white dark:text-[#0F1419] text-[14px]  px-[15px] py-[7px] font-[400]">
                Follow
            </button>
        </li>
    )
}

function WhoToFollowSection() {

    const handleBtn = () => {
        alert('sdasd');
    }

    return (
        <Card
            title={'Who to follow'}
            showMore="true"
            btnText={"Show more"}
            onShowMore={handleBtn}
        >
            <ul className="mt-[20px] flex flex-col gap-[20px]">
                {[...Array(3).keys()].map((_, index) => (
                    <Item key={index}/>
                ))}
            </ul>
        </Card>
    );
}

export default WhoToFollowSection;