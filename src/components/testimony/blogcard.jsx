import { Text } from "../../element/text"
import { RevealAnimation } from "../reveal"
import { Person } from "./person"

export const BlogCard =({
    img,
    person,
    info,
    title,
    category
})=>{
    return(
        <div className="col-md-4 col-lg-3 mb-2 col-sm-6"
        >
            <RevealAnimation>
                <div className="border bg-white rounded m-3">
                    <RevealAnimation>
                        <div className="w-fit-content">
                            <img 
                                src={img} 
                                className="card-img-top cursor" 
                                alt="object not found"
                            />
                        </div>
                    </RevealAnimation>
                    <div className="card-body bg-white rounded">
                        <RevealAnimation>
                            <Text
                                value={category.toUpperCase()}
                                style="h-0-5 text-start  mb-2 fgw-bold"
                            />
                        </RevealAnimation>
                        <RevealAnimation>
                            <Text
                                value={title}
                                style="fw-bold fs-6 ln-20  text-start mb-2 h7"
                            />
                        </RevealAnimation>
                        <RevealAnimation>
                            <Text
                                value={info}
                                style="fw-light h7 text-start mb-2 h-0-5 ln-20 c-grey mb-5"
                            />
                        </RevealAnimation>
                        <RevealAnimation>
                            <Person
                                src={person}
                            />
                        </RevealAnimation>
                    </div>
                </div>
            </RevealAnimation>
        </div>
    )
}