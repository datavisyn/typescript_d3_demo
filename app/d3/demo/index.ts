import * as d3 from 'd3';

const data: number[] = [10, 20, 30];
const chart = d3.select('#circles');

const group = chart.append('g')
  .attr('transform', 'translate(20, 100)');

const $update = group
  .selectAll('circle')
  .data(data); // join circle elements + data

const $enter = $update
  .enter() // ENTER selection to add new elements
  .append('circle');

$enter
  .merge($update) // merge ENTER & UPDATE to apply common settings
  .attr('cx', (d: number, i: number) => i * 100)
  .transition()
  .delay((d: number, i: number) => i * 250)
  .duration(500)
  .attr('r', (d: number) => d);

$update.exit().remove(); // remove obsolete elements on EXIT