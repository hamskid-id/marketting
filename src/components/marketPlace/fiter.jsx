import { Text } from "../../element/text"

export const Filter =({
    value,
    label
})=>{
    return(
        <div className="d-flex flex-column">
            <Text
                style="text-start c-grey h-0-5"
                value={label}
            />
            <select className="btn text-black w-100 p-2 border text-start h-0-5">
                {
                        value.map((val,index)=>{
                            return(
                                <option key={index}>
                                    {val}
                                </option>
                            )
                        })
                }
            </select>
        </div>
    )
}