import React from 'react'

import Carrousel from '../components/Carrousel'
import ProductGrid from '../components/ProductGrid';
import Banner from '../components/Banner';

import './styles/Home.css'

class Home extends React.Component {
  products = [
    {
      name: 'Code',
      photoUrl: 'https://res.cloudinary.com/dfjzvlip6/image/upload/v1534425538/assets/2996704-programming-php-programming-language-syntax-highlighting-minified-knowledge-coding-code-html-computer-pixels-computer-screen-logic___mixed-wallpapers.jpg',
      desc: 'iojeojaoñfjjefoia',
      price: '$52',
      id: 1
    },
    {
      name: 'Net',
      photoUrl: 'https://res.cloudinary.com/dfjzvlip6/image/upload/v1559230053/assets/2.jpg',
      desc: 'iojeojaoñfjjefoia',
      price: '$100',
      id: 2
    },
    {
      name: 'Elephant',
      photoUrl: 'https://res.cloudinary.com/dfjzvlip6/image/upload/v1531968828/assets/3Zk4aNH.jpg.jpg',
      desc: 'iojeojaoñfjjefoia',
      price: '$30',
      id: 3
    }
  ]
  render() {
    return(
      <div className="Home">
        <Carrousel products={this.products}/>
        <ProductGrid className="grid-home" products={this.products}/>
        <Banner photoUrl='https://res.cloudinary.com/dfjzvlip6/image/upload/v1559230053/assets/2.jpg'/>
        <ProductGrid className="grid-home" products={this.products}/>
        <Banner photoUrl='https://res.cloudinary.com/dfjzvlip6/image/upload/v1531968828/assets/3Zk4aNH.jpg.jpg'/>
      </div>
    );
  }
}

export default Home