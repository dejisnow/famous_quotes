window.onload=()=>{
    
    
const url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': `${API_KEY}`,
		'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
	}
};

async function quote(url,options){
        
        try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}

             
   }
   
   quote(url,options)









}
