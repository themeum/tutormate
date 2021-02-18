const ProgressBar = ( { percentage } ) => {
    return (
        <div className="progress-wrapper">
            <div className="progress">
                <div className="progress-status" style={{ width: `${percentage}%`, opacity: 1 }}></div>
            </div>
            { 100 === percentage ? <span className="status-text">Completed</span> : <span className="status-text">{percentage}%</span> }
        </div>
    );
};

export default ProgressBar;