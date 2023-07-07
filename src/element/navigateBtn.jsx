import { AiOutlineArrowRight } from "react-icons/ai"
import { useNavigate } from "react-router-dom"

export const NaviBtn=({
    name,
    route
})=>{
    const navigate = useNavigate()
    return(
        <div 
            className="d-flex align-items-center bg-purple text-white px-3 py-1 h7 rounded btn"
            onClick={()=>navigate(route)}
        >
            <span className="c-purple h7 me-1 text-start fw-bold text-white p-1">
                {name}
            </span>
            <AiOutlineArrowRight
                size="0.7rem"
                className="c-white"
            />
        </div>
    )
}