// FormulaCalculator class that handles calculation and updating
class FormulaCalculator {
    constructor() {
        // Attach event listeners to input fields
        this.inputs = document.querySelectorAll('input');
        this.formulas = document.querySelectorAll('formula');

        // Add event listeners for input changes
        this.inputs.forEach(input => {
            input.addEventListener('input', this.updateFormulas.bind(this));
        });

        // Initially update all formulas when the page loads
        this.updateFormulas();
    }

    // Method to update all formulas
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

    // Method to calculate a formula based on the evaluator string
    calculateFormula(evaluator) {
        // Special handling for BMI to check if height is in centimeters
        if (evaluator === 'weight/(height^2)') {
            const height = document.getElementById('height').value;
            if (this.isHeightInCentimeters(height)) {
                return "Formula Invalid"; // Return Formula Invalid if height is in centimeters
            }
        }

        // Dynamically evaluate the formula by replacing variable names with input values
        const variables = this.extractVariables(evaluator);
        variables.forEach(variable => {
            const element = document.getElementById(variable);
            if (element) {
                evaluator = evaluator.replace(new RegExp(`\\b${variable}\\b`, 'g'), element.value);
            }
        });

        // Replace any math operators (like x^2 for power, etc.) and evaluate
        evaluator = evaluator.replace(/\^/g, '**'); // Convert ^ to ** for power operations
        return eval(evaluator); // Evaluate the formula
    }

    // Method to extract variables from the evaluator
    extractVariables(evaluator) {
        const variablePattern = /[a-zA-Z]+\b/g;  // Match variable names like "count", "fee", etc.
        return Array.from(new Set(evaluator.match(variablePattern) || [])); // Extract unique variables
    }

    // Method to check if height is in centimeters (whole number without decimal)
    isHeightInCentimeters(height) {
        // Check if height is a whole number without a decimal point
        return /^\d+$/.test(height);
    }
}

// Initialize the formula calculator on page load
document.addEventListener('DOMContentLoaded', () => {
    new FormulaCalculator();
});
