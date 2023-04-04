import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { postApi } from '../../api/post.api';
import { enviorenment } from '../../config/enviorenment';
import { downloadFile } from '../../utils/downloadFile';


const TYPEDOWNLOAD = {
	html: 'html',
	image: 'png'
};

export default function DownloadButtonComponent({data, type, title}) {

	const [loading, setLoading] = useState(false)

	const onHandleDownload = () => {
		setLoading(true);
		postApi(enviorenment.apiQR, {...data, type})
			.then(response => response.blob())
			.then(response => { 
				downloadFile(response, `QR.${TYPEDOWNLOAD[type]}`);
				setLoading(false);
			});
	};

	const renderButtonTextLoad = () => {
		if(loading) {
			return (
				<>
					<span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
					Loading...
				</>
			)
		}
		return (
			<>
				<span>{title}</span>
			</>
		)
	}

	return (
		<>
			<button 
				type="submit" 
				className="btn btn-primary me-md-2" 
				onClick={onHandleDownload}
				disabled={loading}
			>
				{renderButtonTextLoad()}
			</button>
		</>
	);
}


DownloadButtonComponent.propTypes = {
	data: PropTypes.object,
	type: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
};