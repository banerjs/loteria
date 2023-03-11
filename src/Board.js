import { useState } from 'react';
import { CheckCircle } from 'react-bootstrap-icons';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const NUM_ROWS = 4;
const NUM_COLUMNS = 4;

const Card = () => {
  const [selected, setSelected] = useState(false);

  return (
    <div style={{
        height: "100%",
        width: "100%",
        margin: 0,
        backgroundColor: selected ? "rgba(255, 255, 255, 0.6)" : "",
      }}
      onClick={() => setSelected(!selected)}
      className="text-center d-flex justify-content-center align-items-center">
        <CheckCircle color={"#03ac13"} size={96} className={selected ? "visible" : "invisible"}></CheckCircle>
    </div>
  );
}

const Board = ({ images }) => {
  return (
    <Container fluid style={{height: "100vh", width: "100vh"}}>
      {[...Array(NUM_ROWS).keys()].map(row_idx => {
        return (
          <Row key={row_idx} style={{height: "25%"}}>
            {images.slice(row_idx * NUM_COLUMNS, (row_idx + 1) * NUM_COLUMNS).map((col_idx, idx, arr) => {
              return (
                <Col key={col_idx}
                     style={{
                       backgroundImage: `url("/img/${arr[idx]}")`,
                       backgroundSize: "cover",
                       backgroundRepeat: "no-repeat",
                       backgroundPosition: "center",
                       padding: 0,
                     }}>
                  <Card></Card>
                </Col>
              );
            })}
          </Row>
        );
      })}
    </Container>
  );
}

export default Board;