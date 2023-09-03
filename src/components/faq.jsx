import { Text } from "../element/text"
import faqImg from "../assets/Question Mark cr-fr.svg";
import { RevealAnimation } from "./reveal";
import { useSelector } from "react-redux";
import Spinner from "./spinners/spinners";

export const FaqSection =()=>{
    const { faq,getFagSt} = useSelector(state=>state.product);
    if(getFagSt ==="pending"){
        return <Spinner/>
    }
    return(
        <div className="d-flex flex-column justify-content-center px-10 py-5">
            <RevealAnimation>
                <Text
                    value="Frequently asked questions"
                    style="fs-2 fw-bold mb-2"
                />
            </RevealAnimation>
            <RevealAnimation>
                <Text
                    value="Get the best services at the lowest price"
                    style="fs-6 c-grey mb-3 fw-light"
                />
            </RevealAnimation>
            <div className="row">
                {
                    faq?.map((questions,index)=>{
                        const{
                            answer,
                            question
                        }=questions;
                        return(
                            <div 
                                className="col-md-4"
                                key={index}
                            >
                                <div className="p-2 d-flex flex-row wrap align-items-start justify-content-start">
                                    <div className="me-3">
                                        <RevealAnimation>
                                            <img 
                                                src={faqImg}
                                                alt="object not found"
                                            />
                                        </RevealAnimation>
                                    </div>
                                    <div className="d-flex flex-column wt-83">
                                        <RevealAnimation>
                                            <Text
                                                style="fs-6 fw-bold text-start ln-20 mb-2"
                                                value={question}
                                            />
                                        </RevealAnimation>
                                        <RevealAnimation>
                                            <Text
                                                style="fs-6 text-break justify ln-20 fgw-light "
                                                value={answer}
                                            />
                                        </RevealAnimation>
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