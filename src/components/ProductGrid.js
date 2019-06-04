import React from 'react';

import ProductCard from './PoductCard'

class ProductGrid extends React.Component {
  render(){
    return (
      <div className="grid-home">
          {this.props.products.map(item=>(
            <ProductCard key={item.id} name={item.name} photoUrl={item.photoUrl} id={item.id}/>
          ))}
      </div>
    )
  }
}

export default ProductGrid