import Head from 'next/head'
import { Box, Container } from '@chakra-ui/react'
import Navbar from '../navbar'
import ComputerLoader from '../computer-loader'
import dynamic from 'next/dynamic'
const Computer = dynamic(() => import('../computer'), {
    ssr: false,
    loading: () => <ComputerLoader />
  })
  
const Main = ({ children, router }) => {
    return (
        <Box as='main' pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Hector Gonzalez - Homepage</title>
            </Head>
            <Navbar path={router.asPath}/>
            <Container maxW="container.md" pt={14}>
                <Computer/>
                {children}
            </Container>
        </Box>
    )
}
export default Main;