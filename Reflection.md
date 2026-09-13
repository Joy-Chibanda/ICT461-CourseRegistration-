Building the ICT461 course registration interface gave me an opportunity to apply web development concepts practically rather than only learning them theoretically.
Through this task, I gained a better understanding of how HTML, CSS, and JavaScript work together to create a functional and user-friendly web page.

One of the main concepts I applied was semantic HTML. Instead of relying mainly on generic div elements,
I used tags such as section, fieldset, legend, and aside to organize the page.
This improved the readability and structure of my code while also making the interface more accessible. 
In particular, using fieldset and legend allowed me to group related form controls logically,
which can make navigation easier for users who rely on screen readers or keyboards.

I also implemented responsive design using a single media query for screens below 600px.
At this breakpoint, the layout changes to a single-column format and the buttons become full width.
This makes the registration form easier to use on smaller screens without requiring a completely separate mobile design.

JavaScript was used to improve the form's interactivity.
I created a submit event listener that prevents the default submission and checks each field individually.
It validates the student's name, ID, email, programme, study mode, and confirmation checkbox. 
When an error is found, a clear message is displayed and the user's focus is moved to the relevant field.

Using DevTools also helped me confirm that my HTML, CSS, and JavaScript files loaded correctly with 200 status codes and that there were no console errors.

One challenge I faced was the browser's default validation messages appearing before my custom JavaScript validation.
I solved this by adding novalidate to the form, allowing my own validation system to control the feedback. Overall,
this project strengthened my understanding of practical web development and user-centred design.
