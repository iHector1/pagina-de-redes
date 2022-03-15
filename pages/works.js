import { Heading, SimpleGrid, Container, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNetwork from '../public/images/networkLink.png'
import thumbTree from '../public/images/spaning-tree.jpg'
import ThumbTreeConf from '../public/images/spannig_tree_conf.png'
import Layout from '../components/layouts/article'
const Works = () => {
    return (
        <Layout title="Works">
            <Container >
                <Heading as="h3" fontSize={20} mb={6} variant="section-title">Network Scaling
                </Heading>
                <SimpleGrid columns={1} gap={6}>
                    <Section>
                        <WorkGridItem id="network" title="Network desing" thumbnail={thumbNetwork}>
                            Work about Network desing
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
                <Section delay={0.2}>
                    <Divider my={6} />
                    <Heading as="h3" fontSize={20} mb={6} variant="section-title">
                        LAN recurrency
                    </Heading>
                </Section>
                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                    <Section delay={0.3}>
                        <WorkGridItem
                            id="spanningtree"
                            thumbnail={thumbTree}
                            title="Spanning Tree Concepts"
                        >
                            Works about Spanning Tree Concepts
                        </WorkGridItem>
                    </Section>
                    <Section delay={0.3}>
                        <WorkGridItem
                            id="spanningtreeconfiguration"
                            thumbnail={ThumbTreeConf}
                            title="Spanning Tree Configurations"
                        >
                            Works about Spanning Tree Configurations
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>
        </Layout>
    )
}
export default Works;