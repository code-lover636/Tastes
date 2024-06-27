import PropTypes from 'prop-types';
import defaultImg from '../assets/carousel.jpg';

const Carousel = ({recipe}) => {
    return(
        <div className="carousel-container">
            <div className="details">
                <a href="/"><strong>Tastes</strong></a>
                <h1 className="heading">{recipe.title?recipe.title:""}</h1>
            </div>
            <img src={recipe.image? recipe.image : defaultImg} alt="food image" className="carousel-image" />
        </div>
    );
}

Carousel.propTypes = {
    recipe: PropTypes.shape({
        title: PropTypes.string.isRequired,
        image: PropTypes.string,
    }).isRequired,
};



export default Carousel;