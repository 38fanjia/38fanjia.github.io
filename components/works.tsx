import { Box, Heading, Container, Text } from "@chakra-ui/react"
import Image from 'next/image'

function Works() {
  return (
    <Box marginBottom="8">
      <Heading size="md" m="4" paddingLeft="2" borderLeft="4px solid #589738">Works</Heading>
      <Container m="4">
        <Box>
          <Heading size="sm">Portfolio</Heading>
          <Box w="400px" borderWidth="1px">
            <Image alt="portfolio" src="/portfolio_400.png" layout="intrinsic" width={400}
        height={280} />
          </Box>
          <Text fontSize="sm">ポートフォリオ / Next.js + TypeScript + ChakraUI</Text>
        </Box>
        <Box mt="4">
          <Heading size="sm">shuho</Heading>
          <Box w="400px" borderWidth="1px">
            <Image alt="portfolio" src="/shuho_400.png" layout="intrinsic" width={400}
        height={280} />
          </Box>
          <Text fontSize="sm">週報 / Gatsby + TypeScript + Emotion</Text>
        </Box>
        <Box mt="4">
          <Heading size="sm">セント・パトリックス・デー・パレード一覧</Heading>
          <Box w="400px" borderWidth="1px">
            <Image alt="portfolio" src="/stpatricksday_400.png" layout="intrinsic" width={400}
        height={280} />
          </Box>
          <Text fontSize="sm">国内で開催されるセント・パトリックス・デー・パレード一覧 / Next.js + TypeScript + ChakraUI + GAS</Text>
        </Box>
      </Container>
    </Box>
  )
}
export default Works