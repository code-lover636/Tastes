import '../styles/App.css';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
 


const Details = ({info}) => {
  return (
    <div className="recipe-details">
        <h1 className="recom-head">Summary</h1>
        {info.summary ? <p className="summary">{parse(info.summary)}</p> : <p className="summary">No Summary Available</p>}
        <h1 className="recom-head">Instructions</h1>
        {info.instructions ? <p className="instructions">{parse(info.instructions)}</p> : <p className="summary">No Instructions Available</p>}
        <h1 className="recom-head">More Information</h1>
          <ul>
            <li>Vegetarian: {info.vegetarian? "Yes": "No"}</li>
            <li>Vegan: {info.vegan? "Yes": "No"}</li>
            <li>Glutten Free: {info.glutenFree? "Yes": "No"}</li>
            <li>Dairy Free: {info.dairyFree? "Yes": "No"}</li>
            <li>Dairy Free: {info.dairyFree? "Yes": "No"}</li>
          </ul>
        <h1 className="recom-head">Recommendations</h1>
    </div>
  )
}

Details.propTypes = {
  info: PropTypes.object.isRequired,
};

export default Details