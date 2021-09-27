const sortArrayByKey = ({ array, key, order }) => {
	console.log('kesini kan');
	let type = typeof array[0][key];
	const isAsc = order === 'ascend';

	if (!Array.isArray(array)) return;
	if (array.length === 0) return;

	if (type === 'string') {
		return array.sort((a, b) => {
			let fa = a[key].toLowerCase(),
				fb = b[key].toLowerCase();

			if (fa < fb) return isAsc ? -1 : 1;
			if (fa > fb) return isAsc ? 1 : -1;
			return 0;
		});
	}

	if (type === 'number') {
		return array.sort((a, b) => (isAsc ? a[key] - b[key] : b[key] - a[key]));
	}
};

export default sortArrayByKey;
