import AsideLeft from "../components/common/AsideLeft";
import AsideRight from "../components/common/AsideRight";
import Page from "../components/ui/page";

function AppLayout({ children }) {


    return (
        <div className="container flex mx-auto lg:ps-3 ps-0 h-screen">
            <AsideLeft />
            <div className="flex-1 text-white pb-3">
                <Page>
                    {children}
                </Page>
            </div>
            <AsideRight />
        </div>
    );
}

export default AppLayout;