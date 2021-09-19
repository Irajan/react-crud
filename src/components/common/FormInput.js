function FromInput(props) {
  const { label, type, onChange, value } = props;

  return (
    <>
      <label className="form-label">{label}</label>
      <input
        className="form-input"
        type={type}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
    </>
  );
}

export default FromInput;
