import classNames from "classnames";

function Button(
    {
        children,
        property = 'primary',
        block = false,
    }
) {
    return (
        <button className={classNames(
            'btn',
            'btn-' + property,
            {
                'btn-block': block
            }
        )}>
            {children}
        </button>
    );
}

export default Button;