# BOGO Pricing Component

A clean, modular implementation of a Buy-One-Get-One (BOGO) pricing component built with vanilla JavaScript.

## Features

- Dynamic unit selection with size and color options
- Responsive pricing updates
- Interactive unit configuration
- Automatic total calculation
- Free delivery indication
- Mobile-responsive design

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── pricing-option.js
│   │   └── unit-selector.js
│   ├── styles/
│   │   ├── components/
│   │   │   ├── pricing-option.css
│   │   │   └── unit-selector.css
│   │   ├── base/
│   │   │   ├── variables.css
│   │   │   └── global.css
│   │   └── main.css
│   ├── utils/
│   │   ├── price-formatter.js
│   │   └── dom-utils.js
│   ├── constants/
│   │   └── pricing.js
│   └── main.js
├── index.html
├── package.json
└── README.md
```

## Code Organization

- **components/**: Reusable UI components
- **styles/**: CSS modules organized by component and global styles
- **utils/**: Helper functions and utilities
- **constants/**: Configuration and constant values

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

## Best Practices Implemented

- **Modularity**: Each component is isolated in its own file
- **Single Responsibility**: Files have clear, focused purposes
- **DRY (Don't Repeat Yourself)**: Common utilities are extracted
- **Semantic HTML**: Proper HTML5 elements and ARIA attributes
- **CSS Organization**: Modular CSS with clear naming conventions
- **JavaScript Best Practices**: ES6+ features, event delegation

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT
