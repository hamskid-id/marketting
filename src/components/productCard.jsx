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
                <div className="border rounded m-3">
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
                                style="fw-bold h8 text-start mb-2 h7"
                            />
                        </RevealAnimation>
                        <RevealAnimation>
                            <Text
                                value={company}
                                style="h-0-5 c-dark-grey text-start  mb-2 fgw-light"
                            />
                        </RevealAnimation>
                        <RevealAnimation>
                            <div className="d-flex align-items-center h7">
                                <span className="me-2 fw-bold h7 text-danger text-decoration-line-through">
                                    ${price1}
                                </span>
                                <span  className="me-2 h7 fw-bold">
                                    ${price2}
                                </span>
                            </div>
                        </RevealAnimation>
                        <RevealAnimation>
                            <div className="d-flex wrap align-items-center justify-content-between mt-3">
                                <Text
                                    style="h7 c-dark-grey fgw-light"
                                    value={`${sales} sales`}
                                />
                                <div className="d-flex align-items-center justify-content-end">
                                    <span className="border-dark-grey px-1 rounded me-2 cart btn">
                                        <AiOutlineShoppingCart
                                            size="1.1rem"
                                            className="c-dark-grey"
                                        />
                                    </span>
                                    <span className="border-cyan c-light-purple px-2  py-1 h7 rounded btn">
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