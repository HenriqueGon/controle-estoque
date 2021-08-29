import React, { useState } from 'react';

import Input from 'components/Input';
import Button from 'components/Button';
import './index.css';
import { useHistory } from 'react-router-dom';

function initialValue() {
  return {
    id: '',
    company_name: '',
    federal_document: '',
    phone: '',
    email: '',
  }
}

const CompanyRegister = (props) => {
  let [ values, setValues ] = useState(initialValue);
  
  const history = useHistory();

  return (
    <div>
      <div className='content-wrapper'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-9'>
              <Input label='Razão Social:' 
                value={values.company_name}
                onChange={(e) => {
                  setValues({
                    ...values,
                    company_name: e.target.value,
                  });
                }} />
            </div>

            <div className='col-sm-3'>
              <Input label='CNPJ'
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

              history.push('/empresas');
            }} />
        </div>
      </div>
    </div>
  );
}

export default CompanyRegister;