import { Text } from "../element/text"

export const TrustedSec =()=>{
    return(
        <div className="">
            <div className="trust-header bg-light-grey">
                <Text
                    value="Trusted by developers from 5starcompnay"
                    style="fs-3 text-center fw-bold mb-3"
                />
                <Text
                    value="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
                    style="h7 text-center c-grey mb-5"
                />
            </div>
            <div className="bg-white relative amountContainer">
                <div className="trust-section justify-content-around bg-white w-65 rounded shadow trustAmout align-items-center absolute">
                    {
                        [
                            {
                                amount:"100%",
                                text:"User satisfaction"
                            }, {
                                amount:"24/7",
                                text:"Customer support"
                            }, {
                                amount:"250K",
                                text:"Users served"
                            }
                        ].map((sat,index)=>{
                            const{
                                amount,
                                text
                            }=sat;
                            return(
                                <div 
                                    key={index}
                                    className={`trust-text`}
                                >
                                    <Text 
                                        style="fw-bolder fs-4 text-center c-purple"
                                        value={amount}
                                    />
                                    <Text 
                                        style="fw-bold text-center c-grey trust-bottom-text"
                                        value={text}
                                    />
                                </div> 
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}