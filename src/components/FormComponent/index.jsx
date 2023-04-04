import React, {useReducer} from 'react';
import PropTypes from 'prop-types';


const initialState = {
	url: '', 
	size: 20,
	lightColor: '#FFFFFF',
	darkColor: '#000000'
};

function formReducer(state, action) {
	switch (action.type) {
	case 'UPDATE':
		return {
			...state,
			[action.key]: action.value,
		};
	default:
		return state;
	}
}



function FormComponent({onFormSubmit}) {

	const [state, dispatch] = useReducer(formReducer, initialState);

	const { url, size, lightColor, darkColor } = state;


	const handleSubmit = (event) => {
		event.preventDefault();
		onFormSubmit({
			url,
			size: Number(size),
			color: {
				dark: darkColor,
				light: lightColor
			}
		});
	};

	const handleTextForm = (event) => dispatch({
		type: 'UPDATE',
		value: event.target.value,
		key: event.target.name,
	});

	return (
		<>
			<form 
				onSubmit={handleSubmit}
			>
				<div className="mb-3">
					<label 
						className="form-label"
					>
          URL
					</label>
					<input 
						type="text"
						name="url"
						value={url}
						onChange={(event) => handleTextForm(event)}
						className="form-control" 
						aria-label="url"
						required
					>
					</input>
				</div>
				<div className="mb-3">
					<label 
						className="form-label"
					>
          Size: {size}
					</label>
					<input 
						type="range"
						name="size"
						value={size}
						onChange={(event) => handleTextForm(event)}
						className="form-control" 
						aria-label="size"
						max={50}
						min={1}
					>
					</input>
				</div>
				<div className="mb-3">
					<label 
						className="form-label"
					>
          Light Color: {lightColor}
					</label>
					<input 
						type="color"
						name="lightColor"
						value={lightColor}
						onChange={(event) => handleTextForm(event)}
						className="form-control" 
						aria-label="lightColor"
					>
					</input>
				</div>
				<div className="mb-3">
					<label 
						className="form-label"
					>
          Dark Color: {darkColor}
					</label>
					<input 
						type="color"
						name="darkColor"
						value={darkColor}
						onChange={(event) => handleTextForm(event)}
						className="form-control" 
						aria-label="darkColor"
					>
					</input>
				</div>
				<button 
					type="submit" 
					className="btn btn-primary"
				>Submit
				</button>
			</form>
		</>
	);
}

FormComponent.propTypes = {
	onFormSubmit: PropTypes.func.isRequired,
};


export default FormComponent;