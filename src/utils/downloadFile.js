export function downloadFile(response, name) {
	const url = window.URL.createObjectURL(new Blob([response]));
	const link = document.createElement('a');
	link.href = url;
	link.setAttribute(
		'download',
		name
	);
	document.body.appendChild(link);
	link.click();
	link.parentNode.removeChild(link);
}