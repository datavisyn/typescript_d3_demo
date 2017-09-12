import * as d3 from 'd3';

function update(data: string[]) {
    // TODO Join data to <li> elements and update the <ul> element accordingly
}

const names: string[] = ['Anna', 'John', 'Thomas', 'Linda'];
update(names);

setTimeout(() => {
    names.splice(1, 1); // delete one element
    names.push('James'); // add an element at the end
    update(names);
}, 2000);

