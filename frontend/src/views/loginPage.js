import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import React from "react";
import AnimationRevealPage from "../src1/helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "../src1/components/misc/Layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "../src1/images/login-illustration.jpg";
import logo from "../src1/images/logo.png";

import { ReactComponent as LoginIcon } from "feather-icons/dist/icons/log-in.svg";

const Container = tw(
  ContainerBase
)`min-h-screen bg-primary-900 text-white font-medium flex justify-center -m-8`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-20 sm:my-16 bg-white text-gray-900 shadow sm:rounded-lg flex justify-center flex-1`;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8`;

const SocialButtonsContainer = tw.div`flex flex-col items-center`;
const SocialButton = styled.a`
  ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
  .iconContainer {
    ${tw`bg-white p-2 rounded-full`}
  }
  .icon {
    ${tw`w-4`}
  }
  .text {
    ${tw`ml-4`}
  }
`;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-primary-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${(props) => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-sm bg-contain bg-center bg-no-repeat`}
`;

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    // <section>
    //   <form onSubmit={handleSubmit}>
    //     <h1>Login </h1>
    //     <hr />
    //     <label htmlFor="username">Username</label>
    //     <input type="text" id="username" placeholder="Enter Username" />
    //     <label htmlFor="password">Password</label>
    //     <input type="password" id="password" placeholder="Enter Password" />
    //     <button type="submit">Login</button>
    //   </form>
    // </section>
    <AnimationRevealPage>
      <Container>
        <Content>
          <MainContainer>
            <LogoLink href={"https://www.sportskpi.com/"}>
              <LogoImage src={logo} />
            </LogoLink>
            <MainContent>
              <Heading>Kabaddi Talent Hunt</Heading>
              <FormContainer>
                <DividerTextContainer></DividerTextContainer>
                <Form onSubmit={handleSubmit}>
                  <Input id="username" placeholder="username" />
                  <Input id="password" type="password" placeholder="Password" />
                  <SubmitButton type="submit">
                    {/* <SubmitButtonIcon className="icon" /> */}
                    <span className="text">Login</span>
                  </SubmitButton>
                </Form>
                <p tw="mt-6 text-xs text-gray-600 text-center">
                  {/* <a
                    href={"https://open.spotify.com/search/heer%20to%20ba"}
                    tw="border-b border-gray-500 border-dotted"
                  >
                    Forgot Password ?
                  </a> */}
                </p>
              </FormContainer>
            </MainContent>
          </MainContainer>
          <IllustrationContainer>
            <IllustrationImage imageSrc={illustration} />
          </IllustrationContainer>
        </Content>
      </Container>
    </AnimationRevealPage>
  );
};

export default LoginPage;
