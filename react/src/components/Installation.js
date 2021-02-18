const { useState } = wp.element;
import ProgressBar from "./ProgressBar";

const Installation = ({status, percentage, plugins, pluginName, pluginProgress}) => {
    const [circleProgress, setCircleProgress] = useState(pluginProgress);

    console.log({plugins, pluginName, pluginProgress})

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
                        {plugins.map( plugin => (
                            <div className="plugin-item">
                                {
                                    pluginProgress < 100 ? 
                                    <svg id="svg-circle">
                                        <circle className="bg" cx="7" cy="7" r="7"></circle>
                                        <circle style={{strokeDashoffset: `calc(var(--dashArr) - (var(--dashArr) * ${pluginProgress}) / 100)`}} className="fg" cx="7" cy="7" r="7"></circle>
                                    </svg> : 
                                    <svg id="svg-circle">
                                        <circle className="circle-full" cx="7" cy="7" r="7" fill="#5FAC23"></circle>
                                        <path className="check-mark" d="M6.138 8.9714L3.9427 6.776 3 7.7187l3.138 3.138L12 4.9427l-.9427-.9426L6.138 8.9714z" fill="#fff"></path>
                                    </svg>
                                }
                                <div className="title">{plugin.title ? plugin.title : "Loading ..."}</div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Installation;