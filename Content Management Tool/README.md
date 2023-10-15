# Content Management Tool

The Content Management Tool is a simple web application that allows users to create and manage blog posts. Users can input a title, text content, and an optional image for each post. This README provides an overview of the application and its structure.

## Table of Contents

- [Features](#features)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Screenshots](#screenshots)
- [HTML Structure](#html-structure)
- [JavaScript Functionality](#javascript-functionality)
- [CSS Styles](#css-styles)

## Features

- Create blog posts with titles, text content, and optional images.
- Display created posts in a user-friendly interface.
- Reset form fields after submitting a post.

## Usage

1. Open the `index.html` file in your web browser.
2. Fill in the title, text, and optionally select an image for your blog post.
3. Click the "Add Post" button to create and display the post.
4. Posts are displayed below the form, and the form fields are reset for your next entry.

## Directory Structure

```plaintext
content-management-tool/
│
├── index.html
├── script.js
├── style.css
├── README.md
```

## Screenshots

- ![Screenshot 1](https://pralinkhaira.github.io/Storage-Misc/cm1.png)

- ![Screenshot 2](https://pralinkhaira.github.io/Storage-Misc/cm2.png)

- ![Screenshot 3](https://pralinkhaira.github.io/Storage-Misc/cm3.png)

## HTML Structure

The application's HTML structure is as follows:

- `index.html` contains the main structure of the page.
- The `<form>` element with the id `blogForm` is used for user input.
- Input fields for title, text, and image selection are provided within the form.
- The created posts are displayed in the `<div>` with the id `postsContainer`.

## JavaScript Functionality

JavaScript in `script.js` adds functionality to the application:

- It prevents the default form submission behavior.
- It extracts the user input values (title, text, and image).
- A new post container is created for each submitted post.
- Title, text, and optionally the image are added to the post container.
- The post container is appended to the posts container.
- Form fields are reset after a post is submitted.

## CSS Styles

The CSS styles in `style.css` provide basic styling for the application:

- The styling ensures a pleasant and user-friendly interface.
- The header is styled with a background color and text color.
- The form and post containers have margin, padding, and border styling.
- The "Add Post" button has background and text color styling.