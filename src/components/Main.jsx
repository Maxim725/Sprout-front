import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Catalog } from './Catalog/Catalog'
import { Homepage } from './Homepage/Homepage'
import { Checkout } from './Checkout/Checkout'
import { NotFound } from './NotFound'
import { Product } from './Product/Product'

export const Main = () => {
	return (
		<main className="main">
			<Switch >
				{/* exact - только строгое совпадение /home/2 не подойдёт, только /home */}
				<Route exact path="/" component={Homepage} />
				<Route exact path="/product/:id" component={Product} />
				<Route exact path="/catalog/:id" component={Catalog} />
				<Route exact path="/checkout" component={Checkout} />
				<Route component={NotFound} path={"/not-found"} />
				<Redirect to={'/not-found'} />
			</Switch>
		</main>
	)
}