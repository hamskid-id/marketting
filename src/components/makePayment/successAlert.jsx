import { Text } from "../../element/text"
import successIcon from "../../assets/Success Icon.svg"
import downolad from "../../assets/import.svg"
export const SuccessAlert =({hidemodal})=>{
    return(
        <div className="d-flex flex-column">
            <div>
                <img 
                    src={successIcon}
                    alt="object not found"
                />
            </div>
            <Text
                style="h8 c-grey my-3"
                value="Payment SuccessFull"
            />
            <Text
                style="h8 fw-bold mb-3"
                value="$450"
            />
             <Text
                style="h7 c-grey mb-3"
                value="The file will be sent to your email address within 5 hours"
            />
            <div>
                <hr className="c-grey border mb-3"/>
                {
                    [
                        {
                            text:"Ref Number",
                            value:"000085752257"
                        },{
                            text:"Payment Time",
                            value:"25-02-2023, 13:22:16"
                        },{
                            text:"Payment Method",
                            value:"Card"
                        },{
                            text:"Sender Name",
                            value:"Antonio Roberto"
                        },{
                            text:"Amount",
                            value:"$450"
                        },
                    ].map((option,index)=>{
                        const{
                            text,
                            value
                        }=option
                        return(
                            <div 
                                key={index}
                                className="d-flex align-items-start justify-content-between mb-3"
                            >
                                <Text
                                    style="h7 c-grey "
                                    value={text}
                                />
                                <Text
                                    style="h7 "
                                    value={value}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div
                className="d-flex align-items-center mx-4 justify-content-between"
            >
                <Text
                    style="h7 btn border"
                    value="Close "
                    clickFunc={()=>hidemodal.current.click()}
                />
                <div className="d-flex align-items-center">
                    <span><img src={downolad} alt="object not found" className="me-1"/></span>
                    <span><Text style="h7" value="Get Receipt"/></span>
                </div>
            </div>

        </div>
    )
}