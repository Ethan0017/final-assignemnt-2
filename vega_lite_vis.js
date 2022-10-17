var vg_1 = "cheapest_bar.vg.json";

vegaEmbed("#bar_chart", vg_1).then(function(result) {
// Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);



var vg_2 = "lineChart.json";
vegaEmbed("#line_chart", vg_2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);



var vg_3 = "pieChart.json";
vegaEmbed("#pie_chart", vg_3).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
    }).catch(console.error);



var vg_4 = "rainmap.json";
  vegaEmbed("#world_map", vg_4).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  }).catch(console.error);