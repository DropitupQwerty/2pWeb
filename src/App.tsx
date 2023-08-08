import React from 'react'
import { OrderDetail } from './OrderDetail'
import { ItemsMedia } from './ItemsMedia'

function App() {

	return (
		<div className='select-none w-full min-h-screen text text-dark-brown lg:p-[80px] lg:px-[130px] flex  justify-center items-center'>
			<div className="w-full flex flex-col-reverse lg:flex-row justify-center items-start h-full">
				<OrderDetail/>
				<ItemsMedia/>
			</div>
		</div>
	)
}


export default App
