'use strict';
const populationSpans = document.querySelectorAll('.population');
const populations = [
    ...populationSpans
].map((span)=>// eslint disable next line
    Number(span.textContent.replace(/,/g, '')));
const total = populations.reduce((acc, countryPopulation)=>acc + countryPopulation, 0);
const average = total / populations.length;
const formatNumber = (num)=>num.toLocaleString('en-US');
document.querySelector('.total-population').textContent = formatNumber(total);
document.querySelector('.average-population').textContent = formatNumber(average);

//# sourceMappingURL=index.f75de5e1.js.map
