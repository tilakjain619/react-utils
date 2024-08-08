# `react-utils`

A utility library for React, including useful components and hooks to simplify common tasks.

## Features

- **`usePageTitle` Hook**: Manage the document title with ease.

## Installation

You can install it via npm:

```sh
npm install @frontendchamp/react-utils
```

## Usage

### `usePageTitle` Hook

This hook provides functions to get and set the document title.

```jsx
import React, { useEffect } from 'react';
import { usePageTitle } from 'react-utils';

const App = () => {
  const { getTitle, setTitle } = usePageTitle();

  useEffect(() => {
    console.log('Current title:', getTitle());

    // Example of setting the title
    setTitle('Welcome to My App');

    // Verify title was set
    console.log('Updated title:', getTitle());
  }, [getTitle, setTitle]);

  return <div>Check console for title changes</div>;
};

export default App;
```

## Development

To get started with development, follow these steps:

1. **Install Dependencies**:

   ```sh
   npm install
   ```

2. **Start the Development Server**:

   ```sh
   npm run dev
   ```

3. **Build the Package**:

   ```sh
   npm run build
   ```

4. **Lint Your Code**:

   ```sh
   npm run lint
   ```

5. **Preview the Build**:

   ```sh
   npm run preview
   ```

## Contributing

If you'd like to contribute to this project, please open an issue or submit a pull request. Make sure to follow the code style and add tests where applicable.

## License

This project is licensed under the MIT License.
