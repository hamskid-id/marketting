import React, { Component } from "react";
import Slider from "react-slick";
import { Text } from "../../element/text"
import img1 from "../../assets/Rectangle 362 (1).svg";
import img2 from "../../assets/Rectangle 362 (2).svg";
import img3 from "../../assets/Rectangle 362 (3).svg";
import img4 from "../../assets/Rectangle 362.svg";
import cart from "../../assets/bi_cart.svg";
import frame from "../../assets/Frame (1).svg";
import {Link} from "react-router-dom"
import { AiFillHeart } from "react-icons/ai";
export default class Responsive extends Component {
  render() {
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
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
            slidesToScroll: 2,
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
      <div className="my-5">
            <Text
                value="Related Products"
                style="fs-5 text-center my-2 mb-4"
            />
        <Slider {...settings}>
        {
                    [
                        {
                            benefit:"New",
                            img:img1,
                            id:1,
                        },{
                            benefit:"-10%",
                            img:img2,
                            id:2
                        },{
                            benefit:"Hot",
                            img:img3,
                            id:3
                        },{
                            benefit:"Warranty",
                            img:img4,
                            id:4
                        },
                    ].map((option,index)=>{
                        const{
                            benefit,
                            img,
                            id
                        }=option;
                        return(
                            <div 
                                key={index}
                            >
                                <div className="bg-gainsboro mx-3 p-3 rounded">
                                    <div>
                                        <Text
                                            style="w-fit-content fw-light  rounded h-0-5 py-1 px-2 text-white text-start bg-danger me-auto"
                                            value={benefit}
                                        />
                                        <div className="border border-danger rounded-circle p-2 py-1 mb-2 w-fit-content ms-auto cursor">
                                            <AiFillHeart
                                                size="1.2rem"
                                                color="red"
                                            />
                                        </div>
                                        <img src={frame} alt="object not found" className="ms-auto mb-2 cursor"/>
                                        <Link to={`/market/${id}`}><img src={img} alt="object not found" className="w-100 cursor"/></Link>
                                        <div className="d-flex bg-white p-2 btn w-fit-content m-auto rounded justify-content-center my-3">
                                            <span className="me-2"><img src={cart} alt="object not found"/></span>
                                            <Text
                                                style="h7 c-grey fw-light"
                                                value="Add to cart"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3">
                                    <div>
                                        <Text
                                            style="h7 text-start"
                                            value="Recharge card printing web"
                                        />
                                    </div>
                                    <div className="mb-2 w-fit-content">
                                        {
                                            ["$600.72","$800.00"].map((option,index)=>{
                                                return(
                                                    <span key={index} className={`${index ==0?"text-black me-2 h-0-5":"c-grey text-decoration-line-through fw-light "} h7 text-start`}>{option}</span>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
        </Slider>
      </div>
    );
  }
}