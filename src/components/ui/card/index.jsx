import classNames from "classnames";

function Card(
    {
        title,
        icon,
        children,
        btnText,
        showMore = false,
        onShowMore,
        headerBorder = false,
        className
    }
) {
    return (
        <div className={classNames(
            'dark:bg-gray-800 bg-gray-100 dark:text-white mt-[12px] rounded-[12px]',
            className || ''
        )}>
            <div className={classNames(
                'flex items-center justify-between py-[12px] px-[16px]',
                {
                    'border-b dark:border-gray-700 mb-2 pb-2': headerBorder
                }
            )}>
                <h3 className="dark:text-[#D9D9D9] text-[19px] font-bold">
                    {title}
                </h3>
                {icon && (
                    <span>
                        {icon}
                    </span>
                )}
            </div>

            <div className="pb-[12px] px-[16px]">
                {children}
            </div>

            {showMore && (
                <div className="py-[12px] px-[16px]">
                    <button onClick={() => onShowMore?.()} className="text-[#1D9BF0] text-[15px] font-bold mt-[25px]">
                        {btnText}
                    </button>
                </div>
            )}
        </div>
    );
}

export default Card;