import React, { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  Paper,
} from "@mantine/core";
import ButtonLightDark from "./components/ButtonLightDark";
import Entries from "./components/Entries";
import ColorPicker from "./components/ColorPicker";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { link } from "fs";
import Time from "./TimeWindow";
import Quotas from "./QuotasWindow";
import Analysis from "./AnalysisWindow";
import TimeWindow from "./TimeWindow";
import QuotasWindow from "./QuotasWindow";
import AnalysisWindow from "./AnalysisWindow";

export default function Shell() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <Router>
      <Paper>
        <AppShell
          styles={{
            main: {
              background:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          }}
          navbarOffsetBreakpoint="sm"
          fixed
          navbar={
            <Navbar
              p="md"
              hiddenBreakpoint="sm"
              hidden={!opened}
              width={{ sm: 100, lg: 150 }}
            >
              <Navbar.Section grow mt="lg">
                <nav style={{ display: "flex", flexDirection: "column" }}>
                  <Text component={Link} variant="link" to="/">
                    Timer
                  </Text>
                  <Text component={Link} variant="link" to="/Quotas">
                    Quotas
                  </Text>
                  <Text component={Link} variant="link" to="/Analysis">
                    Analysis
                  </Text>
                </nav>
              </Navbar.Section>
            </Navbar>
          }
          header={
            <Header height={70} p="md">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
                    size="sm"
                    color={theme.colors.gray[6]}
                    mr="xl"
                  />
                </MediaQuery>

                <Text>Time Tracking Application</Text>
                <ButtonLightDark />
              </div>
            </Header>
          }
        >
          <Routes>
            <Route path="/" element={<TimeWindow />} />
            <Route path="/Quotas" element={<QuotasWindow />} />
            <Route path="/Analysis" element={<AnalysisWindow />} />
          </Routes>
        </AppShell>
      </Paper>
    </Router>
  );
}
