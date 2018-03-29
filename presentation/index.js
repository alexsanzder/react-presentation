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
          <Text textSize={"0.8em"}>Software Developer</Text>
          <Text textSize={"0.7em"}>Professional Services, OXID eSales AG</Text>

          <Text textSize="1em" lineHeight={3} margin="1em" textColor="gray">
            29 Mar 2018
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
          <Heading size={2} lineHeight={1.2} textColor="red" caps>
            Adopters & competitors
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
            Angular is a complete framework (including a view layer),<br />
            <b>React </b>
            is not, <b>it's a library</b>. This is why React is confusing to
            understand, it's emerging in an ecosystem of complete frameworks,
            but it's
            <b> mostly the view</b>.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="black" textColor="white">
          <Heading size={3} lineHeight={1.2} textColor="red" caps>
            Who Uses React?
          </Heading>
          <Text textSize="1em" textColor="white" textAlign="left">
            Gaints like:
          </Text>
          <List>
            <ListItem textSize="1em">Facebook</ListItem>
            <ListItem textSize="1em">Netflix</ListItem>
            <ListItem textSize="1em">AirBnB</ListItem>
            <ListItem textSize="1em">Instagram</ListItem>
            <ListItem textSize="1em">Reddit</ListItem>
            <ListItem textSize="1em">Twitter</ListItem>
            <ListItem textSize="1em">Atlassian</ListItem>
            <ListItem textSize="1em">the list goes on...</ListItem>
          </List>
          <Text textSize="1em" textAlign="left" textColor="white">
            have adopted <b>React</b> for many of the next similar reasons.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="red">
          <Heading size={1} textColor="white" caps>
            Why should we use React?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={1} textColor="red" caps>
            Reduced Risk
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            Great Business Stability
          </Heading>
          <Text size={6} textColor="black">
            Facebook is heavily invested in React (Newsfeed, Instagram,
            Messenger, Ads, etc.) and has a number of dedicated resources
            working on the project.
          </Text>
          <Text size={6} textColor="black">
            In addition to Facebook engineering, there are currently{" "}
            <S type="bold">1170 contributors</S> to the project along with a
            conference series, a lot of courses and a regular releases.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={1} textColor="red" caps>
            Develop Efficiently
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            Performance
          </Heading>
          <Text size={6} textColor="black">
            Out of the box <b>React </b>uses patterns that makes it very
            difficult to write poorly performing code. Additionally, since it
            eliminates direct interaction with the DOM{" "}
            <em>
              <b>(virtual DOM) </b>
            </em>it not only replaces an existing view layer
            (Angular/Backbone/Ember) it also obviates the need for a number of
            dependencies like jQuery which can result in an overal{" "}
            <b>reduction in deployed code size</b>.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            Migration
          </Heading>
          <Text size={6} textColor="black">
             React can be <b>injected</b> into a small area on any existing page
            regardless of how it’s already built which allows us to{" "}
            <b>migrate </b> as
            <b> quickly </b> or slowly as we´d like.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            Code reusability
          </Heading>
          <Text size={6} textColor="black">
            React is specially able to provide performance as well as a fully
            managed <b>rendering lifecycle</b> for components.
          </Text>

          <Text size={6} textColor="black">
            This dramatically
            <b> improves</b> individual <b>developer’s efficiency</b>.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            Save Time
          </Heading>
          <Text size={6} textColor="black">
            By making the creation, distribution, and consumption of isolated
            <b> reusable components </b> in a much simpler way, developers have
            more time to <b>use and create</b> common abstractions. This can be
            done in the low level elements like buttons and also in high level
            elements such as accordions.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            SEO
          </Heading>
          <Text size={6} fill textColor="black">
             SEO is improved by sending a completely rendered page from the
            server to the browser. React is designed with SEO in mind, rendering
            on either the client or the server, using Node or other tools. React
            has the potential to simplify build tooling and reduce maintenance
            costs.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={1} textColor="red" caps>
            Improved Developer Effectiveness
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            It makes writing Code easier{" "}
          </Heading>
          <Text size={6} textColor="black">
            React uses a special syntax called <b>JSX</b>, which allows us to{" "}
            <b>mix HTML with JavaScript</b> following the principle that they
            are inevitably tightly coupled and that separating them is
            separating technologies and not concerns.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            Faster Error Isolation{" "}
          </Heading>
          <Text size={6} textColor="black">
            Facebook has provided React specific <b>developer tools</b> for the
            browser that provides information about which component and what
            data was used to generate a piece of UI. This facilitates the
            process of looking for errors and simply{" "}
            <em>
              <b>makes a developer’s life a little bit easier</b>
            </em>.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            Easy to learn
          </Heading>
          <Text size={6} textColor="black">
            As it’s now customary in most current tools, Models representing
            data and Views displaying data are wired along to provide rich UI
            interactions. Usually, a modification in a model or view (a checkout
            page model for example) triggers a cascade of changes throughout
            different views that depend upon that data. In a large enough
            application the dependency network becomes overly complicated and
            may be troublesome to change on-the-go without introducing bugs that
            will surely suddenly arise. In React, data flows solely in one
            direction making the notion of views way more easy to understand.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            Easier to test
          </Heading>
          <Text size={6} textColor="black">
             A component, React’s fundamental abstraction takes in data an
            argument and outputs a representation of the DOM with no additional
            side effects. By removing reliance on consuming and creating state
            stored in the DOM these components are both more atomic and more
            testable.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={1} textColor="red" caps>
            Organizational Benefits
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            Quicker Onboarding
          </Heading>
          <Text size={6} textColor="black">
             React’s API is very small. Combined with it’s declarative syntax
            and componentization of UI elements makes it much faster to onboard
            new developers. We can release new client features faster and with
            more confidence for a truly Agile approach.
          </Text>
        </Slide>
        <Slide transiti on={["fade"]} bgColor="white" textColor="white">
          <Heading size={3} textColor="red" caps>
            Conclusion
          </Heading>
          <ListItem textSize="1em">It's a library (not a framework).</ListItem>
          <List textColor="black">
            <ListItem textSize="1em">
              It's just JavaScript (no templates, domain-specific language, etc)
            </ListItem>
            <ListItem textSize="1em">
              It's declarative (code describes "what" not "how")
            </ListItem>
            <ListItem textSize="1em">
              It's component-based (composable, reusable, stateful)
            </ListItem>
            <ListItem textSize="1em">
              It's easy to maintain (markup and view logic live together)
            </ListItem>
            <ListItem textSize="1em">
              It has a unidirectional data flow (predictable)
            </ListItem>
            <ListItem textSize="1em">
              It updates automatically (as data changes over time)
            </ListItem>
            <ListItem textSize="1em">
              It's virtual DOM (imperative manipulations are fast and eficient)
            </ListItem>
            <ListItem textSize="1em">
              It's developer experience (excellent ecosystem and community)
            </ListItem>
            <ListItem textSize="1em">
              <S type="bold" textColor="black">
                Bonus: Mobile Apps using React Native
              </S>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="red" textColor="black">
          <BlockQuote>
            <Quote>
              React has exceeded our requirements and enabled us to build a
              tremendous foundation on which to innovate the user experience
            </Quote>
            <Cite>Netflix</Cite>
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
