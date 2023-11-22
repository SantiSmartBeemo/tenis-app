import Auth from '@/Pages/Auth';
import { useSession } from 'next-auth/react';

interface PrivateRoutesProps {
    component: React.ElementType;
    roles?: string[];
}

const PrivateRoutes = ({ component: Component, roles }: PrivateRoutesProps) => {
  const { data: session } = useSession();

  if (!session) {
    return <Auth />;
  }

  const userRoles = session.user?.roles || [];

  if (roles?.length === 0) {
    const hasPermission = roles?.every(role => userRoles.includes(role));

    if (!hasPermission) {
        return <div>No autorizado</div>;
    }
  }

  return <Component />;
};

export default PrivateRoutes;
