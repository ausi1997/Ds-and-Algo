# Ds-and-Algo

# Day 1 (Algorithm Complexity)

# Question 1

What is the time & space complexity of the following code:
Also explain your answer?
    (a)
      let a = 0, b = 0;

      for (let i = 0; i < n; ++i) {

      a = a + i;

      }

      for (let j = 0; j < m; ++j) {

      b = b + j;

      }


      (b)
      let a = 0, b = 0;
      for (let i = 0; i < n; ++i) {
      for (let j = 0; j < n; ++j) {
      a = a + j;        
      }  }
      for (let k = 0; k < n; ++k) {
      b = b + k;
      }