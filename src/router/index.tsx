import MisTorneos from '../modules/MisTorneos';
import ProponerTorneo from '../modules/ProponerTorneo';
import InvitarTorneo from '../modules/InvitarTorneo';
import TorneosAbiertos from '../modules/TorneosAbiertos';
import { AppRoute } from './routes';

const ComponentRouter = (path:any) => {
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
