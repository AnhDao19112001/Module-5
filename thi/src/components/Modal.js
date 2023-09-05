function Modal() {
    return(
        <>
        <div className="page-content page-container" id="page-content">
            <div className="padding">
                <div className="row container d-flex justify-content-center">
                    <div className="col-sm-6">
                        <button className="btn btn-white btn-block mb-2" data-toggle="modal"
                                data-target="#modal-backdrop-dark">Open dark modal Dark
                        </button>
                        <div id="modal-backdrop-dark" className="modal bg-dark fade" data-backdrop="false">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <div className="modal-title text-md">Dark Modal title</div>
                                        <button className="close" data-dismiss="modal">&times;</button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="p-4 text-center">
                                            <p>For what reason would it be advisable for me to think about business
                                                content?</p>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-light" data-dismiss="modal">Close
                                        </button>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal">Save
                                            Changes
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Modal;