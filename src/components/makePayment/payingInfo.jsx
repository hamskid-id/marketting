import { Text } from "../../element/text"

export const AmountPaying =({productToPay,formInput})=>{
    return(
        <div className="p-3 rounded bg-dark-grey">
            <Text
                style="c-grey h-0-5 mb-3 text-start"
                value="You're paying"
            />
            <Text
                style=" fs-4 mb-3 text-center fw-bold"
                value={`$${productToPay?.prod_amount}`}
            />
            <div className="d-flex align-items-center justify-content-between">
                <Text
                    style="fw-bold h7 mb-2 break"
                    value={`$${productToPay?.prod_name}`}
                />
                <Text
                    style="c-grey h7 mb-2"
                    value={`$${productToPay?.prod_amount}`}
                />
            </div>
            <div className="d-flex lign-items-center">
                <Text
                    style="fw-bold h-0-5 mb-2 me-2"
                    value="Type: "
                />
                <Text
                    style="c-grey h-0-5 mb-2"
                    value={`$${productToPay?.prod_name}`}
                />
            </div>
            <div>
                <hr className="border"/>
            </div>
            <div className="d-flex align-items-center justify-content-between mb-3">
                <Text
                    style="fw-bold h7 mb-2 break"
                    value="Discount and Offers"
                />
                <Text
                    style="c-grey h7 mb-2"
                    value="$400"
                />
            </div>
            <div>
                {
                    [
                        {
                            title:"Tax",
                            value:"50.00"
                        },{
                            title:"Total",
                            value:"460.00"
                        },
                    ].map((option,index)=>{
                        const{
                            title,
                            value
                        }=option;
                        return(
                            <div 
                                className="d-flex lign-items-center justify-content-between"
                                key={index}
                            >
                                <Text
                                    style="fw-bold h-0-5 mb-2"
                                    value={title}
                                />
                                <Text
                                    style="c-grey h-0-5 mb-2"
                                    value={`$${value}`}
                                />
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}