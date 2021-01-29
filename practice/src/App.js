import logo from './logo.svg';
import './App.css';
import React from 'react'

function App() {
  var giveItem = {
    imageUrl: "https://images.theconversation.com/files/93616/original/image-20150902-6700-t2axrz.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip",
    title: "Title",
    description: "Description"
  }
  return (
    <div>
      <FilterableProductTable products={PRODUCTS} />
    </div>
  );
}

class ProductCategoryRow extends React.Component{
  render(){
    const category = this.props.category;
    return(
      <tr>
        <th colSpan="2">
          {category}
        </th>
      </tr>
    )
  }
}

class ProductRow extends React.Component{
  render(){
    const product = this.props.product;
    const name = product.stocked ?
    product.name :
    <span style={{color: 'red'}}>
      {product.name}
    </span>;
    return(
      <tr>
        <td>{name}</td>
        <td>{product.price}</td>
      </tr>
    )
  }
}

class ProductTable extends React.Component{
  render(){
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow 
          category={product.category}
          key={product.category}/>);
      }
      rows.push(<ProductRow
        product={product}
        key={product.name} />)
        lastCategory = product.category;
    })
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}

class SearchBar extends React.Component{
  constructor(props){
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onIn
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." 
        value={this.props.filterText}
        onChange={this.handleFilterTextChange}/>
        <p>
          <input type='checkbox' 
          checked={this.props.inStockOnly}
          onChange={this.handleInStockChange} />
          {' '}
          Only show products in stock
        </p>
      </form>
    )
  }
}

class FilterableProductTable extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      filterText: 'ball',
      inStockOnly: false
    }
  }

  render(){
    return(
      <div>
        <SearchBar inStock={this.inStockOnly} />
        <ProductTable filterText={this.filterText} products={this.props.products} />
      </div>
    )
  }
}



class SimpleCard extends React.Component{
  render(){
    return(
      <div class='top'>
        <div class='imgLeft'>
          <Image url={this.props.item.imageUrl} />
        </div>
          <Title text={this.props.item.title} />
          <br></br>
          <Description text={this.props.item.description} />
      </div>
    )
  }
}


class Image extends React.Component{
  render(){
  return(
    <div>
      <img src={this.props.url} alt="" width="100" length="100" />
    </div>
  )
  }
}

class Title extends React.Component{
  render(){
  return(
    <strong>{this.props.text}</strong>
  )
  }
}

class Description extends React.Component{
  render(){
  return(
    <text>{this.props.text}</text>
  )
  }
}

const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

export default App;
