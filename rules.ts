const rules = {
  // Enforce the use of triple equals (===) for strict comparison
  eqeqeq: ["error", "always"],

  // Enforce single quotes for JavaScript/TypeScript, allow template literals
  quotes: ["error", "single", { allowTemplateLiterals: true }],

  // Enforce double quotes in JSX attributes
  "jsx-quotes": ["error", "prefer-double"],

  // Disallow semicolons at the end of statements
  semi: ["error", "never"],

  // Warn against console statements, but allow console.warn and console.error
  "no-console": ["warn", { allow: ["warn", "error"] }],

  // Enforce consistent spacing inside object curly braces
  "object-curly-spacing": ["error", "always"],

  // Disallow unused variables, except those prefixed with _
  "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

  // Prefer arrow functions as callbacks
  "prefer-arrow-callback": ["error"],

  // Disallow reassigning const variables
  "no-const-assign": "error",

  // Enforce arrow function bodies to use concise syntax when possible
  "arrow-body-style": ["error", "as-needed"],

  // Disallow the use of 'any' type in TypeScript
  "@typescript-eslint/no-explicit-any": "error",

  // Enforce explicit return types for functions, allowing expressions
  "@typescript-eslint/explicit-function-return-type": [
    "error",
    { allowExpressions: true },
  ],

  // Disallow the use of 'var' in favor of 'let' and 'const'
  "no-var": "error",

  // Disallow usage of <img> elements without alt attributes
  "@next/next/no-img-element": "error",

  // Enforce React Hooks rules
  "react-hooks/rules-of-hooks": "error",

  // Accessibility rules

  // Ensure alt text is provided for images
  "jsx-a11y/alt-text": "error",

  // Ensure anchor tags have valid hrefs or prefer button elements
  "jsx-a11y/anchor-is-valid": [
    "error",
    { aspects: ["invalidHref", "preferButton"] },
  ],

  // Ensure click events are accompanied by key events for accessibility
  "jsx-a11y/click-events-have-key-events": "error",

  // Prevent static elements from having interactive event handlers
  "jsx-a11y/no-static-element-interactions": "error",

  // Ensure interactive elements support focus
  "jsx-a11y/interactive-supports-focus": "error",

  // Disallow interaction handlers on non-interactive elements
  "jsx-a11y/no-noninteractive-element-interactions": "error",

  // Ensure the <html> tag has a valid lang attribute
  "jsx-a11y/html-has-lang": "error",

  // Validate that the lang attribute has a correct value
  "jsx-a11y/lang": "error",

  // Prevent the use of autoFocus to avoid accessibility issues
  "jsx-a11y/no-autofocus": ["error", { ignoreNonDOM: true }],

  // Disallow distracting elements such as <marquee> and <blink>
  "jsx-a11y/no-distracting-elements": "error",

  // Disallow redundant roles on elements
  "jsx-a11y/no-redundant-roles": "error",
};
