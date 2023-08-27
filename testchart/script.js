new Chart(document.getElementById("pie-chart"), {
    type: 'doughnut',
    data:{
        labels: ["beginner Python", "intermediate python",
    "Web development", "beginner Java", "intermediate java"],
    datasets: [{
        backgroundColor: [ "red","blue","orange","yellow",
    "green"],
    data: [4,7,10,15,6]
    }]
    },
    options: {
        title: {
            display: true,
            text: 'Your results'
        },
        responsive:true
    }
});