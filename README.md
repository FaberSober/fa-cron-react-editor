# fa-cron-react-editor
> A React cron editor

[![npm package](https://img.shields.io/npm/v/fa-cron-react-editor/latest.svg)](https://www.npmjs.com/package/fa-cron-react-editor)

# Install
```base
# NPM
npm install fa-cron-react-editor

# Yarn
yarn add fa-cron-react-editor
```

# Usage
```react
import { CronEditor } from 'fa-cron-react-editor';

import 'fa-cron-react-editor/dist/index.css'

function App() {
    const [cron, setCron] = useState<string>('* * * * * ?');

    return (
        <CronEditor 
            value={cron}
            onChange={setCron}
        />
    );
}
```

# Demo
![fa-cron-react-editor example](/doc/demo1.png)




## Getting Started

First, install the dependencies of the monorepo:

```bash
yarn install
```

Build the library:

```bash
cd packages/my-lib && yarn build
```

Run the development server of the test project:

```bash
cd sites/my-site && yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

If you want to start the storybook server, run:

```bash
cd packages/my-lib && yarn storybook
```

## RoadMap
1. [x] Cron Base Editor
2. [ ] Better style
3. [ ] Locale customization