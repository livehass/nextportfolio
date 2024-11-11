import { XMarkIcon } from "@heroicons/react/24/solid";
import NavLink from "./NavLink";

const MenuOverlay = ({ links, closeOverlay }) => {
  return (
    <div className="fixed top-0 right-0 h-3/4 w-3/4 bg-gray-900 bg-opacity-90 z-20 p-5 flex flex-col items-center justify-center space-y-4">
      <button
        onClick={closeOverlay}
        className="absolute top-4 right-4 text-white hover:text-gray-300"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>
      <ul className="text-white space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <NavLink
              href={link.path}
              title={link.title}
              onClick={closeOverlay}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
