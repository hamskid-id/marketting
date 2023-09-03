import { Btn } from "../element/btn"
import { Text } from "../element/text"
import { RevealAnimation } from "./reveal"

export const IntroSection =()=>{
    return(
        <div className="d-flex flex-column justify-content-start align-items-start introText text-start pt-5">
            <RevealAnimation>
                
            <Text
                style="ln-62 fw-bold ln-64 h-3rem mb-3"
                value="Design is intelligence made visible"
            />
            </RevealAnimation>
            <RevealAnimation>

            <Text
                style="ln-36 c-grey-black fs-5 mb-3"
                value="Build alongside half a million developers and businesses like you."
            />
            </RevealAnimation>
            <RevealAnimation>
                
            <Btn
                style="bg-purple text-white btn-md px-3 h7 rounded mb-3 p-3"
                value="Get Started"
            />
            </RevealAnimation>
        </div>
    )
}