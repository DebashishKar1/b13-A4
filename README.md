## Assignment 4

### Question

**Question 1:What is the difference between getElementByid,getElementsByClassName, and queryselector/queryselectorAll?**
Answer:Difference-
getElementById = fastest single by ID (live)  
getElementsByClassName = live multiple by class  
querySelector/All = flexible CSS selector, static (first or all).

**Question 2:How do you create and insert a new element into the Dom?**
Answer:document.body.appendChild(document.createElement('div'));

**Question 3:What is Event Bubbling? And how does it work?**
Answer:Event Bubbling is the process where an event starts from the deepest (most specific) element that triggered it and then travels up through its parent elements all the way to the document/root.

**Question 4:What is Event Delegation in Javascript?Why is it useful?**
Answer:Event delegation is attaching a single event listener to a parent element instead of many on individual children, letting it handle events from current + future child elements via bubbling.

**Question 5:What is the difference between preventDefault() and stopPropagation() methods?**
Answer:preventDefault() stops the browser's default action (like following a link or submitting a form), while stopPropagation() stops the event from bubbling up (or capturing down) to parent elements.

