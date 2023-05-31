import React, { useState } from 'react';
import {
  FormularioPagoContainer,
  FormularioPagoTitle,
  FormularioPagoField,
  FormularioPagoLabel,
  FormularioPagoInput,
  FormularioPagoButton,
} from './FormulariopagoStyled.jsx';
import { Link } from 'react-router-dom';


const FormularioPago = () => {
  const [nombre, setNombre] = useState('');
  const [apellidos, setApellidos] = useState('');
  const [tarjeta, setTarjeta] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardar los datos en el sessionStorage
    sessionStorage.setItem('nombre', nombre);
    sessionStorage.setItem('apellidos', apellidos);
    sessionStorage.setItem('tarjeta', tarjeta);

    // Limpiar los campos del formulario
    setNombre('');
    setApellidos('');
    setTarjeta('');

    // Redirigir a la página de resumen de vuelo
    // Puedes utilizar la librería de enrutamiento que estés usando (por ejemplo, react-router-dom)
    // para navegar a la página de resumen de vuelo después de guardar los datos
    // history.push('/resumen-vuelo');
  };

  return (
    
    <FormularioPagoContainer onSubmit={handleSubmit}>
      <FormularioPagoTitle>Formulario de Pago</FormularioPagoTitle>
      <FormularioPagoField>
        <FormularioPagoLabel>Nombre:</FormularioPagoLabel>
        <FormularioPagoInput
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </FormularioPagoField>
      <FormularioPagoField>
        <FormularioPagoLabel>Apellidos:</FormularioPagoLabel>
        <FormularioPagoInput
          type="text"
          value={apellidos}
          onChange={(e) => setApellidos(e.target.value)}
          required
        />
      </FormularioPagoField>
      <FormularioPagoField>
        <FormularioPagoLabel>Número de Tarjeta:</FormularioPagoLabel>
        <FormularioPagoInput
          type="text"
          value={tarjeta}
          onChange={(e) => setTarjeta(e.target.value)}
          required
        />
      </FormularioPagoField>
      <FormularioPagoButton type="submit">Guardar Datos</FormularioPagoButton>
      <Link to="/resume"
            style={{
          borderRadius: '20px',
          border: '1px solid #9e1071',
          textDecoration: 'none', // Establecer textDecoration en none
          backgroundColor: 'transparent',
          alignContent: 'center',
          padding: '18px 18px',
          marginTop: '2rem',
          fontSize: '16px',
          fontWeight: 'bold',
          width: '310px',
          color: '#9e1071',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          }}
          className="custom-link"
      >
  Resumen de tu vuelo</Link>
    </FormularioPagoContainer>
    );
    };

export default FormularioPago;
