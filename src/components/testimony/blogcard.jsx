import { Text } from "../../element/text"
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
            <div className="shadow rounded m-3">
                <img 
                    src={img} 
                    className="card-img-top cursor" 
                    alt="object not found"
                />
                <div className="card-body bg-white rounded">
                    
                    <Text
                        value={category.toUpperCase()}
                        style="h-0-5 text-start  mb-2 fgw-bold"
                    />
                    <Text
                        value={title}
                        style="fw-bold fs-6 ln-20  text-start mb-2 h7"
                    />
                    <Text
                        value={info}
                        style="fw-light h7 text-start mb-2 h-0-5 ln-20 c-grey mb-5"
                    />
                    <Person
                        src={person}
                    />
                </div>
             </div>
        </div>
    )
}