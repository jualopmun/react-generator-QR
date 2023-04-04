import { render, fireEvent, cleanup } from '@testing-library/react';
import DownloadButtonComponent from './index.jsx';
import { downloadFile } from '../../utils/downloadFile.js';
import { postApi } from '../../api/post.api';

vi.mock('../../api/post.api');
vi.mock('../../utils/downloadFile');



describe('DownloadButtonComponent', () => {
  let wrapper;


  beforeEach(() => {
		wrapper = (type, title) =>  render(<DownloadButtonComponent 
      data={{ foo: 'bar' }} 
      type={type} 
      title={title}
    />);
    const mBlob =  new Blob([JSON.stringify({size: 1024}, null, 2)], {
      type: "application/png",
    });

    vi.spyOn(window, 'fetch').mockResolvedValueOnce({
      blob: () => Promise.resolve(mBlob),
    });

    postApi.mockResolvedValueOnce({ blob: () => Promise.resolve(mBlob) });
    downloadFile.mockResolvedValueOnce({ blob: () => Promise.resolve(mBlob) });

	});

	afterEach(() => {
		cleanup();
    vi.clearAllMocks();
	});

  it('renders the button with the correct title', () => {
    const { getByText } = wrapper('html', 'Download HTML')

    expect(getByText('Download HTML')).to.exist;
  });

  it('should download a file when clicked', async () => {

    const { getByText } = wrapper('image', 'Download PNG')


    fireEvent.click(getByText('Download PNG'));
    expect(postApi).toHaveBeenCalledTimes(1);
  });
});