import Card from "../card/Card";
import "./BookCard.css";
import Button from "../button/Button";

function Bookcard(props) {
    return (
       <Card>
       <div className="BookCard">
        <h2>{props.title}</h2>

        <p className="author">
            {props.author}
        </p>

        <p className="category">
            {props.category}
        </p>

        </div>

        <Button text=" View Details" />
        </Card>
      
    );
}

export default Bookcard;