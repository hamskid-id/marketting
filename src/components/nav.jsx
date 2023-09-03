import { Text } from "../element/text"
import brand from "../assets/onDark.svg";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

export const Nav=({
    routeTitle
})=>{
    const navigate = useNavigate();
    return(
        <nav className="navbar navbar-expand-lg navbar-light pt-3 pb-3 w-100">
        <div className="container-fluid">
            <Helmet>
                <meta charSet="utf-8" />
                <title>FreshBB - {routeTitle}</title>
            </Helmet>
            <div>
                <img 
                    src={brand}
                    alt="oject not found"
                />
            </div>
            <button 
                className="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbarItem justify-content-between text-start">
                {
                    [
                        {
                            name:"Home",
                            route:"/"
                        },{
                            name:"Marketplace",
                            route:"/market"
                        },{
                            name:"Features",
                            route:"/"
                        },{
                            name:"Testimony",
                            route:"/testimony"
                        },{
                            name:"Contacts",
                            route:"/contacts"
                        }
                    ].map((links,index)=>{
                        const{
                            name,
                            route
                        }=links
                        return(
                            <Link
                                key={index}
                                to={route}
                                className={`${routeTitle == name? "bg-purple text-white rounded py-2 px-3":"c-grey-black"} h6 fw-light w-fit-content text-start`}
                                >{name}
                            </Link>
                        )
                    })
                }
            </div>
            </div>
        </div>
        </nav>
    )
}