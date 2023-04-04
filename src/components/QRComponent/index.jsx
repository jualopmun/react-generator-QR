import React, {useState, useEffect} from 'react';

import PropTypes from 'prop-types';
import { enviorenment } from '../../config/enviorenment';
import { postApi } from '../../api/post.api';


function QRComponent({data}) {
	const [image, setImage] = useState(null);

	useEffect(() => {
		if(data !== null) {
			postApi(enviorenment.apiQR, {...data, type:'json'})
				.then((res => res.json()))
				.then(response => { 
					setImage(response.generateqr);
				});
		}
   
	}, [data]);

	return (
		<>
			<div>
				{image  && <img src={image} alt="Imagen en base 64"  width={data.size *10} height={data.size *10}/>}
			</div>
		</>
	);

}


QRComponent.propTypes = {
	data: PropTypes.object,
};

export default React.memo(QRComponent);

