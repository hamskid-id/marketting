import { useRef, useState } from "react"
import { Text } from "../../element/text"
import { FormField } from "./formField"
import { AmountPaying } from "./payingInfo"
import { SuccessAlert } from "./successAlert"
import { AlertModal } from "../alertModal"

export const PaymentScreen =()=>{
    const hidemodal = useRef(null);
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
                    <FormField/>
                </div>
                <div className="w-25 m-auto">
                    <AmountPaying/>
                </div>
            </div>
        </div>
        <AlertModal body={<SuccessAlert hidemodal={hidemodal}/>} hidemodal={hidemodal}/>
        </>
    )
}