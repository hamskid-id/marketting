import { useSelector } from "react-redux"
import { NaviBtn } from "../element/navigateBtn"
import { ProductCard } from "./productCard"

export const ProductSection=({
    prod,
    collpase
})=>{
    const {products} =useSelector(state=>state.product);
    return(
        <div className="bg-ghostwhite py-3">
        <div className="row w-100 p-4">
                {
                    products?.map((prod,index)=>{
                        const{
                            id,prod_amount,prod_description,prod_name,prod_picture,prod_quantity
                        }=prod
                        return(
                            <ProductCard
                                key={index}
                                img={prod_picture}
                                id={id}
                                title={prod_name}
                                company={prod_description}
                                price1={15}
                                price2={13}
                                sales={prod_amount}
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
        </div>
    )
}