import Button from "components/Button";
import { useState } from "react";
import { useHistory } from "react-router";

const ProductList = () => {
  // let [ registers, setRegisters ] = useState([]);

  const history = useHistory();

  return (
    <div className='content-wrapper'>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-9'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Descricao</th>
                  <th scope="col">Quantidade</th>
                  <th scope="col">Fornecedor</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Cadeira</td>
                  <td>10</td>
                  <td>Jean Carlo Bueno</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div style={{ marginTop: '10px', textAlign: 'center' }} 
            className='col-sm-3'>
              <Button label='Adicionar'
                icon='fa-plus'
                className='btn-success'
                onClick={() => {
                  history.push('/produtos/incluir');
                }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductList;