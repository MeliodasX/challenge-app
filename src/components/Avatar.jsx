export const Avatar = ({ avatar, name, company, stack }) => {
    return (
        <div className={`flex ${(stack) ? "flex-col" : "flex-row items-center"} gap-x-[8px]`}>
            <div className={`flex justify-center items-center`}>
                <img src={(avatar) ? avatar : "https://thumbs.dreamstime.com/b/woman-avatar-icon-flat-style-illustration-web-isolated-black-background-woman-avatar-icon-flat-style-illustration-web-163672116.jpg"} alt="avatar" className={`w-[40px] h-[40px] rounded-full`}/>
            </div>
            <div className={`flex flex-col items-start`}>
                <p className={`font-semibold text-sm text-gray-500`}>
                    {name}
                </p>
                <p className={`text-xs text-gray-500`}>
                    {company}
                </p>
            </div>
        </div>
    )
}