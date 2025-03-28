# WEB-assigment1

## در این پروژه، هدف ما طراحی یک صفحه وب است که محاسبات را به صورت آنی انجام دهد. کاربر با وارد کردن داده‌ها در فرم‌ها، نتیجه فوراً محاسبه و در صفحه نمایش داده می‌شود. حالا به طور دقیق‌تر هر بخش از کد را توضیح می‌دهیم تا عملکرد آن روشن شود.

---
### توضیح HTML:

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
```
1. `<title>Formula Calculator</title>`: عنوان صفحه را تعیین می‌کند که در تب مرورگر نمایش داده می‌شود.
2. `<link rel="stylesheet" href="styles.css">`: این خط فایل استایل "styles.css" را برای زیباسازی صفحه لینک می‌کند.
---
```html
<body>
<h2>Formula Calculation</h2>
```

1. `<body>`: در این بخش محتوای اصلی صفحه قرار دارد. اولین محتوای داخل `<body>`، یک تیتر `<h2>` است که عنوان اصلی صفحه را نمایش می‌دهد: "Formula Calculation".

---
#### ایجاد فرم‌ها برای محاسبات مختلف:

هر فرم در این بخش برای یک نوع محاسبه خاص است. حال این بخش‌ها را بررسی میکنیم:

```html
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
```

1. هر قسمت از فرم داخل یک `div` با کلاس `formula-container` قرار دارد تا امکان استایل‌دهی به آن به راحتی فراهم باشد.
2. `<h3>`: یک تیتر برای توضیح محاسبه‌ای که در این بخش انجام می‌شود (محاسبه قیمت با تخفیف).
3. `<label for="fee">`: برچسبی برای ورودی قیمت واحد.
4. `<input type="text" id="fee" placeholder="Unit Price">`: ورودی برای قیمت واحد که دارای شناسه "fee" است. شناسه‌ها برای ارجاع به این عناصر در JavaScript استفاده می‌شود.
5. بقیه برچسب‌ها و ورودی‌ها به همین ترتیب برای تعداد و تخفیف هستند.
6. `<formula evaluator="count*fee-discount"></formula>`: این عنصر خاص، یک فرمول برای محاسبه است که در آن، فرمول با استفاده از شناسه‌های ورودی‌ها نوشته می‌شود. در اینجا فرمول برای محاسبه قیمت به شکل `count*fee-discount` است.
---
```html
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
```

این بخش مشابه بخش قبلی است، با این تفاوت که اینجا یک معادله درجه 3 تعریف شده است. فرمول این معادله به شکل `a*x^3+b*x^2+c*x+d` است.

---
```html
<div class="formula-container">
  <h3>BMI Calculation</h3>
  <label for="weight">Weight (kg)</label>
  <input type="text" id="weight" placeholder="Weight">
  <label for="height">Height (m)</label>
  <input type="text" id="height" placeholder="Height">
  <formula evaluator="weight/(height^2)"></formula>
</div>
```

این بخش برای محاسبه BMI (شاخص توده بدنی) است. فرمول BMI به شکل `weight/(height^2)` است.

---

#### توضیح ساختار مهم (`<formula evaluator>`):

یکی از اجزای کلیدی در این پروژه عنصر HTML مهم زیر است:

```html
<formula evaluator="count*fee-discount"></formula>
```

این یک تگ سفارشی و غیر استاندارد HTML است که ما برای این پروژه تعریف کرده‌ایم تا کارایی پروژه افزایش یافته و کد تمیزتر باشد. این تگ به خودی خود معنایی ندارد، اما ما با استفاده از جاوا اسکریپت به آن معنا و عملکرد می‌دهیم.

ویژگی اصلی این عنصر سفارشی، خصیصه (Attribute) `evaluator` است که درون آن فرمول محاسبه موردنظر نوشته می‌شود.

برای مثال، در کد بالا (`count*fee-discount`):

- **count**، **fee** و **discount** هر کدام شناسه (`id`) یک عنصر ورودی دیگر در صفحه هستند.
- هر بار که مقادیر این ورودی‌ها تغییر کند، کد JavaScript مسئول خواندن این فرمول، استخراج شناسه‌ها، به دست آوردن مقادیر عددی از ورودی‌ها، انجام محاسبه و نمایش نتیجه خواهد بود.

به بیان دقیق‌تر، گام‌های اجرایی عبارتند از:

1. جاوا اسکریپت ابتدا مقدار خصیصه `evaluator` را می‌خواند.
2. عبارت ریاضی را آنالیز می‌کند تا تمامی متغیرها (مثلاً `count` یا `fee`) شناسایی شوند.
3. سپس از DOM (درخت ساختاری HTML) مقدار عددی این متغیرها را که کاربر وارد کرده می‌خواند.
4. پس از آن، عبارت ریاضی را به کمک مقادیر خوانده‌شده به صورت خودکار محاسبه می‌کند.
5. نتیجه این محاسبه را درون همان تگ `<formula>` به کاربر نمایش می‌دهد.
6. در صورتی که کاربر ورودی نامعتبر وارد کند یا عبارت فرمول معتبر نباشد، به کاربر پیام «Formula Invalid» نمایش داده می‌شود.

به عنوان مثال واضح‌تر، فرض کنید این بخش را داریم:

```html
<input id="fee" placeholder="Unit Price"/>
<input id="count" placeholder="Quantity"/>
<input id="discount" placeholder="Discount"/>

<formula evaluator="count*fee-discount"></formula>
```

---

#### نمونه‌های دیگری از کاربرد عنصر evaluator در صفحه:

مثلاً در بخش معادله درجه ۳:

```html
<formula evaluator="a*x^3+b*x^2+c*x+d"></formula>
```

در اینجا نیز، به محض ورود مقادیر در ورودی‌های مربوطه (`a`, `b`, `c`, `d`, `x`) جاوا اسکریپت عبارت فوق را خوانده، مقدار عددی هر متغیر را به دست آورده و نتیجه محاسبه معادله را نمایش می‌دهد.

مثال دیگر، محاسبه BMI:

```html
<formula evaluator="weight/(height^2)"></formula>
```

در اینجا هم هر زمان که مقدار وزن (`weight`) یا قد (`height`) عوض شود، مقدار BMI بلافاصله محاسبه و نمایش داده می‌شود.

به طور خلاصه، evaluator بخش اصلی این پروژه است که فرمولهای ریاضی را به کدهای اجرایی جاوااسکریپت تبدیل میکند و با تغییر مقادیر inputها، نتایج را به‌روزرسانی میکند.

---
#### بارگذاری فایل JavaScript:

```html
<script src="FormulaClass.js"></script>
</body>
</html>
```

1. `<script src="FormulaClass.js"></script>`: این خط به مرورگر می‌گوید که فایل جاوا اسکریپت "FormulaClass.js" را بارگذاری کند. این فایل مسئول انجام محاسبات و به‌روزرسانی صفحه است.

#### هدف فایل JavaScript (FormulaClass.js):

در این فایل جاوا اسکریپت، باید کلاس‌هایی تعریف کنیم که:

- **ورودی‌های مختلف را شناسایی کند**: مانند شناسه‌های "fee"، "count"، "discount" و غیره.
- **فرمول‌ها را پردازش کند**: فرمول‌های مختلف را از عناصر `<formula>` گرفته و بر اساس مقادیر ورودی‌ها محاسبات را انجام دهد.
- **به‌روزرسانی فوری صفحه**: با هر تغییر در ورودی‌ها، نتیجه به‌طور خودکار در صفحه نمایش داده شود.
- **کنترل خطا**: اگر فرمول نامعتبر بود، پیغام "Formula Invalid" نمایش داده شود.
---
#### نتیجه‌گیری:
در این کد، هدف اصلی انجام محاسبات مختلف از طریق ورودی‌های HTML و به‌روزرسانی سریع نتایج با استفاده از JavaScript است. صفحه به‌طور واکنش‌گرا عمل می‌کند، به طوری که هرگونه تغییر در ورودی‌ها بلافاصله در فرمول‌ها اعمال شده و نتیجه به‌روزرسانی می‌شود. این ساختار قابلیت گسترش و تغییر برای انواع مختلف فرمول‌ها را نیز فراهم می‌آورد.

---
### گزارش عملکرد و فرآیند کد جاوا اسکریپت

در این بخش از پروژه، کد جاوا اسکریپت برای انجام محاسبات و به‌روزرسانی سریع فرمول‌ها نوشته شده است. در اینجا به‌طور کامل عملکرد هر بخش از کد را توضیح می‌دهیم تا متوجه شویم که چطور این کد به محاسبات و به‌روزرسانی نتایج کمک می‌کند.

---
### توضیح کد:

#### تعریف کلاس FormulaCalculator:

```javascript
class FormulaCalculator {
    constructor() {
```

در اینجا یک کلاس به نام `FormulaCalculator` تعریف می‌شود. این کلاس مسئول انجام محاسبات و به‌روزرسانی فرمول‌ها است. در بخش `constructor()`، تمام تنظیمات اولیه انجام می‌شود.

---
#### انتخاب عناصر ورودی و فرمول‌ها:

```javascript
        this.inputs = document.querySelectorAll('input');
        this.formulas = document.querySelectorAll('formula');
```

در این بخش، دو مجموعه از عناصر HTML با استفاده از `document.querySelectorAll()` انتخاب می‌شوند:

- `inputs`: تمام ورودی‌ها (المان‌های `<input>`) که داده‌ها را از کاربر دریافت می‌کنند.
- `formulas`: تمام المان‌های `<formula>` که نتیجه محاسبات در آن‌ها نمایش داده می‌شود.

---
#### اضافه کردن EventListeners به ورودی‌ها:

```javascript
        this.inputs.forEach(input => {
            input.addEventListener('input', this.updateFormulas.bind(this));
        });
```

در این خط، به هر ورودی یک رویداد `input` اضافه می‌شود. این به این معناست که هر زمان کاربر مقداری را وارد کند، تابع `updateFormulas()` فراخوانی می‌شود تا فرمول‌ها به‌روزرسانی شوند.

---
#### فراخوانی اولیه تابع updateFormulas:

```javascript
        this.updateFormulas();
    }
```

پس از اضافه کردن EventListeners، در نهایت تابع `updateFormulas()` فراخوانی می‌شود تا به‌طور اولیه فرمول‌ها محاسبه و نتایج نمایش داده شوند.

---
#### تابع updateFormulas:

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

این تابع مسئول به‌روزرسانی تمام فرمول‌ها است. برای هر فرمول:

1. مقدار ویژگی `evaluator` گرفته می‌شود که شامل فرمول ریاضی است.
2. در صورتی که ممکن باشد فرمول را محاسبه میکند.
3. اگر فرمول به‌درستی محاسبه شود، نتیجه به‌عنوان متن در `<formula>` نمایش داده می‌شود. در غیر این صورت، عبارت `"Formula Invalid"` نمایش داده می‌شود.
4. اگر خطایی در محاسبه رخ دهد، دوباره عبارت `"Formula Invalid"` نمایش داده می‌شود.

---
#### تابع calculateFormula:

```javascript
    calculateFormula(evaluator) {
        if (evaluator === 'weight/(height^2)') {
            const height = document.getElementById('height').value;
            if (this.isHeightInCentimeters(height)) {
                return "Formula Invalid";
            }
        }
```

در این بخش از کد، ابتدا فرمول وارد شده بررسی می‌شود. در صورتی که فرمول مربوط به محاسبه BMI (وزن تقسیم بر مربع قد) باشد، ابتدا بررسی می‌شود که مقدار قد به‌صورت سانتی‌متر وارد شده است یا خیر. اگر مقدار قد به‌صورت سانتی‌متر وارد شده باشد، عبارت `"Formula Invalid"` باز می‌گردد.

---
#### استخراج متغیرها از فرمول:

```javascript
        const variables = this.extractVariables(evaluator);
        variables.forEach(variable => {
            const element = document.getElementById(variable);
            if (element) {
                evaluator = evaluator.replace(new RegExp(`\\b${variable}\\b`, 'g'), element.value);
            }
        });
```

در این بخش، تابع `extractVariables` برای استخراج نام متغیرها (مثل `fee`، `count` و غیره) از فرمول استفاده می‌شود. سپس برای هر متغیر، مقدار آن از ورودی HTML گرفته می‌شود و در فرمول جایگزین می‌شود.

---
#### جایگزینی عملگر توان با فرمت صحیح جاوا اسکریپت:

```javascript
        evaluator = evaluator.replace(/\^/g, '**');
        return eval(evaluator);
    }
```

در این خط، عملگر `^` که در فرمول برای توان استفاده می‌شود، با `**` جایگزین می‌شود. سپس فرمول نهایی با استفاده از تابع `eval()` محاسبه می‌شود.

---
#### تابع extractVariables:

```javascript
    extractVariables(evaluator) {
        const variablePattern = /[a-zA-Z]+\b/g;
        return Array.from(new Set(evaluator.match(variablePattern) || []));
    }
```

این تابع از یک الگوی منظم (Regular Expression) برای استخراج تمام متغیرهای موجود در فرمول استفاده می‌کند. به‌طور کلی، هر کلمه‌ای که از حروف و اعداد تشکیل شده باشد به‌عنوان یک متغیر شناسایی می‌شود.

---
#### تابع isHeightInCentimeters:

```javascript
    isHeightInCentimeters(height) {
        return /^\d+$/.test(height);
    }
```

این تابع بررسی می‌کند که آیا مقدار قد (که از ورودی گرفته شده است) به‌صورت عددی و بدون اعشار وارد شده است یا خیر. اگر عددی باشد، مقدار `true` برمی‌گرداند که به معنی وارد شدن قد به‌صورت سانتی‌متر است.
چون در فرمول BMI قد باید به صورت متر باشد در غیر این صورت Invalid Formula خروجی ما هست.

---
#### راه‌اندازی کلاس بعد از بارگذاری DOM:

```javascript
document.addEventListener('DOMContentLoaded', () => {
    new FormulaCalculator();
});
```

در این بخش، پس از بارگذاری کامل محتوای صفحه (DOM)، یک شیء از کلاس `FormulaCalculator` ساخته می‌شود که باعث می‌شود تمام فرمول‌ها به‌طور خودکار به‌روزرسانی شوند.

در این کد، اصول برنامه‌نویسی شیءگرا با تعریف کلاس `FormulaCalculator` رعایت شده است؛ به طوری که منطق محاسباتی، مدیریت رویدادها و اعتبارسنجی به صورت متدهای مجزا پیاده شده‌اند. دامنه (Scope) متغیرها به درستی محدود شده و این ساختار باعث افزایش انعطاف‌پذیری، قابلیت استفاده مجدد و سهولت نگهداری و توسعه‌ی کد در آینده می‌شود.

---

#### نتیجه‌گیری:

در این کد، هدف اصلی این است که فرمول‌های ریاضی مختلف را از داخل صفحات HTML گرفته و آن‌ها را بر اساس مقادیر وارد شده توسط کاربر محاسبه کرده و نتایج را به‌صورت سریع به‌روز کند. در این مسیر، از کلاس‌ها، توابع، رویدادها و الگوهای منظم استفاده شده است تا به‌طور مؤثر و بدون خطا محاسبات انجام شود.

---
### گزارش عملکرد و فرآیند کد CSS

در این بخش، کد CSS برای طراحی ظاهر صفحه و استایل‌دهی به آن نوشته شده است. این کد ظاهر صفحه را تنظیم می‌کند تا به‌طور زیبا و منظم به نمایش درآید. در ادامه هر بخش از کد به‌طور دقیق شرح داده شده است.

---
### توضیح کد CSS:

#### استایل‌دهی به بدنه صفحه (`body`):

```css
body {
    font-family: 'Times New Roman', sans-serif;
    padding: 20px;
    background-color: #faf8f8;
    background-image: url('srtar.png');
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    color: #131313;
}
```

1. `font-family: 'Times New Roman', sans-serif;`: این خط تعیین می‌کند که فونت اصلی صفحه باید `'Times New Roman'` باشد و اگر این فونت در دسترس نباشد، از یک فونت sans-serif استفاده خواهد شد.
2. `padding: 20px;`: این خط به بدنه صفحه یک حاشیه داخلی (padding) به اندازه 20 پیکسل می‌دهد تا فاصله‌ای بین محتوای صفحه و لبه‌ها ایجاد شود.
3. `background-color: #faf8f8;`: رنگ پس‌زمینه صفحه به رنگ ملایم `#faf8f8` تنظیم شده است.
4. برای تصویر پس زمینه از فایل star.png استفاده شده.
5. `background-size: contain;`: اندازه تصویر پس‌زمینه به‌گونه‌ای تنظیم می‌شود که به‌طور کامل در صفحه جا بگیرد و نسبت تصویر حفظ شود.

---
#### استایل‌دهی به تیتر اصلی (`h2`):

```css
h2 {
    text-align: center;
    font-size: 2em;
    margin-bottom: 40px;
    color: #131313;
}
```

1. `text-align: center;`: متن تیتر اصلی (`<h2>`) در وسط صفحه قرار می‌گیرد.
2. `font-size: 2em;`: اندازه فونت تیتر اصلی دو برابر اندازه معمولی تنظیم می‌شود.
3. `margin-bottom: 40px;`: فاصله‌ای 40 پیکسل از پایین تیتر به سایر محتوای زیر آن ایجاد می‌کند.

---
#### استایل‌دهی به هر بخش از فرمول‌ها (`.formula-container`):

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
1. `padding: 20px;`: حاشیه داخلی 20 پیکسل برای هر بخش از فرمول در نظر گرفته شده است تا محتوای داخلی از لبه‌ها فاصله داشته باشد.
2. `margin-bottom: 30px;`: فاصله‌ای 30 پیکسل از پایین هر بخش فرمول به سایر بخش‌های صفحه ایجاد می‌کند.
3. `width: 100%;`: عرض بخش‌ها به اندازه 100 درصد عرض موجود تنظیم می‌کنیم.
4. `max-width: 650px;`: حداکثر عرض برای این بخش‌ها 650 پیکسل است تا در اندازه‌های صفحه بزرگ‌تر به درستی نمایش داده شوند.
5. `margin-left: auto; margin-right: auto;`: این کد باعث می‌شود که هر بخش از فرمول‌ها در مرکز صفحه افقی قرار بگیرد.

---
#### استایل‌دهی به تیترهای فرعی (`h3`):

```css
h3 {
    font-size: 1.5em;
    margin-bottom: 18px;
    color: #0045af;
}
```

1. `font-size: 1.5em;`: اندازه فونت تیترهای فرعی (`<h3>`) به 1.5 برابر اندازه معمولی تنظیم می‌کنیم.
2. `margin-bottom: 18px;`: فاصله‌ای 18 پیکسل از پایین تیترهای فرعی به محتوای زیر آن‌ها ایجاد می‌کنیم.

---
#### استایل‌دهی به برچسب‌ها (`label`):

```css
label {
    display: block;
    font-size: 1em;
    margin-bottom: 8px;
}
```

1. `display: block;`: برچسب‌ها به‌صورت بلوک نمایش داده می‌شوند، به این معنا که هر برچسب در یک خط جدید قرار می‌گیرد.
2. `font-size: 1em;`: اندازه فونت برچسب‌ها برابر با اندازه معمولی تنظیم می‌شود.
3. `margin-bottom: 8px;`: فاصله‌ای 8 پیکسل از پایین هر برچسب به ورودی‌های زیر آن ایجاد می‌شود.

---
#### استایل‌دهی به ورودی‌ها (`input`):

```css
input {
    width: 96%;
    padding: 10px;
    margin-bottom: 15px;
    border: 1px solid #3e3d3d;
    border-radius: 4px;
    font-size: 1em;
    color: #333;
    transition: border-color 0.3s;
}
```

1. `width: 96%;`: عرض ورودی‌ها به 96 درصد عرض موجود تنظیم می‌شود تا کمی فضا در کنار ورودی‌ها باقی بماند.
2. `padding: 10px;`: حاشیه داخلی 10 پیکسل برای ورودی‌ها در نظر گرفته می‌شود تا فضای کافی برای وارد کردن داده‌ها وجود داشته باشد.
3. `margin-bottom: 15px;`: فاصله‌ای 15 پیکسل از پایین هر ورودی به سایر محتواها ایجاد می‌شود.
4. `border-radius: 4px;`: حاشیه‌های ورودی‌ها کمی گرد شده‌اند.
5. `font-size: 1em;`: اندازه فونت ورودی‌ها به اندازه معمولی تنظیم می‌شود.

---
#### استایل‌دهی به فرمول‌ها (`formula`):

```css
formula {
    display: block;
    margin-top: 15px;
    font-size: 1.2em;
    font-weight: bold;
    color: #131313;
}
```

1. `display: block;`: فرمول‌ها به‌صورت بلوک نمایش داده می‌شوند.
2. `margin-top: 15px;`: فاصله‌ای 15 پیکسل از بالای هر فرمول به سایر محتوای بالای آن ایجاد می‌شود.
3. `font-size: 1.2em;`: اندازه فونت فرمول‌ها کمی بزرگ‌تر از اندازه معمولی است.
4. `font-weight: bold;`: فرمول‌ها به‌صورت پررنگ نمایش داده می‌شوند.

---
#### نتیجه‌گیری:

در این کد CSS، هدف ایجاد ظاهری زیبا، مرتب و کاربرپسند برای صفحه بوده است. با استفاده از رنگ‌ها، سایه‌ها، فاصله‌ها و استایل‌های مناسب، طراحی صفحه به شکلی ساده و جذاب ارائه شده است. همچنین، توجه به پاسخگویی (responsive) و تنظیمات مختلف برای اندازه‌های مختلف صفحه، باعث شده تا صفحه به درستی در تمام دستگاه‌ها نمایش داده شود.

---
### استفاده از هوش مصنوعی:
از ابزارهای‌هوش مصنوعی به منظور یادگیری evaluator برای فرمول، همچنین رفع برخی از باگ‌هایی که در اینترنت پیدا نشد، بهتر کردن فایل CSS خود در بخش هایی که توضیح داده نشده صرفا برای زیباتر کردن جزئی و همچنین برای راهنمایی کلی در شی‌گرایی کردن(توضیح شی‌گرایی چیست). بیشتر برای راهنمایی و رفع باگ‌های خود.‌همچین برای کمک به تولید Regexها.

---
### امتحان کردن کد:
#### درستی کد:
به فرمول های خود ورودی میدهیم تا ببینیم بدستی خروجی میگیریم یا نه:

![Screenshot (1819).png](Screenshot%20%281819%29.png)
![Screenshot (1816).png](Screenshot%20%281816%29.png)

میبینیم که بدستی کار میکند.

---
#### ورودی های اشتباه:
به ورودی های خود فرمول نامعتبر میدهیم تا ببینیم که ایا Invalid Formula خروجی میدهد یا نه:

- ورودی شامل کاراکتر:
- ![Screenshot (1817).png](Screenshot%20%281817%29.png)
- قد به سانتی متر:
- ![Screenshot (1818).png](Screenshot%20%281818%29.png)

میبینیم که Invalid Formula در خروجی مشاهده میشود.