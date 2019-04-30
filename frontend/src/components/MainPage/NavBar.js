import React from 'react';
import { connect } from 'react-redux';
import { showNavBar } from '../../actions';
import {changeUrl, postSignUp} from '../../actions';
class NavBar extends React.Component {
    render() {
        // const onSubmit = () => {
        //     if (this.username !== undefined && this.password !== undefined) {
        //         this.props.onClick(this.username.value, this.password.value)
        //     }

        return (
        <div>
          <header className="clear">
           <div className="wrap">
             <div className="logo" onClick={() => this.props.onClick()}></div>
             <nav className="navBar">
               <ul>
                 <li><a>LOG IN</a></li>
                 <li><a>JOIN</a></li>
               </ul>
             </nav>
           </div>
         </header>
       </div>
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onClick: () => dispatch(changeUrl('/'))
    }
}

NavBar = connect(undefined, mapDispatchToProps)(NavBar);



export default NavBar;
