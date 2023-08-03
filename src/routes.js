import FilmsPage from './pages/FilmsPage';
import HomePage from './pages/HomePage';
import PeoplePage from './pages/PeoplePage';
import VehicleDetaillPage from './pages/VehicleDetaillPage';
import VehiclesPage from './pages/VehiclesPage';
import PlanetsPage from './pages/PlanetsPage';

const routes = [
  {
    path: '/',
    Element: HomePage,
  },
  {
    path: '/people',
    Element: PeoplePage,
  },
  {
    path: '/vehicles',
    Element: VehiclesPage,
  },
  {
    path: '/vehicle/:id',
    Element: VehicleDetaillPage,
  },
  {
    path: '/films',
    Element: FilmsPage,
  },
  {
    path: '/planets',
    Element: PlanetsPage,
  },
];

export { routes };
