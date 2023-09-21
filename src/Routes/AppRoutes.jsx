import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoutes } from './PrivateRoutes';
import { GeneralLayout } from '../layouts/GeneralLayout';
import AuthLayout from '../layouts/AuthLayout';
import { PublicRoutes } from './PublicRoutes';
import { AuthContext } from '../contexts/AuthContext';
import { useEffect } from 'react';
import { useContext } from 'react';

export const AppRoutes = () => {
  const { checkAuthToken, state } = useContext(AuthContext);

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (state.isLoading) {
    return <h1>Cargando.. </h1>;
  }

  return (
    <>
      <Routes>
        <Route
          path="/auth/*"
          element={
            <PublicRoutes isLogged={state.isLogged}>
              <AuthLayout />
            </PublicRoutes>
          }
        />

        <Route
          path="/*"
          element={
            <PrivateRoutes isLogged={state.isLogged}>
              <GeneralLayout />
            </PrivateRoutes>
          }
        />
      </Routes>
    </>
  );
};
