# 🎯 React Counter App

<div align="center">

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

**A beautiful, interactive counter application built with React Hooks**

</div>

---

## 📸 Preview

![Counter App Screenshot]("<img width="1899" height="937" alt="Image" src="https://github.com/user-attachments/assets/b2ea7a8f-c89e-4351-ae34-b23806c55c46" />")

## ✨ Features

- ➕ **Increment Counter** - Add 1 to the current count
- ➖ **Decrement Counter** - Subtract 1 from the current count
- 🔄 **Reset Function** - Return count to zero instantly
- 🛡️ **Zero Guard** - Prevents count from going below zero
- 🎨 **Modern UI** - Gradient background with smooth animations
- 📱 **Responsive Design** - Works perfectly on all screen sizes
- ⚡ **React Hooks** - Built with modern React useState

## 🎓 Learning Objectives

This project demonstrates:
- React functional components
- State management with `useState` hook
- Event handling in React
- Conditional rendering and button disabling
- Component styling with CSS
- User interaction patterns

## 🛠️ Technologies Used

- **React** - Frontend library
- **JavaScript (ES6+)** - Programming language
- **CSS3** - Styling with gradients and animations

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/react-counter-app.git
   cd react-counter-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   Navigate to http://localhost:5173
   ```

## 🚀 Usage

```javascript
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  )
}
```

## 📁 Project Structure

```
react-counter-app/
│
├── src/
│   ├── components/
│   │   ├── Counter.jsx       # Main counter component
│   │   └── Counter.css       # Component styles
│   ├── App.jsx               # Root component
│   └── main.jsx              # Entry point
│
├── package.json
└── README.md
```

## 💡 Key Code Snippets

**State Management:**
```javascript
const [count, setCount] = useState(0);
```

**Increment Function:**
```javascript
const increment = () => setCount(count + 1);
```

**Decrement with Guard:**
```javascript
const decrement = () => {
  if (count > 0) {
    setCount(count - 1);
  }
};
```

**Reset Function:**
```javascript
const reset = () => setCount(0);
```

## 🎨 Customization

You can easily customize the counter by modifying:
- **Colors**: Change gradient colors in `.overallcontainer`
- **Button styles**: Modify button colors using `:nth-child()` selectors
- **Increment value**: Change the increment/decrement value in functions
- **Starting value**: Modify the initial useState value

## 📝 Lessons Learned

- How to manage state in functional React components
- Implementing conditional logic in event handlers
- Creating reusable UI components
- Best practices for React project structure
- CSS styling techniques for modern web apps

## 👨‍💻 Author

**Your Name**

- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- GitHub: [@yourusername](https://github.com/yourusername)
- Portfolio: [yourwebsite.com](https://yourwebsite.com)

## 🙏 Acknowledgments

- React Documentation
- The amazing React community

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ and React

</div>