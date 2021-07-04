export const normalizeTitle = (title, maxLength = 22) => {

	if (title.length > maxLength) {
		return title.slice(0, 20).trimRight() + '...'
	}

	return title
}