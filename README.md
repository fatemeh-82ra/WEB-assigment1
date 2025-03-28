# WEB-assigment1
# WEB-assigment1

---

### 1. **ساختار HTML** (تعریف رابط کاربری)


#### **توضیح دقیق**:

1. **`<!DOCTYPE html>`**:
    - این اعلان سند را به‌عنوان یک سند HTML5 تعریف می‌کند که به مرورگر این امکان را می‌دهد که آن را مطابق با استاندارد HTML5 تفسیر کند.

2. **`<html>` تگ**:
    - این تگ تمام سند HTML را در بر می‌گیرد و ویژگی `lang="en"` به معنای این است که محتوای صفحه به زبان انگلیسی است.

3. **بخش `<head>`**:
    - **`<meta charset="UTF-8">`**: این خط از تگ متا، اطمینان حاصل می‌کند که سند با استفاده از مجموعه کاراکتر UTF-8 تفسیر می‌شود که از طیف گسترده‌ای از نویسه‌ها (مانند نویسه‌های خاص و علائم) پشتیبانی می‌کند.
    - **`<meta name="viewport" content="width=device-width, initial-scale=1.0">`**: این خط برای ریسپانسیو کردن صفحه در دستگاه‌های موبایل است و اطمینان می‌دهد که عرض صفحه به عرض صفحه نمایش دستگاه تطبیق داده شود.
    - **`<title>`**: عنوان صفحه که در تب مرورگر نمایش داده می‌شود.
    - **`<link rel="stylesheet" href="styles.css">`**: فایل CSS خارجی را لینک می‌دهد تا ظاهر عناصر HTML را تنظیم کند.

4. **بخش `<body>`**:
    - **`<h2>`**: عنوان اصلی صفحه که به کاربر اطلاعات می‌دهد که این صفحه برای انجام محاسبات فرمول است.

5. **کانتینرهای فرمول**:
    - هر فرمول (مانند محاسبه قیمت با تخفیف، معادله مکعبی، و محاسبه BMI) در یک `<div class="formula-container">` قرار دارد. اینجا جایی است که کاربر مقادیر را وارد می‌کند و نتیجه نمایش داده می‌شود.
    - **فیلدهای ورودی**: هر فرمول فیلدهای ورودی خود را دارد که کاربر می‌تواند مقادیر را وارد کند (مانند `قیمت واحد`، `تعداد`، `وزن` و غیره).
        - برای مثال، در بخش "محاسبه قیمت با تخفیف":
          ```html
          <label for="fee">Unit Price</label>
          <input type="text" id="fee" placeholder="Unit Price">
          ```
        - این فیلد ورودی است که به کاربر اجازه می‌دهد قیمت واحد را وارد کند و شناسه آن `fee` است.
    - **تگ‌های `<formula>`**: این تگ‌ها برای نمایش نتیجه محاسبه شده استفاده می‌شوند. ویژگی `evaluator` هر تگ `<formula>` شامل رشته‌ای است که فرمول برای انجام محاسبه بر اساس مقادیر ورودی است.

---

### 2. **منطق جاوا اسکریپت (کلاس FormulaCalculator)**

جاوا اسکریپت مسئولیت پردازش تعاملات کاربر و انجام محاسبات به صورت داینامیک زمانی که کاربر مقادیر را در فیلدهای ورودی وارد می‌کند را بر عهده دارد.

#### کلاس `FormulaCalculator`:

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

#### **توضیح دقیق**:

1. **تعریف کلاس**:
    - کلاس `FormulaCalculator` مسئول انجام محاسبات فرمول و به‌روزرسانی نتایج است.

2. **`constructor()`**:
    - **`this.inputs`**: تمام عناصر `<input>` صفحه را انتخاب می‌کند. این‌ها فیلدهایی هستند که کاربر مقادیر را وارد می‌کند.
    - **`this.formulas`**: تمام عناصر `<formula>` صفحه را انتخاب می‌کند که نتایج در آن‌ها نمایش داده خواهد شد.
    - **اضافه کردن شنونده رویداد**: برای هر فیلد ورودی یک شنونده رویداد اضافه می‌شود که به محض تغییر مقدار فیلد، متد `updateFormulas()` را فراخوانی می‌کند.
    - **`updateFormulas()`** بلافاصله پس از بارگذاری صفحه فراخوانی می‌شود تا اطمینان حاصل شود که اگر مقادیری قبلاً وارد شده باشد، فرمول‌ها به‌روز شوند.

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

#### **توضیح دقیق**:

1. **`updateFormulas()`**:
    - این متد هر بار که فیلد ورودی تغییر می‌کند فراخوانی می‌شود.
    - برای هر تگ `<formula>` در صفحه، ویژگی `evaluator` را می‌گیرد که شامل فرمول محاسبه است.
    - سپس از متد `calculateFormula()` برای محاسبه نتیجه استفاده می‌کند.
    - اگر نتیجه معتبر باشد، آن را در تگ `<formula>` نمایش می‌دهد. در غیر این صورت، عبارت "Formula Invalid" نشان داده می‌شود.
    - اگر خطایی در هنگام محاسبه رخ دهد (مثل فرمول نادرست)، پیام "Formula Invalid" نمایش داده می‌شود.

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

#### **توضیح دقیق**:

1. **`calculateFormula()`**:
    - این متد فرمول داده‌شده را محاسبه می‌کند.
    - برای فرمول BMI (`weight/(height^2)`)، بررسی می‌کند که آیا ارتفاع به‌صورت سانتی‌متر (عدد صحیح بدون نقطه اعشاری) وارد شده است. اگر بله، "Formula Invalid" برمی‌گرداند.
    - سایر فرمول‌ها با جایگزینی نام متغیرها (مانند `count`, `fee`, `discount`) با مقادیر وارد شده در فیلدهای ورودی انجام می‌شوند.
    - `eval()` برای ارزیابی فرمول استفاده می‌شود.

---

### 3. **استایل CSS**

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

#### **توضیح دقیق**:

1. **پس‌زمینه**: پس‌زمینه بدنه صفحه یک تصویر (star.png) است که به صورت مرکز چین و بدون تکرار قرار می‌گیرد. رنگ پس‌زمینه به صورت نرمی خاکی است و رنگ متن تیره است تا خوانایی را تضمین کند.

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

#### **توضیح دقیق**:

1. **کانتینر فرمول**: این بخش ظاهر کانتینرهایی را که فرمول‌ها و نتایج در آن‌ها نمایش داده می‌شود، مشخص می‌کند:
    - **رنگ پس‌زمینه**: رنگ ملایم سبز کمرنگ برای تمایز بخش فرمول‌ها از سایر بخش‌ها.
    - **گوشه‌های گرد**: با استفاده از `border-radius` گوشه‌ها نرم‌تر شده‌اند.
    - **سایه**: برای ایجاد عمق از `box-shadow` استفاده شده است.
    - **فضاها**: از `padding` و `margin` برای ایجاد فضا درون و اطراف کانتینر استفاده می‌شود.

---

### نتیجه‌گیری:
این پروژه یک ماشین‌حساب داینامیک است که فرمول‌ها را به‌صورت زنده محاسبه می‌کند. منطق برنامه در کلاس `FormulaCalculator` قرار دارد و از روش‌های برنامه‌نویسی شی‌گرا برای اطمینان از مقیاس‌پذیری و نگهداری آسان استفاده شده است. این کد به راحتی قابل گسترش است و می‌توان فرمول‌های جدید به آن اضافه کرد.
