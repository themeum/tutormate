const { render } = wp.element;

import PerformanceSettings from './performance/index';

render(
    <PerformanceSettings />,
    document.getElementById('tutormate-performance-container')
);