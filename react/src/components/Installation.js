const { __ } = wp.i18n;

const Installation = ({status, percentage, plugins, pluginProgress}) => {

    const SVGLoader = () => {
         if ( 100 !== percentage ) {
            return (
                <svg className="svg-spinner-solo" viewBox="0 0 50 50">
                    <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                </svg>
            )
         } else {
            return (
                <svg className="svg-circle-solo">
                    <circle className="circle-full" cx="7" cy="7" r="7" fill="#5FAC23"></circle>
                    <path className="check-mark" d="M6.138 8.9714L3.9427 6.776 3 7.7187l3.138 3.138L12 4.9427l-.9427-.9426L6.138 8.9714z" fill="#fff"></path>
                </svg>
            )
         } 
    }

    return (
        <div className="installation-screen modal-wrapper active">
            <div className="modal-content">
                <div className="modal-head">
                    <h4><span>{ __( 'Hold on a moment', 'tutormate' ) } {<SVGLoader />}</span> { status }</h4>
                </div>
                <div className="modal-body">
                    <div className="installation-status">
                        <div className="progress">
                            <div className="progress-status" style={{ width: `${percentage}%`, opacity: 1 }}></div>
                        </div>  
                        <div className="percentage">{percentage}%</div>
                    </div>
                    <div className="plugin-status">
                        {plugins.map( (plugin, index) => (
                            <div className="plugin-item" key={index}>
                                    
                                {
                                    pluginProgress < 100 && 'not installed' === plugin.state ? 
                                    <svg className="svg-spinner" viewBox="0 0 50 50">
                                        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                                    </svg>
                                    : 
                                    <svg id="svg-circle">
                                        <circle className="circle-full" cx="7" cy="7" r="7" fill="#5FAC23"></circle>
                                        <path className="check-mark" d="M6.138 8.9714L3.9427 6.776 3 7.7187l3.138 3.138L12 4.9427l-.9427-.9426L6.138 8.9714z" fill="#fff"></path>
                                    </svg>
                                }
                                <div className={'not installed' === plugin.state ? 'title-notactive' : 'title' }>{plugin.title ? plugin.title : __( 'Loading ...', 'tutormate' )}</div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Installation;