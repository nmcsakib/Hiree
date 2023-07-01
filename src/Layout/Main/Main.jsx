import { Outlet } from "react-router-dom";
import Navigation from "../../Shared/Navigation";

const Main = () => {
return (
<div className="container mx-auto bg-gradient-to-br from-violet-400 to-pink-900 min-h-screen">
    <Navigation/>
    <div className="px-10">
    <Outlet/>
    </div>
</div>
);
};
export default Main;