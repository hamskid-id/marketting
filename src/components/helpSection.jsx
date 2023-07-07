import { Text } from "../element/text"
import image from "../assets/Rectangle 1.svg"
import { NaviBtn } from "../element/navigateBtn"

export const HelpComponent =()=>{
    return(
        <div className="d-flex wrap justify-content-between align-items-center p-x-5 py-3">
            <div className="wt-50">
                <img src={image} className="w-100" alt="object not found"/>
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start wt-50 left-help">
                <Text
                    style="ln-62 fw-bold ln-64 h-3rem mb-3 text-start justify"
                    value="We’re here to help"
                />
                <Text
                    style="ln-36 c-grey-black h6 mb-3 text-start fgw-light justify"
                    value="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                />
                <NaviBtn
                    name="Get Started"
                    route="/"
                />
            </div>

        </div>
    )
}