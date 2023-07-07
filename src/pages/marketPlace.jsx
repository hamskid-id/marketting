import { Layout } from "../components/Layout"
import { AvailabilitySection } from "../components/marketPlace/availability"
import { Nav } from "../components/nav"

export const MarketPlace =()=>{
    return(
        <Layout>
            <div 
                className="px-10"
            >
                <div>
                    <Nav
                        routeTitle="Marketplace"
                    />
                </div>
            </div>
            <AvailabilitySection/>
        </Layout>
    )
}