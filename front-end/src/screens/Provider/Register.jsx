import React, { useState } from 'react';

import Input from 'components/Input';
import Button from 'components/Button';
import { useHistory } from 'react-router-dom';

function initialValue() {
  return {
    id: '',
    name: '',
    federal_document: '',
    phone: '',
    email: '',
    company: '',
  }
}

const ProviderRegister = (props) => {
  let [values, setValues] = useState(initialValue);

  const history = useHistory();

  return (
    <div>
      <div className='content-wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-9'>
              <Input label='Nome:'
                value={values.name}
                onChange={(e) => {
                  setValues({
                    ...values,
                    name: e.target.value,
                  });
                }} />
            </div>

            <div className='col-sm-3'>
              <Input label='Documento Federal'
                value={values.federal_document}
                onChange={(e) => {
                  setValues({
                    ...values,
                    federal_document: e.target.value,
                  });
                }} />
            </div>
          </div>

          <div className='row'>
            <div className='col-sm-3'>
              <Input label='Telefone:'
                value={values.phone}
                onChange={(e) => {
                  setValues({
                    ...values,
                    phone: e.target.value,
                  });
                }} />
            </div>

            <div className='col-sm-6'>
              <Input label='Email:'
                value={values.email}
                onChange={(e) => {
                  setValues({
                    ...values,
                    email: e.target.value,
                  });
                }} />
            </div>

            <div style={{ paddingTop: '10px' }} className='col-sm-3'>
              <p>
                Empresa:
                <select className="form-select">
                  <option selected>Selecionar</option>
                  <option value="1">Nome da Empresa</option>
                </select>
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className='row margin-button'>
        <div className='col-sm-1'>
          <Button label='Salvar'
            className='btn-success' />
        </div>

        <div className='col-sm-1'>
          <Button label='Cancelar'
            className='btn-danger'
            onClick={() => {
              setValues(initialValue);

              history.push('/fornecedores');
            }} />
        </div>
      </div>
    </div>
  );
}

export default ProviderRegister;