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
          <Text textSize="1em" lineHeight={3} margin="1em" textColor="gray">
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
            Angular is a complete framework (including a view layer),<br />React
            is not (it's a library). This is why React is confusing to
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
            have adopted <b>React</b> for many of similar reasons.
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
            conference series and a regular release cadence.
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
            Out of the box React uses patterns that renders it somewhat hard to
            come up with poor code quality to boot, since it eliminates direct
            interaction with the DOM it doesn’t just replace associate existing
            view layer like AngularJS, but also additionally removes the
            necessity for a variety of dependencies like jQuery which may lead
            to a lower size of the final codebase.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            Migration
          </Heading>
          <Text size={6} textColor="black">
            React can be injected into a very limited section on any existing
            page notwithstanding of how it’s already been designed and
            functioning. Which is what permits developers to migrate as quickly
            or slowly as they’d like.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            Code reusability
          </Heading>
          <Text size={6} textColor="black">
            React is special in its ability to offer great performance in
            addition to a completely managed rendering cycle for its components;
            this dramatically improves individual developer’s efficiency. By
            setting up the creation, distribution and consumption of isolated
            reusable parts in a much simpler way, it enables developers to have
            more time to use and create common abstractions. It proves true for
            lower level parts like clickable buttons and higher level parts like
            drop-downs.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            SEO
          </Heading>
          <Text size={6} textColor="black">
            Improved largely by having a totally rendered page from the server
            to the browser. React was designed with this kind of optimization in
            mind. It uses Node to render on the client of the server. Similar
            tools do provide this server aspect for rendering, however, they
            need a lot of unstable hacks and a considerable quantity of
            developer support to keep up. React has the potential to modify
            build tooling and scale back maintenance budgets.
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
            React can be injected into a very limited section on any existing
            page notwithstanding of how it’s already been designed and
            functioning. Which is what permits developers to migrate as quickly
            or slowly as they’d like. However, it’s important to note that React
            needs a runtime library to run properly thus slower and gradual
            migration has a somewhat negative impact on page weight until
            deprecated previous libraries are deleted.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={1} textColor="red" caps>
            Improved Developer Effectiveness
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            Combine Technologies better
          </Heading>
          <Text size={6} textColor="black">
            React mixes HTML and JavaScript following the principle that they go
            along all the time. Separating them is more akin to separating
            technologies than considerations. This idea is extended more to
            incorporate CSS, which removes a myriad of problems related to CSS
            development such as global namespace, and scope/variable isolation.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="red" caps>
            Improved Debugging speed
          </Heading>
          <Text size={6} textColor="black">
            Browser Developer tools unique to React have been set up by Facebook
            in order to provide data regarding what exact section and what
            snippet of code was called on to generate every specific bit of UI.
            This facilitates the process of looking for errors and simply makes
            a developer’s life a little easier.
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
            React’s elementary abstraction, the component, takes in data and
            outputs an illustration of the Document Object Model with no further
            adverse effects. This allows developers not to rely on consumption,
            instead allowing users to create states in the DOM making React
            components easier to break down and test. Finally, we can move on to
            more effective organization with
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
            Having such an extremely small API combined with a declarative
            syntax and UI componentization makes it so much faster to welcome
            new developers aboard your organization. While also making it easier
            to switch technologies on an on-demand and per-project basis for a
            truly Agile approach.
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
