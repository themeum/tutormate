const { __ } = wp.i18n;
const { Fragment, useEffect, useRef } = wp.element;

const Installation = ({status, percentage, plugins, pluginInfo}) => {

    const installedPlugins = useRef({});
    
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

    useEffect(() => {
        plugins.forEach(plugin => installedPlugins.current = {...installedPlugins.current, ...{[plugin.slug]: false}})
    }, [])

    const renderLoader = () => {
        if ( Object.keys( pluginInfo ).length ) {
            return plugins.map( ( plugin, index ) => {
                const {slug: title} = plugin;
                if ( pluginInfo[title] ) {
                    installedPlugins.current = {...installedPlugins.current, ...{[title]: true}};
                }

                return (
                <div className="plugin-item" key={index}>
                    <Fragment>
                        {installedPlugins.current[title] ? (
                            <svg id="svg-circle">
                                <circle className="circle-full" cx="7" cy="7" r="7" fill="#5FAC23"></circle>
                                <path className="check-mark" d="M6.138 8.9714L3.9427 6.776 3 7.7187l3.138 3.138L12 4.9427l-.9427-.9426L6.138 8.9714z" fill="#fff"></path>
                            </svg>
                        ) : (
                            <svg className="svg-spinner" viewBox="0 0 50 50">
                                <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                            </svg>
                        )}
                        <div className='title'>{title ? title : __( 'Loading...', 'tutormate' )}</div>
                    </Fragment>
                </div>
            )
            })
        } 
        return plugins.map( ( {title}, index ) => {
            return (
            <div className="plugin-item" key={index}>
                <Fragment>
                    <svg className="svg-spinner" viewBox="0 0 50 50">
                        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
                    </svg>
                    <div className='title'>{title ? title : __( 'Loading...', 'tutormate' )}</div>
                </Fragment>
            </div>
        )
        }) 
        
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
                        {renderLoader()}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Installation;