import {useSelector} from "react-redux";
import ReactPlayer from "react-player";
import {Avatar} from "./Avatar";
import {Link} from "react-router-dom"

export const ProductView = () => {
    const productData = useSelector(state => state.product);
    const config = useSelector(state => state.appConfig.config);
    return (
        <div className={`flex flex-col gap-y-[16px] py-[16px]`}>
            <div className={`flex justify-start lg:justify-end`}>
                <Link to={`/product/edit`}>
                    <button className={`rounded-md px-[12px] py-[6px] text-white`} style={{
                        backgroundColor: (config?.mainColor) ? config.mainColor : "#073c41",
                    }}>
                        Edit
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
                        <p className={`text-start font-semibold text-md`}>
                            {productData.title}
                        </p>
                        <p className={`text-start text-sm`}>
                            {productData.description}
                        </p>
                    </div>
                </div>
                <div className={`${(config?.hasUserSection ? "" : "hidden")} flex-col lg:w-[25%] space-y-[16px] py-[16px] px-[10px] lg:px-[20px]`}>
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
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10091.114733317616!2d6.1006609!3d50.7796761!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c09963c8e4ae6b%3A0xbb82ea0594132a59!2sInnoloft%20GmbH!5e0!3m2!1sen!2s!4v1679767254596!5m2!1sen!2s"
                        title={`Office Location`}
                        width="100%"
                        height={200}
                        style={{border: "0"}}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </div>
            <div className={`flex flex-col border rounded-md bg-white gap-y-[16px] py-[16px] lg:py-[12px]`}>
                <div className={`flex justify-start px-[10px] lg:px-[20px] font-semibold text-md`}>
                    Video
                </div>
                <div className={`flex justify-center items-center px-[10px] lg:px-[20px]`}>
                    <ReactPlayer url={productData.videoLink}/>
                </div>
            </div>
            <div className={`flex flex-col border rounded-md bg-white gap-y-[16px] py-[16px] lg:py-[12px]`}>
                <div className={`flex justify-start px-[10px] lg:px-[20px] font-semibold text-md`}>
                    Offer details
                </div>
                <div className={`flex flex-col justify-start gap-y-[16px] px-[10px] lg:px-[20px]`}>
                    <div className={`flex flex-col lg:flex-row gap-y-[16px] justify-evenly`}>
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
                                    {
                                        productData.categories?.map((it, i) => {
                                            return (
                                                <div key={i}
                                                     className={`bg-[#E5E7EB] text-xs text-gray-500 rounded-lg px-[6px] py-[3px]`}>
                                                    {it}
                                                </div>
                                            )
                                        })
                                    }
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
                                    {
                                        productData.businessModel?.map((it, i) => {
                                            return (
                                                <div key={i}
                                                     className={`bg-[#E5E7EB] text-xs text-gray-500 rounded-lg px-[6px] py-[3px]`}>
                                                    {it}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`flex flex-col lg:flex-row gap-y-[16px] justify-evenly`}>
                        <div className={`flex flex-row gap-x-[4px] lg:w-[50%]`}>
                            <div className={`flex justify-start shrink-0`}>
                                <img src="https://img.icons8.com/ios/512/time-machine.png" alt="TRL Logo"
                                     className={`w-[20px] h-[20px]`}/>
                            </div>
                            <div className={`flex flex-col gap-y-[8px] items-start`}>
                                <p className={`text-sm text-gray-500`}>
                                    TRL
                                </p>
                                <div className={`flex flex-row flex-wrap gap-x-[4px] gap-y-[8px]`}>
                                    <div className={`bg-[#E5E7EB] text-xs text-gray-500 rounded-lg px-[6px] py-[3px]`}>
                                        {productData.TRL}
                                    </div>
                                </div>
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
                                    <div className={`bg-[#E5E7EB] text-xs text-gray-500 rounded-lg px-[6px] py-[3px]`}>
                                        {productData.cost}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}