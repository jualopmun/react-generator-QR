import React from 'react';
import { render, cleanup } from '@testing-library/react';

import { expect, it } from 'vitest'

import QRComponent from './index.jsx';

describe('QRComponent', () => {
  let wrapper;

  beforeEach(() => {
		wrapper = (data) =>  render(<QRComponent data={data} />);
    vi.spyOn(window, 'fetch').mockResolvedValueOnce({
      json: () => Promise.resolve({ generateqr: 'data:image/png;base64,abc123' }),
    });
   
     
	});

	afterEach(() => {
		cleanup();
    vi.clearAllMocks();
	});



  it('should render an image when data is provided', async () => {
    // Arrange
    const data = { size: 10, text: 'Hello world' };

   

    // Act
    const { findByAltText } = wrapper(data);
    const image = await findByAltText('Imagen en base 64');
    // Assert
    expect(image).to.exist;
    expect(image).to.have.property('src').that.equals('data:image/png;base64,abc123');
    expect(image).to.have.property('width').that.equals(100);
    expect(image).to.have.property('height').that.equals(100);
  });

  it('should not render an image when no data is provided', async () => {
    // Arrange
    const data = null;

    // Act
    const { queryByAltText } = wrapper(data);
    const renderComponent = queryByAltText('Imagen en base 64');

    // Assert
    expect(renderComponent).toBe(null);
  });
});