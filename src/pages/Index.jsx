import React, { useState } from "react";
import { Box, Heading, Text, Button, Image, Stack, Flex, Grid, Input, Textarea, Select, Checkbox, useColorModeValue } from "@chakra-ui/react";
import { FaPlay, FaPray, FaUsers, FaMicrophone, FaMusic, FaCalendar } from "react-icons/fa";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [prayerStyle, setPrayerStyle] = useState("");
  const [testimony, setTestimony] = useState("");

  const handleLogin = () => {
    // Perform login logic here
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Perform logout logic here
    setIsLoggedIn(false);
  };

  const handleTestimonySubmit = () => {
    // Handle testimony submission logic here
    setTestimony("");
  };

  return (
    <Box>
      <Flex align="center" justify="space-between" p={4} bg={useColorModeValue("gray.100", "gray.900")}>
        <Heading as="h1" size="xl">
          Throne of Grace
        </Heading>
        {isLoggedIn ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Stack direction="row" spacing={4}>
            <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button onClick={handleLogin}>Login</Button>
          </Stack>
        )}
      </Flex>

      <Grid templateColumns="repeat(2, 1fr)" gap={8} p={8}>
        <Box>
          <Image src="https://images.unsplash.com/photo-1473172707857-f9e276582ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjBwcmF5aW5nJTIwdG9nZXRoZXJ8ZW58MHx8fHwxNzEwNjA5NDQwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Prayer" />
          <Heading as="h2" size="lg" mt={4}>
            Join Prayer Groups
          </Heading>
          <Text>Create or join prayer groups to pray collectively.</Text>
          <Button leftIcon={<FaUsers />} mt={4}>
            Prayer Groups
          </Button>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1488539621750-1e0a7ebf61b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwcmF5aW5nJTIwYWxvbmV8ZW58MHx8fHwxNzEwNjA5NDQwfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Live Prayer" />
          <Heading as="h2" size="lg" mt={4}>
            Live Prayer Sessions
          </Heading>
          <Text>Participate in live prayer sessions with voice or text options.</Text>
          <Stack direction="row" mt={4}>
            <Button leftIcon={<FaMicrophone />}>Voice Prayer</Button>
            <Button leftIcon={<FaPray />}>Text Prayer</Button>
          </Stack>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1584635234347-ce88034d9501?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBsaXN0ZW5pbmclMjB0byUyMG11c2ljfGVufDB8fHx8MTcxMDYwOTQ0MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Spiritual Music" />
          <Heading as="h2" size="lg" mt={4}>
            Spiritual Music
          </Heading>
          <Text>Stream curated playlists of spiritual Christian music.</Text>
          <Button leftIcon={<FaMusic />} mt={4}>
            Listen Now
          </Button>
        </Box>

        <Box>
          <Image src="https://images.unsplash.com/photo-1435527173128-983b87201f4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjYWxlbmRhcnxlbnwwfHx8fDE3MTA2MDk0NDF8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Prayer Projects" />
          <Heading as="h2" size="lg" mt={4}>
            Prayer Projects
          </Heading>
          <Text>Create and manage prayer projects with calendar integration.</Text>
          <Button leftIcon={<FaCalendar />} mt={4}>
            Prayer Projects
          </Button>
        </Box>
      </Grid>

      <Box p={8}>
        <Heading as="h2" size="lg" mb={4}>
          Customize Your Prayer Style
        </Heading>
        <Select placeholder="Select prayer style" value={prayerStyle} onChange={(e) => setPrayerStyle(e.target.value)}>
          <option value="meditation">Meditation</option>
          <option value="recitation">Recitation</option>
          <option value="contemplation">Contemplation</option>
          <option value="guided">Guided Prayers</option>
        </Select>
      </Box>

      <Box p={8}>
        <Heading as="h2" size="lg" mb={4}>
          Share Your Testimony
        </Heading>
        <Textarea placeholder="Write your testimony..." value={testimony} onChange={(e) => setTestimony(e.target.value)} />
        <Button onClick={handleTestimonySubmit} mt={4}>
          Submit Testimony
        </Button>
      </Box>

      <Box p={8} bg={useColorModeValue("gray.100", "gray.900")}>
        <Heading as="h2" size="lg" mb={4}>
          Stay Connected
        </Heading>
        <Stack spacing={4}>
          <Checkbox>Receive prayer reminders</Checkbox>
          <Checkbox>Join community chat rooms</Checkbox>
          <Checkbox>Participate in discussion forums</Checkbox>
        </Stack>
      </Box>
    </Box>
  );
};

export default Index;
