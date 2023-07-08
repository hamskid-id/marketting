import { Text } from "../../element/text"
import groupImg from "../../assets/Group 1000001627.svg"
import { RevealAnimation } from "../reveal"
export const SimpleSection=()=>{
    return(
        <div className="d-flex wrap align-items-center bg-indigo mx-4">
            <div className="text-start pt-5 wt-50 px-6">
                <RevealAnimation>
                    <Text
                        style="h-3rem fw-bold text-start ln-62 mb-3"
                        value="Make it simple, but significant."
                    />
                </RevealAnimation>
                <RevealAnimation>
                    <Text
                        style="ln-36 c-grey-black h6 mb-3"
                        value="The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design."
                    />
                </RevealAnimation>
            </div>
            <div 
                className="wt-50">
                <RevealAnimation>
                    <div className="w-fit-content">
                        <img 
                            src={groupImg}
                            alt="object not found"
                            className="w-100"
                        />
                    </div>
                </RevealAnimation>
            </div>
        </div>
    )
}