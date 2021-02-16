const RadioField = ({selected, options, onChange}) => {
    console.log(options && options);

    return (
        <div className="radio-field-wrapper">
            {
                options && options.map((option, index) => (
                    <div key={index} className="radio-field-item">
                        <input type="radio" name="builder" id={option.value} checked={selected}/>
                        <label htmlFor={option.value}>
                            {
                                option.value === 'gutenberg' ? 
                                <img src={`${tutormate.tutormate_url}/assets/images/qubely.png`} alt="icon"/> : 
                                <img src={`${tutormate.tutormate_url}/assets/images/${option.value}.png`} alt="icon"/>
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