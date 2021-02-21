import React from 'react';
import '../../assets/css/side-menu.css';
import authService from '../../Service/auth.service';

const handleLogout = (event) => {
    authService.logout();
    window.location.href="/login";
};

class Sidebar extends React.Component {
    state = {
          drawerPos: 2
      };
  
      handleDrawer=() => {
          if (this.state.drawerPos < 2) {
              this.setState((state)=> ({
                  drawerPos: state.drawerPos + 1
              }));
          } else {
              this.setState({
                  drawerPos: 0
              })
          }
      };
      render() {
          
      let drawerClass = [];
      let mainClass = [];
      if (this.state.drawerPos === 1) {
          drawerClass.push("drawerMin");
          mainClass.push("mainMin")
      } else if (this.state.drawerPos === 2) {
          drawerClass.push("drawerOpen");
              mainClass.push("mainOpen");
          } else {
              drawerClass = [];
              mainClass = [];
          }
      
          return (
            <div className="sidebar">
                <navbar className="navbar navbar-expand-lg navbar-light bg-light"><h3 onClick={this.handleDrawer}> Warehouse</h3> 
                <div className="navbar-end">
                    <div className="navbar-item">
                        <a href="#" onClick={handleLogout} className="btn btn-secondary">Logout</a>
                    </div>
                </div>
                </navbar>
          <aside className={drawerClass.join(" ")} >
            <ul>
              <li><a href={"/home"}>Dashboard</a></li>
              <li><a href={"/product"}>Product</a></li>
              <li><a href={"/category"}>Category</a></li>
              <li><a href={"/shelves"}>Shelves</a></li>
              <li><a href={"/inventory"}>Inventory</a></li>
              <li><a href={"/report"}>Report</a></li>
              <li><a href={"/account"}>Account</a></li>
             
            </ul>
          </aside>
          <main className={mainClass.join(" ")}>
              
                 </main>
              </div>
          );
      }
  }
  
  export default Sidebar;