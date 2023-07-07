import { Text } from "../../element/text";
import { ProductFetures } from "./productFeatures"
import { ProductImg } from "./productImg"
import img1 from "../../assets/Rectangle 362 (1).svg";
import { useState } from "react";
import Responsive from "./relatedProductSlide";

export const ProductConatiner =()=>{
    const[contentSetter, setContentSetter] =useState({
        content:`Research and Planning: Start by researching the requirements and regulations related to recharge card printing in your country or region. Understand the market demand, competition, and potential profitability of the business.
        Legal and Licensing: Ensure that you comply with all legal requirements and obtain any necessary licenses or permits to operate a recharge card printing business.
        Supplier Partnerships: Establish partnerships with telecommunication service providers or wholesalers who can supply you with the necessary PINs (Personal Identification Numbers) or recharge card codes. These codes are printed on the recharge cards and are used by customers to top up their mobile devices.
        Website Development: Create a user-friendly and secure website where customers can order recharge cards. Include features such as product catalog, shopping cart, secure payment options, and order tracking.`,
        title:'Description'
    })
    return(
        <div className="p-x-5 my-3">
            <div className="row">
                <div className="col-md-6">
                    <ProductImg
                        mainImg={img1}
                        collectionImg={[img1,img1,img1,img1]}
                    />
                </div>
                <div className="col-md-6">
                    <ProductFetures/>
                </div>
            </div>
            <div className="m-auto my-4 d-flex justify-content-around wt-50 border-bottom mt-5 w-overflow-x-auto">
                {
                    [
                        {
                            title:"Description",
                            content:`Research and Planning: Start by researching the requirements and regulations related to recharge card printing in your country or region. Understand the market demand, competition, and potential profitability of the business.
                            Legal and Licensing: Ensure that you comply with all legal requirements and obtain any necessary licenses or permits to operate a recharge card printing business.
                            Supplier Partnerships: Establish partnerships with telecommunication service providers or wholesalers who can supply you with the necessary PINs (Personal Identification Numbers) or recharge card codes. These codes are printed on the recharge cards and are used by customers to top up their mobile devices.
                            Website Development: Create a user-friendly and secure website where customers can order recharge cards. Include features such as product catalog, shopping cart, secure payment options, and order tracking.`
                        
                        }, {
                            title:"Specification",
                            content:"Specification"
                        }, {
                            title:"Reviews",
                            content:"Reviews"
                        }
                    ].map((option,index)=>{
                        const{
                            title
                        }=option;
                        return(
                            <Text
                                style={`${contentSetter.title == title?" border-bottom-orange":""} f6 py-2 my-0`}
                                key={index}
                                value={title}
                                clickFunc={()=>setContentSetter(option)}
                            />
                        )
                    })
                }
            </div>
            <div className="justify wt-50 m-auto h-0-5 mb-5">
                {contentSetter.content}
            </div>
            <Responsive/>
        </div>
    )
}