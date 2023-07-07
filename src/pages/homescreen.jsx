import { Layout } from "../components/Layout"
import { IntroSection } from "../components/introsection"
import imageBg from "../assets/Image (1).svg";
import { Nav } from "../components/nav";
import { Activities } from "../components/Activities";
import { HelpComponent } from "../components/helpSection";
import { ProductSection } from "../components/productSection";
import { FaqSection } from "../components/faq";
import { TrustedSec } from "../components/trust";
import img1 from "../assets/Rectangle 362 (1).svg";
import img2 from "../assets/Rectangle 362 (2).svg";
import img3 from "../assets/Rectangle 362 (3).svg";
import img4 from "../assets/Rectangle 362.svg";

export const HomeScreen =()=>{
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
                        routeTitle="Home"
                    />
                    <IntroSection/>
                </div>
            </div>
            <Activities/>
            <ProductSection
                prod={[
                    {
                        img:img2,
                        id:1
                    },{
                        img:img3,
                        id:2
                    },{
                        img:img4,
                        id:3
                    },{
                        img:img2,
                        id:4
                    },{
                        img:img1,
                        id:5
                    },{
                        img:img3,
                        id:6
                    },{
                        img:img1,
                        id:7
                    },{
                        img:img3,
                        id:8
                    }
                ]}
                collpase={true}
            />
            <HelpComponent/>
            <FaqSection/>
            <TrustedSec/>
        </Layout>
    )
}