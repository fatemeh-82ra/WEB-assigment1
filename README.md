# WEB-assigment1
Let's dive into the code in much more detail and break it down step by step. I will explain each component of the code, how it works, and the specific role each part plays in building the functionality of the formula calculator.

### 1. **HTML Structure** (Defining the User Interface)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formula Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<h2>Formula Calculation</h2>

<!-- Formula 1: Price Calculation with Discount -->
<div class="formula-container">
    <h3>Price Calculation with Discount</h3>
    <label for="fee">Unit Price</label>
    <input type="text" id="fee" placeholder="Unit Price">
    <label for="count">Quantity</label>
    <input type="text" id="count" placeholder="Quantity">
    <label for="discount">Discount</label>
    <input type="text" id="discount" placeholder="Discount">
    <formula evaluator="count*fee-discount"></formula>
</div>

<!-- Formula 2: Cubic Equation -->
<div class="formula-container">
    <h3>Cubic Equation: f(x) = a * x^3 + b * x^2 + c * x + d</h3>
    <label for="x">Value of x</label>
    <input type="text" id="x" placeholder="Enter x">
    <label for="a">Coefficient a</label>
    <input type="text" id="a" placeholder="Enter coefficient a">
    <label for="b">Coefficient b</label>
    <input type="text" id="b" placeholder="Enter coefficient b">
    <label for="c">Coefficient c</label>
    <input type="text" id="c" placeholder="Enter coefficient c">
    <label for="d">Coefficient d</label>
    <input type="text" id="d" placeholder="Enter coefficient d">
    <formula evaluator="a*x^3+b*x^2+c*x+d"></formula>
</div>

<!-- Formula 3: BMI Calculation -->
<div class="formula-container">
    <h3>BMI Calculation</h3>
    <label for="weight">Weight (kg)</label>
    <input type="text" id="weight" placeholder="Weight">
    <label for="height">Height (m)</label>
    <input type="text" id="height" placeholder="Height">
    <formula evaluator="weight/(height^2)"></formula>
</div>

<script src="script.js"></script>
</body>
</html>
```

#### **Detailed Explanation**:

1. **`<!DOCTYPE html>`**:
   - This declaration defines the document as an HTML5 document, allowing the browser to interpret it according to the HTML5 standard.
   
2. **`<html>` Tag**:
   - This tag encloses the entire HTML document, with the `lang="en"` attribute indicating that the content is in English.

3. **`<head>` Section**:
   - **`<meta charset="UTF-8">`**: Ensures the document is interpreted using the UTF-8 character set, which supports a wide range of characters (such as special characters and accents).
   - **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: This line is essential for making the page responsive on mobile devices. It ensures that the page width adjusts to the screen width of the device.
   - **`<title>`**: The title of the page displayed on the browser tab.
   - **`<link rel="stylesheet" href="styles.css">`**: Links to the external CSS file for styling the HTML elements.

4. **`<body>` Section**:
   - **`<h2>`**: The main heading for the page, giving the user a sense of the purpose of the page ("Formula Calculation").
   
5. **Formula Containers**:
   - Each formula (e.g., Price Calculation with Discount, Cubic Equation, BMI Calculation) is enclosed in a `<div class="formula-container">`. This is where the user will input data and the result will be displayed.
   - **Input Fields**: Each formula has its own set of input fields where the user provides data (e.g., `Unit Price`, `Quantity`, `Weight`, etc.).
     - For example, in the Price Calculation with Discount section:
       ```html
       <label for="fee">Unit Price</label>
       <input type="text" id="fee" placeholder="Unit Price">
       ```
     - This defines an input field for the user to enter the unit price, identified by the ID `fee`.
   - **`<formula>` Tags**: These tags display the calculated result. The `evaluator` attribute of each `<formula>` tag contains a string representing the formula to be evaluated (e.g., `count*fee-discount`).

---

### 2. **JavaScript Logic** (FormulaCalculator Class)

The JavaScript is responsible for handling the user interactions and performing the calculations dynamically when the user inputs values into the fields.

```javascript
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
}
```

#### **Detailed Explanation**:

1. **`constructor()`**:
   - The constructor is the initial method that runs when an instance of the `FormulaCalculator` class is created.
   - **`this.inputs`**: Selects all the `<input>` elements on the page. These are the fields where the user inputs values.
   - **`this.formulas`**: Selects all the `<formula>` elements where the results will be displayed.
   - **Event Listeners**: For each input field, an event listener is added to trigger the `updateFormulas` method when any input changes (via the `input` event).
   - **`updateFormulas()`** is also called immediately after the page loads to ensure that any pre-existing values (if any) are calculated on load.

---

```javascript
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
```

#### **Explanation**:
1. **`updateFormulas()`**:
   - This method iterates through each `<formula>` element and retrieves its `evaluator` attribute (which contains the formula to be calculated).
   - **`this.calculateFormula(evaluator)`**: The formula is passed to the `calculateFormula` method, which computes the result based on the input values.
   - **Error Handling**: If an error occurs during the calculation (for example, if the formula is incorrect), it catches the error and displays "Formula Invalid".

---

```javascript
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
```

#### **Explanation**:
1. **`calculateFormula()`**:
   - **BMI Special Case**: Before evaluating the formula, it checks if the evaluator is for BMI (`weight/(height^2)`). If the height is in centimeters (whole number without decimal), it immediately returns "Formula Invalid".
   - **Variable Replacement**: The method then extracts the variables (like `weight`, `height`, `count`, `fee`, etc.) from the `evaluator` string and replaces them with the actual values from the input fields.
     - **Example**: If the `evaluator` is `"count*fee-discount"`, it will replace `count` with the value of the `#count` input field.
   - **Math Operators**: The method replaces the `^` operator with `**` to make it compatible with JavaScript's exponentiation syntax (since `^` is not supported in JavaScript as a power operator).
   - **Evaluation**: The `eval()` function is used to calculate the final result by evaluating the string as JavaScript code.

---

### 3. **CSS Styling**

```css
body {
    font-family: 'Times New Roman', sans-serif;
    padding: 20px;
    background-color: #faf8f8;
    background-image: url('star.png');
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    color: #131313;
}
```

#### **Explanation**:
1. **Background**: The body of the page has a background image (`star.png`) that is centered and does not repeat. The background color is a soft light gray (`#faf8f8`), and the text color is dark (`#131313`), which ensures good readability.

---

```css
.formula-container {
    background-color: #cfdae3;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin-bottom: 30px;
    width: 100%;
    max-width: 650px;
    margin-left: auto;
    margin-right: auto;
}
```

#### **Explanation**:
1. **Formula Container**: This section styles the containers that hold each formula input and the result display:
   - **Background Color**: `#cfdae3` is a soft pastel color to differentiate the formula containers from the rest of the page.
   - **Rounded Corners**: The `border-radius` property rounds the corners of the container for a softer look.
   - **Box Shadow**: The `box-shadow` creates a subtle shadow effect for depth.
   - **Padding and Margin**: Ensures there is space inside and around each container. The `margin-left` and `margin-right` set the container to be centered on the page.

---

### Conclusion:

This project is an interactive, dynamic calculator where the user inputs values, and formulas are evaluated and displayed instantly. The logic is encapsulated in a JavaScript class (`FormulaCalculator`), which handles the formula evaluation, dynamic updating of the results, and special cases (like checking for height in centimeters for BMI). The HTML provides the structure, and the CSS ensures a clean and responsive user interface.

This approach leverages object-oriented programming (OOP) principles such as encapsulation and modularity, making the code reusable and maintainable.
