# :zap: Twiage Vue Generator

## Installation

Add the package to your project, as a _dev dependency_ :

```
$ npm i --save-dev Twiage/generator-twiage-vue
```

## Usage

### Generate a **Page Component**:
```
$ npx yo twiage-vue:page <name>
```
This will create a \<name> folder **under your src/ directory**. Page components also include the following:
- service (Business logic and back-end communication)
- store (State Management - Vuex)
- ui (Single File Components)

Unit and E2E tests are also generated.

### Generate a **Global Component**:
```
$ npx yo twiage-vue:component <name>
```
This will create a \<name>.vue file **under your src/App/components/ directory**

Unit test is also generated.

### Generate a **Page-specific Component**:
```
$ npx yo twiage-vue:component <name> <pageName>
```
This will create a \<name>.vue file **under your /src/\<pageName>/ui/ directory**.

Unit test is also generated.
