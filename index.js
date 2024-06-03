const findCommonPrefix = (array) => {
	if (array.length === 0) {
		return '';
	}

	let prefix = array[0];

	for (let i = 1; i < array.length; i++) {
		while (array[i].indexOf(prefix) !== 0) {
			prefix = prefix.substring(0, prefix.length - 1);

			if (prefix === '') {
				return '';
			}
		}
	}

	return prefix;
};
