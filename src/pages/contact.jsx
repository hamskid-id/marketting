import { Layout } from "../components/Layout"
import { Contact } from "../components/contact/contactSEction"
import { IntroSection } from "../components/introsection"
import { Nav } from "../components/nav"
import imageBg from "../assets/image (1).svg";

export const ContactPage=()=>{
    return(
        <Layout>
        <div 
            className="ps-10"
        >
            <div 
                className="imageBg pb-5 pe-10"
                style={{backgroundImage: `url("${imageBg}")`}}
            >
                <Nav
                    routeTitle="Contacts"
                />
                <IntroSection/>
            </div>
        </div>
        <Contact/>
        </Layout>
    )
}