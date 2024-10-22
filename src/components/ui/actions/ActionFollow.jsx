import React, { useEffect, useState } from 'react'
import { apiDelete, apiPost } from '../../../api/clinet';
import { USER_ENDPOINT } from '../../../api/userEndpoint';
import classNames from 'classnames';
import Button from '../button';
import { notification } from '../../../utils/helperUtil';

const ActionFollow = ({username, isFollowed, sm = true}) => {
    const [isFollow, setIsFollow] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleFollower = async () => {
        setLoading(true)
        const res = await apiPost(USER_ENDPOINT.followByUsername.replace(':username', username))
        setLoading(false)
        if (res.status === 200) {
            notification(res.data.message)
            setIsFollow(true)
        }
    }

    const handleUnFollow = async () => {
        setLoading(true)
        const res = await apiDelete(USER_ENDPOINT.followByUsername.replace(':username', username))
        setLoading(false)
        if (res.status === 200) {
            notification(res.data.message)
            setIsFollow(false)
        }
    }

    useEffect(() => {
        if (isFollowed) setIsFollow(isFollowed)
    }, [isFollowed])

    return (
        <Button sm={sm} loading={loading} onClick={() => isFollow ? handleUnFollow() : handleFollower()} className={classNames(
            'dark:bg-white  !rounded-full text-white dark:text-[#0F1419] text-[14px] font-[400]',
            {
                '!bg-[red]': isFollow
            }
        )}>
            {isFollow ? 'Unfollow' : 'Follow'}
        </Button>
    )
}

export default ActionFollow