# JS Events

### Today's Goals:

1. Add an event to like button and increase likes upon event reaction
2. Process form submission and append values to DOM
3. Allow user to delete a created Pokemon



#### Warm up:

mouse click, key press, form submission. eventListener's for each of these are running callback functions when it see's they've happened

There is an empty field awaiting input, the events are mouse clicks, key press to initiate the ability to form submit when there is content, and submission.

eventListener on click with some kind of pop out, eventListner on your submit button click. The pop out is cleared or removed... the comment text is then added to your posts

There is a click event to activate the text field. Open modal to enter information into a form. Click button to send post to server. Server calls back to notify that the post has been made.

User clicks on textbox, which triggers the form to pop up. User inputs text, then clicks submit button. Data gets rendered by server and then added to your posts (on wall and on profile)

Event listener for both click and a submit button and I think it takes that response and interacts with the DOM to update the users Home Screen, along with adding that information to the server and object associated with that user for later retrieval I think.

when the form field is clicked on, an event listener opens a window inside of the current window with the form for submitting a post, The typing cursor gets placed on form field, "whats on your mind" default text is replaced when characetrs are entered to the form, When text is submitted to the form with the submit button the window in window closes

click event listener which triggers a pop up,  another click event listener for input field, click event listener which triggers the post and popup closes

1. event listener => attach thse a node thats meant to listen to a reaction. 2 ways to add an event listener 
2. .addEventListener function: 2 arguments 1st arg is the type of event 2nd arg is going to be a callback function 
3. event handlers: callback function that will handle the event 