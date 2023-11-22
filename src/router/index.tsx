import MisTorneos from '../Pages/MisTorneos';
import ProponerTorneo from '../Pages/ProponerTorneo';
import InvitarTorneo from '../Pages/InvitarTorneo';
import TorneosAbiertos from '../Pages/TorneosAbiertos';
import { AppRoute } from './routes';

const ComponentRouter = (path: string) => {
    const currentComponent: { [key: string]: JSX.Element } = {
      [AppRoute.MisTorneos]: <MisTorneos />,
      [AppRoute.ProponerTorneo]: <ProponerTorneo />,
      [AppRoute.InvitarTorneo]: <InvitarTorneo />,
      [AppRoute.TorneosAbiertos]: <TorneosAbiertos />,
    };
  
    const item = currentComponent[path];

    return item || <div>Componente no encontrado</div>;
};
  

export default ComponentRouter;
