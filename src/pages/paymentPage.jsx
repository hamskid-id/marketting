import { Layout } from "../components/Layout"
import { PaymentScreen } from "../components/makePayment/paymentScreen"
import { Nav } from "../components/nav"

export const PaymentSection =()=>{
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
            <PaymentScreen/>
        </Layout>
    )
}