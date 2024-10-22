import classNames from "classnames";
import LoadingIcon from "../loading";

function Button(
    {
        children,
        property = 'primary',
        className,
        roundedFull = false,
        onClick,
        sm = false,
        block = false,
        loading = false,
    }
) {
    return (
        <button
            onClick={() => onClick?.()}
            className={classNames(
                'btn',
                'btn-' + property,
                className || '',
                {
                    'btn-block': block,
                    'btn-sm': sm,
                    'btn-rounded': roundedFull,
                }
            )}
            disabled={loading}
        >
            {loading && <LoadingIcon />}
            {children}
        </button>
    );
}

export default Button;