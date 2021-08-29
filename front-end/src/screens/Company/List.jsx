import Button from "components/Button";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const CompanyList = () => {
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
                  <th scope="col">Razão Social</th>
                  <th scope="col">CNPJ</th>
                  <th scope="col">Telefone</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Nome da empresa</td>
                  <td>17.063.494/0001-56</td>
                  <td>(38) 40461-6673</td>
                  <td>lidon9957@uorak.com</td>
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
                history.push('/empresas/incluir');
              }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyList;