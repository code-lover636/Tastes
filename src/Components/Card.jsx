import PropTypes from 'prop-types';
import defaultPoster from "../assets/poster.png";

const Card = ({recipe, similarRecipe}) => {
    return(
        <div
            className="card"
            onClick={
                () => {
                    console.log("clicked: ", recipe);
                    similarRecipe(recipe);
                }
            }
        >
            <img src={recipe.image? recipe.image: defaultPoster} alt="recipe image" className="card-img" />
            <p className="card-details">
            <b>{recipe.title? recipe.title: "Recipe Not Found"}</b><br />
            </p>
        </div>
    );
}

Card.propTypes = {
    setCarouselRecipe: PropTypes.func.isRequired,
    similarRecipe: PropTypes.func.isRequired,
    recipe: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
        id: PropTypes.number.isRequired,
    }).isRequired,
};

export default Card;