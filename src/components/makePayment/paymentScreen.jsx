import { useRef, useState } from "react"
import { Text } from "../../element/text"
import { FormField } from "./formField"
import { AmountPaying } from "./payingInfo"
import { useParams } from "react-router-dom"
import Spinner from "../spinners/spinners"

export const PaymentScreen =()=>{
    const hidemodal = useRef(null);
    const{id} = useParams()
     const[formInput, setFormInput] = useState({
        email:'',
        cardName:'',
        cardNumber:'',
        date:'',
        cvc:'',
        discountCode:''
    })
    const {products,getProdSt} =useSelector(state=>state.product);
    const productToPay = products?.find(prod=>prod.id == id);
    
    if(getProdSt ==="pending"){
        return <Spinner/>
    }
    return(
        <>
        <div className="px-10 pb-5 pt-3">
            <div className="d-flex wrap">
                <div className="w-50 mb-2">
                    <Text
                        style="fs-6 fw-bold text-start mb-4"
                        value="Lets Make Payment"
                    />
                    <Text
                        style="h7 fw-bold c-grey text-start mb-3 justify"
                        value="To start your subscription, input your card details to make payment. 
                        You will be redirected to your banks authorization page . "
                    />
                    <FormField formInput={formInput} setFormInput={setFormInput} productToPay ={productToPay} hidemodal={hidemodal}/>
                </div>
                <div className="w-25 m-auto">
                    <AmountPaying formInput={formInput} productToPay={productToPay}/>
                </div>
            </div>
        </div>
        </>
    )
}