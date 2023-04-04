import React, { useState } from 'react';
import './App.css';
import DownloadButtonComponent from './components/DownloadButtonComponent';
import FormComponent from './components/FormComponent';
import QRComponent from './components/QRComponent';

function App() {
	const [data, setDatos] = useState(null);

	const handleFormSubmit = (data) => {
		setDatos(data);
	};

	return (
		<>
			<header className='mt-2'>
				<div className="header-container">
					<img src="public/icon.svg"/>
				</div>
			</header>
			<div className="row">
				<div className="col-sm-6">
					<QRComponent 
						data={data}
					></QRComponent>
					{ 
						data &&
						<div className="d-grid gap-2 d-md-block pt-3">
							<DownloadButtonComponent
								data={data} 
								type='image' 
								title='Download PNG'
							></DownloadButtonComponent>
							<DownloadButtonComponent 
								data={data} 
								type='html' 
								title='Download HTML'
							></DownloadButtonComponent>
						</div>
					}
				</div>
				<div className="col-sm-6">
					<div className="card">
						<div className="card-body">
							<FormComponent onFormSubmit={handleFormSubmit}></FormComponent>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
