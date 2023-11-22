import { AppRoute } from './routes';
import MisTorneos from '../Pages/MisTorneos';
import ProponerTorneo from '../Pages/ProponerTorneo';
import InvitarTorneo from '../Pages/InvitarTorneo';
import TorneosAbiertos from '../Pages/TorneosAbiertos';
import Home from '../Pages/Home';

const ComponentRouter = (path: string) => {
    console.log(path);
    const currentComponent: { [key: string]: JSX.Element } = {
      [AppRoute.MisTorneos]: <MisTorneos />,
      [AppRoute.ProponerTorneo]: <ProponerTorneo />,
      [AppRoute.InvitarTorneo]: <InvitarTorneo />,
      [AppRoute.TorneosAbiertos]: <TorneosAbiertos />,
      [AppRoute.Home]: <Home />,
    };
  
    const item = currentComponent[path];

    return item || <div>Componente no encontrado</div>;
};
  

export default ComponentRouter;
