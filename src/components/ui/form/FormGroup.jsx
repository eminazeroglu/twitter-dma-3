import classNames from "classnames";
import { useCallback, useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

function FormGroup(
    {
        children,
        label,
        required = false,
        error,
        prefix,
        suffix,
        password = false
    }
) {

    const [isPassword, setIsPassword] = useState(password);

    const handlePassword = useCallback((e) => {
        const obj = e.target.closest('button') ? e.target.closest('button') : e.target;

        if (obj.tagName === 'BUTTON') {
            const parent = obj.closest('.form-group');
            const input = parent.querySelector('input.form-item');

            input.type = input.type === 'password' ? 'text' : 'password'
            setIsPassword(input.type === 'password')
        }

    }, [password])

    return (
        <div className={classNames(
            'form-group',
            {
                'form-group-error': error
            }
        )}>
            <label className="form-label">
                <span>{label}</span>
                {required && <span>*</span>}
            </label>
            <div className={classNames(
                'form-element',
                {
                    'form-element-prefix': prefix
                }
            )}>
                {prefix && <span className="form-prefix">{prefix}</span>}
                {children}
                {suffix && <span className="form-suffix">{suffix}</span>}
                {password && (
                    <button type="button" onClick={(e) => handlePassword(e)} className="form-suffix">
                        {isPassword ? <FiEye /> : <FiEyeOff />}
                    </button>
                )}
            </div>
            {error && <p className="mt-1 text-red-500 text-sm">{error}</p>}
        </div>
    );
}

export default FormGroup;