import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, PointElement, Title, Tooltip, Legend, Filler, Ticks } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import annotationPlugin from 'chartjs-plugin-annotation';

// Register necessary components and plugins
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    annotationPlugin
);

const MixedChart = () => {
    const data = {
        labels: ['10', '20', '30', '40', '50', '60', '70', '80'],
        datasets: [
            {
                type: 'line',
                label: 'Line Dataset',
                data: [50, 130, 182, 70, 155, 165, 175, 80, 50],
                borderColor: '#ffffff',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                fill: true, // Enables the fill
                tension: 0.1, // Smooths the line
                zIndex: 2 // Ensure this is higher
            },
            {
                type: 'bar',
                label: 'Bar Dataset',
                data: [74, 146, 282, 226, 281, 228, 121, 173, 129, 182],
                backgroundColor: [
                    'rgba(0,107,42,0.9)', 'rgba(252, 61, 64, 0.9)', 'rgba(0,107,42,0.9)',
                    'rgba(252, 61, 64, 0.9)', 'rgba(0,107,42,0.9)', 'rgba(252, 61, 64, 0.9)',
                    'rgba(0,107,42,0.9)', 'rgba(0,107,42,0.9)', 'rgba(252, 61, 64, 0.9)',
                    'rgba(0,107,42,0.9)'
                ],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderRadius: 5,
                zIndex: 1 // Ensure this is lower
            },

        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false, // Display the legend
                position: 'top'
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`;
                    }
                }
            },
            annotation: {
                annotations: {
                    line1: {
                        type: 'line',
                        yMin: 50, // Start point of the line
                        yMax: 50, // End point of the line
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        borderWidth: 2,
                        borderDash: [10, 5], // Dashed line style
                        borderDashOffset: 0,
                        label: {
                            content: 'Dashed Line',
                            enabled: false,
                            position: 'center',
                        }
                    },
                    line2: {
                        type: 'line',
                        yMin: 100, // Start point of the line
                        yMax: 100, // End point of the line
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        borderWidth: 2,
                        borderDash: [10, 5], // Dashed line style
                        borderDashOffset: 0,
                        label: {
                            content: 'Dashed Line',
                            enabled: false,
                            position: 'center',
                        }
                    },
                    line3: {
                        type: 'line',
                        yMin: 150, // Start point of the line
                        yMax: 150, // End point of the line
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        borderWidth: 2,
                        borderDash: [10, 5], // Dashed line style
                        borderDashOffset: 0,
                        label: {
                            content: 'Dashed Line',
                            enabled: false,
                            position: 'center',
                        }
                    },
                    line4: {
                        type: 'line',
                        yMin: 200, // Start point of the line
                        yMax: 200, // End point of the line
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        borderWidth: 2,
                        borderDash: [10, 5], // Dashed line style
                        borderDashOffset: 0,
                        label: {
                            content: 'Dashed Line',
                            enabled: false,
                            position: 'center',
                        }
                    },
                    line5: {
                        type: 'line',
                        yMin: 250, // Start point of the line
                        yMax: 250, // End point of the line
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        borderWidth: 2,
                        borderDash: [10, 5], // Dashed line style
                        borderDashOffset: 0,
                        label: {
                            content: 'Dashed Line',
                            enabled: false,
                            position: 'center',
                        }
                    },
                    line6: {
                        type: 'line',
                        yMin: 300, // Start point of the line
                        yMax: 300, // End point of the line
                        borderColor: 'rgba(255, 255, 255, 0.5)',
                        borderWidth: 2,
                        borderDash: [10, 5], // Dashed line style
                        borderDashOffset: 0,
                        label: {
                            content: 'Dashed Line',
                            enabled: false,
                            position: 'center',
                        }
                    }
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                grid: {
                    display: false, // Remove vertical grid lines
                },
                // Adjust bar width
                ticks: {
                    color: "#ffffff"
                },
                border: {
                    color: '#ffffff' // Color for the x-axis border line
                },
                barPercentage: 0.5, // Adjust the width of the bars as a percentage of the category width
                categoryPercentage: 0.8 // Adjust the width of the category as a percentage of the available space
            },
            y: {
                stacked: false,
                grid: {
                    display: false, // Remove horizontal grid lines
                },
                ticks: {
                    color: '#ffffff' // Color for the x-axis labels
                },
                border: {
                    color: '#ffffff' // Color for the x-axis border line
                },
            },
        }
    };

    return (
        <div>
            <Bar data={data} options={options} />
        </div>
    );
};

export default MixedChart;
