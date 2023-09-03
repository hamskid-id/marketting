import Slider from "react-slick";
import { Rating } from 'react-simple-star-rating';
import ellipse1 from "../../assets/Ellipse 4 (2).svg"
import ellipse2 from "../../assets/Ellipse 4 (1).svg"
import ellipse3 from "../../assets/Ellipse 4.svg"
import { Person } from "./person";
import { Text } from "../../element/text";
import { RevealAnimation } from "../reveal";
import { useSelector } from "react-redux";

export const CustomersReview =()=>{
    const{review} = useSelector(state=>state.product);
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div className="mb-5">
            <RevealAnimation>
                <Text
                    style="c-purple h7 text-start mb-2"
                    value="What customers says"
                />
            </RevealAnimation>
            <RevealAnimation>
                <Text
                    style="fs-4 fw-bold text-start mb-2"
                    value="Recent Reviews"
                />
            </RevealAnimation>
            <div>
                <Slider {...settings}>
                    {
                        [
                            {
                                img:ellipse1
                            },{
                                img:ellipse2
                            },{
                                img:ellipse3
                            },
                        ]?.map((review,index)=>{
                            const{
                                img
                            }=review
                            return(
                                <div     
                                    key={index}
                                >
                                    <RevealAnimation>
                                        <div className="rounded review-p m-2 bg-white border">
                                            <RevealAnimation>
                                                <Text
                                                    style="h7 ln-20 c-grey text-start justify mb-3"
                                                    value="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint velit officia consequat duis enim velit mollit exercitation veniam."
                                                />
                                            </RevealAnimation>
                                            <div  className="d-flex justify-content-between wrap align-items-center">
                                                <div>      
                                                    <RevealAnimation>
                                                        <Person
                                                            src={img}
                                                        />
                                                    </RevealAnimation>
                                                 </div>
                                                <div>
                                                    <RevealAnimation>
                                                        <Rating
                                                            initialValue={3}
                                                            fillColor = '#FF9E2A'
                                                            className="mb-4"
                                                            size={16}
                                                            readonly={true}
                                                        />
                                                    </RevealAnimation>
                                                </div>
                                            </div>
                                            </div>
                                    </RevealAnimation>
                                </div>
                                    
                            )
                        })
                    }
                </Slider>
            </div>
      </div>
    );
}