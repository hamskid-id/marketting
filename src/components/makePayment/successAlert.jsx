// import { Text } from "../../element/text"
// import successIcon from "../../assets/Success Icon.svg"
// import downolad from "../../assets/import.svg"
// import { useSelector } from "react-redux";
// import { AiOutlineCloseCircle } from "react-icons/ai";

// export const PendingAlert =()=>{
//     return(
//         <div className="d-flex flex-column align-items-center justify-content-center">
//             <div class="d-flex justify-content-center mb-2">
//                 <div class="spinner-border" role="status" style={{"width": "3rem", "height": "3rem" }}>
//                     <span class="sr-only"></span>
//                 </div>
//             </div>
//             <Text
//                 value="Please wait...while we process your request"
//                 style="fs-6 text-center"
//             />
//         </div>
//     )
// }

// export const FailureAlert =()=>{
//     return(
//         <div className="d-flex flex-column align-items-center justify-content-center">
//             <div className="mb-3">
//                 <AiOutlineCloseCircle
//                     size="1.5rem"
//                     color="red"
//                 />
//             </div>
//             <Text   
//                 style="text-center"
//                 value={paymentResp?.error}
//             />
//         </div>

//     )
// }

// export const SuccessAlert =({hidemodal})=>{
//     const{
//         paymentResp,
//         paySt
//     }=useSelector((state)=>state.product);
    // const{
    //     client_ip,
    //     created,
    //     // id,
    //     livemode,
    //     // object,
    //     type,
    //     used
    // }=paymentResp?.data;
// console.log(paymentResp?.data?.created)
//     const{
// address_country,
// address_line1,
// address_line1_check,
// address_line2,
// address_state,
// address_zip,
// address_zip_check,
// brand,
// country,
// cvc_check,
// dynamic_last4,
// exp_month,
// exp_year,
// fingerprint,
// funding,
// id,
// last4,
// metadata,
// name,
// object,
// tokenization_method,
// wallet
//     }=paymentResp?.data?.card
//     return(
//         <div className="d-flex flex-column">
//             <div>
//                 <img 
//                     src={successIcon}
//                     alt="object not found"
//                 />
//             </div>
//             <Text
//                 style="h8 c-grey my-3"
//                 value={paymentResp?.message}
//             />
//             <Text
//                 style="h8 fw-bold mb-3"
//                 value="$450"
//             />
//             <Text
//                 style="h7 c-grey mb-3"
//                 value="The file will be sent to your email address within 5 hours"
//             />
//             <div>
//                 <hr className="c-grey border mb-3"/>
//                 {
//                     [
//                         {
//                             text:"Ref Number",
//                             value:paymentResp?.data?.id
//                         },{
//                             text:"Payment Time",
//                             value:"new Date(paymentResp?.data?.created)"
//                         },{
//                             text:"Payment Method",
//                             value:paymentResp?.data?.type
//                         },{
//                             text:"Sender Name",
//                             value:"Antonio Roberto"
//                         },{
//                             text:"Amount",
//                             value:"$450"
//                         },
//                     ].map((option,index)=>{
//                         const{
//                             text,
//                             value
//                         }=option
//                         return(
//                             <div 
//                                 key={index}
//                                 className="d-flex align-items-start justify-content-between mb-3"
//                             >
//                                 <Text
//                                     style="h7 c-grey "
//                                     value={text}
//                                 />
//                                 <Text
//                                     style="h7 "
//                                     value={value}
//                                 />
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//             <div
//                 className="d-flex align-items-center mx-4 justify-content-between"
//             >
//                 <Text
//                     style="h7 btn border"
//                     value="Close "
//                     clickFunc={()=>hidemodal.current.click()}
//                 />
//                 <div className="d-flex align-items-center">
//                     <span><img src={downolad} alt="object not found" className="me-1"/></span>
//                     <span><Text style="h7" value="Get Receipt"/></span>
//                 </div>
//             </div>

//         </div>
//     )
// }