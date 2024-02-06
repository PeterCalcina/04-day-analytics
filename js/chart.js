let root = document.documentElement;

const chartData = {
  datasets: [{
    data: [37.5, 11, 33.6, 6],
    backgroundColor: [
      getComputedStyle(root).getPropertyValue('--blue-color-2').trim(),
      getComputedStyle(root).getPropertyValue('--blue-color-3').trim(),
      getComputedStyle(root).getPropertyValue('--blue-color-4').trim(),
      getComputedStyle(root).getPropertyValue('--blue-color-1').trim(),
    ],
    hoverBackgroundColor: [
      getComputedStyle(root).getPropertyValue('--hover-color').trim(),
    ],
    borderWidth: 5,
    borderColor: getComputedStyle(root).getPropertyValue('--card-bg-color').trim(),
  }]
};

const chart = document.querySelector('.chart-analytics');

let newChart = new Chart(chart, {
  type: 'doughnut',
  data: chartData,
  options: {
    responsive: true,
    cutout: 50,
    borderRadius: 5,
  },
  
});