import {useSelector} from "react-redux";

export const Header = ({bgColor}) => {
    const config = useSelector(state => state.appConfig.config);
    return (
        <div className={`flex item-center justify-center w-screen h-[50px]`} style={{
            backgroundColor: (bgColor) ? bgColor : "#073c41",
        }}>
            <div className={`flex items-center justify-start w-full px-[20px] lg:px-0 lg:mx-[10%]`}>
                <img src={config?.logo ? config.logo : ""} alt="company logo" className={`w-[150px] h-[50px]`}/>
            </div>
        </div>
    )
}