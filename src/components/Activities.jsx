import { Text } from "../element/text";
import grid from "../assets/Grid Four 01.svg"
import stack from "../assets/Stacked Area Up.svg"
import forward from "../assets/Forward 2.svg"
import { AiOutlineArrowRight } from "react-icons/ai";

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
                                <img 
                                    src={icon}
                                    alt="object not found"
                                    className="mb-3 imgicon"
                                />
                                <Text
                                    value={title}
                                    style="fw-bold h7 mb-3 text-start"
                                />
                                <Text
                                    value={text}
                                    style="c-dark-grey h7 mb-3 text-break text-start ln-20 fgw-light"
                                />
                                <div className="d-flex align-items-center">
                                    <span className="c-purple h7 me-1 text-start fw-bold">
                                        Learn More
                                    </span>
                                    <AiOutlineArrowRight
                                        size="0.7rem"
                                        className="c-purple"
                                    />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}