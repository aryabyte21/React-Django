import React, { Component } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import { PrimaryButton } from "components/misc/Buttons.js";
import Playerinfo from "playerinfo";
import "App.module.css";
import { Link } from "react-router-dom";
import Modal from "./components/modal/Modal";
const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${(props) => props.active && tw`bg-primary-500! text-gray-100!`}
  }
`;

const TabContent = tw(
  motion.div
)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(
  motion.a
)`bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;
const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;
const CardReview = tw.div`font-medium text-xs text-gray-600`;
const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600 z-0`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

class dashboard extends Component {
  state = {
    todos: [],
    show: true,
  };
  clickHappens = (id) => () => {
    this.setState((prevState) => ({
      clicked: prevState.clicked === id ? null : id, // <-- toggle back to null or to new id
    }));
  };

  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/api/"); // fetching the data from api, before the page loaded
      const todos = await res.json();
      this.setState({
        todos,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Container>
        <ContentWithPaddingXl>
          <HeaderRow>
            <Header>Kabaddi Talent Hunt</Header>
            <PrimaryButton>Logout</PrimaryButton>
          </HeaderRow>
          <TabContent>
            {this.state.todos.map((item, id) => (
              <CardContainer item={item} key={id}>
                <Card
                  className="group"
                  // href={'/f'}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImageContainer imageSrc={item.image}>
                    <CardHoverOverlay
                      variants={{
                        hover: {
                          opacity: 1,
                          height: "auto",
                        },
                        rest: {
                          opacity: 0,
                          height: 0,
                        },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                        <Link
                          to={{
                            pathname: `/dashboard/${item.first_name + item.last_name}`,
                            state: { item },
                          }}
                        >
                        <CardButton>Scout</CardButton>
                      </Link>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>
                      {item.first_name} {item.last_name}
                    </CardTitle>
                    <CardContent>{item.position}</CardContent>
                    <CardContent>{item.state}</CardContent>
                    <CardPrice>{item.dob}</CardPrice>
                    <CardContent>{item.DatePosted}</CardContent>
                    {/* <div
                      className="box"
                      key={id}
                      onClick={this.clickHappens(id)} // <-- pass id to toggle
                    >
                      {this.state.clicked === id ? ( // <-- check id match
                        <Modal/>
                      ) : (
                        <button
                          class="block w-full md:w-auto text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                          type="button"
                          data-modal-toggle="extralarge-modal"
                        >
                          Extra large modal
                        </button>
                      )}
                    </div> */}
                    {/* here we will display the hidden content that is video url and all iff the user clicks the scout button and also the comments which we will put a box for!! */}
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        </ContentWithPaddingXl>
        <DecoratorBlob1 />
        <DecoratorBlob2 />
      </Container>
    );
  }
}

export default dashboard;
