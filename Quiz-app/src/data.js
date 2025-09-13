export const beginnerQuestions = [
  {
    question: "What is React?",
    options: ["Library", "Framework", "Language", "Tool"],
    answer: "Library",
  },
  {
    question: "Which hook is used for state?",
    options: ["useRef", "useEffect", "useState", "useMemo"],
    answer: "useState",
  },
  {
    question: "What does JSX stand for?",
    options: [
      "JavaScript XML",
      "Java Syntax Extension",
      "JavaScript Extension",
      "Java XML Syntax"
    ],
    answer: "JavaScript XML",
  },
  {
    question: "What is a component in React?",
    options: [
      "A JavaScript function or class that returns UI",
      "A CSS style",
      "A DOM element",
      "A database model"
    ],
    answer: "A JavaScript function or class that returns UI",
  },
  {
    question: "Which method renders UI in a class component?",
    options: ["display()", "render()", "return()", "show()"],
    answer: "render()",
  },
  {
    question: "How do you pass data to a component?",
    options: ["State", "Props", "Hooks", "Events"],
    answer: "Props",
  },
  {
    question: "What is the difference between props and state?",
    options: [
      "Props are read-only, state is mutable",
      "State is read-only, props are mutable",
      "They are the same",
      "Props are only for class components"
    ],
    answer: "Props are read-only, state is mutable",
  },
  {
    question: "Which hook is used for side effects?",
    options: ["useEffect", "useState", "useReducer", "useMemo"],
    answer: "useEffect",
  },
  {
    question: "What is the virtual DOM?",
    options: [
      "A lightweight copy of the real DOM",
      "A browser extension",
      "A React plugin",
      "A CSS library"
    ],
    answer: "A lightweight copy of the real DOM",
  },
  {
    question: "How can you style React components?",
    options: [
      "Using CSS files",
      "Using inline styles",
      "Using CSS-in-JS libraries",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    question: "What is the purpose of the key prop in lists?",
    options: [
      "To style list items",
      "To uniquely identify elements for efficient updates",
      "To add animations",
      "To show index number"
    ],
    answer: "To uniquely identify elements for efficient updates",
  },
  {
    question: "Which command creates a new React app?",
    options: [
      "npm new react-app",
      "npx create-react-app app-name",
      "npm start react",
      "npx init react"
    ],
    answer: "npx create-react-app app-name",
  },
  {
    question: "What is a fragment in React?",
    options: [
      "A way to group elements without extra nodes",
      "A broken component",
      "A third-party library",
      "A state container"
    ],
    answer: "A way to group elements without extra nodes",
  },
  {
    question: "Which attribute is used to set the default value in a React input field?",
    options: ["value", "default", "defaultValue", "setValue"],
    answer: "defaultValue",
  },
  {
    question: "What is the default port for running a React app locally?",
    options: ["3000", "8000", "5000", "4200"],
    answer: "3000",
  },
];

export const intermediateQuestions = [
  {
    question: "What are React Hooks?",
    options: [
      "Functions that let you use state and other features in functional components",
      "A way to style components",
      "A debugging tool",
      "A replacement for JSX"
    ],
    answer: "Functions that let you use state and other features in functional components",
  },
  {
    question: "Which hook is used for managing complex state logic?",
    options: ["useState", "useReducer", "useMemo", "useCallback"],
    answer: "useReducer",
  },
  {
    question: "How does the dependency array work in useEffect?",
    options: [
      "It decides when the effect runs",
      "It stores component state",
      "It defines event handlers",
      "It controls the virtual DOM"
    ],
    answer: "It decides when the effect runs",
  },
  {
    question: "What is the purpose of useRef?",
    options: [
      "To store mutable values that persist across renders",
      "To trigger re-renders",
      "To fetch data",
      "To create routes"
    ],
    answer: "To store mutable values that persist across renders",
  },
  {
    question: "What is prop drilling in React?",
    options: [
      "Passing data through many nested components",
      "Optimizing component performance",
      "Using context for state",
      "Fetching data from APIs"
    ],
    answer: "Passing data through many nested components",
  },
  {
    question: "How can you avoid prop drilling?",
    options: [
      "By using Context API",
      "By using Redux or other state managers",
      "By restructuring components",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    question: "What is the difference between controlled and uncontrolled components?",
    options: [
      "Controlled components use React state, uncontrolled use DOM state",
      "Uncontrolled components use props, controlled use hooks",
      "Controlled components don't need refs",
      "They are identical"
    ],
    answer: "Controlled components use React state, uncontrolled use DOM state",
  },
  {
    question: "What is React Context API used for?",
    options: [
      "For routing between pages",
      "For state management without prop drilling",
      "For handling form data",
      "For memoizing components"
    ],
    answer: "For state management without prop drilling",
  },
  {
    question: "What is React.memo used for?",
    options: [
      "To memoize values inside components",
      "To prevent unnecessary re-renders of functional components",
      "To fetch API data",
      "To optimize CSS"
    ],
    answer: "To prevent unnecessary re-renders of functional components",
  },
  {
    question: "Which hook is best for memoizing computed values?",
    options: ["useState", "useEffect", "useMemo", "useReducer"],
    answer: "useMemo",
  },
  {
    question: "What is an Error Boundary in React?",
    options: [
      "A component that catches errors in its child components",
      "A boundary for routing",
      "A type of CSS style",
      "A hook for debugging"
    ],
    answer: "A component that catches errors in its child components",
  },
  {
    question: "What is a Higher-Order Component (HOC)?",
    options: [
      "A component that returns another component",
      "A built-in React hook",
      "A way to create portals",
      "A CSS preprocessor"
    ],
    answer: "A component that returns another component",
  },
  {
    question: "What is a React Portal used for?",
    options: [
      "Rendering children into a different part of the DOM",
      "Creating a virtual DOM",
      "Improving component speed",
      "Binding event handlers"
    ],
    answer: "Rendering children into a different part of the DOM",
  },
  {
    question: "Which hook lets you run cleanup logic in React?",
    options: ["useState", "useEffect", "useLayoutEffect", "useReducer"],
    answer: "useEffect",
  },
  {
    question: "How do you fetch data in a React component?",
    options: [
      "Using fetch or axios inside useEffect",
      "Using the virtual DOM",
      "Using JSX",
      "Using a reducer only"
    ],
    answer: "Using fetch or axios inside useEffect",
  },
];


export const advancedQuestions=[
  
  {
    question: "What is React Fiber?",
    options: [
      "A new reconciliation algorithm in React",
      "A CSS framework",
      "A hook for async state",
      "A server-side renderer"
    ],
    answer: "A new reconciliation algorithm in React",
  },
  {
    question: "What is React Suspense used for?",
    options: [
      "Handling code splitting and data fetching gracefully",
      "Suspending the DOM rendering completely",
      "Debugging state changes",
      "Caching props"
    ],
    answer: "Handling code splitting and data fetching gracefully",
  },
  {
    question: "What is hydration in React?",
    options: [
      "Attaching event listeners to server-rendered HTML",
      "Loading CSS dynamically",
      "Restoring state from localStorage",
      "Refreshing components on demand"
    ],
    answer: "Attaching event listeners to server-rendered HTML",
  },
  {
    question: "How can you implement code splitting in React?",
    options: [
      "By using React.lazy and Suspense",
      "By wrapping components in Error Boundaries",
      "By memoizing components",
      "By configuring the virtual DOM"
    ],
    answer: "By using React.lazy and Suspense",
  },
  {
    question: "What are render props in React?",
    options: [
      "A technique where a component’s child is a function",
      "Props used for rendering lists",
      "Props sent from a server",
      "A new hook for rendering"
    ],
    answer: "A technique where a component’s child is a function",
  },
  {
    question: "How do you optimize performance in large React applications?",
    options: [
      "Using React.memo and useMemo",
      "Implementing code splitting",
      "Using virtualization for long lists",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    question: "What is the reconciliation process in React?",
    options: [
      "The algorithm React uses to compare virtual DOM trees",
      "The way props are merged",
      "The process of bundling code",
      "The lifecycle method for cleanup"
    ],
    answer: "The algorithm React uses to compare virtual DOM trees",
  },
  {
    question: "When should you write a custom hook?",
    options: [
      "When you need to share stateful logic between components",
      "Only when using class components",
      "To replace all built-in hooks",
      "To handle CSS animations"
    ],
    answer: "When you need to share stateful logic between components",
  },
  {
    question: "What is the difference between React.lazy and dynamic imports?",
    options: [
      "React.lazy wraps dynamic imports for components",
      "Dynamic imports are faster",
      "React.lazy is for hooks",
      "They are the same thing"
    ],
    answer: "React.lazy wraps dynamic imports for components",
  },
  {
    question: "How do you combine Context API with useReducer?",
    options: [
      "By creating a context and passing dispatch/state as values",
      "By using them separately",
      "By wrapping components in Suspense",
      "By using React.memo"
    ],
    answer: "By creating a context and passing dispatch/state as values",
  },
  {
    question: "What are the differences between CSR, SSR, and SSG in React apps?",
    options: [
      "CSR renders in the browser, SSR on the server, SSG at build time",
      "CSR and SSR are identical, SSG is different",
      "SSR and SSG are client-side only",
      "All of them are server-only approaches"
    ],
    answer: "CSR renders in the browser, SSR on the server, SSG at build time",
  },
  {
    question: "How do you handle authentication in React?",
    options: [
      "By using context or state to store user info and protecting routes",
      "By storing passwords in JSX",
      "By writing authentication inside the reducer",
      "By creating custom elements"
    ],
    answer: "By using context or state to store user info and protecting routes",
  },
  {
    question: "What are best practices for creating reusable React components?",
    options: [
      "Keep components small and focused",
      "Use props effectively",
      "Avoid hardcoding data",
      "All of the above"
    ],
    answer: "All of the above",
  },
  {
    question: "What is the purpose of the React Profiler API?",
    options: [
      "To measure the rendering performance of components",
      "To debug CSS",
      "To manage memory usage",
      "To create code bundles"
    ],
    answer: "To measure the rendering performance of components",
  },
  {
    question: "What are React concurrent features?",
    options: [
      "Features that allow React to prepare multiple versions of the UI",
      "Hooks that manage async events",
      "React APIs for debugging",
      "A new way to handle JSX"
    ],
    answer: "Features that allow React to prepare multiple versions of the UI",
  },


]