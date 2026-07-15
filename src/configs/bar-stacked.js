
export default {
    config:{
        title: { text: "Football Tournament Results" },
        series: [
            { valueField: "cl", label: "Champions League" },
            { valueField: "fa", label: "FA Cup" },
            { valueField: "bpl", label: "British Premier League" }
        ],
        plotOptions: {
            dataLabels: true,
            stacked:true
        }
    },
    url:"https://static.visuallyjs.com/data/chart/football-tournaments.json",
};
