import React from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

export default class NavBar extends React.Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing>
        <NavLink to="/">
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
          />
        </NavLink>

        <NavLink to="/offer">
          <Menu.Item
            name="offer"
            active={activeItem === "offer"}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/drive">
          <Menu.Item
            name="drive"
            active={activeItem === "drive"}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/donate">
          <Menu.Item
            name="donate"
            active={activeItem === "donate"}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/move-ins">
          <Menu.Item
            name="move-ins"
            active={activeItem === "move-ins"}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/mission">
          <Menu.Item
            name="mission"
            active={activeItem === "mission"}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <NavLink to="/admin">
          <Menu.Item
            name="admin"
            active={activeItem === "admin"}
            onClick={this.handleItemClick}
          />
        </NavLink>
        <Menu.Menu position="right">
          <NavLink to="/login">
            <Menu.Item
              name="login"
              active={activeItem === "login"}
              onClick={this.handleItemClick}
            />
          </NavLink>
        </Menu.Menu>
      </Menu>
    );
  }
}
