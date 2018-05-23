import React from "react";

class DropDown extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: false
        };
        this.show = this.show.bind(this);
        this.close = this.close.bind(this);
    }

    show(e) {
        e.preventDefault();
        this.setState({ isToggleOn: true }, () => {
            document.addEventListener('click', this.close)
        });
    }

    close() {
        this.setState({ isToggleOn: false }, () => {
            document.removeEventListener('click', this.close)
        });
    }

    render() {
        const classDropdownMenu = 'dropdown-menu dropdown-menu-right' + (this.state.isToggleOn ? ' show' : '')
        return (
            <div className="dropdown">
                <button className="btn  dropdown-toggle btn-outline-light btn-sm"
                    type="button" id="dropdownMenuButton"
                    data-toggle="dropdown" onClick={(e) => { this.show(e) }}
                    aria-haspopup="true" aria-expanded="false">
                    Antônio
                </button>
                <div className={classDropdownMenu} aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another</a>
                    <a className="dropdown-item" href="#">Something </a>
                </div>
            </div>
        );
    }
}


export default DropDown;
