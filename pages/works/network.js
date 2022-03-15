import { Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Yummy">
            <Title>
                Network desing
            </Title>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Work</Meta>
                    <Link href="https://drive.google.com/file/d/1koj6egxpW1WLMa5EkpHWHw8Qa0QNAEVp/view">https://drive.com<ExternalLinkIcon mx="2px" /></Link>
                </ListItem>
                <ListItem>
        </ListItem>
            </List>
            <WorkImage src="/images/network-design.jpg" alt="dising" />
        </Layout>
    )
}

export default Work