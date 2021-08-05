import React, { useState } from 'react';

import Input from 'components/Input';
import Button from 'components/Button';

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

  return (
    <div className='container'>
      <div className='col-md-12'>
        <div style={{ display: 'flex', justifyContent: 'space-between' }} className='row'>
          <div className='col-md-2'>
            <Input label='Código:'
              value={values.id}
              disabled />
          </div>

          <div className='col-md-7'>
            <Input label='Nome:'
              value={values.company_name}
              onChange={(e) => {
                setValues({
                  ...values,
                  company_name: e.target.value,
                });
              }} />
          </div>

          <div className='col-md-3'>
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
      </div>

      <div className='col-md-12'>
        <div className='row'>
          <div className='col-md-3'>
            <Input label='Phone:'
              value={values.phone}
              onChange={(e) => {
                setValues({
                  ...values,
                  phone: e.target.value,
                });
              }} />
          </div>

          <div className='col-md-5'>
            <Input label='Email:'
              value={values.email}
              type='email'
              onChange={(e) => {
                setValues({
                  ...values,
                  email: e.target.value,
                });
              }} />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '10px' }}
        className='col-md-12'>
        <div className='row'>
          <div className='col-sm-2'>
            <Button label='Salvar'
              className='btn-success'
              onClick={() => {

              }} />
          </div>

          <div className='col-sm-2'>
            <Button label='Cancelar'
              className='btn-danger'
              onClick={() => {

              }} />
          </div>
        </div>
      </div> 
    </div>
  );
}

export default CompanyRegister;