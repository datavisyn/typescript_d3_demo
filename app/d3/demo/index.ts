import * as d3 from 'd3';

const chart = d3
    .select('.circles')
    .attr('width', 500);

const group = chart.append('g')
  .attr('transform', 'translate(20, 100)');


function update(data: number[]) {
    const $update = group
      .selectAll('circle')
      .data(data); // join circle elements + data

    const $enter = $update
      .enter() // ENTER selection to add new elements
      .append('circle')
        .attr('cx', (d: number, i: number) => i * 100);

    $enter
      .merge($update) // merge ENTER & UPDATE to apply common settings
      .transition()
      .delay((d: number, i: number) => i * 250)
      .duration(500)
        .attr('r', (d: number) => d);

    $update.exit().remove(); // remove obsolete elements on EXIT
}


const radii: number[] = [10, 20, 30, 30];

update(radii);

setTimeout(() => {
    radii.pop(); // remove last item
    radii.push(20); // append an item
    radii.push(10);
    update(radii);
}, 2000);