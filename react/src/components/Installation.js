import ProgressBar from "./ProgressBar";

const Installation = ({status, percentage}) => {
    return (
        <div className="installation-screen modal-wrapper active">
            <div className="modal-content">
                <div className="modal-head">
                    <h4><span>Hold on a moment</span> Your site is installing...</h4>
                </div>
                <div className="modal-body">
                    <div className="installation-status">
                        <div className="progress">
                            <div className="progress-status" style={{ width: `${percentage}%`, opacity: 1 }}></div>
                        </div>  
                        <div className="percentage">{percentage}%</div>
                    </div>
                    <div className="plugin-status">
                        <div className="circle-progress">
                            {/* <svg width="14" height="14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="progress-bg" d="M7 14c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7z" fill="#E3E7EC"/>
                                <path id="progress-circle" d="M7 0A7 7 0 00.0922 8.1326L7 7V0z" fill="#5FAC23"/>
                                <path id="progress-fg" d="M7 12.25c2.8995 0 5.25-2.3505 5.25-5.25S9.8995 1.75 7 1.75 1.75 4.1005 1.75 7 4.1005 12.25 7 12.25z" fill="#fff"/>
                                <circle id="complete-circle" cx="7" cy="7" r="7" fill="#5FAC23"/>
                                <path id="check-mark" d="M6.138 8.9714L3.9427 6.776 3 7.7187l3.138 3.138L12 4.9427l-.9427-.9426L6.138 8.9714z" fill="#fff"/>
                            </svg> */}
                            <span className="progress-circle"></span>
                            <span className="progress-bg"></span>
                            <span className="progress-complete"></span>
                            
                        </div>
                        <div className="title">Tutor LMS</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Installation;