import { AiOutlineShoppingCart } from "react-icons/ai"
import { Text } from "../element/text";
import {useNavigate} from "react-router-dom";
import { RevealAnimation } from "./reveal";

export const ProductCard =({img,title,company,price1,price2,sales,id})=>{
    const navigate = useNavigate();
    return(
        <div className="col-md-4 col-lg-3 mb-2 col-sm-6"
        >
            <RevealAnimation>
                <div className="border rounded m-3 bg-white">
                    <RevealAnimation>
                        <img 
                            src={img} 
                            className="card-img-top cursor" 
                            alt="object not found"
                            onClick={()=>navigate(`/market/${id}`)}
                        />
                    </RevealAnimation>
                    <div className="card-body bg-white rounded">
                        <RevealAnimation>
                            <Text
                                value={title}
                                style="fw-bold fs-5 text-start mb-2 h7"
                            />
                        </RevealAnimation>
                        <RevealAnimation>
                            <Text
                                value={company}
                                style="fs-6 c-dark-grey text-start  mb-2 fw-light"
                            />
                        </RevealAnimation>
                        <RevealAnimation>
                            <div className="d-flex align-items-center h7">
                                <span className="me-2 fw-bold fs-6 text-danger text-decoration-line-through">
                                    ${price1}
                                </span>
                                <span  className="me-2 fs-6 fw-bold">
                                    ${price2}
                                </span>
                            </div>
                        </RevealAnimation>
                        <RevealAnimation>
                            <div className="d-flex wrap align-items-center justify-content-between mt-3">
                                <Text
                                    style="fs-6 c-dark-grey fw-light mb-2"
                                    value={`${sales} sales`}
                                />
                                <div className="d-flex align-items-center justify-content-end">
                                    <span className="border-dark-grey px-1 rounded me-2 cart btn">
                                        <AiOutlineShoppingCart
                                            size="1.1rem"
                                            className="c-dark-grey"
                                        />
                                    </span>
                                    <span className="border-cyan c-light-purple px-2  py-1 fs-6 rounded btn">
                                        Live Preview
                                    </span>
                                </div>
                            </div>
                        </RevealAnimation>
                        
                    </div>
                </div>
            </RevealAnimation>
        </div>
    )
}