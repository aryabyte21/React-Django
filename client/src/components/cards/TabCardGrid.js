import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "components/misc/Layouts.js";
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as StarIcon } from "images/star-icon.svg";
import { ReactComponent as SvgDecoratorBlob1 } from "images/svg-decorator-blob-5.svg";
import { ReactComponent as SvgDecoratorBlob2 } from "images/svg-decorator-blob-7.svg";
import { PrimaryButton } from "components/misc/Buttons.js";
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
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none -z-20 absolute right-0 top-0 h-64 w-64 opacity-15 transform translate-x-2/3 -translate-y-12 text-pink-400`}
`;
const DecoratorBlob2 = styled(SvgDecoratorBlob2)`
  ${tw`pointer-events-none -z-20 absolute left-0 bottom-0 h-80 w-80 opacity-15 transform -translate-x-2/3 text-primary-500`}
`;

export default (
  {

  
  heading = "Kabaddi Talent Hunt",
  tabs = {
    Raiders: [
      {
        imageSrc:
          "https://starkabaddileague.com/wp-content/uploads/2021/02/Capt-Rohit-Kumar-Raider-1.png",
        title: "Rohit Kumar",
        content: "Right Raider",
        price: "32 years",
        rating: "5.0",
        reviews: "87",
        url: "#",
      },
      {
        imageSrc:
          "https://starsunfolded.com/wp-content/uploads/2016/10/Kashiling-Adake-Profile.jpg",
        title: "Kashiling Adake",
        content: "Left Raider",
        price: "29 years",
        rating: "4.8",
        reviews: "32",
        url: "#",
      },
      {
        imageSrc:
          "https://thesportstattoo.com/wp-content/uploads/2021/09/Jeeva-Kumar-Pro-Kabaddi-League-season-5-Wiki-Biography-Age-Weight-Height-Profile-Info..jpg",
        title: "Jeevan Kumar",
        content: "Right Raider",
        price: "51 years",
        rating: "4.9",
        reviews: "89",
        url: "#",
      },
      {
        imageSrc:
          "https://thesportstattoo.com/wp-content/uploads/2021/09/u8vkeUeFzd-1.jpg",
        title: "Rahul Chaudhari",
        content: "Right Raider",
        price: "29 Years",
        rating: "4.6",
        reviews: "12",
        url: "#",
      },
      {
        imageSrc:
          "https://staticg.sportskeeda.com/wp-content/uploads/2017/06/29-1497265979.png",
        title: "Anup Kumar",
        content: "Left Raider",
        price: "32 Years",
        rating: "4.2",
        reviews: "19",
        url: "#",
      },
      {
        imageSrc: "https://static.toiimg.com/photo/msid-70971576/70971576.jpg",
        title: "Pawan Kumar",
        content: "Left Raider",
        price: "26 Years",
        rating: "5.0",
        reviews: "61",
        url: "#",
      },
      {
        imageSrc:
          "https://moneyball.insidesport.in/pkl/images/pkl-players/DeepakHooda.jpg",
        title: "Deepak Hooda",
        content: "Right Raider",
        price: "28 Years",
        rating: "4.2",
        reviews: "95",
        url: "#",
      },
      {
        imageSrc:
          "https://www.sportzcraazy.com/wp-content/uploads/2019/06/Manjeet-Chillar-personal-life.jpg",
        title: "Manjeet Chillhar",
        content: "Right Raider",
        price: "35",
        rating: "3.9",
        reviews: "26",
        url: "#",
      },
    ],
    Defenders: getRandomCards(),
  },
}) => {
  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = Object.keys(tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  
  
  return (

    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{heading}</Header>
          <TabsControl>
            {Object.keys(tabs).map((tabName, index) => (
              <TabControl
                key={index}
                active={activeTab === tabName}
                onClick={() => setActiveTab(tabName)}
              >
                {tabName}
              </TabControl>
            ))}
            <PrimaryButton>Logout</PrimaryButton>
          </TabsControl>
        </HeaderRow>

        {tabsKeys.map((tabKey, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: "flex",
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: "none",
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === tabKey ? "current" : "hidden"}
            animate={activeTab === tabKey ? "current" : "hidden"}
          >
            {tabs[tabKey].map((card, index) => (
              <CardContainer key={index}>
                <Card
                  className="group"
                  href={card.url}
                  initial="rest"
                  whileHover="hover"
                  animate="rest"
                >
                  <CardImageContainer imageSrc={card.imageSrc}>
                    <CardRatingContainer>
                      <CardRating>
                        <StarIcon />
                        {card.rating}
                      </CardRating>
                      <CardReview>({card.reviews})</CardReview>
                    </CardRatingContainer>
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
                      <CardButton>Scout</CardButton>
                    </CardHoverOverlay>
                  </CardImageContainer>
                  <CardText>
                    <CardTitle>{card.title}</CardTitle>
                    <CardContent>{card.content}</CardContent>
                    <CardPrice>{card.price}</CardPrice>
                  </CardText>
                </Card>
              </CardContainer>
            ))}
          </TabContent>
        ))}
      </ContentWithPaddingXl>
      <DecoratorBlob1 />
      <DecoratorBlob2 />
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc:
        "https://i0.wp.com/kabaddian.com/wp-content/uploads/2021/07/1587456546165_6BE9E5F5-2007-8A2B-9D54-C464E9127FB1777.png",
      title: "Surender Nada",
      content: "Left Corner Defender",
      price: "29 years",
      rating: "5.0",
      reviews: "87",
      url: "#",
    },
    {
      imageSrc:
        "https://www.sportzcraazy.com/wp-content/uploads/2019/07/qecskQHeIv-1.jpg",
      title: "Sandeep Narwal",
      content: "Defensive all rounder",
      price: "33 years",
      rating: "4.5",
      reviews: "34",
      url: "#",
    },
    {
      imageSrc:
        "https://www.sportzcraazy.com/wp-content/uploads/2019/07/Ravinder-Pahal.jpg",
      title: "Ravinder Pahal",
      content: "Right Corner Defender",
      price: "28 years",
      rating: "3.9",
      reviews: "26",
      url: "#",
    },
    {
      imageSrc:
        "https://www.sportzcraazy.com/wp-content/uploads/2019/07/gCnbbIkjYK.jpg",
      title: "Girish Ernak",
      content: "Right Corner Defender",
      price: "29 years",
      rating: "4.2",
      reviews: "95",
      url: "#",
    },
    {
      imageSrc:
        "https://static.kabaddiadda.com/images/playerImages/v2/1000028.png",
      title: "Ran Singh",
      content: "Left Corner Defender",
      price: "31 years",
      rating: "5.0",
      reviews: "61",
      url: "#",
    },
    {
      imageSrc:
        "https://staticg.sportskeeda.com/wp-content/uploads/2017/06/96-1497265591.png",
      title: "Rohit Rana",
      content: "Defensive all rounder",
      price: "25 years",
      rating: "4.9",
      reviews: "89",
      url: "#",
    },
    {
      imageSrc: "https://pbs.twimg.com/media/Cgo1ADNU0AEkcOc.png:large",
      title: "Prateek Khandelwal",
      content: "Right corner defender",
      price: "26 years",
      rating: "4.6",
      reviews: "12",
      url: "#",
    },
    {
      imageSrc:
        "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/05/30/Pictures/_adf40124-6412-11e8-b5ac-da6b7874835f.jpg",
      title: "Fazel Atrachali",
      content: "Defender left corner",
      price: "30 years",
      rating: "4.2",
      reviews: "19",
      url: "#",
    },
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
