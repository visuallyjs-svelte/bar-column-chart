
export default {
    config:{
        title: { text: "Fuel Consumption" },
        subtitle: { text: "A comparison" },
        categoryAxis: {
            title: { text: "Fuel" }
        },
        valueAxis: {
            title: { text: "Amount consumed" }
        },
        series: [{ valueField: "value", label: "Type" }],
        tooltip: { format: "{{category}}:{{point.value}}" }
    },
    url:"https://static.visuallyjs.com/data/chart/fuel-consumption.json",
};
