import * as d3 from 'd3';

interface ICarParts {
  category: string;
  amount: number;
}

const carParts: ICarParts[] = [
  { category: 'Tires', amount: 42 },
  { category: 'Engines', amount: 45 },
  { category: 'Exhausts', amount: 37 }
]

const categories : string[] = carParts.map((part) => part.category);
const maximumAmount: number = d3.max(carParts, (d) => d.amount);

const xScale = d3
  .scaleBand()
  .domain(categories)
  .rangeRound([0, 600]); // from 0 to the width of the SVG element

const yScale = d3
  .scaleLinear()
  .domain([0, maximumAmount])
  .range([400, 0]); // from the height of the SVG element to 0 (the origin of pixels is at the top left)

const xAxis = d3.axisBottom(xScale);
const yAxis = d3.axisLeft(yScale);

d3.select('.x-axis').call(xAxis);
d3.select('.y-axis').call(yAxis);