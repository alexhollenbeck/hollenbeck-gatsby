import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Anchor, Center, Group, Stack, Title } from "@mantine/core"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Center h={'100vh'} bg={'black'}>
        <Stack align="center">
          <Title order={1} c='white'>Alex Hollenbeck</Title>
          <Title order={2} c='white' size='md'>Full-stack web developer</Title>
          <Group mt='md'>
            <Anchor href='https://www.linkedin.com/in/alexhollenbeck/' target='_blank'>linkedin</Anchor>
            <Anchor href='https://github.com/alexhollenbeck' target='_blank'>github</Anchor>
            <Anchor href='mailto:alexhollenbeck@gmail.com' target='_blank'>contact</Anchor>
          </Group>
        </Stack>
      </Center>      
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
