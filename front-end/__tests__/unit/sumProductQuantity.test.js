describe('Soma da quantidade de produtos', () => {
  it('Deve retornar a soma de dois valores, sendo um deles passado pelo usuário e o outro vindo de um objeto do tipo Produto', () => {
    const product = {
      name: 'Product 1',
      description: 'Test product 2',
      quantity: 10,
    };

    const value = 5;

    const sum = product.quantity + value;

    expect(sum).toBe(15);
  });

  it('Deve retornar NaN resultante da soma de dois valores, sendo um deles um valor undefined passado pelo usuário e o outro vindo de um objeto do tipo Produto', () => {
    const product = {
      name: 'Product 2',
      description: 'Test product 2',
      quantity: undefined,
    };

    const value = 34;

    const sum = product.quantity + value;

    expect(sum).toBeNaN();
  });

  it('Deve retornar o unico valor valido entre os valores da soma, sendo um deles um valor null passado pelo usuário e o outro vindo de um objeto do tipo Produto', () => {
    const product = {
      name: 'Product 3',
      description: 'Test product 3',
      quantity: 3,
    };

    const value = null;

    const sum = product.quantity + value;

    expect(sum).toBe(3);
  });

  it('Deve retornar a soma de dois valores resultante de um valor menor que 0, sendo um deles um valor negativo e maior que a quantidade de produto passado pelo usuário e o outro vindo de um objeto do tipo Produto', () => {
    const product = {
      name: 'Product 4',
      description: 'Test product 4',
      quantity: 32,
    };

    const value = -35;

    const sum = product.quantity + value;

    expect(sum).toBeLessThan(0);
  });
})
