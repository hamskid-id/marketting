import { Link, useNavigate } from "react-router-dom";
import { Text } from "../element/text"
import vector from "../assets/Vector (6).svg";
import face from "../assets/logo-facebook.svg";
import insta from "../assets/logo-instagram.svg";
import github from "../assets/logo-github.svg";
import tweet from "../assets/logo-twitter.svg";
import copywright from "../assets/© 2023 5Starcompany. All rights reserved.svg"
import { RevealAnimation } from "./reveal";

export const Footer =()=>{
    const navigate = useNavigate()
    return(
        <div className="px-10 bg-greyScale py-5">
        <div className="d-flex justify-content-between wrap align-items-start">
            <div className="d-flex flex-column justify-content-start footer-world-text">
                <RevealAnimation>
                    <div className="w-fit-content">
                        <img 
                            src={vector}
                            alt="object not found"
                            className="mb-3 brand"
                        />
                    </div>
                </RevealAnimation>
                <RevealAnimation>
                    <Text
                        style="ln-20 h7 mb-3 text-start c-grey"
                        value="Making the world a better place through constructing elegant hierarchies"
                    />
                </RevealAnimation>
                <RevealAnimation>
                    <div className="d-flex mb-4">
                        {
                            [
                                {
                                    img:face,
                                    link:"/"
                                },{
                                    img:insta,
                                    link:"/"
                                },{
                                    img:tweet,
                                    link:"/"
                                },{
                                    img:github,
                                    link:"/"
                                }
                            ].map((social,index)=>{
                                const{
                                    img,link
                                }=social;
                                return(
                                    <div key={index}>
                                        <img src={img} alt="object not found" onClick={()=>navigate(link)} className="cursor me-4"/>
                                    </div>
                                )
                        })
                        }
                    </div>
                </RevealAnimation>
            </div>
                <div className="d-flex wrap w-80 justify-content-center">
                    {
                        [
                            {
                                title:"Solutions",
                                links:[
                                    {
                                        name:"Marketing",
                                        route:"/"
                                    },{
                                        name:"Analytics",
                                        route:""
                                    },{
                                        name:"Commerce",
                                        route:"/"
                                    },{
                                        name:"Insights",
                                        route:"/"
                                    },
                                ]
                            },
                            {
                                title:"Support",
                                links:[
                                    {
                                        name:"Pricing",
                                        route:"/"
                                    },{
                                        name:"Documentation",
                                        route:""
                                    },{
                                        name:"Guides",
                                        route:"/"
                                    },{
                                        name:"API Status",
                                        route:"/"
                                    },
                                ]
                            },
                            {
                                title:"Company",
                                links:[
                                    {
                                        name:"About",
                                        route:"/"
                                    },{
                                        name:"Blog",
                                        route:"/"
                                    },{
                                        name:"Jobs",
                                        route:"/"
                                    },{
                                        name:"Press",
                                        route:"/"
                                    },{
                                        name:"Partners",
                                        route:"/"
                                    }
                                ]
                            },
                            {
                                title:"Legal",
                                links:[
                                    {
                                        name:"Claim",
                                        route:"/"
                                    },{
                                        name:"Privacy",
                                        route:""
                                    },{
                                        name:"Terms",
                                        route:"/"
                                    }
                                ]
                            },
                        ].map((footLink,index)=>{
                            const{
                                title,
                                links
                            }=footLink;
                            return(
                                <div 
                                    key={index}
                                    className="d-flex flex-column w-20"
                                >
                                    <RevealAnimation>
                                        <Text
                                            style="c-grey h7 mb-3 text-start"
                                            value={title}
                                        />
                                    </RevealAnimation>
                                    {
                                        links.map((routes,index)=>{
                                            const{
                                                name,
                                                route
                                            }=routes
                                            return(
                                                <Link
                                                        to={route}
                                                        key={index}
                                                        className="text-white h-0-5 mb-3 text-start"
                                                ><RevealAnimation>
                                                        {name}
                                                    </RevealAnimation>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
        </div>
        <RevealAnimation>
            <hr className="line"/>
        </RevealAnimation>
        <div className="m-auto mt-5">
            <RevealAnimation>
                <img src={copywright} alt="object not found" className="copywrite"/>
            </RevealAnimation>
        </div>
        </div>
    )
}