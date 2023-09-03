import { Btn } from "../../element/btn";
import { Text } from "../../element/text";
import mastercard from "../../assets/mastercard 1.svg"
import {useDispatch, useSelector} from "react-redux";
import { MakePayment} from "../../store/productSlice";

export const FormField=({formInput,setFormInput,productToPay,hidemodal})=>{
    const dispatch =useDispatch();
    const{
        paySt
    }= useSelector((state)=>state.product);
    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(MakePayment({
            number:formInput.cardNumber,
            exp_month:new Date(formInput.date).getMonth(),
            exp_year:new Date(formInput.date).getFullYear(),
            cvc:formInput.cvc,
            amount:productToPay?.prod_amount,
            description:productToPay?.prod_description,
            email:formInput.email,
        }))
    }
    return(
        <form onSubmit={handleSubmit}>
            <div>
                {
                    [
                        {
                            label:"Email Address",
                            type:"email"
                        }

                    ].map((option,index)=>{
                        const{
                            label,
                            type
                        }=option;
                        return(
                            <div 
                                key={index}
                                className="d-flex flex-column align-items-start mb-2"
                            >
                                <Text
                                    style="h7 c-grey mb-1"
                                    value={label}
                                />
                                <input 
                                    type={type}
                                    className="w-100 rounded p-2 btn bg-dark-grey text-start h7" 
                                    required
                                    onChange={(e)=>{
                                        setFormInput((prev)=>{
                                            return{
                                                ...prev,
                                                email:e.target.value
                                                }
                                            })
                                    }}
                                />
                            </div>
                        )
                    })
                }
                 <div
                    className="d-flex flex-column align-items-start mb-2"
                >
                    <Text
                        style="h7 c-grey mb-1"
                        value="card Number"
                    />
                    <div className="d-flex justify-content-between rounded btn bg-dark-grey text-start h7 align-items-center w-100">
                        <span><img src={mastercard} className="w-50" alt="object not found"/></span>
                        <span className="w-100"><input 
                            type="number" 
                            className="w-100 btn p-0 rounded bg-dark-grey text-start h7" 
                            required
                            onChange ={(e)=> {
                                setFormInput((prev)=>{
                                    return{
                                        ...prev,
                                        cardNumber:e.target.value
                                    }
                                })
                            }}
                            /></span>
                    </div>
                </div>
                <div className="d-flex justify-content-between mb-2">
                    {
                        [
                            {
                                label:"Date",
                                type:"date"
                            },{
                                label:"CVC",
                                type:"text"
                            },
                        ].map((option,index)=>{
                            const{
                                label,
                                type
                            }=option;
                            return(
                                <div 
                                    key={index}
                                    className="d-flex flex-column align-items-start w-45"
                                >
                                    <Text
                                        style="h7 c-grey mb-1"
                                        value={label}
                                    />
                                    <input 
                                        type={type} 
                                        className="w-100 rounded p-2 btn bg-dark-grey text-start h7" 
                                        required
                                        onChange={(e)=>{
                                        setFormInput((prev)=>{
                                            if(label ==="Date"){
                                                return{
                                                    ...prev,
                                                    date:e.target.value
                                                }
                                            }else{
                                                return{
                                                    ...prev,
                                                    cvc:e.target.value
                                                }
                                            }
                                        })
                                    }}
                                        />
                                </div>
                            )
                        })
                    }
                </div>
                <div
                    className="d-flex flex-column align-items-start w-100 mb-2"
                >
                    <Text
                        style="h7 c-grey mb-1"
                        value="Discount code"
                    />
                    <div className="d-flex justify-content-between rounded p-2 btn bg-dark-grey text-start h7 align-items-center w-100">
                        <span className="w-100">
                            <input 
                                type="number" 
                                className="w-100 rounded p-0 btn bg-dark-grey text-start h7" 
                                onChange ={(e)=> {
                                    setFormInput((prev)=>{
                                        return{
                                            ...prev,
                                            discountCode:e.target.value
                                        }
                                    })
                                }}
                                /></span>
                        <span>
                            <Text
                            style="h-0-5 c-purple"
                            value="Apply"
                        /></span>
                    </div>
                </div>
            </div>
            <div className="w-fit-content">
                <Btn
                    style="bg-purple h-0-5 btn-md p-2 text-white ms-auto px-4 w-fit-content"
                    value="pay Now"
                    loadingStatus ={paySt?true:false}
                    // databstoggle="modal" 
                    // databstarget="#alertStaticBackdrop"
                />  
            </div>
        </form>
    )
}