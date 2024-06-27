import PropTypes from 'prop-types';
import '../styles/App.css';
import Card from './Card';


const Find = ({recipeList, similarRecipe}) => {
    return(
        <>
            <section className="container">  
                {recipeList.length >0 ? recipeList.map(recipe =>
                    <Card 
                      key={recipe.id}
                      recipe={recipe}
                      similarRecipe={similarRecipe}
                  />
              )
                :<h1 className="not-found">No Movies/Series Found</h1>}                
            </section>
        </>
    );
}

Find.propTypes = {
  recipeList: PropTypes.array.isRequired,
  similarRecipe: PropTypes.func.isRequired,
};

export default Find;