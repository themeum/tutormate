const RadioField = ({ selected, options, selectedBuilder }) => {

    const updateRadioValue = (event) => {
        event.preventDefault();
        const radioInput = event.target.value;
        selectedBuilder(radioInput);
    }

    return (
        <div className="radio-field-wrapper">
            {
                options && options.map((option, index) => (
                    <div key={index} className="radio-field-item">
                        <input
                            type="radio"
                            name="builder"
                            id={option.value}
                            value={option.value}
                            checked={option.value === selected ? true : false}
                            onChange={(event) => updateRadioValue(event)}
                        />
                        <label htmlFor={option.value}>
                            {
                                option.value === 'gutenberg' ?
                                    <img src={`${tutormate.tutormate_url}/assets/images/qubely.png`} alt="icon" /> :
                                    <img src={`${tutormate.tutormate_url}/assets/images/${option.value}.png`} alt="icon" />
                            }
                            <span>{option.value}</span>
                        </label>
                    </div>
                ))
            }
        </div>
    );
};

export default RadioField;