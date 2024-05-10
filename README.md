# Final Project

## A simple To Do Application built using React.

## Features:

- Users can create, read, update, and delete Items
- Users can sort new Items into Folders
- Users can name their folders

## Notable FrontEnd Components: 
- AddItemForm.jsx: This is the code that lets users add new items with attributes such as title, description, completion status, and category. Also, Ion form submission, a POST request is made to add the new item to the server. Additionally, I included a conditional input field that appears when "Other" is selected as a category, allowing users to define a custom category.
- ItemCard.jsx: In this portion, I implemented a handleDelete function that triggers when the "Del" button is clicked, which makes a DELETE request to a server to remove the item using its unique identifier. If the deletion is successful, I update the item list state by filtering out the deleted item, ensuring the UI reflects the change immediately.
- App.jsx: The final concatenation that provides a structured view where users can interact with the items, either adding new ones or viewing the existing list.

## Backend: 
- In index.js, I set up a backend server using Express and connected it to a MongoDB database using Mongoose. The ItemSchema outlines the structure of items including attributes such as name, description, completed status, and category. Using this schema, I created a model Item and set up basic CRUD operations on the /items route: fetching all items, adding a new item, and deleting an item by its ID. You would be able to see this at localhost:5001/items
  
