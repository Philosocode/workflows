import {
  Box,
  Heading,
  Icon,
  Link,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { IoMdHelpCircle } from "react-icons/io";

import { Modal } from "modal/components/modal.component";
import { useToggle } from "shared/hooks/use-toggle.hook";
import { useRandom } from "shared/hooks/use-random.hook";
import { Button } from "shared/components/button.component";

function HeadingLink(props: { children: string; href: string }) {
  return (
    <Heading as="h3" size="sm" mb={1}>
      <Link color="green.500" href={props.href} isExternal>
        {props.children}
      </Link>
    </Heading>
  );
}

const prompts = [
  <Box>
    <Heading as="h3" size="sm" mb={1}>
      Take A Break:
    </Heading>
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
    <Heading as="h3" size="sm" mb={1}>
      Switch It Up
    </Heading>
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
    <Heading as="h3" size="sm" mb={1}>
      Resource Exploration:
    </Heading>
    <UnorderedList>
      <ListItem>Watch various videos from different people</ListItem>
      <ListItem>Check sites like Google, Reddit, StackExchange, etc</ListItem>
      <ListItem>Do a search with "ELI5" included (explain like I'm 5)</ListItem>
    </UnorderedList>
  </Box>,

  <Box>
    <Heading as="h3" size="sm" mb={1}>
      Sleep On It
    </Heading>
    <UnorderedList>
      <ListItem>Think of / work on the problem before you go to sleep</ListItem>
      <ListItem>Get a good night's sleep</ListItem>
      <ListItem>Review the problem when you wake up</ListItem>
    </UnorderedList>
  </Box>,
];

export function GetUnstuckModal() {
  const [modalShowing, toggleModal] = useToggle(false);
  const [hook, getRandomHook] = useRandom(prompts, prompts[0]);

  return (
    <>
      <Box>
        <Icon
          as={IoMdHelpCircle}
          cursor="pointer"
          w={7}
          h={7}
          onClick={toggleModal}
          _hover={{ color: "green.500" }}
        />
      </Box>
      <Modal
        isOpen={modalShowing}
        onClose={toggleModal}
        header="Get Unstuck"
        body={
          <Box>
            <Text fontSize="md">{hook}</Text>
          </Box>
        }
        footer={
          <Button color="green" onClick={getRandomHook}>
            Next Hook
          </Button>
        }
      />
    </>
  );
}
