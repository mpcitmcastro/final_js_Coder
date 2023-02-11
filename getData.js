const API = "./stock.json";


const getData = async () => {
    try {
        const response = await fetch(API);
        const data = await response.json()
    
        return data;
        
    } catch (error) {
        console.log( "errrrrrrrrrrrrrrrrrrrrrror", error)
        
    }
   

}

export default getData