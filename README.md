# WEB-assigment1

---

### 1. **بخش `<head>`**

```html
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formula Calculator</title>
    <link rel="stylesheet" href="styles.css">
</head>
```

#### توضیح:

- **`<head>`**: این بخش شامل اطلاعات متا درباره سند است که به طور مستقیم در صفحه نمایش داده نمی‌شود اما برای عملکرد و ظاهر صفحه ضروری است.

1. **`<title>Formula Calculator</title>`**:
    - محتوای این تگ به عنوان عنوان صفحه در تب مرورگر نمایش داده می‌شود. این به شناسایی صفحه کمک می‌کند زمانی که چندین تب باز هستند و دسترسی به صفحه را برای نرم‌افزارهای خوانش صفحه آسان‌تر می‌کند.

2. **`<link rel="stylesheet" href="styles.css">`**:
    - این تگ فایل CSS خارجی (`styles.css`) را به سند HTML متصل می‌کند که برای استایل‌دهی به عناصر صفحه (مثلاً طراحی، رنگ‌ها، فونت‌ها) استفاده می‌شود. این باعث می‌شود که صفحه زیباتر و خواناتر به نظر برسد.

---

### 2. **بخش `<body>`**

```html
<body>
<h2>Formula Calculation</h2>
```

#### توضیح:
- **`<body>`**: این تگ محتوای قابل مشاهده صفحه را دربر می‌گیرد. همه چیز داخل تگ `<body>` توسط مرورگر نمایش داده می‌شود.
- **`<h2>Formula Calculation</h2>`**: این یک سرعنوان برای صفحه است که موضوع را معرفی می‌کند. این به صورت متنی بزرگ و پررنگ نمایش داده می‌شود تا زمینه‌سازی برای محتوای بعدی (فرمول‌ها) باشد.

---

### 5. **فرمول 1: محاسبه قیمت با تخفیف**

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

#### توضیح:
- **`<div class="formula-container">`**: این کانتینر تمام عناصر مربوط به فرمول اول را در بر می‌گیرد. `class="formula-container"` استایل‌هایی است که در CSS تعریف شده‌اند.
- **`<h3>Price Calculation with Discount</h3>`**: این سرعنوان زمینه‌سازی برای فرمول اول است که قیمت را پس از اعمال تخفیف محاسبه می‌کند.

- **`<label for="fee">Unit Price</label>`**:
    - تگ `<label>` شرحی برای یک فیلد ورودی تعریف می‌کند. `for="fee"` این برچسب را به فیلد ورودی با `id="fee"` متصل می‌کند.
    - **`Unit Price`** متنی است که کاربر برای توصیف فیلد ورودی می‌بیند.

- **`<input type="text" id="fee" placeholder="Unit Price">`**:
    - این یک فیلد ورودی ایجاد می‌کند که کاربر می‌تواند **قیمت واحد** را وارد کند.
    - `id="fee"` تضمین می‌کند که ما می‌توانیم به این فیلد به صورت برنامه‌نویسی (در جاوااسکریپت) ارجاع دهیم.
    - `placeholder="Unit Price"` یک راهنمایی داخل فیلد ورودی نشان می‌دهد که زمانی که کاربر شروع به تایپ می‌کند، از بین می‌رود.

- **`<label for="count">Quantity</label>`** و **`<input type="text" id="count" placeholder="Quantity">`**:
    - به طور مشابه، این جفت برچسب/ورودی به کاربر این امکان را می‌دهد که **تعداد** اقلامی که خریداری می‌کند را وارد کند.

- **`<label for="discount">Discount</label>` و `<input type="text" id="discount" placeholder="Discount">`**:
    - این جفت برچسب/ورودی به کاربر این امکان را می‌دهد که مقدار **تخفیف** را وارد کند.

- **`<formula evaluator="count*fee-discount"></formula>`**:
    - تگ `<formula>` یک تگ HTML سفارشی است. این تگ یک ویژگی به نام `evaluator` دارد که فرمول محاسباتی را برای نمایش نتیجه مشخص می‌کند.
    - در این مورد، فرمول `"count*fee-discount"` است که به این معناست که قیمت کل با ضرب تعداد (`count`) در قیمت واحد (`fee`) و سپس کسر تخفیف (`discount`) محاسبه می‌شود.

---

### 3. **فرمول 2: معادله درجه 3**

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

#### توضیح:
- این بخش مشابه فرمول اول است اما یک **معادله مکعبی** را حل می‌کند. معادله درجه 3 به این صورت است:  
  \[ f(x) = a \times x^3 + b \times x^2 + c \times x + d \]

- **ورودی‌ها برای `x`, `a`, `b`, `c`, `d`**:
    - کاربر مقادیر برای متغیر `x` و ضرایب `a`, `b`, `c` و `d` را وارد می‌کند.
    - این ورودی‌ها در فرمول برای محاسبه مقدار معادله درجه استفاده می‌شوند.

- **`<formula evaluator="a*x^3+b*x^2+c*x+d"></formula>`**:
    - ویژگی `evaluator` تگ `<formula>` فرمول معادله مکعبی را مشخص می‌کند که باید بر اساس مقادیر ورودی محاسبه شود.
    - این فرمول به ورودی‌های `a`, `b`, `c`, `d` و `x` ارجاع می‌دهد.

---

### 4. **فرمول 3: محاسبه BMI**

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

#### توضیح:
- **فرمول BMI**: فرمول برای محاسبه **شاخص توده بدنی (BMI)** به این صورت است:
  \[ \text{BMI} = \frac{\text{weight}}{\text{height}^2} \]

- **ورودی‌ها برای `weight` و `height`**:
    - کاربر **وزن** (به کیلوگرم) و **قد** (به متر) خود را وارد می‌کند.

- **`<formula evaluator="weight/(height^2)"></formula>`**:
    - ویژگی `evaluator` فرمول محاسبه BMI را مشخص می‌کند: `"weight/(height^2)"`.
    - فرمول به طور داینامیک به‌روز می‌شود زمانی که کاربر مقادیر وزن یا قد را تغییر دهد.

---

### 5. **`<script src="script.js"></script>`**

```html
<script src="script.js"></script>
```

#### توضیح:
- این تگ فایل جاوااسکریپت خارجی (`script.js`) را به سند HTML متصل می‌کند که حاوی منطق محاسبه فرمول‌ها، به‌روز کردن نتایج به‌طور داینامیک، و مدیریت رویدادهای ورودی‌های کاربر است.

---

کاربر مقادیر را در فیلدهای ورودی وارد می‌کند و نتایج به‌طور داینامیک در تگ‌های `<formula>` نمایش داده می‌شود. این فرمول‌ها توسط ویژگی `evaluator` که شامل عبارت ریاضی است، تعریف شده‌اند و نتایج به‌طور لحظه‌ای به‌روز می‌شوند زمانی که کاربر با ورودی‌ها تعامل می‌کند.
