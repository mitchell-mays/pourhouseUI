import React from "react";
import { Menu } from "semantic-ui-react";

export default class NavBar extends React.Component {
  state = { activeItem: "offer" };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Menu pointing>
        <Menu.Item
          name="offer"
          active={activeItem === "offer"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="drive"
          active={activeItem === "drive"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="donate"
          active={activeItem === "donate"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="move-ins"
          active={activeItem === "move-ins"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="mission"
          active={activeItem === "mission"}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="admin"
          active={activeItem === "admin"}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="login"
            active={activeItem === "login"}
            onClick={this.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
