export default function AccessibleRadioGroup() {
  const options = [
    { name: "email", id: 4, label: "Email" },
    { name: "phone", id: 5, label: "Phone" },
    { name: "mail", id: 6, label: "Mail" },
  ];

  return (
    <section className="a-radios">
      <h4 id="radioGroupLegend">Please select your preferred contact method</h4>
      <div
        className="a-radio-group"
        role="radiogroup"
        aria-labelledby="radioGroupLegend"
      >
        {options.map(({ id, label }) => (
          <div key={id}>
            <label className="a-radio-group__label">
              <input
                type="radio"
                name="radiogroup"
                value={id}
                id={id}
                className="a-radio-group__item"
              />
              {label}
            </label>
          </div>
        ))}
      </div>
      <div>
        <button type="button" className="a-radio-group__submit">
          Submit
        </button>
      </div>
    </section>
  );
}
