# Javascript-Form-Validation

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c08895cbfc4d4f47857214781ad0010a)](https://app.codacy.com/gh/NouvelleTechno/Javascript-Form-Validation?utm_source=github.com&utm_medium=referral&utm_content=NouvelleTechno/Javascript-Form-Validation&utm_campaign=Badge_Grade_Settings)
[![NPM](https://img.shields.io/npm/dt/javascript-form-validation)](https://www.npmjs.com/package/javascript-form-validation)
[![Discord Server](https://img.shields.io/discord/642353810223923220)](https://discord.gg/azQ9sbD)


Javascript Library providing form validation helpers

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
  - [Include Library](#include-library)
  - [Use components](#use-components)
    - [Color](#color)
    - [DateTime](#datetime)
    - [EAN13](#ean13)
    - [Email](#email)
    - [Iban](#iban)
    - [ISBN](#isbn)
    - [JWT](#jwt)
    - [Password](#password)
    - [Range](#range)
    - [Siren](#siren)
    - [Siret](#siret)
    - [Text](#text)
    - [Url](#url)
## Installation

### VanillaJS

In order to use this library, [download zip file](https://github.com/NouvelleTechno/Javascript-Form-Validation/releases) and copy necessary files from `dist` folder into your assets folder.

### NPM
Run 
```bash
npm install javascript-form-validation
```

## Usage
### Include library
#### VanillaJS
To use the library, start by including the files you need into `head` section of your project.
```html
<script src="your_directory/Email.min.js" defer></script>
<script src="your_directory/Password.min.js" defer></script>
```

#### NodeJS

Import and instantiate the validator you want to use (example using Password)

```js
// Import
const Validator = require("javascript-form-validation");

// Instanciation (don't use instanciations documented in "Use components" section below)
let passValidator = new Validator.Password();
```

### Use components
Each component is made to help you validate a single type of data in your project.

#### Color
The Color component helps you validate the input contains a valid CSS color code (Named, rgb, rgba or hex)

In order to use this component, first instantiate it and then use the `isValid` method to check it.

**isValid(color) ⇒ <code>boolean</code>**

| Param  | Type                | Description    |
| ------ | ------------------- | -------------- |
| color  | <code>string</code> | Color to check |

```javascript
// Instantiation
let myColor = new Color(); // replace myColor by variable name of your preference

// Check Color
myColor.isValid("purple");
myColor.isValid("rgba(14, 85, 213, 0.4)");
myColor.isValid("#34D10C");
```
#### DateTime
The DateTime component helps you validate the input contains a valid DateTime (based on JS formats)

In order to use this component, first instantiate it and then use the `isValid` method to check it.

**isValid(myDate) ⇒ <code>boolean</code>**

| Param  | Type                | Description   |
| ------ | ------------------- | ------------- |
| myDate | <code>string</code> | Date to check |

```javascript
// Instantiation
let myDate = new DateTime(); // replace myDate by variable name of your preference

// Check DateTime
myDate.isValid("2021-05-31 02:30");
```
#### EAN13
The EAN13 component helps you validate the input contains a string that is a valid EAN13 number.

In order to use this component, first instantiate it and then use the `isValid` method to check it.

**isValid(ean) ⇒ <code>boolean</code>**

| Param  | Type                | Description    |
| ------ | ------------------- | -------------- |
| ean    | <code>string</code> | EAN13 to check |

```javascript
// Instantiation
let ean = new Ean13(); // replace ean by variable name of your preference

// Check ean
ean.isValid("7612345678900");
```

#### Email
The Email component helps you validate the input contains a string that **looks like** an email. It doesn't validate the email exists.

In order to use this component, first instantiate it and then use the `isValid` method to check it.

**isValid(email) ⇒ <code>boolean</code>**

| Param  | Type                | Description    |
| ------ | ------------------- | -------------- |
| email  | <code>string</code> | Email to check |

```javascript
// Instantiation
let email = new Email(); // replace email by variable name of your preference

// Check email
email.isValid("email@example.com");
```

#### Iban
The Iban (International Bank Account Number) component helps you validate the input contains a string that is a valid Iban (not that the account exists).

In order to use this component, first instantiate it and then use the `isValid` method to check it.

**isValid(iban) ⇒ <code>boolean</code>**

| Param  | Type                | Description    |
| ------ | ------------------- | -------------- |
| iban   | <code>string</code> | Iban to check  |

```javascript
// Instantiation
let iban = new Iban(); // replace iban by variable name of your preference

// Check iban
iban.isValid("FR1234567890123456789012345");
```

#### ISBN
The ISBN (International Standard Book Number) component helps you validate the input contains a string that is a valid ISBN (not that the number exists).

In order to use this component, first instantiate it and then use the `isValid` method to check it.

**isValid(isbn) ⇒ <code>boolean</code>**

| Param  | Type                | Description    |
| ------ | ------------------- | -------------- |
| isbn   | <code>string</code> | Isbn to check  |

```javascript
// Instantiation
let isbn = new Isbn(); // replace isbn by variable name of your preference

// Check isbn
isbn.isValid("978-2-02-130452-7");
```

#### JWT
The JWT (JSON Web Token) component helps you validate the input contains a string that is a valid JWT (not that the token exists nor that the signature is correct). **This only validated the token only contains valid characters and is correctly formed.

In order to use this component, first instantiate it and then use the `isValid` method to check it.

**isValid(token) ⇒ <code>boolean</code>**

| Param  | Type                | Description    |
| ------ | ------------------- | -------------- |
| token  | <code>string</code> | Token to check |

```javascript
// Instantiation
let token = new Jwt(); // replace token by variable name of your preference

// Check token
token.isValid("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
```

#### Password
The Password component helps you validate the input contains a string that matches the strength level you look for.

In order to use this component, first instantiate it and then use the `isValid` method to check it.

During instantiation, provide, if you like, optional parameters **as an object** to define what you require in the password. 

Parameters are as follows:

| Param       | Type                 | Description                                | Default |
| ----------- | -------------------- | ------------------------------------------ | ------- |
| uppercase   | <code>boolean</code> | You require at least 1 uppercase character | true    |
| lowercase   | <code>boolean</code> | You require at least 1 lowercase character | true    |
| numeric     | <code>boolean</code> | You require at least 1 numeric character   | true    |
| special     | <code>boolean</code> | You require at least 1 special character   | true    |
| minLength   | <code>integer</code> | You require a minimum length for password  | 12      |

**isValid(pass) ⇒ <code>object|boolean</code>**

| Param  | Type                | Description       |
| ------ | ------------------- | ----------------- |
| pass   | <code>string</code> | Password to check |

```javascript
// Instantiation
// This example requires uppercase, special, numeric and at least 15 characters
let pass = new Password({lowercase: false, minLength: 15}); // replace pass by variable name of your preference

// This example requires uppercase, lowercase, special, numeric and at least 12 characters
let pass = new Password(); // replace pass by variable name of your preference

// Check password
pass.isValid("here1sTheP@ssword!");
```
#### Range
The Range component helps you validate the input contains a number that matches the range you look for.

In order to use this component, first instantiate it and then use the `isValid` method to check it.

During instantiation, provide, if you like, optional parameters to define what you require as a range. 

Parameters are as follows:

| Param | Type                 | Description                 | Default |
| ----- | -------------------- | --------------------------- | ------- |
| Min   | <code>integer</code> | You require a minimum value | 0       |
| Max   | <code>integer</code> | You require a maximum value | 0       |

**isValid(value) ⇒ <code>object|boolean</code>**

| Param  | Type                 | Description       |
| ------ | -------------------- | ----------------- |
| value  | <code>integer</code> | Number to check   |

```javascript
// Instantiation
// This example requires a number between 10 and 20
let range = new Range(10, 20); // replace range by variable name of your preference

// This example has no limits (just checks entry is a number)
let range = new Range(); // replace range by variable name of your preference

// Check password
range.isValid(12);
```

#### Siren
The Siren component helps you validate the input contains a string that is a valid "SIREN" number (French companies identifier), not that it exists.

In order to use this component, first instantiate it and then use the `isValid` method to check it.

**isValid(siren) ⇒ <code>boolean</code>**

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| siren | <code>string</code> | Siren to check |

```javascript
// Instantiation
let siren = new Siren(); // replace siren by variable name of your preference

// Check siren
siren.isValid("123 456 789");
```

#### Siret
The Siret component helps you validate the input contains a string that is a valid "SIRET" number (French companies identifier), not that it exists.

In order to use this component, first instantiate it and then use the `isValid` method to check it.

**isValid(siren) ⇒ <code>boolean</code>**

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| siret | <code>string</code> | Siret to check |

```javascript
// Instantiation
let siret = new Siret(); // replace siret by variable name of your preference

// Check siret
siret.isValid("123 456 789 00001");
```

#### Text
The Text component helps you validate the input contains a string that meets the length you provide.

In order to use this component, first instantiate it and then use the `isValid` method to check it.

During instantiation, provide, if you like, optional parameters to define what you require as a range. 

Parameters are as follows:

| Param | Type                 | Description                  | Default |
| ----- | -------------------- | ---------------------------- | ------- |
| Min   | <code>integer</code> | You require a minimum length | 0       |
| Max   | <code>integer</code> | You require a maximum length | 0       |

**isValid(text) ⇒ <code>object|boolean</code>**

| Param | Type                | Description   |
| ----- | ------------------- | ------------- |
| text  | <code>string</code> | Text to check |

```javascript
// Instantiation
// This example requires a text length between 10 and 20
let text = new Text(10, 20); // replace text by variable name of your preference

// Check text
text.isValid("Hello World!");
```
#### Url
The Url component helps you validate the input contains a string that meets the URL standard.

In order to use this component, first instantiate it and then use the `isValid` method to check it.

During instantiation, provide, if you like, optional parameter to define what you require as protocols. 

Parameters are as follows:

| Param       | Type               | Description                    | Default           |
| ----------- | ------------------ | ------------------------------ | ----------------- |
| Protocols   | <code>array</code> | You require specific protocols | ["https", "http"] |

**isValid(url) ⇒ <code>boolean</code>**

| Param | Type                | Description   |
| ----- | ------------------- | ------------- |
| url   | <code>string</code> | Url to check  |

```javascript
// Instantiation
// This example requires "https" or "ftp" protocols
let url = new Url(["https", "ftp"]); // replace url by variable name of your preference

// Check url
url.isValid("https://example.com");
```
