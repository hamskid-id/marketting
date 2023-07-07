import { Text } from "../../element/text"

export const ProductImg =({
    mainImg,
    collectionImg
})=>{
    return(
        <div className="row justify-content-start px-3">
            <div className="col-md-3 productSideImgContainer">
                <div className="wy-overflow sideImg">
                    {
                        collectionImg.map((coll,index)=><div className={`${index != (collectionImg.length-1)?" m-b-3":""} productSideImg m-x-3 border`}><img key={index} src={coll} alt="object not found" className="w-100"/></div>)
                    }
                </div>
            </div>
            <div  className="col-md-9">
                <div className="h-100 pb-5">
                    <div className="bg-gainsboro d-flex flex-column align-items-center justify-content-center px-4 py-2 mb-2 h-100">
                        <img src={mainImg} alt="object not found" className="w-100"/>
                    </div>
                    <Text
                        style="h7 c-grey text-start my-3"
                        value="recharge card printing site"
                    />
                </div>
            </div>
        </div>
    )
}