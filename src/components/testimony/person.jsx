import { Text } from "../../element/text"
import { RevealAnimation } from "../reveal"

export const Person =({
    src
})=>{
    return(
        <div className="d-flex align-items-end">
            
            <span className="me-2">
                <div className="w-fit-content">
                    <RevealAnimation>
                        <img src={src} alt="" className="w-100 rounded-circle"/>
                    </RevealAnimation>
                </div>
            </span>
            <span>
                <RevealAnimation>
                    <Text
                        style="fw-bold h-0-5 text-start mb-2"
                        value="Kristin Watson"
                    />
                </RevealAnimation>
                <RevealAnimation>
                    <Text
                        style=" h-0-5 text-start c-grey"
                        value="Jun 27, 2020 · 6 min read"
                    />
                </RevealAnimation>
            </span>
        </div>
    )
}