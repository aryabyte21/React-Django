import { useLocation } from "react-router-dom";
import React, { Component } from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "./components/misc/Layouts.js";
import { SectionHeading } from "./components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "./components/misc/Buttons.js";
import { ReactComponent as SvgDecoratorBlob1 } from "./images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "./images/svg-decorator-blob-7.svg";
import { PrimaryButton } from "./components/misc/Buttons.js";
import { Link } from "react-router-dom";
import Modal from "./components/modal/Modal";
import ReactModalAdapter from "./helpers/ReactModalAdapter";
import ResponsiveVideoEmbed from "./helpers/ResponsiveVideoEmbed.js";
import { ReactComponent as PlayIcon } from "feather-icons/dist/icons/play-circle.svg";
import { ReactComponent as CloseIcon } from "feather-icons/dist/icons/x.svg";
import DesignIllustration from "./images/design-illustration.svg";

const HeaderRow = tw.div`flex justify-between  items-center flex-col xl:flex-row`;
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
//----------------------------------------
const TwoColumn = tw.div`flex flex-col lg:flex-row md:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-6/12 lg:pr-12 flex-shrink-0 text-center lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex flex-col justify-center`;

const Heading = tw.h1`font-black text-3xl md:text-5xl leading-snug max-w-3xl`;
const Paragraph = tw.p`my-5 lg:my-8 text-sm lg:text-base font-medium text-gray-600 max-w-lg mx-auto lg:mx-0`;
const Actions = tw.div`flex flex-col items-center sm:flex-row justify-center lg:justify-start mt-8`;
const WatchVideoButton = styled.button`
  ${tw`mt-4 sm:mt-0 sm:ml-8 flex items-center text-secondary-300 transition duration-300 hocus:text-primary-400 focus:outline-none`}
  .playIcon {
    ${tw`stroke-1 w-12 h-12`}
  }
  .playText {
    ${tw`ml-2 font-medium`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center md:justify-end items-center relative max-w-3xl lg:max-w-none`;

// Random Decorator Blobs (shapes that you see in background)

const StyledModal = styled(ReactModalAdapter)`
  &.mainHeroModal__overlay {
    ${tw`fixed inset-0 z-50`}
  }
  &.mainHeroModal__content {
    ${tw`xl:mx-auto m-4 sm:m-16 max-w-screen-xl absolute inset-0 flex justify-center items-center rounded-lg bg-gray-200 outline-none`}
  }
  .content {
    ${tw`w-full lg:p-16`}
  }
`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-8 mr-8 hocus:text-primary-500`;

const Test = (props) => {
  const { state } = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => setModalIsOpen(!modalIsOpen);

  return (
    // ...render all the post fields available from state.post
    // i.e. state.post.title
    // <h1>{state.item.first_name}</h1>
    <Container>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
      <TwoColumn>
        <LeftColumn>
          <img
            style={{ height: "250px", width: "250px" }}
            src={state.item.image}
            alt=""
          />
          <Heading>
            {state.item.first_name} {state.item.last_name}
          </Heading>
          <p style={{ textAlign: "left", width:"350px", wordwrap: "normal",  textOverflow:"clip",wordWrap: "break-word"}}>
              {state.item.description}
          </p>
          <Paragraph>
            State: {state.item.state}
            <br />
            Position: {state.item.position}
            <br />
            DOB: {state.item.dob}
            <br />
            Tournament: {state.item.tournament} <br /> Date Posted:{" "}
            {state.item.date_posted}
          </Paragraph>
          <Actions>
            <PrimaryButton as="a" href="/">
              Comment
            </PrimaryButton>
            <WatchVideoButton onClick={toggleModal}>
              <span className="playIconContainer">
                <PlayIcon className="playIcon" />
              </span>
              <span className="playText">watch video</span>
            </WatchVideoButton>
          </Actions>
        </LeftColumn>
        <RightColumn>
          <iframe
            src={state.item.video_url.replace(
              /(?:https:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g,
              "https://www.youtube.com/embed/$1"
            )}
            width="600"
            height="350"
            frameborder="0"
            allow="autoplay; encrypted-media; fullscreen;"
            allowFullScreen
            title="video"
          />
        </RightColumn>
      </TwoColumn>
      <StyledModal
        closeTimeoutMS={300}
        className="mainHeroModal"
        isOpen={modalIsOpen}
        onRequestClose={toggleModal}
        shouldCloseOnOverlayClick={true}
      >
        <CloseModalButton onClick={toggleModal}>
          <CloseIcon tw="w-6 h-6" />
        </CloseModalButton>
        <div className="content">
          <ResponsiveVideoEmbed
            url={state.item.video_url.replace(
              /(?:https:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?(.+)/g,
              "https://www.youtube.com/embed/$1"
            )}
            tw="w-full"
          />
        </div>
      </StyledModal>
    </Container>
  );
};
export default Test;
// https://www.youtube.com/embed/1_G60OdEzXs
