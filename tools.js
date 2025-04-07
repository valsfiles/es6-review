// tools.js

// ES6 Class
export class Calculator {
    add(a, b) {
      return a + b;
    }
  }
  
  // Promise
  export function fetchData() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Data fetched!");
      }, 1000);
    });
  }
  
  // Async/Await
  export async function getData() {
    const data = await fetchData();
    return `Result: ${data}`;
  }
  
  // Map
  export function doubleNumbers(numbers) {
    return numbers.map(n => n * 2);
  }
  