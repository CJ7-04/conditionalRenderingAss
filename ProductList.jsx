import React,{useState,useEffect} from "react";
import axios from "axios";
const ProductList=()=>{
    const [products,setProducts]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get('https://api.example.com/products');
            setProducts(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
          }
        };
      
        fetchData();
      }, []);
   
}
export default ProductList;