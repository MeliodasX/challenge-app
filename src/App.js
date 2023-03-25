import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import {ProductEdit} from "./components/ProductEdit";
import {ProductView} from "./components/ProductView";
import {Main} from "./components/Main";
import {Header} from "./components/Header";
import {Avatar} from "./components/Avatar";

function App() {
    return (
        <div className="App">
            <div className={`flex flex-col bg-[#F9FAFB] h-screen`}>
                <Header />
                <div className={`flex flex-row px-[20px] lg:px-0 lg:mx-[10%]`}>
                    <div className={`hidden lg:flex lg:w-[15%] flex-col gap-y-[16px] mt-[16px] items-start`}>
                        <Avatar name={`Sven Pietsch`} company={`Innoloft GmbH`}/>
                        <div className={`flex flex-row gap-x-[8px]`}>
                            <img src="https://img.icons8.com/windows/512/smart-home-2.png" alt="Location Logo"
                                 className={`w-[20px] h-[20px]`}/>
                            <Link to={"/"}>
                                <p className={`text-md text-gray-700 hover:underline`}>
                                    Home
                                </p>
                            </Link>
                        </div>
                        <div className={`flex flex-row gap-x-[8px]`}>
                            <img src="https://img.icons8.com/ios/512/package.png" alt="Location Logo"
                                 className={`w-[20px] h-[20px] mt-0.5`}/>
                            <Link to={"/product"}>
                                <p className={`text-md text-gray-700 hover:underline`}>
                                   Product
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className={`w-full`}>
                        <Routes>
                            <Route path="/" element={<Main/>}/>
                            <Route path="/product" element={<ProductView/>}/>
                            <Route path="/product/edit" element={<ProductEdit/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
