import React from "react";

class DropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
    }

    showDropdown(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        const classDropdownMenu = 'dropdown-menu dropdown-menu-right' + (this.state.isToggleOn ? ' show' : '')
        return (
            <div className="dropdown">
                <button className="btn  dropdown-toggle btn-outline-light btn-sm"
                 type="button" id="dropdownMenuButton"
                 data-toggle="dropdown"  onClick={(e) => {this.showDropdown(e)}} 
                 aria-haspopup="true" aria-expanded="false">
                    Antônio 
                </button>
                <div className={classDropdownMenu}  aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another</a>
                    <a className="dropdown-item" href="#">Something </a>
                </div>
            </div>
        );
    }
}


export default DropDown;
