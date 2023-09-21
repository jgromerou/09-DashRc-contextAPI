import { Navigate } from 'react-router-dom';

export const PrivateRoutes = ({ children, isLogged }) => {
  //TODO: Aca devemos validar si el  usuario esta validado con el Context

  return isLogged ? children : <Navigate to="/auth/login" />;
};
