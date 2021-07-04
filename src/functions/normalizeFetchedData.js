import { IMG } from "../API_LINKS"

export const normalizeFetchedData = (data) => {
	const storage = {}

	data.forEach(el => {
		storage[el.id] = el
		storage[el.id].img = IMG + storage[el.id].img
	})

	return storage
}