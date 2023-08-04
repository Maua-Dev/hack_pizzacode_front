import { useState } from "react";
import { createContext } from "react";

export const OrderContext = createContext();

export function OrderProvider({children}){
    const [order, setOrder] =useState(false)

    const[pizza, setPizza] = useState({
        name: '',
    });
    const[customMolho, setCustomMolho] = useState({
        sauce: '',
    })
    
    const[customQueijo, setCustomQueijo] = useState({
        cheese: ' ',
    })

    const[customRecheio, setCustomRecheio] = useState({
        filling:' ',
    })
    function handleOrder(name){
        setOrder(true)
        setPizza({name: name})
    };

    function handleCustomMolho(sauce){
        setOrder(true)
        setCustomMolho({sauce: sauce})
    }
    function handleCustomQueijo(cheese){
        setOrder(true)
        setCustomQueijo({cheese: cheese})
    }
    function handleCustomRecheio(filling){
        setOrder(true)
        setCustomRecheio({filling: filling})
    }
    return(
        <OrderContext.Provider value={{handleOrder,handleCustomMolho,handleCustomQueijo,handleCustomRecheio, order, pizza, customMolho,customQueijo,customRecheio}}>
            {children}
        </OrderContext.Provider>
    )
}