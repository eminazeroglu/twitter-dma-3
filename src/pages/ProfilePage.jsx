import { NavLink, Outlet, useParams } from "react-router-dom";
import { useFetchUserByUsername, useFetchUserFollowerByUsername, useFetchUserFollowingByUsername } from "../hooks/useFetch";
import { useEffect, useState } from "react";
import { Button, Image } from "../components";
import { useContextGlobal } from "../context/GlobalContext";
import { getMedia } from "../utils/helperUtil";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import moment from "moment";
import { Loading } from "../components/ui/loading";
import classNames from "classnames";

function ProfilePage() {

    const { handleState } = useContextGlobal();
    const { username } = useParams();

    const [user, fetchUser, loading] = useFetchUserByUsername()
    const [followers, fetchFollowers] = useFetchUserFollowerByUsername()
    const [followings, fetchFollowings] = useFetchUserFollowingByUsername()

    const tabs = [
        {
            path: '',
            name: 'Tweets',
        },
        {
            path: 'follower',
            name: 'Followers',
        },
        {
            path: 'following',
            name: 'Followings',
        }
    ]

    const initailData = async () => {
        const user = await fetchUser(username)
        if (user) {
            handleState('pageTitle', user.name + ' ' + user.surname)
            fetchFollowers(user.username)
            fetchFollowings(user.username)
        }
    }

    useEffect(() => {
        initailData()

        return () => {
            handleState('pageTitle', '')
        }
    }, [username])


    return (
        <Loading loading={loading}>
            <div className="relative">
                <Image className="w-full" src={'/user_wallpaper.png'} />
                <div className="flex -translate-y-[50%] px-[10px] items-center justify-between">
                    <Image className="size-[140px]" imgClassName="rounded-full border-4" src={getMedia(user.profile_image)} />

                    <div className="pt-14">
                        <Button>
                            Edit Profile
                        </Button>
                    </div>
                </div>
            </div>
            <div className="-translate-y-[60px]">
                <div className="px-[14px]">
                    <div>
                        <p className="text-lg font-semibold">{user.name} {user.surname}</p>
                        <p className="text-gray-500">@{user.username}</p>
                        {user.website && (
                            <a href={user.website} target="_blank">{user.website}</a>
                        )}
                    </div>
                    <div className="flex items-center mt-[10px] gap-x-[10px]">
                        <span className="flex items-center gap-x-[5px]">
                            <span>
                                <FiMapPin />
                            </span>
                            <span>{user.location}</span>
                        </span>
                        <span className="flex items-center gap-x-[5px]">
                            <span>
                                <FiCalendar />
                            </span>
                            <span>{moment(user.birth_date).format('DD-MMM-YYYY')}</span>
                        </span>
                    </div>

                    <div className="mt-[10px] space-x-[18px]">
                        <span className="text-gray-500 space-x-[4px] font-semibold">
                            <span className="text-black">{followings?.total || 0}</span>
                            <span>Following</span>
                        </span>
                        <span className="text-gray-500 space-x-[4px] font-semibold">
                            <span className="text-black">{followers?.total || 0}</span>
                            <span>Followers</span>
                        </span>
                    </div>
                </div>

                <div className="mt-[15px]">
                    <div className="flex items-center border-b">
                        {tabs.map((tab, index) => (
                            <NavLink end to={tab.path} className="h-[50px] flex-1 flex items-center justify-center" key={index}>
                                {({isActive}) => (
                                    <span className={classNames(
                                        {
                                            'font-bold': isActive
                                        }
                                    )}>{ tab.name }</span>
                                )}
                            </NavLink>
                        ))}
                    </div>

                    <div>
                        <Outlet
                            context={{
                                user,
                                followers,
                                followings
                            }}
                        />
                    </div>
                </div>
            </div>
        </Loading>
    );
}

export default ProfilePage;