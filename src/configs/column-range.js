
export default {
    config:{
        title: { text: "Temperature variation by month", align: "left" },
        valueAxis: { title: { text: "Temperature range" } },
        series: [
            { id: "max", maxValueField: "max", minValueField: "min", label: "Temperature" }
        ],

        tooltip: {
            format: "<b>{{category}}</b><br/>{{point.minValue}} - {{point.maxValue}}",
            valueSuffix: ' C'
        }
    },
    url:"https://static.visuallyjs.com/data/chart/temperature-range.json",
};
