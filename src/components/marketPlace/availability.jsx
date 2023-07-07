import { Btn } from "../../element/btn";
import { Text } from "../../element/text"
import { Filter } from "./fiter";
import groupImg from "../../assets/Group.svg"
import { ProductSection } from "../productSection";
import img1 from "../../assets/Rectangle 362 (1).svg";
import img2 from "../../assets/Rectangle 362 (2).svg";
import img3 from "../../assets/Rectangle 362 (3).svg";
import img4 from "../../assets/Rectangle 362.svg";
export const AvailabilitySection =()=>{
    return(
        <div className="px-2">
            <div className="row justify-content-around">
                <div className="col-md-4">
                    <div>
                        <Text
                            style="c-purple h8 fw-bold text-start mb-4"
                            value="Explore"
                        />
                        <Text
                            style="fs-1 text-black fw-bold text-start mb-4"
                            value="Search within this category"
                        />
                    </div>
                    <div className="d-flex wrap justify-content-between mb-3">
                        {
                            [
                                {
                                    name:"Type",
                                    option:["Php", "Python"]
                                },{
                                    name:"Type",
                                    option:["Forntend", "Backend"]
                                },{
                                    name:"Date posted",
                                    option:["27,July,2020", "27,July,2021"]
                                },{
                                    name:"Date posted",
                                    option:["27,July,2022", "27,July,2023"]
                                },
                            ].map((filt,index)=>{
                                const{
                                    name,
                                    option
                                }=filt;
                                return(
                                    <div
                                        key={index}
                                        className="w-45 mb-3"
                                    >
                                        <Filter
                                            label={name}
                                            value={option}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="mb-2">
                        <Btn
                            style="text-white bg-purple btn btn-md w-100 p-2 h-0-5"
                            value="Check Availability"
                        />
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="filterImg">
                        <img   
                            src={groupImg}
                            alt="object not found"
                            className="w-100"
                        />
                    </div>
                </div>
            </div>
            <ProductSection
                prod={[
                        {
                            img:img1,
                            id:1
                        },{
                            img:img2,
                            id:2
                        },{
                            img:img3,
                            id:3
                        },{
                            img:img4,
                            id:4
                        },{
                            img:img2,
                            id:5
                        },{
                            img:img1,
                            id:6
                        },{
                            img:img3,
                            id:7
                        },{
                            img:img1,
                            id:8
                        },{
                            img:img3,
                            id:9
                        },{
                            img:img2,
                            id:10
                        },{
                            img:img3,
                            id:11
                        },{
                            img:img4,
                            id:12
                        },{
                            img:img2,
                            id:13
                        },{
                            img:img1,
                            id:14
                        },{
                            img:img3,
                            id:15
                        },{
                            img:img1,
                            id:16
                        },{
                            img:img3,
                            id:17
                        }
                    ]}
                collpase={false}
            />
        </div>
    )
}