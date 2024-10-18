function FormPassword(
    {
        value,
        onChange,
        ...props
    }
) {
    return (
        <>
            <input {...props} value={value} onChange={e => onChange?.(e.target.value)} type="password" className="form-item" />
        </>
    );
}

export default FormPassword;