import React from 'react'
import Verify from "../verify";
import { getMedia } from '../../../utils/helperUtil';
import { Link } from 'react-router-dom';

export const FolloweItem = ({item = {}}) => {
    return (
        <li className="flex gap-[12px] items-center justify-between">
            <div className="flex gap-[12px]">
                <img
                    className="w-[48px] h-[48px] rounded-full object-cover"
                    src={getMedia(item.profile_image)}
                    alt={item.name + ' ' + item.surname}
                />
                <Link to={`/profile/${item.username}`}>
                    <span className="flex items-center gap-[3px] dark:text-[#D9D9D9] font-[400] text-[15px]">
                        {item.name + ' ' + item.surname}
                        <Verify />
                    </span>
                    <span className="text-[15px] text-[#6E767D] font-[300]">
                        @{item.username}
                    </span>
                </Link>
            </div>
            <button className="dark:bg-white bg-[#1D9BF0] rounded-full text-white dark:text-[#0F1419] text-[14px]  px-[15px] py-[7px] font-[400]">
                Follow
            </button>
        </li>
    )
}
