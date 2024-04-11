import Container from "../ui/Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";

function NavBar() {
  return (
    <nav className=" fixed w-full bg-white z-10 shadow-sm">
      <div className=" py-4 border-b-[1px]">
        <Container>
          <div
            className="
            flex
            flex-row
            justify-between
            items-center
            gap-3
            md:gap-0
          "
          >
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </nav>
  );
}

export default NavBar;
