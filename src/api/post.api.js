export function postApi(url, data) {
	return fetch(url, {
		method: 'POST',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			...data
		})
	})
		.catch(err => console.log(err));
}