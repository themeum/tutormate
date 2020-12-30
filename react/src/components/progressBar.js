const { useEffect, useState } = wp.element;

const ProgressBar = () => {
    const [value, setValue] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setValue((oldValue) => {
                const newValue = oldValue + 1;
                if (newValue === 100) {
                    clearInterval(interval);
                }
                return newValue;
            });
        }, 10);
    }, []);

    return (
        <div className="progress-wrapper" style={{ marginBottom: "20px" }}>
            <div className="progress">
                <div className="progress-status" style={{ width: `${value}%`, opacity: 1 }}></div>
            </div>
            {value === 100 ? <span>Completed</span> : <span>{value}%</span>}
        </div>
    );
};

export default ProgressBar;