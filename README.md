# Javascript-Form-Validation

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/c08895cbfc4d4f47857214781ad0010a)](https://app.codacy.com/gh/NouvelleTechno/Javascript-Form-Validation?utm_source=github.com&utm_medium=referral&utm_content=NouvelleTechno/Javascript-Form-Validation&utm_campaign=Badge_Grade_Settings)

Javascript Library providing form validation helpers

## Table of contents
- [Installation](#installation)
- [Usage](#usage)
  - [Include Library](#include-library)
  - [Use components](#use-components)
    - [DateTime](#datetime)
    - [Email](#email)
    - [Password](#password)
    - [Range](#range)
    - [Text](#text)
## Installation
In order to use this library, [download zip file](https://github.com/NouvelleTechno/Javascript-Form-Validation/releases) and copy necessary files from `dist` folder into your assets folder.

## Usage
### Include library
To use the library, start by including the files you need into `head` section of your project.
```html
<script src="your_directory/Email.min.js" defer></script>
<script src="your_directory/Password.min.js" defer></script>
```
### Use components
Each component is made to help you validate a single type of data in your project.

#### DateTime
The DateTime component helps you validate the input contains a valid DateTime (based on JS formats)

In order to use this component, first instantiate it and then use the `isValid` method to check it.
##### isValid(myDate) ⇒ <code>boolean</code>
| Param  | Type                | Description   |
| ------ | ------------------- | ------------- |
| myDate | <code>string</code> | Date to check |

```javascript
// Instantiation
let myDate = new DateTime(); // replace myDate by variable name of your preference

// Check DateTime
myDate.isValid("2021-05-31 02:30");
```
#### Email
The Email component helps you validate the input contains a string that **looks like** an email. It doesn't validate the email exists.

In order to use this component, first instantiate it and then use the `isValid` method to check it.

##### isValid(email) ⇒ <code>boolean</code>
| Param  | Type                | Description    |
| ------ | ------------------- | -------------- |
| email  | <code>string</code> | Email to check |

```javascript
// Instantiation
let email = new Email(); // replace email by variable name of your preference

// Check email
email.isValid("email@example.com");
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

##### isValid(pass) ⇒ <code>object|boolean</code>
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

##### isValid(value) ⇒ <code>object|boolean</code>
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
#### Text
The Text component helps you validate the input contains a string that meets the length you provide.

In order to use this component, first instantiate it and then use the `isValid` method to check it.

During instantiation, provide, if you like, optional parameters to define what you require as a range. 

Parameters are as follows:

| Param | Type                 | Description                  | Default |
| ----- | -------------------- | ---------------------------- | ------- |
| Min   | <code>integer</code> | You require a minimum length | 0       |
| Max   | <code>integer</code> | You require a maximum length | 0       |

##### isValid(text) ⇒ <code>object|boolean</code>
| Param | Type                | Description   |
| ----- | ------------------- | ------------- |
| text  | <code>string</code> | Text to check |

```javascript
// Instantiation
// This example requires a text length between 10 and 20
let text = new Text(10, 20); // replace text by variable name of your preference

// Check password
text.isValid("Hello World!");
```
