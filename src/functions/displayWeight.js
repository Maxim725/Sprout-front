export const displayWeight = (weightInGrams) => {
	const inKG = weightInGrams / 1000
	return inKG.toFixed(2)
}