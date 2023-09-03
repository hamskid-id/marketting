import { Text } from "../element/text";
import grid from "../assets/Grid Four 01.svg"
import stack from "../assets/Stacked Area Up.svg"
import forward from "../assets/Forward 2.svg"
import { AiOutlineArrowRight } from "react-icons/ai";
import { RevealAnimation } from "./reveal";

export const Activities =()=>{
    return(
        <div className="row active w-100">
            {
                [
                    {
                        icon:grid,
                        text:"leverages globally distributed edge caches to accelerate content delivery lipsum",
                        learnLink:"/",
                        title:"Cloud Storage"
                    },{
                        icon:stack,
                        text:"leverages globally distributed edge caches to accelerate content delivery lipsum",
                        learnLink:"/",
                        title:"Image AI analysis"
                    },{
                        icon:forward,
                        text:"leverages globally distributed edge caches to accelerate content delivery lipsum",
                        learnLink:"/",
                        title:"Image processing"
                    },

                ].map((act,index)=>{
                    const{
                        icon,
                        text,
                        learnLink,
                        title
                    }=act;
                    return(
                        <div 
                            className="col-md-4 col-sm-6"
                            key={index}
                        >
                            <div className="d-flex flex-column bg-white rounded p-3 m-2">
                                <RevealAnimation>
                                    <div className="w-fit-content">
                                        <img 
                                            src={icon}
                                            alt="object not found"
                                            className="mb-3 imgicon"
                                        />
                                    </div>
                                </RevealAnimation>
                                <RevealAnimation>
                                    <Text
                                        value={title}
                                        style="fw-bold fs-5 mb-3 text-start"
                                    />
                                </RevealAnimation>
                                <RevealAnimation>
                                    <Text
                                        value={text}
                                        style="c-dark-grey fs-6 fw-light mb-3 text-break text-start ln-36"
                                    />
                                </RevealAnimation>
                                <RevealAnimation>
                                    <div className="d-flex align-items-center">
                                        <span className="c-purple fs-6 me-1 text-start fw-bold">
                                            Learn More
                                        </span>
                                        <AiOutlineArrowRight
                                            size="0.7rem"
                                            className="c-purple"
                                        />
                                    </div>
                                </RevealAnimation>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}