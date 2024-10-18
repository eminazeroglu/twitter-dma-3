import { BiSolidHomeCircle, BiUser } from "react-icons/bi";
import AppLayout from "../layouts/AppLayout";
import AuthLayout from "../layouts/AuthLayout";
import DefaultLayout from "../layouts/DefaultLayout";
import BookmarkPage from "../pages/BookmarkPage";
import ExplorePage from "../pages/ExplorePage";
import HomePage from "../pages/HomePage";
import ListPage from "../pages/ListPage";
import LoginPage from "../pages/LoginPage";
import MessagePage from "../pages/MessagePage";
import NotificationPage from "../pages/NotificationPage";
import ProfilePage from "../pages/ProfilePage";
import AuthProvider from "../providers/AuthProvider";
import { FaHashtag } from "react-icons/fa";
import { GoBell } from "react-icons/go";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { BsBookmark } from "react-icons/bs";
import { LuClipboardList } from "react-icons/lu";
import { GlobalContextProvider } from "../context/GlobalContext";
import GlobalProvider from "../providers/GlobalProvider";
import RegisterPage from "../pages/RegisterPage";
import ProfileTweet from "../components/pages/profile/ProfileTweet";
import ProfileFollower from "../components/pages/profile/ProfileFollower";
import ProfileFollowing from "../components/pages/profile/ProfileFollowing";
import { TweetPage } from "../pages/TweetPage";
import { Navigate } from "react-router-dom";

const routes = [
    {
        path: '/',
        label: 'Home',
        icon: <BiSolidHomeCircle />,
        element: <HomePage />,
        isAuth: true,
        isMenu: true,
        layout: AppLayout
    },
    {
        path: '/explore',
        label: 'Explore',
        icon: <FaHashtag />,
        element: <ExplorePage />,
        isAuth: true,
        isMenu: true,
        layout: AppLayout
    },
    {
        path: '/notification',
        label: 'Notification',
        icon: <GoBell />,
        count: 10,
        element: <NotificationPage />,
        isAuth: true,
        isMenu: true,
        layout: AppLayout
    },
    {
        path: '/message',
        label: 'Messages',
        icon: <HiOutlineEnvelope />,
        element: <MessagePage />,
        isAuth: true,
        isMenu: true,
        layout: AppLayout
    },
    {
        path: '/bookmark',
        label: 'Bookmarks',
        icon: <BsBookmark />,
        element: <BookmarkPage />,
        isAuth: true,
        isMenu: true,
        layout: AppLayout
    },
    {
        path: '/list',
        label: 'Lists',
        icon: <LuClipboardList />,
        element: <ListPage />,
        isAuth: true,
        isMenu: true,
        layout: AppLayout
    },
    {
        path: '/tweet/:hashtag',
        element: <TweetPage />,
        isAuth: true,
        isMenu: false,
        layout: AppLayout
    },
    {
        path: '/profile/:username',
        label: 'Profile',
        icon: <BiUser />,
        element: <ProfilePage />,
        isAuth: true,
        isMenu: true,
        layout: AppLayout,
        children: [
            {
                index: true,
                element: <ProfileTweet />,
            },
            {
                path: 'follower',
                element: <ProfileFollower />,
            },
            {
                path: 'following',
                element: <ProfileFollowing />,
            }
        ]
    },
    {
        path: '/login',
        element: <LoginPage />,
        layout: AuthLayout
    },
    {
        path: '/register',
        element: <RegisterPage />,
        layout: AuthLayout
    },
    {
        path: '*',
        element: <Navigate to={'/'}/>
    }
]

export const getMenus = () => routes.filter(i => i.isMenu)

const createRouter = routes => {
    return routes.map(router => {

        if (router.layout) {
            const Layout = router.layout;
            router.element = <Layout>{router.element}</Layout>
        }
        else {
            router.element = <DefaultLayout>{router.element}</DefaultLayout>
        }

        if (router.isAuth) router.element = <AuthProvider>{router.element}</AuthProvider>

        router.element = (
            <GlobalContextProvider>
                <GlobalProvider>
                    {router.element}
                </GlobalProvider>
            </GlobalContextProvider>
        )

        return router;
    })
}

export default createRouter(routes);