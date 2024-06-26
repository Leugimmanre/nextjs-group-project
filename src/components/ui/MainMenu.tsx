import { ActiveLink } from "../active-link/ActiveLink";

export const MainMenu = () => {
  const navItems = [
    { path: "/", text: "Home" },
    { path: "/contact", text: "Contact" },
    { path: "/user/login", text: "Login" },
    { path: "/user/register", text: "Register"},
  ];

  return (
    <nav
      className={`flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4 text-center`}
    >
      {navItems.map((item) => (
        <ActiveLink key={item.text} {...item} />
      ))}
    </nav>
  );
};
