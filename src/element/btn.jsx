export const Btn=({
    value,
    style,
    clickFunc,
    databstoggle,
    databstarget
})=><button data-bs-target={databstarget} data-bs-toggle={databstoggle} className={`btn ${style}`} onClick={clickFunc}>{value}</button>