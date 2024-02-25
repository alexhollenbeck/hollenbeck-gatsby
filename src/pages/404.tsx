import * as React from "react"
import { Link, HeadFC, PageProps } from "gatsby"
import { Center, Stack, Title, Group, Anchor } from "@mantine/core"

const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}

const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
}

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <Center h={'100vh'} bg={'black'}>
        <Stack align="center">
          <Title order={1} c='white'>Page not found</Title>
          <Anchor href='/'>go home</Anchor>
        </Stack>
      </Center> 
    </main>
  )
}

export default NotFoundPage

export const Head: HeadFC = () => <title>Not found</title>
