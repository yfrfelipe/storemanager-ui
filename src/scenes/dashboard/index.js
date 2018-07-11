import React from "react";
import Card from "../../components/Cards";
import Tabs from "../../components/Tabs";
import { Tab } from "../../components/Tab";

class DashBoard extends React.Component {
  render() {
    // const { onRequest } = this.props;
    return (
      <div>
        
        <Tabs>
          <Tab iconClassName={"fa fa-headphones"} linkClassName={"custom-link"}>
            <p>hello</p>
          </Tab>
          <Tab iconClassName={"fa fa-headphones"} linkClassName={"custom-link"}>
            <p>from</p>
          </Tab>
        </Tabs>
          {/* <button onClick={onRequest}>load </button> */}
      
        <div className="row">
          <Card title="Fornecedores" quantity="80" />
          <Card title="Clientes" quantity="200" />
          <Card title="Estoques" quantity="500" />
        </div>

       
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     localidades: state.localidade.item
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     onRequest: () => dispatch({ type: "API_CALL_REQUEST" })
//   };
// };

export default DashBoard;
