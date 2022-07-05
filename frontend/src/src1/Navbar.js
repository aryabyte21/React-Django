import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "./context/AuthContext";
import tw from "twin.macro";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton } from "components/misc/Buttons.js";
import styled from "styled-components";

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const HeaderRow = tw.div`flex justify-between  items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;

const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <nav>
      <div>
        <div>
          {user ? (
            <>
              <HeaderRow>
                <Header>Kabaddi Talent Hunt</Header>
                <Link to="/protected">Protected Page</Link>
                <PrimaryButton onClick={logoutUser}>Logout</PrimaryButton>
              </HeaderRow>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
