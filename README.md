# Squable

This is a streamlined `CapacitorJS` project using `Vite` and `SolidJS`

This example includes:

- [Capacitor](https://capacitorjs.com/)
- [JSDoc](https://jsdoc.app/)
- [Prettier](https://prettier.io/)
- [ESLint](https://eslint.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [Typescript](https://www.typescriptlang.org/)
- [Proper VSCode Workspace](./my-app/example.code-workspace)

## Setup and Installation

### Prerequisites

#### Global

For this to work you will need the following installed:

- [NodeJS](https://nodejs.org/en/)

You will also need to install the following global packages:

```bash
npm install -g cordova-res
```

#### Platforms

Setup your dev environment by following the [docs](https://capacitorjs.com/docs/getting-started/environment-setup)

**Android**

- [Android Studio](https://developer.android.com/studio)

**iOS**

- [Xcode](https://developer.apple.com/xcode/)

## Usage

Setup the project by running the following commands:

**Install project dependencies**

```bash
yarn # or pnpm install or npm install
```

**Add platform project files**

```bash
yarn cap:add <platform> # or pnpm cap:add <platform> or npm cap:add <platform>
```

Where `<platform>` is one of the following:

- `ios`
- `android`

**Sync web files with platform project files**

```bash
yarn sync # or pnpm sync or npm sync
```

### Learn more on the [Solid Website](https://solidjs.com) and come chat with us on our [Discord](https://discord.com/invite/solidjs)

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in theweb development mode.<br>

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `yarn docs`

Uses `JSDoc` to build a documentation website based on the projects documentation.

### `yarn lint`

Runs `eslint` on all of the included files.

### `yarn format`

Uses `Prettier` and the above `yarn lint` command to lint and then format all included file types.

## Deployment

To build the app for production you must follow the documentation for your platform.

- [Android Release](https://play.google.com/console/about/guides/releasewithconfidence/)

### Running the app with `Android Studio`

```bash
yarn studio
```

You can then select your emulator or device and run the app.
