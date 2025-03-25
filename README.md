# Mini HR Ulility App

Welcome to your JavaScript activity for practicing **object and array destructuring**, **template literals**, and **function composition**. You'll be working with a simulated employee object and building small utilities like an HR assistant might use.

---

## 🧾 Object: `employee`

```js
const employee = {
  firstName: 'Pedro',
  lastName: 'Penduko',
  role: 'QA Analyst',
  department: 'IT',
  skills: ['JavaScript', 'Cypress', 'Postman'],
};
```

---

## 🔰 Activity 1: `introduceEmployee()`

### ✅ Objective:

- Use **object destructuring** to extract `firstName`, `lastName`, `role`, and `department`.
- Return an introduction string using **template literals**.

### 📌 Instructions:

- Create a function that accepts the `employee` object.
- Destructure the relevant properties.
- Return the sentence:  
  `👋 Hello, I'm Pedro Penduko, a QA Analyst from the IT department.`

### 💡 Sample Output:

```js
console.log(introduceEmployee(employee));
// 👋 Hello, I'm Pedro Penduko, a QA Analyst from the IT department.
```

---

## 🔰 Activity 2: `listSkills()`

### ✅ Objective:

- Use **array destructuring** to extract the first three skills from `employee.skills`.
- Return a clean sentence listing them.

### 📌 Instructions:

- Accept an array of skills.
- Destructure it into three variables.
- Return the sentence:  
  `🧠 Top Skills: JavaScript, Cypress, and Postman.`

### 💡 Sample Output:

```js
console.log(listSkills(employee.skills));
// 🧠 Top Skills: JavaScript, Cypress, and Postman
```

---

## 🔰 Activity 3: `summarizeEmployee()`

### ✅ Objective:

- Use the two functions above to create a full employee summary.

### 📌 Instructions:

- Accept the `employee` object.
- Call both `introduceEmployee()` and `listSkills()`.
- Return the combined string.

### 💡 Sample Output:

```js
console.log(summarizeEmployee(employee));
// 👋 Hello, I'm Pedro Penduko, a QA Analyst from the IT department.
// 🧠 Top Skills: JavaScript, Cypress, and Postman
```

---

## 🏃 Run the app

```sh
node .
```

## ✅ Tips

- Use `const` and `let` appropriately.
- Keep functions short and single-purpose.
- Test each function with different values.

Happy coding! 🧠
