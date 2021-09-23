const formatCurrency = ({ format, locales = 'id-ID', value }) => {
	if (!value) return;

	const number = typeof value === 'string' ? parseInt(value, 10) : value;
	const currencyFormat = format || {
		style: 'currency',
		currency: 'IDR',
		minimumFractionDigits: 0,
	};

	return new Intl.NumberFormat(locales || this.defaultLocales, currencyFormat).format(number);
};

export default formatCurrency;
