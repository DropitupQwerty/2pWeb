import React from 'react'
import ChevronDown from './assets/icons/chevronDown.svg'
import InStockIcon from './assets/icons/inStock.svg'
import CartIcon from './assets/icons/cart.svg'
import { item, itemType } from './utility/item'


export const OrderDetail = () => {
	const [quantity , setQuantity] = React.useState(0)
	const [openOverview , setOpenOverView] = React.useState(false)
	const [openProdReview , setOpenProdReview] = React.useState(false)
	const [openDimension , setOpenDimension] = React.useState(false)
	const product : itemType = item

	const handleIncrement = () => {
		setQuantity(quantity + 1)
	}

	const handleDecrement = () => { 
		if(quantity !== 0 ){
			setQuantity(quantity -1)
		}
	}



	return (
		<div className="w-full lg:w-1/2 min-h-screen p-5 lg:p-10 flex items-center">
			<div>
				<div>
					<h1 className="uppercase text-3xl text-darkest-brown">{product.name}</h1>
				</div>
				<div className='flex items-center gap-2'>
					<h2 className='text-xl'>${product.price}</h2>
					<div className='flex items-center'>
						<img className='h-[14px]' src={InStockIcon} />
						<span className='text-sm'>In Stock</span>
					</div>
				</div>

				<div className='text-sm'>
					<span className="font-bold">sku number : </span>  {product.skuNumber}
				</div>
				<div className='mt-2'>
					<p className='text-sm text-justify indent-4'>{product.description}</p>
				</div>

				<div className='flex items-center gap-4 mt-2'>
					<span className="font-bold text-sm"> Variations : </span> 
					{product.variations.map((variation ,index)=> 
						<button key={index} className='h-[50px]  focus:outline-none focus:ring-[1px] focus:ring-[#545454] active:outline-blackactive:outline w-[50px] rounded-full border  overflow-hidden' style={{backgroundColor : variation.variant}}></button>
					)

					}
				</div>
				<div className='flex text-sm items-center my-4 gap-4'>
					<span className="font-bold"> Quantity : </span>
					<div className='border flex items-center'>
						<button onClick={handleDecrement} className='h-[20px] w-[20px] rounded-sm flex items-center justify-center  p-1 border bg-dark-brown text-white'>-</button>
						<span className='mx-2'>{quantity}</span>
						<button onClick={handleIncrement} className='h-[20px] w-[20px] flex items-center justify-center rounded-sm  p-1 border bg-dark-brown text-white'>+</button>
					</div>
				</div>
				<div className='lg:my-7 w-full xl:w-fit'>
					<div className='flex gap-2 md:my-4 left-0  fixed bottom-0 border-2 z-[999] md:border-none bg-white w-full  md:relative md:bg-transparent '>
						<button  className='border-dark-brown  text-sm md:text-md w-1/2 xl:min-w-[200px]  md:border rounded-[10px] xl:whitespace-nowrap items-center  p-2 justify-center text-dark-brown flex'><img className='h-[20px] md:h-[30px]' src={CartIcon}></img> ADD TO CART</button>
						<button className='bg-dark-brown text-sm md:text-md w-1/2 xl:min-w-[200px] border rounded-[10px] p-2 text-white'> ORDER NOW</button>
					</div>
					<button className='bg-dark-brown duration-300  text-sm md:text-md hover:border-dark-brown hover:bg-white hover:text-dark-brown mt-2 justify-center  border rounded-[10px] p-3 text-white w-full'> DEALER LOCATOR</button>
				</div> 
				<div className='mr-10 mt-5'>
					<div>
						<button  onClick={()=> setOpenOverView(!openOverview)} className='p-2 w-full border-b border-dark-brown  flex justify-between'>DETAILS OVERVIEW <span><img className={`${openOverview ?'rotate-180':'rotate-0'}`} src={ChevronDown}/></span></button>
						<div className={`ml-4 my-2 max-h-[100px] text-sm duration-300 transition-all overflow-y-auto ${openOverview ? 'translate-y-0 opacity-100' : 'h-0 -translate-y-5  opacity-0'}`}>
							<p className='indent-2'>{item.overview}</p>
						</div>
					</div>
					<div>
						<button  onClick={()=> setOpenDimension(!openDimension)} className='p-2 w-full border-b border-dark-brown  flex justify-between'>DIMENSIONS <img className={`${openOverview ?'rotate-180':'rotate-0'}`} src={ChevronDown}/></button>
						<div className={` ml-4 my-2 duration-300 transition-all overflow-y-auto ${openDimension ? 'translate-y-0 opacity-100' : 'h-0 -translate-y-5 opacity-0'}`}>
							<div className='flex my-4 flex-col gap-4 text-sm'>
								{item.dimensions.map((dimension , index)=>
									<div key={index}>{dimension}</div>
								)
								}
							</div>
						</div>
					</div>
					<div>
						<button  onClick={()=> setOpenProdReview(!openProdReview)} className='p-2 w-full border-b border-dark-brown  flex justify-between'>PRODUCT REVIEWS <img className={`${openOverview ?'rotate-180':'rotate-0'}`} src={ChevronDown}/></button>
						<div className={`my-4 ml-4 duration-300 transition-all overflow-y-auto ${openProdReview ? 'translate-y-0 opacity-100' : 'h-0 -translate-y-5 opacity-0'}`}>
							<p>{item.prodReview}&#11088;</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
