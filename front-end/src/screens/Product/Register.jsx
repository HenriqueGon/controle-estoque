import React, { useState } from 'react';

import Input from 'components/Input';
import Button from 'components/Button';
import { useHistory } from 'react-router-dom';

function initialValue() {
  return {
    id: '',
    description: '',
    quantity: '',
    provider: '',
    company: '',
  }
}

const ProductRegister = (props) => {
  let [values, setValues] = useState(initialValue);

  const history = useHistory();

  return (
    <div>
      <div className='content-wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-9'>
              <Input label='Descrição:'
                value={values.description}
                onChange={(e) => {
                  setValues({
                    ...values,
                    description: e.target.value,
                  });
                }} />
            </div>

            <div className='col-sm-3'>
              <Input label='Quantidade:'
                type='number'
                value={values.quantity}
                onChange={(e) => {
                  if (e.target.value >= 0) {
                    setValues({
                      ...values,
                      quantity: e.target.value,
                    });
                  }
                }} />
            </div>
          </div>

          <div className='row'>
            <div style={{ paddingTop: '10px' }} className='col-sm-3'>
              <p>
                Fornecedor:
                <select className="form-select">
                  <option selected>Selecionar</option>
                  <option value="1">Jean Carlo Bueno</option>
                </select>
              </p>
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
              
              history.push('/produtos');
            }} />
        </div>
      </div>
    </div>
  );
}

export default ProductRegister;