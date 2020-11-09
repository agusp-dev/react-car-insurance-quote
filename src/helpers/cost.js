const BASE_COST = 2000
const YEAR_PERCENT = 3
const BRAND_PERCENT = {
	European: 30,
	American: 15,
	Asian: 5
}
const PLAN_PERCENT = {
	basic: 20,
	full: 50
}

const getCostByBrand = brand => {
	//add percent by brand
	const percent = BRAND_PERCENT[brand]
	return percent * BASE_COST / 100
}

const getCostByYear = year => {
	//substract 3% by year
	const yearDiff = new Date().getFullYear() - year 
	let percent = YEAR_PERCENT * yearDiff
	return percent * BASE_COST / 100
}

const getCostByPlan = plan => {
	//add percent by plan
	const percent = PLAN_PERCENT[plan]
	return percent * BASE_COST / 100
}

export const getTotalCost = (brand, year, plan) => {
	let brandCost = getCostByBrand(brand)
	let yearCost = getCostByYear(year)
	let planCost = getCostByPlan(plan)
	return BASE_COST - yearCost + brandCost + planCost
}