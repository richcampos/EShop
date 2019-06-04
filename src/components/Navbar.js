import React from 'react';
import { Link } from 'react-router-dom'

import Dropdown from 'react-bootstrap/Dropdown'
import './styles/Navbar.css'

function Greeting(props) {
  if(props.isLogged) {
    return (
      <Dropdown.Toggle>
        Bienvenido {props.userData.username}!
      </Dropdown.Toggle>
    )
  }
  return (
    <Dropdown.Toggle>
      Bienvenido!
    </Dropdown.Toggle>
  )
}

function LogInOut(props) {
  if(props.isLogged) {
    return (
      <Link className="nav-link" to='/'>
        Cerrar Sesión
      </Link>
    )
  }
  return (
    <Link className="nav-link" to='/logIn'>
      Iniciar Sesión
    </Link>
  )
}

function Orders(props) {
  if(props.isLogged) {
    return(
      <Link className="nav-link" to={`${props.userData.id}/pedidos`}>Mis pedidos</Link>
    )
  }
  return (
    <Link className="nav-link" to="/login">Mis pedidos</Link>
  )
}

function Notifications(props) {
  if(props.isLogged) {
    return(
      <Link className="nav-link" to={`${props.userData.id}/notificaciones`}>Mis notificaciones</Link>
    )
  }
  return (
    <Link className="nav-link" to="/login">Mis notificaciones</Link>
  )
}

class Navbar extends React.Component {
  render() {
    return(
      <div className="Navbar nav justify-content-between">
        <Link className="nav-link" to="/">
          <h1>EShop</h1>
        </Link>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Dropdown>
              <Greeting isLogged={this.props.log} userData={this.props.data}/>
              <Dropdown.Menu>
                <Dropdown.Item>
                  <LogInOut isLogged={this.props.log} userData={this.props.data}/>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Orders isLogged={this.props.log} userData={this.props.data}/>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Notifications isLogged={this.props.log} userData={this.props.data}/>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/carrito'>Carrito</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/contacto'>Contacto</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Navbar