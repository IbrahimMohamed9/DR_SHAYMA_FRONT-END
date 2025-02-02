import { Link } from "react-router-dom";
import routes from "../../routes";

const NavDesktop = () => {
  const routesElement = routes.map(({ title, href, Icon }) => (
    <li key={title}>
      <Link
        to={href}
        className="flex items-center gap-1 text-xl text-white hover:text-main-green transition-all"
      >
        <Icon />
        {title}
      </Link>
    </li>
  ));

  return (
    <ul className="hidden lg:flex lg:items-center gap-5 text-sm">
      {routesElement}
    </ul>
  );
};

export default NavDesktop;
