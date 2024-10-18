import classNames from "classnames";
import LoadingIcon from "../loading";

function Button(
    {
        children,
        property = 'primary',
        block = false,
        loading = false,
    }
) {
    return (
        <button
            className={classNames(
                'btn',
                'btn-' + property,
                {
                    'btn-block': block
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