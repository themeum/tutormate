const RadioField = ({selected, options, onChange}) => {
    return (
        <div>
            {
                options && options.map((option, index) =>(
                    <div key={index}>
                        <input type="radio" name="builder" id={option.value} checked={selected}/>
                        <label htmlFor={option.value}>
                            {/* <img src="" alt={option.value}/> */}
                            <span>{option.value}</span>
                        </label>
                    </div>
                ))
            }           
        </div>
    );
};

export default RadioField;