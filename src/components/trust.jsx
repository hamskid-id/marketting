import { Text } from "../element/text"
import { RevealAnimation } from "./reveal";

export const TrustedSec =()=>{
    return(
        <div className="">
            <div className="trust-header bg-light-grey">
                <RevealAnimation>
                    <Text
                        value="Trusted by developers from 5starcompany"
                        style="fs-3 text-center fw-bold mb-3"
                    />
                </RevealAnimation>
                <RevealAnimation>
                    <Text
                        value="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
                        style="fs-6 fw-light text-center c-grey mb-5"
                    />
                </RevealAnimation>
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
                                <RevealAnimation 
                                key={index}
                                >
                                    <div
                                        className={`trust-text`}
                                    >
                                        <RevealAnimation>
                                            <Text 
                                                style="fw-bolder fs-2 text-center c-purple mb-2"
                                                value={amount}
                                            />
                                        </RevealAnimation>
                                        <RevealAnimation>
                                            <Text 
                                                style=" text-center c-grey trust-bottom-text fs-6 fw-light"
                                                value={text}
                                            />
                                        </RevealAnimation>
                                    </div>
                                </RevealAnimation>
                                 
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}