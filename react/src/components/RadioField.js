import { useEffect } from 'react';

const RadioField = ({ selected, options, selectedBuilder }) => {
	const updateRadioValue = (event) => {
		event.preventDefault();
		const radioInput = event.target.value;
		selectedBuilder(radioInput);
	};

	useEffect(() => {
		options && options.filter((item) => selectedBuilder(item.value));
	}, []);

	return (
		<div className="radio-field-wrapper">
			{options &&
				options.map((option, index) => (
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
							{option.value === 'droip' ? (
								<img
									src={`${tutormate.tutormate_url}/assets/images/droip-icon.webp`}
									alt="icon"
									style={{ width: '20px', height: '20px' }}
								/>
							) : (
								<img src={`${tutormate.tutormate_url}/assets/images/${option.value}.png`} alt="icon" />
							)}
							<span>{option.value}</span>
						</label>
					</div>
				))}
		</div>
	);
};

export default RadioField;
