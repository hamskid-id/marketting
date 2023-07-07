import { Text } from "../element/text"
import faqImg from "../assets/Question Mark cr-fr.svg";

export const FaqSection =()=>{
    return(
        <div className="d-flex flex-column justify-content-center px-10 py-5">
            <Text
                value="Frequently asked questions"
                style="fs-4 fw-bold mb-2"
            />
            <Text
                value="Get the best services at the lowest price"
                style="h-0-5 c-grey mb-3"
            />
            <div className="row">
                {
                    [
                        {
                            heading:"How long do payouts take?",
                            content:"Once you’re set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly."
                        },{
                            heading:"How much do disputes cost?",
                            content:"Disputed payments (also known as chargebacks) incur a $15.00 fee. If the customer’s bank resolves the dispute in your favor, the fee is fully refunded."
                        },{
                            heading:"How much do disputes cost?",
                            content:"Disputed payments (also known as chargebacks) incur a $15.00 fee. If the customer’s bank resolves the dispute in your favor, the fee is fully refunded."
                        },{
                            heading:"How much do disputes cost?",
                            content:"Disputed payments (also known as chargebacks) incur a $15.00 fee. If the customer’s bank resolves the dispute in your favor, the fee is fully refunded."
                        },{
                            heading:"How long do payouts take?",
                            content:"Once you’re set up, payouts arrive in your bank account on a 2-day rolling basis. Or you can opt to receive payouts weekly or monthly."
                        },{
                            heading:"How much do disputes cost?",
                            content:"Disputed payments (also known as chargebacks) incur a $15.00 fee. If the customer’s bank resolves the dispute in your favor, the fee is fully refunded."
                        }
                    ].map((questions,index)=>{
                        const{
                            heading,
                            content
                        }=questions;
                        return(
                            <div 
                                className="col-md-4"
                                key={index}
                            >
                                <div className="p-2 d-flex flex-row wrap align-items-start justify-content-start">
                                    <div className="me-3">
                                        <img 
                                            src={faqImg}
                                            alt="object not found"
                                        />
                                    </div>
                                    <div className="d-flex flex-column wt-83">
                                        <Text
                                            style="h7 fw-bold text-start ln-20"
                                            value={heading}
                                        />
                                        <Text
                                            style="h-0-5 text-break justify ln-20 fgw-light ln-20"
                                            value={content}
                                        />
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}