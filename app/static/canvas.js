var chart = new CanvasJS.Chart("hchart",{
 height: 550, //in pixels
 axisX:{
  title: "Local Time",
  titleFontSize: 12,
  labelFontSize: 12,
  labelAngle: -60,
 },
 zoomEnabled: true,
 axisY:{
  title: "Txs/Ops per block",
  titleFontSize: 12,
  labelFontSize: 12,
 },
 data: [{
  type: "line",
  showInLegend: true,
  legendText: "Operations",
  toolTipContent: '<b>Operations</b><br />Block: #{block}<br /># Ops: {y}',
  xValueType: "dateTime",
  dataPoints: []
 }, {
  type: "line",
  showInLegend: true,
  legendText: "Transactions",
  toolTipContent: '<b>Transactions</b><br />Block: #{block}<br /># Txs: {y}',
  xValueType: "dateTime",
  dataPoints: []
 }]
});
