import { Rating } from "react-simple-star-rating";
import { Text } from "../../element/text"
import { Btn } from "../../element/btn";
import { useNavigate, useParams } from "react-router-dom";

export const ProductFetures=()=>{
    const{id} =useParams();
    const navigate = useNavigate();
    return(
        <div className="d-flex flex-column justify-content-start align-items-start px-3">
            {
                [
                    {
                        title:"Brand:",
                        value:"5star"
                    },{
                        title:"Availability",
                        value:"Only two in stock"
                    },
                ].map((feat,index)=>{
                    const{
                        title,
                        value
                    }=feat;
                    return(
                        <div 
                            key={index}
                            className="d-flex mb-2"
                        >
                            <Text
                                style="h7 me-2"
                                value={title}
                            />
                            <Text
                                style="h7 me-2"
                                value={value}
                            />
                        </div>
                    )
                })
            }
            <Text
                style="fs-5 text-start mb-2"
                value="RECHARGE CARD PRINTING SITE WITH AUTOMATED"
            />
            <Rating
                initialValue={4}
                readonly={true}
                size={17}
                fillColor = '#E73C17'
                className="me-2 mb-2"
            />
            <ul className="mb-2">
                {
                    ["Available to print","Available to fund","Contact page","Colour change","Edit profile"].map((option,index)=>{
                        return(
                            <li className="mb-2 text-start h-0-5" key={index}>{option}</li>
                        )
                    })
                }
            </ul>
            <div className="d-flex wrap py-3 border-y-grey align-items-center mb-2">
                {
                    ["106 cm (42)","121 cm (48)","139 cm (55)","164 cm (65)","196 cm (77)","210 cm (83)"].map((option,index)=>{
                       return(
                         <Text style={`${index ==0? "c-orange border-orange px-3 py-2":"c-grey"} mb-2 border-grey me-3 h-0-5 btn`} key={index} value={option}/>
                       )
                        })
                }
            </div>
            <Text
                style="h-0-5"
                value="USD(incl. of all taxes)"
            />
            <div className="mb-2">
                {
                    ["$600.72","$800.00"].map((option,index)=>{
                        return(
                            <span key={index} className={`${index ==0?"text-black me-2 h-0-5":"c-grey text-decoration-line-through fw-light"} h7`}>{option}</span>
                        )
                    })
                }
            </div>
            <div className="d-flex wrap">
                <span className="border-grey me-3 btn-group mb-2" role="group" aria-label="Basic outlined example">
                    <button type="button" className="btn btn-outline-secondary">-</button>
                    <button type="button" className="btn btn-outline-secondary">1</button>
                    <button type="button" className="btn btn-outline-secondary">+</button>
                </span>
                <Btn
                    style="bg-orange text-white btn px-4 py-2 h-0-5 btn-md me-3 mb-2"
                    value="Buy Now"
                    clickFunc={()=>navigate(`/payment/${id}`)}
                />
                <Btn
                    style="border-orange c-orange btn px-4 py-2 h-0-5 btn-md bg-white mb-2"
                    value="Preview"
                />
            </div>
        </div>
    )
}