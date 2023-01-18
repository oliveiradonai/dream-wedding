import { Container, ContainerLeft, ContainerRight, Content, InnerContent, Timeline } from "./styles";

import Divider from '../../assets/svg/divide.svg';

export function About() {
    return (
        <Container id="About">
            <h1>Our Road along the Time</h1>
            <img src={Divider} />

            <Content>
                <Timeline>
                    <ContainerLeft>
                        <InnerContent>
                            <h2>2018</h2>
                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                        </InnerContent>
                    </ContainerLeft>
                    <ContainerRight>
                        <InnerContent>
                            <h2>2019</h2>
                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                        </InnerContent>
                    </ContainerRight>
                    <ContainerLeft>
                        <InnerContent>
                            <h2>2020</h2>
                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                        </InnerContent>
                    </ContainerLeft>
                    <ContainerRight>
                        <InnerContent>
                            <h2>2021</h2>
                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                        </InnerContent>
                    </ContainerRight>
                    <ContainerLeft>
                        <InnerContent>
                            <h2>2022</h2>
                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                        </InnerContent>
                    </ContainerLeft>
                    <ContainerRight>
                        <InnerContent>
                            <h2>2023</h2>
                            <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua dignissim per, habeo iusto primis ea eam.</p>
                        </InnerContent>
                    </ContainerRight>
                </Timeline>
            </Content>
        </Container>
    )
}