
export const priceHistoryData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: '2025 Median Home Price ($1000s)',
      data: [410, 415, 418, 425, 432, 438, 445, 442, 435, 430, 425, 423],
      borderColor: '#1a73e8',
      backgroundColor: 'rgba(26, 115, 232, 0.1)',
      fill: true,
    },
    {
      label: '2024 Median Home Price ($1000s)',
      data: [390, 392, 395, 400, 410, 415, 420, 418, 415, 410, 405, 402],
      borderColor: '#34a853',
      backgroundColor: 'rgba(52, 168, 83, 0.1)',
      fill: true,
    }
  ]
};

export const inventoryData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: '2025 Inventory',
      data: [1350, 1320, 1290, 1246, 1210, 1180, 1150, 1175, 1210, 1240, 1265, 1290],
      borderColor: '#ea4335',
      backgroundColor: 'rgba(234, 67, 53, 0.1)',
      fill: true,
    }
  ]
};

export const salesVolumeData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: '2025 Sales Volume',
      data: [850, 870, 920, 980, 1050, 1120, 1080, 1040, 990, 960, 930, 910],
      borderColor: '#fbbc05',
      backgroundColor: 'rgba(251, 188, 5, 0.1)',
      fill: true,
    }
  ]
};

export const regionComparisonData = {
  labels: ['Heights', 'Katy', 'Sugar Land', 'Woodlands', 'Montrose', 'Spring', 'Cypress'],
  datasets: [
    {
      label: 'Median Price ($1000s)',
      data: [520, 480, 510, 540, 560, 420, 450],
      backgroundColor: ['#1a73e8', '#34a853', '#fbbc05', '#ea4335', '#46bdc6', '#7986cb', '#f06292'],
    }
  ]
};
