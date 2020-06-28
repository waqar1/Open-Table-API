# Questions about BMO assignment

1. How long did you spend on the coding assignment? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

Ans: I spent half day on the assignment. If I have the opportunity I would enhance the styling, use latest reactjs feature hooks and type ahead input field + api pagination implementation.

2. What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

Ans: There are many cool es6 features that are added to JavaScript. Few that I have used are below.

destructuring  => <RestaurantsList {...restaurantListProps} />
default parameters => ({ component, items } = {})
Template Literals => (`.*${filter.toLowerCase().split('').join('.*')}.*`)
Arrow functions => (param) => { console.log(param); }


3. What were the more challenging parts of this assignment for you?

Ans: Filtering out the search results.

4. How would you track down a performance issue in production? Have you ever had to do this?

Ans: Production performance issues are tracked through application benchmarking/auditing. Chrome has a good tool to check application performance.

5. How would you improve the API that you just used?

Ans: I would truncate few unnecessary data from API response and I will add that data to the detailed restaurant api call e.g. api/restaurant/:id one.

6. Please describe yourself using JSON

Ans: {
  "name": "waqar azhar",
  "profession": "Javascript developer",
  "interests": "Explore new programming languages and travelling"
}