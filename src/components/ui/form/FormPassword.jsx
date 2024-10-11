function FormPassword(
    {
        value,
        onChange
    }
) {
    return (
        <>
            <input value={value} onChange={e => onChange?.(e.target.value)} type="password" className="form-item" />
        </>
    );
}

export default FormPassword;