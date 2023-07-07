import { Text } from "../../element/text"
import img1 from "../../assets/Rectangle 362 (1).svg";
import img2 from "../../assets/Rectangle 362 (2).svg";
import ellipse1 from "../../assets/Ellipse 4 (2).svg"
import img3 from "../../assets/Rectangle 362 (3).svg";
import { BlogCard } from "./blogcard";
export const BlogSection=()=>{
    return(
        <div>
            <Text
                style="fw-bold text-center mb-2 fs-3"
                value="From our Blog"
            />
            <Text
                style="ln-20 h7 text-center c-grey mb-3 "
                value="Creativity is a highfalutin word for the work I have to do between now and Tuesday."
            />
            <div className="d-flex wrap justify-content-center">
                {
                    [
                        {
                            category:"article",
                            img:img1,
                            title:"Guide for designing better mobile apps typography",
                            info:"In this article, I won’t talk about the general concepts of typography, which can be used both in print..."
                        },
                        {
                            title:"New Dashboard features to save you time",
                            img:img2,
                            category:"video",
                            info:"Dashboard is the hub for millions of businesses to take action. We’ve launched dozens of new features in the Dashboard..."
                        },
                        {
                            title:" Noom sees an 8% increase in authorization rates with Dlex",
                            img:img3,
                            category:"case study",
                            info:"The health platform boosted acceptance rates and expanded global coverage by switching to Dlex"
                        }
                    ].map((option,index)=>{
                        const{
                            category,
                            title,
                            info,
                            img
                        }=option;
                        return(
                            <BlogCard
                                title={title}
                                key={index}
                                img={img}
                                person={ellipse1}
                                info={info}
                                category={category}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}