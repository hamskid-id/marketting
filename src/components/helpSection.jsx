import { Text } from "../element/text"
import image from "../assets/Rectangle 1.svg"
import { NaviBtn } from "../element/navigateBtn"
import { RevealAnimation } from "./reveal"

export const HelpComponent =()=>{
    return(
        <div className="d-flex wrap justify-content-between align-items-center p-x-5 py-3">
            <div className="wt-50">
                <RevealAnimation>
                    <img src={image} className="w-100" alt="object not found"/>
                </RevealAnimation>
            </div>
            <div className="d-flex flex-column justify-content-start align-items-start wt-50 left-help">
                <RevealAnimation>
                    <Text
                        style="fw-bold wereHere text-start justify display-6"
                        value="We’re here to help"
                    />
                </RevealAnimation>
                <RevealAnimation>
                    <Text
                        style="ln-36 c-grey-black fs-5 mb-3 text-start fw-light justify"
                        value="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                    />
                </RevealAnimation>
                <RevealAnimation>
                    <NaviBtn
                        name="Get Started"
                        route="/"
                    />
                </RevealAnimation>
            </div>
        </div>
    )
}