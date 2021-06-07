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
                { percentage === 100 ?
                <div className="heading">
                    <div className="success-heading">
                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M24 41C33.3888 41 41 33.3888 41 24C41 14.6112 33.3888 7 24 7C14.6112 7 7 14.6112 7 24C7 33.3888 14.6112 41 24 41ZM15.5663 24.8555C15.6107 24.9627 15.6747 25.0607 15.7552 25.1443L21.7787 31.1456C21.8582 31.2383 21.9567 31.3128 22.0675 31.3641C22.3046 31.462 22.5708 31.462 22.8079 31.3641C22.9187 31.3128 23.0172 31.2383 23.0967 31.1456L33.7628 20.535C33.8432 20.4514 33.9073 20.3535 33.9516 20.2463C34.0401 20.0074 34.0401 19.7447 33.9516 19.5058C33.9082 19.3981 33.844 19.3 33.7628 19.217L32.4226 17.9138C32.3442 17.8238 32.2476 17.7514 32.1391 17.7016C32.0305 17.6518 31.9126 17.6257 31.7932 17.6251C31.666 17.6235 31.5399 17.6487 31.423 17.6991C31.3103 17.7509 31.2085 17.8238 31.1231 17.9138L22.4451 26.5919L18.4023 22.5416C18.3145 22.451 18.2102 22.3781 18.095 22.3269C17.9784 22.2757 17.8521 22.2504 17.7247 22.2529C17.6073 22.2532 17.4912 22.2785 17.3841 22.3269C17.2729 22.3758 17.1742 22.4492 17.0954 22.5416L15.7552 23.8263C15.674 23.9093 15.6098 24.0074 15.5663 24.1151C15.4779 24.354 15.4779 24.6166 15.5663 24.8555Z" fill="#24A148"/>
                        </svg>
                        <h3>{ __( 'Import Successful!', 'tutormate' ) }</h3>
                    </div>
                    <p>{ __( 'Bingo! Your demo site is ready. Check how it looks.', 'tutormate' ) }</p>
                </div>
                :
                <div className="modal-head">
                    <h4><span>{ __( 'Hold on a moment', 'tutormate' ) } {<SVGLoader />}</span>{ __( 'Your site is installing...', 'tutormate' ) }</h4>
                </div>
                }
               
                <div className="modal-body">
                    { percentage < 100 &&  
                    <div className="installation-status">
                        <div className="progress">
                            <div className="progress-status" style={{ width: `${percentage}%`, opacity: 1 }}></div>
                        </div>  
                        <div className="percentage">{percentage}%</div>
                    </div> }
                    <div className="plugin-status">
                        {renderLoader()}
                        <div className="demo-content" key="demo-importer">
                            {percentage === 100 ?
                            (<svg id="svg-circle" style={{marginRight: '-2px'}}>
                                <circle className="circle-full" cx="7" cy="7" r="7" fill="#5FAC23"></circle>
                                <path className="check-mark" d="M6.138 8.9714L3.9427 6.776 3 7.7187l3.138 3.138L12 4.9427l-.9427-.9426L6.138 8.9714z" fill="#fff"></path>
                            </svg>)
                            :
                           ( percentage >= 65 && percentage < 100 ?
                           <svg className="svg-spinner" viewBox="0 0 50 50">
                                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                            </svg>
                            :
                            <svg className="svg-spinner" viewBox="0 0 50 50" style={{visibility: 'hidden'}}>
                                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                            </svg>
                            )
                            }
                            <div className={percentage === 100 ? 'title' : 'title-notactive'}>Demo Content</div>
                        </div>
                    </div>
                    <button className={`btn btn-primary ${ percentage === 100 ? 'complete' : 'inactive'}`}><a href={percentage === 100 ? tutormate.site_url : 'javascript:'} target={ percentage === 100 ? '_blank' : '_self'}>{__('View Your Site', 'tutormate')}</a></button>
                </div>
            </div>
        </div>
    );
};

export default Installation;