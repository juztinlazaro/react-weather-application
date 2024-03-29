import React, { Fragment, Suspense, lazy, useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { IPublicRoutes } from './interface';

const Home = lazy(() => import('module/Home/Home'));

const privateRoutesList = [
  {
    component: Home,
    exact: true,
    id: 'home-id',
    path: '/home',
  },
];

const PrivateRoutes: React.SFC<IPublicRoutes> = ({ isLoggedIn }) => {
  const [privateRoutes, setRootPath] = useState(privateRoutesList);
  useEffect(() => {
    if (isLoggedIn) {
      const newPath = [
        ...privateRoutesList,
        {
          component: Home,
          exact: true,
          id: 'home-id',
          path: '/',
        },
      ];
      setRootPath(newPath);
    }
  }, [isLoggedIn]);

  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          {privateRoutes.map((route: any) => (
            <Route
              key={route.id}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}

          {isLoggedIn && <Route component={() => <h2>404 private</h2>} />}
        </Switch>
      </Suspense>
    </Fragment>
  );
};

export default PrivateRoutes;
