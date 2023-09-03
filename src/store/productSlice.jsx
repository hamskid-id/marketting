import { createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import  axios  from 'axios';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { apiBaseUrl } from "./apiBaseUrl";
import { Text } from '../element/text';
export const GetProducts = createAsyncThunk(
    'products/GetProducts',
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/viewprod`);
            return response?.data;
        } catch(err){
            return err.response?.data
            }
        }
)

export const MakePayment = createAsyncThunk(
    'products/MakePayment',
    async ({
            number,
            exp_month,
            exp_year,
            cvc,
            amount,
            description,
            email
        }) =>{
        try{
            const response = await axios.post(`${apiBaseUrl}/createPayment`,{
                    number,
                    exp_month,
                    exp_year,
                    cvc,
                    amount,
                    description,
                    email,
            });
            return response?.data;
        }catch(err){
            return err.response?.data
        }
    }
)

export const GetFaq = createAsyncThunk(
    'products/GetFaq',
    async () =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/viewfaq`);
            return response?.data;
        } catch(err){
            return err.response?.data
            }
        }
)

export const GetReview = createAsyncThunk(
    'products/GetReview',
    async ({id}) =>{
        try{
            const response = await axios.get(`${apiBaseUrl}/viewreview/${id}`);
            return response?.data;
        } catch(err){
            return err.response?.data
            }
        }
)

const product_Slice = createSlice({
    name:"product",
    initialState: {
        products:[],
        getProdSt:'',
        paymentResp:{},
        paySt:'',
        faq:[],
        getFagSt:'',
        review:[],
        getReviewSt:''
    },
    reducers:{},

    extraReducers:(builder)=>{
        builder.addCase(GetProducts.pending,(state)=>{
            return {
                ...state,
                getProdSt:'pending'
            }

        });
        builder.addCase(GetProducts.fulfilled,(state, action)=>{
            if(action.payload){
                const{
                    message,
                    statusCode
                }=action.payload;
                if(statusCode === 200){
                    console.log(action.payload);
                    return{
                        ...state,
                        getProdSt:"success",
                        products:message
                    }
                }else {
                toast.error(message)
                return{
                    ...state,
                    getProdSt:"failed"
                }
                }
            }
        })
        builder.addCase(GetProducts.rejected,(state, action)=>{
            toast.error(action?.payload?.message)
            return{
                ...state,
                getProdSt:'rejected'
            }
        })

        builder.addCase(GetFaq.pending,(state)=>{
            return {
                ...state,
                getFagSt:'pending'
            }

        });
        builder.addCase(GetFaq.fulfilled,(state, action)=>{
            if(action.payload){
                const{
                    message,
                    statusCode
                }=action.payload;
                if(statusCode === 200){
                    console.log(action.payload);
                    return{
                        ...state,
                        getFagSt:"success",
                        faq:message
                    }
                }else{
                toast.error(message)
                return{
                    ...state,
                    getFagSt:"failed"
                }
            }
            }
        })
        builder.addCase(GetFaq.rejected,(state, action)=>{
            toast.error(action?.payload?.message)
            return{
                ...state,
                getFagSt:'rejected'
            }
        })

        builder.addCase(GetReview.pending,(state)=>{
            return {
                ...state,
                getReviewSt:'pending'
            }

        });
        builder.addCase(GetReview.fulfilled,(state, action)=>{
            if(action.payload){
                const{
                    message,
                    statusCode
                }=action.payload;
                if(statusCode === 200){
                    return{
                        ...state,
                        getReviewSt:"success",
                        review:message
                    }
                }else {
                toast.error(action?.payload?.message)
                return{
                    ...state,
                    getReviewSt:"failed"
                }
            }
            }
        })
        builder.addCase(GetReview.rejected,(state, action)=>{
            toast.error(action?.payload?.message)
            return{
                ...state,
                getReviewSt:'rejected'
            }
        })

        builder.addCase(MakePayment.pending,(state)=>{
            Swal.fire({
                text:'Please wait...while we process your request',
                icon:'info',
                allowOutsideClick: false
            })
            return {
                ...state,
                paySt:'pending'
            }

        });
        builder.addCase(MakePayment.fulfilled,(state, action)=>{
            if(action.payload){
                const{
                    error,
                    status,
                    message,
                    data
                }=action.payload;
                console.log(data);
                if(status == "succeeded"){
                    toast(message);
                    Swal.fire({
                        text:message,
                        allowOutsideClick: false,
                        icon:'success',
                        html:`
                        <p>${message}</p>
                        <h6 class="h7 c-grey mb-3">
                            The file will be sent to your email address within 5 hours
                        </h6>
                        <div>
                            <hr class="c-grey border mb-3"/>
                            <div
                                class="d-flex align-items-start justify-content-between mb-3"
                            >
                                <h6 class="h7 c-grey mb-3">
                                    Ref Number
                                </h6>
                                <h6 class="h7 c-grey mb-3">
                                    ${data?.id}
                                </h6>
                            </div>
                            <div
                                class="d-flex align-items-start justify-content-between mb-3"
                            >
                                <h6 class="h7 c-grey mb-3">
                                    Payment Time
                                </h6>
                                <h6 class="h7 c-grey mb-3">
                                    ${new Date(data?.created)}
                                </h6>
                            </div>
                            <div
                                class="d-flex align-items-start justify-content-between mb-3"
                            >
                                <h6 class="h7 c-grey mb-3">
                                    Payment Method
                                </h6>
                                <h6 class="h7 c-grey mb-3">
                                    ${data?.type}
                                </h6>
                            </div>
                            <div
                                class="d-flex align-items-start justify-content-between mb-3"
                            >
                                <h6 class="h7 c-grey mb-3">
                                    Sender Name
                                </h6>
                                <h6 class="h7 c-grey mb-3">
                                    Antonio Roberto
                                </h6>
                            </div>
                            <div
                                class="d-flex align-items-start justify-content-between mb-3"
                            >
                                <h6 class="h7 c-grey mb-3">
                                    Amount
                                </h6>
                                <h6 class="h7 c-grey mb-3">
                                   $400
                                </h6>
                            </div>
                        </div>`,
                        showCloseButton: true,
                    })
                return{
                    ...state,
                    paySt:"success",
                    paymentResp:action.payload,
                }
            }else {
                if(error || message){
                    toast.error(error || message);
                    Swal.fire({
                        text:error || message,
                        icon:'error',
                        allowOutsideClick: false,
                        showCloseButton: true,
                    })
                }
                return{
                    ...state,
                    paySt:"failed"
                }
            }
            }
        })
        builder.addCase(MakePayment.rejected,(state, action)=>{
            toast.error(action.payload.message)
            Swal.fire({
                text:action.payload.message,
                icon:'error',
                showCloseButton: true,
                    })
            return{
                ...state,
                paySt:'rejected'
            }
        })


    }
})

export const product_SliceActions = product_Slice.actions;
export default product_Slice;