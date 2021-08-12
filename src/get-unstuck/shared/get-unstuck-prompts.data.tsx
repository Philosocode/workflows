import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  HeadingProps,
} from "@chakra-ui/react";

import { Link } from "typography/components/link.component";

const headingProps: HeadingProps = {
  as: "h3",
  fontSize: { base: "xl", md: "2xl" },
  mb: 1,
};

function HeadingLink(props: { children: string; href: string }) {
  return (
    <Heading {...headingProps}>
      <Link href={props.href} isExternal>
        {props.children}
      </Link>
    </Heading>
  );
}

export const getUnstuckPrompts = [
  <Box>
    <Heading {...headingProps}>Take A Break:</Heading>
    <UnorderedList>
      <ListItem>Relax. Get up and take a break.</ListItem>
      <ListItem>
        Stop thinking about the material. Your subconscious mind will process
        the material in the background
      </ListItem>
      <ListItem>Drink some water</ListItem>
      <ListItem>Make a snack</ListItem>
      <ListItem>Go for a walk</ListItem>
    </UnorderedList>
  </Box>,

  <Box>
    <Heading {...headingProps}>Switch It Up</Heading>
    <UnorderedList>
      <ListItem>Switch to a completely different type of problem</ListItem>
      <ListItem>Come back to this problem later</ListItem>
    </UnorderedList>
  </Box>,

  <Box>
    <HeadingLink href="https://www.candoideas.com/blog/why-productive-meditation-should-be-on-your-to-do-list">
      Productive Meditation:
    </HeadingLink>
    <UnorderedList>
      <ListItem>
        Pick a problem you're working on or a concept you're struggling with
      </ListItem>
      <ListItem>
        Go for a long walk, bike ride, exercise, drive, or other (physical)
        activity
      </ListItem>
      <ListItem>
        While doing so, focus on the problem and think of how to solve it
      </ListItem>
    </UnorderedList>
  </Box>,

  <Box>
    <Heading {...headingProps}>Resource Exploration:</Heading>
    <UnorderedList>
      <ListItem>Watch various videos from different people</ListItem>
      <ListItem>Check sites like Google, Reddit, StackExchange, etc</ListItem>
      <ListItem>Do a search with "ELI5" included (explain like I'm 5)</ListItem>
    </UnorderedList>
  </Box>,

  <Box>
    <Heading {...headingProps}>Sleep On It</Heading>
    <UnorderedList>
      <ListItem>Think of / work on the problem before you go to sleep</ListItem>
      <ListItem>Get a good night's sleep</ListItem>
      <ListItem>Review the problem when you wake up</ListItem>
    </UnorderedList>
  </Box>,
];
