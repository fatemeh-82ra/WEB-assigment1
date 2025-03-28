class FormulaCalculator {
    constructor() {

        this.inputs = document.querySelectorAll('input');
        this.formulas = document.querySelectorAll('formula');

        this.inputs.forEach(input => {
            input.addEventListener('input', this.updateFormulas.bind(this));
        });

        this.updateFormulas();
    }

    updateFormulas() {
        this.formulas.forEach(formula => {
            const evaluator = formula.getAttribute('evaluator');
            try {
                const result = this.calculateFormula(evaluator);
                formula.textContent = isNaN(result) ? "Formula Invalid" : result.toFixed(2);
            } catch (error) {
                formula.textContent = "Formula Invalid";
            }
        });
    }

    calculateFormula(evaluator) {

        if (evaluator === 'weight/(height^2)') {
            const height = document.getElementById('height').value;
            if (this.isHeightInCentimeters(height)) {
                return "Formula Invalid";
            }
        }

        const variables = this.extractVariables(evaluator);
        variables.forEach(variable => {
            const element = document.getElementById(variable);
            if (element) {
                evaluator = evaluator.replace(new RegExp(`\\b${variable}\\b`, 'g'), element.value);
            }
        });

        evaluator = evaluator.replace(/\^/g, '**');
        return eval(evaluator);
    }

    extractVariables(evaluator) {
        const variablePattern = /[a-zA-Z]+\b/g;
        return Array.from(new Set(evaluator.match(variablePattern) || []));
    }

    isHeightInCentimeters(height) {

        return /^\d+$/.test(height);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    new FormulaCalculator();
});
