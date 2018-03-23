// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Image,
  Appear,
  S
} from "spectacle";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
const images = {
  city: require("../assets/img/city.jpg"),
  bg: require("../assets/img/oxid-slide-bg.jpg"),
  react: require("../assets/img/react.svg"),
  logo: require("../assets/img/oxid-logo.svg"),
  markdown: require("../assets/img/markdown.png")
};

const theme = createTheme(
  {
    primary: "white",
    secondary: "black",
    black: "#020202",
    red: "#c02124",
    white: "#fff",
    gray: "#575756"
  },
  {
    primary: "Open Sans",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide
          transition={["zoom"]}
          bgColor="white"
          bgImage={images.bg.replace("/", "")}
        >
          <Heading size={1} fit caps lineHeight={1.2} textColor="red">
            Taking OXID to the next level
          </Heading>
          <Heading size={3} fill caps bold textColor="black">
            with React
            <i>
              <Image
                src={images.react}
                width="15%"
                style={{ display: "inline" }}
                margin="0px auto -17px"
              />
            </i>
          </Heading>
          <hr />
          <Heading size={6} lineHeight={1.2} textColor="black">
            Alejandro Sánchez
          </Heading>
          <Text textSize={"0.7em"}>🍕 Chief Pizza Officer, OXID eSales AG</Text>
          <Text textSize={"1em"} lineHeight={3} margin={"1em"} textColor="gray">
            29. März 2018
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={1} lineHeight={1.2} textColor="red" caps>
            What is React?
          </Heading>
          <Text size={6} textColor="black">
            React is a{" "}
            <S type="bold" textColor="red">
              declarative
            </S>
            , efficient and flexible JavaScript library for building{" "}
            <S type="bold" textColor="red">
              composable{" "}
            </S>
            user interfaces.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} lineHeight={1.2} textColor="red" fit caps>
            Adopters and competitors
          </Heading>
          <Text size={6} fill textColor="black">
            There are many other tools like<i> Angular</i>,<i> Backbone</i>, and<i >
              {" "}
              Ember
            </i>{" "}
            that do similar things but in comparison, <b>React</b> was always
            designed to address business issues rather than technical ones.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} lineHeight={1.2} textColor="red" fit caps>
            React vs Angular
          </Heading>
          <Text size={6} fill textColor="black">
            It doesn't make sense because they aren't directly comparable.
            Angular is a complete framework (including a view layer),<br />React
            is not (It's a library). This is why React is confusing to
            understand, it's emerging in an ecosystem of complete frameworks,
            but it's
            <b> mostly the view</b>.
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="red">
          <Heading size={1} textColor="white" caps>
            Why should we use React?
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            Reduced Risk
          </Heading>
          <Text size={6} textColor="black">
            Facebook is heavily invested in React (Newsfeed, Instagram,
            Messenger, Ads, etc.) and has a number of dedicated resources
            working on the project.
          </Text>
          <Text size={6} textColor="black">
            In addition to Facebook engineering, there are currently{" "}
            <S type="bold">1170 contributors</S> to the project along with a
            conference series and a regular release cadence.
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="black" textColor="white">
          <Heading size={3} textColor="red" caps>
            Who Uses React?
          </Heading>
          <List>
            <ListItem textSize={"1em"}>Facebook</ListItem>
            <ListItem textSize={"1em"}>Netflix</ListItem>
            <ListItem textSize={"1em"}>AirBnB</ListItem>
            <ListItem textSize={"1em"}>Instagram</ListItem>
            <ListItem textSize={"1em"}>Reddit</ListItem>
            <ListItem textSize={"1em"}>Twitter</ListItem>
            <ListItem textSize={"1em"}>Atlassian</ListItem>
            <ListItem textSize={"1em"}>the list goes on...</ListItem>
          </List>
          <Text textSize={"1em"} textColor="white">
            they have adopted <b>React</b> for many of similar reasons.
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            Reduced Risk
          </Heading>
          <Text size={6} textColor="black">
            Facebook is heavily invested in React (Newsfeed, Instagram,
            Messenger, Ads, etc.) and has a number of dedicated resources
            working on the project.
          </Text>
          <Text size={6} textColor="black">
            In addition to Facebook engineering, there are currently{" "}
            <S type="bold">1170 contributors</S> to the project along with a
            conference series and a regular release cadence.
          </Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="white" textColor="white">
          <Heading size={3} textColor="red" caps>
            Conclusion
          </Heading>
          <ListItem textSize={"1em"}>
            It's a library (not a framework).
          </ListItem>
          <List textColor="black">
            <ListItem textSize={"1em"}>
              It's just JavaScript (no templates, domain-specific language, etc)
            </ListItem>
            <ListItem textSize={"1em"}>
              It's declarative (code describes "what" not "how")
            </ListItem>
            <ListItem textSize={"1em"}>
              It's component-based (composable, reusable, stateful)
            </ListItem>
            <ListItem textSize={"1em"}>
              It's easy to maintain (markup and view logic live together)
            </ListItem>
            <ListItem textSize={"1em"}>
              It has a unidirectional data flow (predictable)
            </ListItem>
            <ListItem textSize={"1em"}>
              It updates automatically (as data changes over time)
            </ListItem>
            <ListItem textSize={"1em"}>
              It's virtual DOM (imperative manipulations are fast and eficient)
            </ListItem>
            <ListItem textSize={"1em"}>
              It's developer experience (excellent ecosystem and community)
            </ListItem>
            <ListItem textSize={"1em"}>
              <S type="bold" textColor="black">
                Bonus: Mobile Apps using React Native
              </S>
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="red" textColor="black">
          <BlockQuote>
            <Quote>
              any application that can be written in JavaScript, will eventually
              be written in JavaScript.
            </Quote>
            <Cite>Atwood's Law</Cite>
          </BlockQuote>
        </Slide>

        <Slide transition={["fade"]} bgColor="white" textColor="black">
          <Heading size={1} fit caps lineHeight={1} textColor="red">
            One more thing...
          </Heading>
          <Appear>
            <Heading size={6} fill textColor="black">
              This presentation is made with React! 😎
            </Heading>
          </Appear>
        </Slide>
      </Deck>
    );
  }
}
