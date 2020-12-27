import React, { useState, useContext, createContext } from "react"

import {
    Container,
    Group,
    Title,
    SubTitle,
    Text,
    Feature,
    FeatureTitle,
    FeatureClose,
    Maturity,
    FeatureText,
    Content,
    Meta,
    Entities,
    Item,
    Image
} from "./styles/card"

const FeatureContext = createContext()

export default function Card({ children, ...restOfProps }) {
    const [showFeature, setShowFeature] = useState(false)
    const [itemFeature, setItemFeature] = useState(false)
    
    return (
      <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
        <Container {...restOfProps}>{children}</Container>
      </FeatureContext.Provider>
    )
}

Card.Group = function CardGroup({ children, ...restOfProps }) {
    return <Group {...restOfProps}>{children}</Group>
}

Card.Title = function CardTitle({ children, ...restOfProps }) {
    return <Title {...restOfProps}>{children}</Title>
}

Card.SubTitle = function CardSubTitle({ children, ...restOfProps }) {
    return <SubTitle {...restOfProps}>{children}</SubTitle>
}

Card.Text = function CardText({ children, ...restOfProps }) {
    return <Text {...restOfProps}>{children}</Text>
}

Card.Entities = function CardEntities({ children, ...restOfProps }) {
    return <Entities {...restOfProps}>{children}</Entities>
}

Card.Meta = function CardMeta({ children, ...restOfProps }) {
    return <Meta {...restOfProps}>{children}</Meta>
}

Card.Item = function CardItem({ item, children, ...restOfProps }) {
    const { setShowFeature, setItemFeature } = useContext(FeatureContext)
    
    return (
        <Item
            onClick={() => {
                setItemFeature(item)
                setShowFeature(true)
            }}
            {...restOfProps}
        >
            {children}
        </Item>
    )
}

Card.Image = function CardImage({ ...restOfProps }) {
    return <Image {...restOfProps} />
}

Card.Feature = function CardFeature({ children, category, ...restOfProps }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext)
    
    return showFeature ? (
        <Feature src={`/images/${category}/${itemFeature.genre}/${itemFeature.slug}/large.jpg`}>
            <Content>
                <FeatureTitle>{itemFeature.title}</FeatureTitle>
                <FeatureText>{itemFeature.description}</FeatureText>
                <FeatureClose onClick={() => setShowFeature(false)}>
                    <img src="/images/icons/close.png" alt="Close" />
                </FeatureClose>
                
                <Group margin="30px 0" flexDirection="row" alignItems="center">
                    <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
                    <FeatureText fontWeight="bold">
                        {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
                    </FeatureText>
                </Group>
                
                {children}
                
            </Content>
        </Feature>
    ): <></>
}