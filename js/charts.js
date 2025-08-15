// Charts Management for Gym Admin Dashboard
class GymCharts {
    constructor() {
        this.charts = {};
        this.chartOptions = {
            responsive: true,
            maintainAspectRatio: false, // Allows container height to control chart height
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        usePointStyle: true,
                        padding: 20,
                        font: { size: 12 }
                    }
                },
                tooltip: {
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    titleColor: '#fff',
                    bodyColor: '#fff',
                    borderColor: '#4a90e2',
                    borderWidth: 1,
                    cornerRadius: 8,
                    displayColors: true
                }
            }
        };
        this.init();
    }

    init() {
        this.createMemberGrowthChart();
        this.createPlanDistributionChart();
        this.createTrainerWorkloadChart();
        this.createRevenueChart();
        this.setupChartEventListeners();
    }

    createMemberGrowthChart() {
        const ctx = document.getElementById('memberGrowthChart');
        if (!ctx) return;
        ctx.parentNode.style.height = '350px'; // Fixed card height

        this.charts.memberGrowth = new Chart(ctx, {
            type: 'line',
            data: window.gymData.chartData.memberGrowth,
            options: {
                ...this.chartOptions,
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { color: '#7f8c8d', font: { size: 11 } }
                    },
                    y: {
                        beginAtZero: true,
                        grid: { color: '#ecf0f1' },
                        ticks: {
                            color: '#7f8c8d',
                            font: { size: 11 },
                            callback: value => value
                        }
                    }
                },
                elements: {
                    point: {
                        radius: 4,
                        hoverRadius: 6,
                        backgroundColor: '#4a90e2',
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    line: { borderWidth: 3 }
                },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    createPlanDistributionChart() {
        const ctx = document.getElementById('planDistributionChart');
        if (!ctx) return;
        ctx.parentNode.style.height = '350px';

        this.charts.planDistribution = new Chart(ctx, {
            type: 'doughnut',
            data: window.gymData.chartData.planDistribution,
            options: {
                ...this.chartOptions,
                cutout: '60%',
                plugins: {
                    ...this.chartOptions.plugins,
                    legend: {
                        position: 'bottom',
                        labels: {
                            usePointStyle: true,
                            padding: 20,
                            font: { size: 12 }
                        }
                    }
                },
                elements: { arc: { borderWidth: 0 } }
            }
        });
    }

    createTrainerWorkloadChart() {
        const ctx = document.getElementById('trainerWorkloadChart');
        if (!ctx) return;
        ctx.parentNode.style.height = '350px';

        this.charts.trainerWorkload = new Chart(ctx, {
            type: 'bar',
            data: window.gymData.chartData.trainerWorkload,
            options: {
                ...this.chartOptions,
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { color: '#7f8c8d', font: { size: 11 } }
                    },
                    y: {
                        beginAtZero: true,
                        grid: { color: '#ecf0f1' },
                        ticks: {
                            color: '#7f8c8d',
                            font: { size: 11 },
                            stepSize: 5
                        }
                    }
                },
                elements: {
                    bar: { borderRadius: 6, borderSkipped: false }
                },
                plugins: {
                    ...this.chartOptions.plugins,
                    legend: { display: false }
                }
            }
        });
    }

    createRevenueChart() {
        const ctx = document.getElementById('revenueChart');
        if (!ctx) return;
        ctx.parentNode.style.height = '350px';

        this.charts.revenue = new Chart(ctx, {
            type: 'line',
            data: window.gymData.chartData.revenue,
            options: {
                ...this.chartOptions,
                scales: {
                    x: {
                        grid: { display: false },
                        ticks: { color: '#7f8c8d', font: { size: 11 } }
                    },
                    y: {
                        beginAtZero: true,
                        grid: { color: '#ecf0f1' },
                        ticks: {
                            color: '#7f8c8d',
                            font: { size: 11 },
                            callback: value => '$' + value.toLocaleString()
                        }
                    }
                },
                elements: {
                    point: {
                        radius: 4,
                        hoverRadius: 6,
                        backgroundColor: '#27ae60',
                        borderColor: '#fff',
                        borderWidth: 2
                    },
                    line: { borderWidth: 3 }
                },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    // ... rest of your methods remain unchanged ...
}

// Initialize charts when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    if (window.gymData) {
        window.gymCharts = new GymCharts();
    } else {
        const checkData = setInterval(() => {
            if (window.gymData) {
                window.gymCharts = new GymCharts();
                clearInterval(checkData);
            }
        }, 100);
    }
});

window.GymCharts = GymCharts;
