import Button from "components/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const ProviderList = () => {
  // let [ registers, setRegisters ] = useState([]);

  const history = useHistory();

  return (
    <div className='content-wrapper'>
      <div className='container'>
        <div className='row'>
          <div style={{ overflow: 'auto' }} className='col-sm-9'>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">CPF</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Empresa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Jean Carlo Bueno</td>
                  <td>205.980.830-81</td>
                  <td>(38) 40461-6673</td>
                  <td>Nome da Empresa</td>
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
                history.push('/fornecedores/incluir');
              }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProviderList;