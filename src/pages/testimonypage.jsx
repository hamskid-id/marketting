import { Layout } from "../components/Layout"
import { Nav } from "../components/nav"
import { TestimonyView } from "../components/testimony/testimonyview"

export const TestimonyPage =()=>{
    return(
        <Layout>
            <div 
                className="px-10"
            >
                <div>
                    <Nav
                        routeTitle="Testimony"
                    />
                </div>
            </div>
            <TestimonyView/>
        </Layout>
    )
   
}