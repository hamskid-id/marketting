import { NaviBtn } from "../element/navigateBtn"
import { ProductCard } from "./productCard"

export const ProductSection=({
    prod,
    collpase
})=>{
    return(
        <>
        <div className="row w-100 p-4">
                {
                    prod.map((prod,index)=>{
                        return(
                            <ProductCard
                                key={index}
                                img={prod.img}
                                id={prod.id}
                                title="Mage vpn site Sale and aution SIte"
                                company="by 5starcompany"
                                price1={15}
                                price2={13}
                                sales={55}
                            />
                        )
                    })
                }
            </div>
            {
                collpase &&(
                    <div className="w-fit-content m-auto my-2">
                        <NaviBtn
                            name="View more"
                            route="/"
                        />
                    </div>
                )
            }
        </>
    )
}