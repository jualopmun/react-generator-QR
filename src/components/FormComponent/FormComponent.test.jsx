import React from 'react';
import FormComponent from './index.jsx';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';

const COMPONENTRENDER = 
[
	{
		label:'url',
		initValue: '',
		testValue: 'prueba.com'
	},
	{
		label:'size',
		initValue: '20',
		testValue: '24'

	},
	{
		label:'lightColor',
		initValue: '#ffffff',
		testValue: '#fffff1'

	},
	{
		label:'darkColor',
		initValue: '#000000',
		testValue: '#000001',
	}
];


const findComponente = (search) => COMPONENTRENDER.find(({label}) => (label === search));



describe('FormComponent', () => {
	const onFormSubmitMock = vi.fn(() =>({
		url: findComponente('url').testValue,
		size: findComponente('size').testValue,
		color: {
			dark:  findComponente('darkColor').testValue,
			light: findComponente('lightColor').testValue,
		}
	}));

	beforeEach(() => {
		render(<FormComponent onFormSubmit={onFormSubmitMock} />);
	});

	afterEach(() => {
		onFormSubmitMock.mockClear();
		cleanup();
	});

	it('renders all component by arial-label', () => {
		COMPONENTRENDER.forEach((component) => {
			const input = screen.getByLabelText(component.label);
			expect(input).toBeTruthy();
			expect(input.value).to.equal(component.initValue);
			input.value = component.testValue;
			expect(input.value).to.equal(component.testValue);
		});
		
	});

	it('renders the form complete', () => {
		COMPONENTRENDER.map((component) => {
			const input = screen.getByLabelText(component.label);
			fireEvent.change(input, { target: { value: component.testValue } });
		});
		const sendButton = screen.getByRole('button');
		fireEvent.submit(sendButton);
		expect(onFormSubmitMock).toHaveBeenCalledTimes(1);


		//Render text in the form value color and size
		const { color, size } = onFormSubmitMock();

		expect(screen.getByText(color.dark, {exact: false})).toBeTruthy();
		expect(screen.getByText(color.light, {exact: false})).toBeTruthy();
		expect(screen.getByText(size, {exact: false})).toBeTruthy();
	});
});