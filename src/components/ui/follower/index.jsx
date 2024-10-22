import React from 'react'
import Verify from "../verify";
import { getMedia } from '../../../utils/helperUtil';
import Image from '../image';

import { Link } from 'react-router-dom';
import ActionFollow from '../actions/ActionFollow';
import classNames from 'classnames';

export const FolloweItem = ({ item = {}, className }) => {

    return (
        <li className={classNames(
            'flex gap-[12px] items-center justify-between',
            className || ''
        )}>
            <div className="flex gap-[12px] whitespace-nowrap">
                <Image
                    className="size-[48px]"
                    imgClassName="rounded-full"
                    src={getMedia(item.profile_image)}
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
            <ActionFollow isFollowed={item?.is_followed} username={item.username} />
        </li>
    )
}
