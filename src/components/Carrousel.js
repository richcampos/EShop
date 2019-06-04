import React from 'react';

import Carousel from 'react-bootstrap/Carousel';

class Carrousel extends React.Component {
  render(){
    return(
      <Carousel className="carousell">
        {this.props.products.map(product => (
          <Carousel.Item key={product.id}>
            <img
              className="d-block w-100"
              src={product.photoUrl}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{product.name}</h3>
              <p>{product.desc}</p>
              <p>{product.price}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    )
  }
}

export default Carrousel