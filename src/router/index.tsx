import { AppRoute } from './routes';
import PrivateRoutes from './privateRoutes';
import MisTorneos from '../Pages/MisTorneos';
import ProponerTorneo from '../Pages/ProponerTorneo';
import InvitarTorneo from '../Pages/InvitarTorneo';
import TorneosAbiertos from '../Pages/TorneosAbiertos';
import Home from '../Pages/Home';

const ComponentRouter = (path: string) => {
    const currentComponent: { [key: string]: JSX.Element } = {
      [AppRoute.MisTorneos]: <PrivateRoutes component={MisTorneos}/>,
      [AppRoute.ProponerTorneo]: <PrivateRoutes component={ProponerTorneo}/>,
      [AppRoute.InvitarTorneo]: <PrivateRoutes component={InvitarTorneo}/>,
      [AppRoute.TorneosAbiertos]: <PrivateRoutes component={TorneosAbiertos}/>,
      [AppRoute.Home]: <PrivateRoutes component={Home}/>,
    };
  
    const item = currentComponent[path];

    return item || <div>Componente no encontrado</div>;
};

export default ComponentRouter;
