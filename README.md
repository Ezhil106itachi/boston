# bostan

## Overview

The Top Earners Display program is a web application that retrieves and displays the top earners from a dataset (specifically from Boston) based on their salaries. The application highlights individuals earning less than $20,000,000 and presents the top five earners in a visually appealing format.

## Features

- **Dynamic Data Retrieval**: The program imports data from an external module (`boston.js`).
- **Top Earners Calculation**: It filters and sorts the earners based on their salary, displaying only those earning less than $20,000,000.
- **User-Friendly Display**: The results are formatted and displayed in an organized manner within the webpage.

## Technologies Used

- HTML
- JavaScript (ES6 Modules)
- CSS (for basic styling)

## How to Use

1. **Set Up the Environment**: Ensure you have `boston.js` available in the same directory as your HTML file. This file should contain the necessary data structured appropriately.
2. **Open the HTML File**: Save the code as an `.html` file (e.g., `top_earners.html`) and open it in a web browser.
3. **View the Results**: The top five earners with salaries below $20,000,000 will be displayed on the webpage.

## Code Explanation

- **Data Import**: The program imports the `boston` data from the `boston.js` module.
- **Filtering and Sorting**:
  - The code iterates through the dataset to filter out earners with salaries below $20,000,000.
  - It then sorts the filtered results in descending order based on salary.
  - Finally, it slices the array to keep only the top five earners.
- **Dynamic HTML Generation**: The top earners are displayed in the `#app` div using template literals for easy HTML formatting.
- **Basic Styling**: The app's title color is set to crimson, and it is enclosed within a black border for emphasis.

## Customization

You can customize the following aspects of the program:

- **Salary Threshold**: Change the threshold in the filtering condition to adjust which earners are displayed.
- **Number of Top Earners**: Modify the `.slice(0, 5)` method to display a different number of top earners.
- **Styling**: Adjust the CSS in the `<style>` tag to change colors, borders, or layout as desired.

## Conclusion

This Top Earners Display program serves as a practical example of data manipulation and dynamic web content generation using JavaScript. Feel free to modify and enhance the code for your specific needs or to practice further with JavaScript and web development!
