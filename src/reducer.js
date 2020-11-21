export const getBasketTotal = (basket) => 
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state , action){
    console.log(action)
    switch(action.type){
        case " SET_USER":
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            
            return{
                ...state , 
                basket: [...state.basket , action.item],
                
            }
         break
        case 'REMOVE FROM BASKET':
            // Logic for Removing items from basket
            let newBasket = [...state.basket]

            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            // item exists in basket
            if(index >= 0)
            {
                newBasket.splice(index , 1)
            }

            return {
                ...state,
                basket : newBasket
            }
         break
        
        default:
            return state
    } 
 
}

export default reducer