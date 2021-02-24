const { __ } = wp.i18n;

const Installation = ({percentage, pluginInfo}) => {
    
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

    const renderLoader = () => {
        return Object.keys( pluginInfo ).map( pluginName => {
            const plugin = pluginInfo[pluginName];
            const { pluginState, responseStatus, title } = plugin;
            if ( pluginState === 'active' ) {
                return (
                    <div className="plugin-item" key={pluginName}>
                        <svg id="svg-circle">
                            <circle className="circle-full" cx="7" cy="7" r="7" fill="#5FAC23"></circle>
                            <path className="check-mark" d="M6.138 8.9714L3.9427 6.776 3 7.7187l3.138 3.138L12 4.9427l-.9427-.9426L6.138 8.9714z" fill="#fff"></path>
                        </svg>
                        <div className='title'>{title ? title : __( 'Loading...', 'tutormate' )}</div>
                    </div>)
            } else {
                if ( responseStatus === 'initial' ) {
                    return (
                        <div className="plugin-item" key={ pluginName }>
                            <svg className="svg-spinner" viewBox="0 0 50 50" style={{visibility: 'hidden'}}>
                                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                            </svg>
                            <div className='title-notactive'>{title ? title : __( 'Loading...', 'tutormate' )}</div>
                        </div>
                    )
                } else if ( responseStatus === 'installing' ) {
                    return (
                        <div className="plugin-item" key={pluginName}>
                            <svg className="svg-spinner" viewBox="0 0 50 50">
                                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                            </svg>
                            <div className='title-notactive'>{title ? title : __( 'Loading...', 'tutormate' )}</div>
                        </div>
                    )
                } else if ( responseStatus === 'success' ) {
                    return (
                        <div className="plugin-item" key={pluginName}>
                            <svg id="svg-circle">
                                <circle className="circle-full" cx="7" cy="7" r="7" fill="#5FAC23"></circle>
                                <path className="check-mark" d="M6.138 8.9714L3.9427 6.776 3 7.7187l3.138 3.138L12 4.9427l-.9427-.9426L6.138 8.9714z" fill="#fff"></path>
                            </svg>
                            <div className='title'>{title ? title : __( 'Loading...', 'tutormate' )}</div>
                        </div>
                    )
                } else if ( responseStatus === 'error' ) {
                    return (
                        <div className="plugin-item" key={pluginName}>
                            <span class="dashicons dashicons-no-alt plugin-not-installed"></span>
                            <div className='title'>{title ? title : __( 'Loading...', 'tutormate' )}</div>
                        </div>
                    )
                }
            }
        }) 
    }

    return (
        <div className="installation-screen modal-wrapper active">
            <div className="modal-content">
                <div className="modal-head">
                    <h4><span>{ __( 'Hold on a moment', 'tutormate' ) } {<SVGLoader />}</span>Your site is installing...</h4>
                </div>
                <div className="modal-body">
                    <div className="installation-status">
                        <div className="progress">
                            <div className="progress-status" style={{ width: `${percentage}%`, opacity: 1 }}></div>
                        </div>  
                        <div className="percentage">{percentage}%</div>
                    </div>
                    <div className="plugin-status">
                        {renderLoader()}
                        <div className="demo-content" key="demo-importer">
                            {percentage === 100 ?
                            (<svg id="svg-circle" style={{marginRight: '-2px'}}>
                                <circle className="circle-full" cx="7" cy="7" r="7" fill="#5FAC23"></circle>
                                <path className="check-mark" d="M6.138 8.9714L3.9427 6.776 3 7.7187l3.138 3.138L12 4.9427l-.9427-.9426L6.138 8.9714z" fill="#fff"></path>
                            </svg>)
                            :
                           ( percentage >= 65 ?
                           <svg className="svg-spinner" viewBox="0 0 50 50">
                                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                            </svg>
                            :
                            <svg className="svg-spinner" viewBox="0 0 50 50" style={{visibility: 'hidden'}}>
                                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                            </svg>
                            )
                            }
                            <div className={percentage === 100 ? 'title' : 'title-notactive'}>Starter Content</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Installation;