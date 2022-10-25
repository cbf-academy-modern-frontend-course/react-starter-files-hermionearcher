# Nesting Components

## Task: Nesting Components with `props.children`

1.  Open the nesting-and-events folder in your React Starter Files repository
1. Install the dependencies by running 
```shell
npm install 
```
3. The folder contains two components declared in two files TaskContainer.js and [Task.js][1]. The `<TaskContainer/>` is the parent container for the `<Task/>`.
1. In the [index.js][2] file, add three `<Task/>` components to the `<TaskContainer/>` component. The `<Task/>` should have the following attributes:

```js
{"id":"task1","title":"Buy Milk","isCompleted":true}
{"id":"task2","title":"Read a book","isCompleted":false}
{"id":"task3","title":"Early morning run","isCompleted":false}
```
![Task List](docs/tasklist.png )

5. The [index.js][2] file contains a list of task objects in a variable called taskList
1. Use the Array.Map function to display each task object as a `<Task/>` component
1. Order the list by items that have a __isCompleted=false__ first. Completed tasks __(isCompleted=true)__ should be listed last

## Task: Lifting State and Callbacks
1. In the [nesting-and-events][3] folder there is a function called __toggleComplete()__. We are going to __lift up__ the function to the parent `<App>` component

1. To __lift up__ the event, move the __toggleComplete()__ function from the [Task.js][1] file to the [index.js][2] file

```js
function toggleComplete(id){
    console.log(`Task with the id '${id}' was clicked`);
}
```
3. Once you have moved the function toggleComplete() function to the `<App>` component, __pass the event callback back down__ from the `<App>` component to the `<Task>` component, e.g. <br/><br/>
    - [index.js][2]: `function toggleComplete(id){ … }`<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`<Task isComplete={isComplete} />`

    - [Task.js][1]: `<span onClick={() => toggleComplete(props.id)}>{props.isCompleted ? "✔️":"🔘"}</span>`

4. If the event has been __lifted up__ correctly and the callback __passed down__ correctly via `props`, clicking the ✔️or 🔘 button of a `<Task>` component should display the id in the console window.
1. Test your changes by running the project npm start
1. __Bonus:__ Add code to the `toggleComplete()` function in the [index.js][2] file that marks the `<Task/>` as complete or incomplete when either ✔️or 🔘 is clicked

## Homework: Nesting your Books
1. In the [bookcase-app][4] from the previous session, we are going to create a container for our bookcase called `<BookList>`. 
1. It will be responsible for rendering the books that are contained in [books.js][5]
1. In your [bookcase-app][4], create a file in the components folder called `BookList.js`
1. Add a functional component method called `<BookList>` which returns `<Book>` components. 
1. Update the `BookList.js` to return a list of `<Book>` components. Ensure you pass a book attribute to the `<Book>` component in `BookList.js`

e.g. `<Book book={book} />`

6. Update your [App.js][6] file to reference the BookList.js and return the `<BookList>` object. 

1. Ensure you are passing the collection of book objects to the `<BookList>` to make it available in the __props__.

1. In the [bookcase-app][4] from the previous session, we are going to __lift up__ the function `addBook()` to the parent `<App>` component.

1. To __lift up__ the event, move the `addBook()` function declaration from the [Book.js][7] file to the [App.js][6] file.

```js
/* Book.js */
function addBook(title) {
    console.log(`The Book ${title} was clicked`);
}
```
10. Once you have moved the function to the `<App>` component, __pass the event callback back down__ from the `<App>` component to the `<BookList>` component and then from the `<BookList>` component to the `<Book>` component through the component attributes e.g. 
<br/><br/>
    - App.js: `function addBook(id){ … }`
    - BookList.js: `<BookList addBook={addBook} />`
    - Book.js: `<Book onClick={() => props.addBook(props.book.id)}/>`
<br/><br/>
11. If the event has been __lifted up__ and the callback __passed down__ correctly via `props`, clicking the __Add +__ button of a `<Book>` component should still write the title to the console window.
1. Test your changes by running the project `npm start`

[1]:/nesting-and-events/src/components/Task.js
[2]:/nesting-and-events/src/index.js
[3]:/nesting-and-events/
[4]:/bookcase-app/
[5]:/bookcase-app/src/models/books.json
[6]:/bookcase-app/src/App.js
[7]:/bookcase-app/src/components/Book.js