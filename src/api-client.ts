import axios  from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api', 
    params:{
     
        key:'714c7bacabe24a5ca71d1c803f4c74ce'
    }
}) 