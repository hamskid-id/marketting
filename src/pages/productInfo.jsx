import { Layout } from "../components/Layout"
import { Nav } from "../components/nav"
import { ProductConatiner } from "../components/productInfo/productInfoConatiner"

export const ProductInfo =()=>{
    return(
        <Layout>
            <div 
                className="px-10"
            >
                <div>
                    <Nav
                        routeTitle="Features"
                    />
                </div>
            </div>
            <ProductConatiner/>
        </Layout>
    )
}