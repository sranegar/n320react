import "./../styles.css";
import React from "react";

//RecpieSearch extends React class
export default class RecipeSearch extends React.Component {
  state = {
    //create an array of recipes to search through
    recipes: [
      "Apple Pie",
      "Cherry Pie",
      "Pizza Pie",
      "Hamburger",
      "Ham steak",
      "Chocolate Mousse",
      "Chocolate Ice Cream"
    ],
    //create empty string for search terms
    searchTerm: ""
  };

  render() {
    //filter search terms and see if they match any terms in the recipes
    let matchedRecipes = this.state.recipes.filter((recipe) => {
      return (
        recipe //add matching terms into recipe array
          //allow searchterms to be searched whether they are uppercase or lowercase
          .toLocaleUpperCase()
          //allow searchterms to matched against whta the user wrote
          .includes(this.state.searchTerm.toLocaleUpperCase())
      );
    });

    //Run this function on every single
    let recipesList = matchedRecipes.map((recipe) => {
      return <li>{recipe}</li>; //whatever it returns, add into recipe array
    });

    console.log(recipesList);
    //everything inside return will be rendered to page
    return (
      <div className="recipes">
        <h2>Recipes</h2>
        {/* put input on the screen */}
        <input
          // update the input every single time the user changes the values
          value={this.state.searchTerm}
          //  invoke update search method of our object and pass along event data
          onChange={(event) => {
            this.updateSearch(event);
          }}
        />
        {/* data-bind to recipesList */}
        <ul>{recipesList}</ul>
      </div>
    );
  }
  //create method for when search term is updated
  updateSearch(event) {
    //update whatever is typed into input
    this.setState({ searchTerm: event.target.value });
  }
}
