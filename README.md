# Downloading and using Saladium
## Saladium on Github Pages
The site is hosted here:

https://lior-ha.github.io/saladium/

#

## Downloading
$ git clone https://github.com/lior-ha/saladium 

#

## Using Saladium
### `Installing dependencies`
run: 

$ npm install

$ npm start

#

### `Data`
Original JSON file is in /src/data

When the App is mounting and creating the store, the default array is being manipulated and extra data is being added - Translation to hebrew, and initial amount - as the initial state for the reducer.

#

### `Pages`
There are 3 pages for the app:
- Homepage
- Salad Builder
- Checkout

#

### `Homepage`
The store's landing page.

Has some slogans and a Start Ordering button that directs to the Salad Builder page

#

### `Salad Builder`
The Salad builder is build of 2 main components:
- Controls
- Salad

Control is the component for adding/removing ingredients from the salad. And also has the Checkout button. The state is stored via redux.


Salad is responsible for the UI. It fills a bowl with icons representing the ingredients (missing some icons, and potato is actually a Kebab for now).
I also tried to have some animation there but due to time constraints, couldn't perfect it, so I removed it for now.

#

### `Checkout`
The Checkout page has:
- A receipt design to show all ingredients, amount and prices, as well as the total amount.
- A form for Name, Email and Additional Notes. Name and Email are required.
- Order Summary Modal, which takes the same data the receipt is using to show details of the order. As well as a personal greeting, and a thank you note. There is also a button to that resets the data and redirects back to the homepage.
- Error Modal - Returns error in case there's no Name or Email.





