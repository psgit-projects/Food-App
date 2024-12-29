import axios from "axios";
import { createContext,  useEffect,  useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
// const [food_list, setFoodList] = useState([])
    const [cartItem, setCartItem] = useState({});
    const url = 'http://localhost:4000'; // Fixed localhost typo
    const [token,setToken] = useState("")

    // Function to add an item to the cart
    const addToCart = (itemid) => {
        setCartItem((prev) => ({
            ...prev,
            [itemid]: (prev[itemid] || 0) + 1,
        }));
    };

    // Function to remove an item from the cart
    const remove = (itemid) => {
        setCartItem((prev) => {
            const newQuantity = (prev[itemid] || 0) - 1;
            return {
                ...prev,
                [itemid]: Math.max(newQuantity, 0), // Prevent quantity from going negative
            };
        });
    };

    // Calculate total cart amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                const itemInfo = food_list.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItem[item];
                }
            }
        }
        return totalAmount;
    };
//  const fetchFoodList = async () =>{
//     const response = await axios.get(url+"/api/food/list")
//     setFoodList(response.data.data)
//  }


useEffect(()=>{
async function loadData() {
    // await fetchFoodList();
    if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
    }
}
loadData();
    },[])

    // Context value
    const contextValue = {
        food_list,
        cartItem,
        setCartItem,
        addToCart,
        remove,
        getTotalCartAmount,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children || null} {/* Ensure children fallback */}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
