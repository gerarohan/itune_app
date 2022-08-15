import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemCard({image,cardTitle, previewUrl }) {
  return (
    <div >
    <Card data-testid="card-1" style={{ 'width': '18em', 'border': '1px solid', 'padding': '5px'}} >
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        {/* <Card.Text>{description}
        </Card.Text> */}
        <Button variant="primary" onClick={() => window.open(previewUrl, "_blank")}>Preview</Button>
      </Card.Body>
    </Card>
     </div>
  );
}

export default ItemCard;