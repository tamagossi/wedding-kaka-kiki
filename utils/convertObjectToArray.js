const convertObjectToArray = (object) => {
	let array = [];

	for (const [key, value] of Object.entries(object)) {
		array.push({
			id: key,
			...value,
		});
	}

	return array;
};

export default convertObjectToArray;
