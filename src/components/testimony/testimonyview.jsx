import { BlogSection } from "./blogsection"
import { CustomersReview } from "./reviews"
import { SimpleSection } from "./simple"

export const TestimonyView =()=>{
    return(
        <>
            <SimpleSection/>
            <div className="px-10 py-4">
                <CustomersReview/>
                <BlogSection/>
            </div>
        </>
    )
}