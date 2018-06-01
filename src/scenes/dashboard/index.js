import React from "react";
import Card from "../../components/Cards";
import { connect } from "react-redux";

class DashBoard extends React.Component {
  render() {
    const { onRequest } = this.props;
    return (
      <div>
        <div className="row">
          <button onClick={onRequest}>load </button>
        </div>
        <div className="row">
          <Card title="Fornecedores" quantity="80" />
          <Card title="Clientes" quantity="200" />
          <Card title="Estoques" quantity="500" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    localidades: state.localidade.item
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequest: () => dispatch({ type: "API_CALL_REQUEST" })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);
