function FormText(
    {
        value,
        onChange
    }
) {
    return (
        <input value={value} onChange={e => onChange?.(e.target.value)} type="text" className="form-item" />
    );
}

export default FormText;