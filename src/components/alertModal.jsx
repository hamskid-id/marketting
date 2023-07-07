export const AlertModal =({title,body,hidemodal})=>{
    return(
        <div
            className="modal fade" 
            id="alertStaticBackdrop" 
            data-bs-backdrop="static" 
            data-bs-keyboard="false" 
            tabIndex="-1" 
            aria-labelledby="alertStaticBackdropLabel" 
            aria-hidden="true">
            <div className={`modal-dialog modal-dialog-centered modal-dialog-scrollable`}>
                <div className="modal-content">
                    <div className="modal-header">
                        {title &&<h5 className="modal-title fw-bold fs-6">{title}</h5>}
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal" 
                            ref={hidemodal}
                            aria-label="Close">
                        </button>
                    </div>
                    <div className="modal-body">
                        {body}
                    </div>
                </div>
            </div>
        </div>
    )
}