import { Footer } from "./footer"
import { Nav } from "./nav"

export const Layout=({
    children
})=>{
    return(
        <div className="w-100">
            {children}
            <Footer/>
        </div>
    )
}