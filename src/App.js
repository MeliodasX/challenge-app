import './App.css';
import {Routes, Route, Link} from "react-router-dom"
import {ProductEdit} from "./components/ProductEdit";
import {ProductView} from "./components/ProductView";
import {Main} from "./components/Main";
import {Header} from "./components/Header";
import {Avatar} from "./components/Avatar";
import {useGetAppConfigQuery, useGetProductQuery} from "./redux/api/productAPI";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProduct} from "./redux/slices/product/productSlice";
import {updateAppConfig} from "./redux/slices/app/appSlice";

function App() {
    const {data: productData, isLoading: productIsLoading, isError: productIsError} = useGetProductQuery();
    const {
        data: configData,
        isLoading: configIsLoading,
        isError: configIsError
    } = useGetAppConfigQuery({appId: (process.env.REACT_APP_APP_ID) ? process.env.REACT_APP_APP_ID : 1});
    const config = useSelector(state => state.appConfig.config);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!productIsLoading) {
            const product = {
                title: productData.name,
                description: productData.description,
                picture: productData.picture,
                categories: productData.categories.map((it) => {
                    return it.name;
                }),
                cost: productData.investmentEffort,
                TRL: productData.trl.name,
                businessModel: productData.businessModels.map((it) => {
                    return it.name;
                }),
                videoLink: productData.video,
                userName: `${productData.user.firstName} ${productData.user.lastName}`,
                profilePicture: productData.user.profilePicture,
                companyName: productData.company.name,
                companyLogo: productData.company.logo,
                address: productData.company.address,
            }
            dispatch(updateProduct(product));
        }
    }, [productData, productIsLoading]);

    useEffect(() => {
        if (!configIsLoading) {
            dispatch(updateAppConfig({config: configData}));
        }
    }, [configData, configIsLoading])

    if (productIsLoading || configIsLoading) return <div>Loading...</div>
    if (productIsError || configIsError) return <div>Error Retrieving Info</div>

    return (
        <div className="App overflow-x-hidden">
            <div className={`flex flex-col bg-[#F9FAFB] min-h-screen`}>
                <Header bgColor={config?.mainColor}/>
                <div className={`flex flex-row px-[20px] lg:px-0 lg:mx-[10%]`}>
                    <div className={`hidden lg:flex lg:w-[15%] flex-col gap-y-[16px] mt-[16px] items-start`}>
                        <Avatar name={`Sven Pietsch`} company={`Innoloft GmbH`} stack={true}/>
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
                        <div
                            className={`lg:hidden flex flex-row justify-evenly my-[10px] py-[12px] px-[10px]`}
                            style={{
                                backgroundColor: (config?.mainColor) ? config.mainColor : "#073c41",
                            }}
                        >
                            <Link to={"/"}>
                                <p className={`text-sm text-white hover:underline`}>
                                    Home
                                </p>
                            </Link>
                            <Link to={"/product"}>
                                <p className={`text-sm text-white hover:underline`}>
                                    Product
                                </p>
                            </Link>
                        </div>
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
