
export type itemType = {
    name: string;
    price: number;
    availability: boolean;
    skuNumber: string;
    description: string;
    variations: Array<{ variant: string }>;
    overview: string;
    dimensions: string[];
    prodReview: number;
  };
  

export const item : itemType = {
	name : 'Craig Console',
	price: 529,
	availability : true,
	skuNumber :  'ASH1250578',
	description : ' A gallery shelf fit for any design project, Craig console it’s perfect for living rooms and entryways, even for a dining room. It provides a great solution to expose your accessories and complete your decor without having to sacrifice style. Elegant and luxurious, its shiny structure it’s the extra kick your decor or design project needs to be completed. It’s a classic but timeless solution to all your problem',    variations : [
		{
			variant : 'green' 
		},
		{
			variant : 'red' 
		},
	],
	overview : 'A gallery shelf fit for any design project, Craig console it’s perfect for living rooms and entryways, even for a dining room. It provides a great solution to expose your accessories and complete your decor without having to sacrifice style. Elegant and luxurious, its shiny structure it’s the extra kick your decor or design project needs to be completed. It’s a classic but timeless solution to all your proble', 
	dimensions : ['200 inch x 400 inch' , '300 inch x 600 inch'],
	prodReview : 4.9, 
}