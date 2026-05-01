const lineData = {
    labels: [
        'Січень',
        'Лютий',
        'Березень',
        'Квітень',
        'Травень',
        'Червень',
        'Липень',
        'Серпень',
        'Вересень',
        'Жовтень',
        'Листопад',
        'Грудень',
    ],
    datasets: [
        {
            label: "Продажі (тис. dollars)",
            data: [5, 10, 15, 25, 30, 45, 50, 40, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            backgroundColor: 'rgba(75, 192, 192, 0.5)',
            tension: 0.3,
            pointRadius: 5,
        },
    ],
};

const lineConfig = {
    type: 'line',
    data: lineData,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: false,
            },
        },

        scales: {
            y: {
                beginAtZero: true,
            }
        },
    },
};

const myLineChart = new Chart(
    document.getElementById('myLineChart'),
    lineConfig,
);

const pieData = {
    labels: ["Оренда", "Їжа", "Транспорт", "Розваги", "Одежа", "Інше"],

    datasets: [
        {
            label: "Щомісячні витрати",
            data: [2500, 500, 150, 425, 700, 1025],
            backgroundColor: [
                'rgb(255, 99, 132)',
                'rgb(54, 162, 235)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(255, 2, 2)',
                'rgb(153, 102, 255)',
            ],

            hoverOffset: 10,
        },
    ],
}

const pieConfig = {
    type: 'doughnut',

    data: pieData,

    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: false,
            },
        },
    },
};

const myPieChart = new Chart(document.getElementById('myPieChart'), pieConfig);