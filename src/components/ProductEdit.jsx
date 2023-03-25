import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {Avatar} from "./Avatar";
import {useGetTRLQuery, useUpdateProductMutation} from "../redux/api/productAPI";
import {useEffect, useRef, useState} from "react";
import Select from "react-select";
import {
    updateBusinessModel,
    updateCategories,
    updateCost, updateDescription, updateTitle,
    updateTRL,
    updateVideoLink
} from "../redux/slices/product/productSlice";
import JoditEditor from 'jodit-react';

export const ProductEdit = () => {
    const productData = useSelector(state => state.product);
    const config = useSelector(state => state.appConfig.config);
    const [TRLOptions, setTRLOptions] = useState([]);
    const editor = useRef(null);
    const [updateProductAPI] = useUpdateProductMutation();

    const {data, isLoading, isError} = useGetTRLQuery();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!isLoading) {
            setTRLOptions(data.map(it => {
                return {label: it.name, key: it.id, value: it.name}
            }))
        }
    }, [data, isLoading])

    const updateProductCall = async () => {
        const status = await updateProductAPI({
            updatedProduct: {}
        }).unwrap();
        console.log(status);
    }

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error Retrieving Info</div>

    return (
        <div className={`flex flex-col gap-y-[16px] py-[16px]`}>
            <div className={`flex justify-start lg:justify-end`}>
                <Link
                    onClick={() => updateProductCall()}
                    to={`/product`}
                >
                    <button className={`rounded-md px-[12px] py-[6px] text-white`} style={{
                        backgroundColor: (config?.mainColor) ? config.mainColor : "#073c41",
                    }}>
                        Save
                    </button>
                </Link>
            </div>
            <div
                className={`flex flex-col lg:flex-row border rounded-md bg-white gap-y-[16px]`}>
                <div className={`flex flex-col ${(config?.hasUserSection ? "lg:w-[75%] lg:border-r" : "w-full")}`}>
                    <div className={`flex justify-start`}>
                        <img
                            src={productData.picture}
                            alt="product"
                        />
                    </div>
                    <div className={`flex flex-col gap-y-[16px] my-[16px] items-start px-[10px] lg:px-[20px]`}>
                        <input type="text"
                               value={productData.title}
                               onChange={(e) => {
                                   dispatch(updateTitle({title: e.target.value}))
                               }}
                               className="w-full outline-0 bg-gray-50 border border-gray-300 focus:border-blue-800 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                               placeholder="Add a youtube or vimeo link"
                               required/>
                        <JoditEditor
                            ref={editor}
                            value={productData.description}
                            config={config}
                            tabIndex={1}
                            onBlur={e => {
                                dispatch(updateDescription({description: e}))
                            }}
                            className={`text-start`}
                        />
                    </div>
                </div>
                <div
                    className={`${(config?.hasUserSection ? "" : "hidden")} flex-col lg:w-[25%] space-y-[16px] py-[16px] px-[10px] lg:px-[20px]`}>
                    <div className={`flex justify-start font-semibold text-md`}>
                        Offered By
                    </div>
                    <img src={productData.companyLogo} alt="company logo" className={`h-[50px]`}/>
                    <Avatar name={productData.userName} company={productData.companyName}
                            avatar={productData.profilePicture}/>
                    <div className={`flex flex-row gap-x-[8px]`}>
                        <img src="https://img.icons8.com/windows/512/map-pin.png" alt="Location Logo"
                             className={`w-[20px] h-[20px]`}/>
                        <p className={`text-xs text-gray-500 text-start`}>
                            {`${productData.address.street} ${productData.address.house}, ${productData.address.zipCode} ${productData.address.city?.name}, ${productData.address.country?.name}`}
                        </p>
                    </div>
                </div>
            </div>
            <div className={`flex flex-col border rounded-md bg-white gap-y-[16px] py-[16px] lg:py-[12px]`}>
                <div className={`flex justify-start px-[10px] lg:px-[20px] font-semibold text-md`}>
                    Video
                </div>
                <input type="text"
                       value={productData.videoLink}
                       onChange={(e) => {
                           dispatch(updateVideoLink({videoLink: e.target.value}))
                       }}
                       className="mx-[10px] lg:mx-[20px] w-[500px] outline-0 bg-gray-50 border border-gray-300 focus:border-blue-800 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                       placeholder="Add a youtube or vimeo link"
                       required/>
            </div>
            <div className={`flex flex-col border rounded-md bg-white gap-y-[16px] py-[16px] lg:py-[12px]`}>
                <div className={`flex justify-start px-[10px] lg:px-[20px] font-semibold text-md`}>
                    Offer details
                </div>
                <div className={`flex flex-col justify-start gap-y-[16px] px-[10px] lg:px-[20px]`}>
                    <div className={`flex flex-col gap-y-[16px] justify-evenly`}>
                        <div className={`flex flex-row gap-x-[4px] lg:w-[50%]`}>
                            <div className={`flex justify-start shrink-0`}>
                                <img src="https://img.icons8.com/fluency-systems-regular/512/sorting-answers.png"
                                     alt="Categories Logo"
                                     className={`w-[20px] h-[20px]`}/>
                            </div>
                            <div className={`flex flex-col gap-y-[8px] items-start `}>
                                <p className={`text-sm text-gray-500`}>
                                    Categories
                                </p>
                                <div className={`flex flex-row flex-wrap gap-x-[4px] gap-y-[8px]`}>
                                    <input type="text"
                                           value={productData.categories}
                                           onChange={(e) => {
                                               dispatch(updateCategories({categories: e.target.value}))
                                           }}
                                           className="w-[200px] outline-0 bg-gray-50 border border-gray-300 focus:border-blue-800 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                           placeholder="Categories"
                                           required/>
                                </div>
                            </div>
                        </div>
                        <div className={`flex flex-row gap-x-[4px] lg:w-[50%]`}>
                            <div className={`flex justify-start shrink-0`}>
                                <img
                                    src="https://img.icons8.com/external-obvious-line-kerismaker/512/external-activities-stay-at-home-line-obvious-line-kerismaker-12.png"
                                    alt="Business Model Logo"
                                    className={`w-[20px] h-[20px]`}/>
                            </div>
                            <div className={`flex flex-col gap-y-[8px] items-start`}>
                                <p className={`text-sm text-gray-500`}>
                                    Business Model
                                </p>
                                <div className={`flex flex-row flex-wrap gap-x-[4px] gap-y-[8px]`}>
                                    <input type="text"
                                           value={productData.businessModel}
                                           onChange={(e) => {
                                               dispatch(updateBusinessModel({businessModel: e.target.value}))
                                           }}
                                           className="w-[200px] outline-0 bg-gray-50 border border-gray-300 focus:border-blue-800 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                           placeholder="Business Model"
                                           required/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col gap-y-[16px] justify-evenly`}>
                        <div className={`flex flex-row gap-x-[4px] lg:w-[50%]`}>
                            <div className={`flex justify-start shrink-0`}>
                                <img src="https://img.icons8.com/ios/512/time-machine.png" alt="TRL Logo"
                                     className={`w-[20px] h-[20px]`}/>
                            </div>
                            <div className={`flex flex-col gap-y-[8px] items-start`}>
                                <p className={`text-sm text-gray-500`}>
                                    TRL
                                </p>
                                <Select
                                    value={TRLOptions.filter(it => it.label === productData.TRL)}
                                    options={TRLOptions}
                                    onChange={(e) => {
                                        dispatch(updateTRL({TRL: e.label}))
                                    }}
                                    className={`w-[200px]`}
                                />
                            </div>
                        </div>
                        <div className={`flex flex-row gap-x-[4px] lg:w-[50%]`}>
                            <div className={`flex justify-start shrink-0`}>
                                <img src="https://img.icons8.com/dotty/512/average-2.png" alt="Costs Logo"
                                     className={`w-[20px] h-[20px]`}/>
                            </div>
                            <div className={`flex flex-col gap-y-[8px] items-start`}>
                                <p className={`text-sm text-gray-500`}>
                                    Costs
                                </p>
                                <div className={`flex flex-row flex-wrap gap-x-[4px] gap-y-[8px]`}>
                                    <input type="text"
                                           value={productData.cost}
                                           onChange={(e) => {
                                               dispatch(updateCost({cost: e.target.value}))
                                           }}
                                           className="w-[200px] outline-0 bg-gray-50 border border-gray-300 focus:border-blue-800 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                                           placeholder="Cost"
                                           required/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}