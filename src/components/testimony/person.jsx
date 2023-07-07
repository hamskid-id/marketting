import { Text } from "../../element/text"

export const Person =({
    src
})=>{
    return(
        <div className="d-flex align-items-end">
            <span className="me-2">
                <img src={src} alt="" className="w-100 rounded-circle"/>
            </span>
            <span>
                <Text
                    style="fw-bold h-0-5 text-start mb-2"
                    value="Kristin Watson"
                />
                <Text
                    style=" h-0-5 text-start c-grey"
                    value="Jun 27, 2020 · 6 min read"
                />
            </span>
        </div>
    )
}