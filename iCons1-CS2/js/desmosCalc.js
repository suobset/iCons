var elt = document.getElementById('calculator');
var calculator = Desmos.GraphingCalculator(elt);
calculator.setExpression({ id: 'graph1', latex: 'y=x^2' });