import { Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/works'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return (
        <Layout title="Yummy">
            <Title>
              Spanning Tree Concepts 
            </Title>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Work</Meta>
                    <Link href="https://drive.google.com/drive/folders/1vYfrY8nwpAUQ4wPP6H6liVYMcpGO0wc2?usp=sharing">https://drive.com<ExternalLinkIcon mx="2px" /></Link>
                </ListItem>
                <ListItem>
        </ListItem>
            </List>
            <WorkImage src="/images/spanning-tree-protocol.jpg" alt="protocol" />
        </Layout>
    )
}

export default Work