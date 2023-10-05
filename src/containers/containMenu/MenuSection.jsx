import "@styles/App.css"
import { Section, Wrapper, TextContentWrapper, HeadingH2, Text, CardWrapper, ImageWrapper, Image, HeadingH3 } from "@components/PresetComposables";
import { menuSection } from "@assets/data";

export default function MenuSection() {
  return (
    <Section id="menu" className={"menu"}>
        <Wrapper className={"wrapper__alt"}>
            <TextContentWrapper>
                <HeadingH2>Our Menu</HeadingH2>
                <Text>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, unde!
                </Text>
            </TextContentWrapper>
            <div className="menu__items">
              {
                menuSection.map( ( item ) => (
                      <CardWrapper className={"card__alt"} key={item.id}>
                          <ImageWrapper className={"image__wrapper_alt"}>
                              <Image src={item.image} />
                          </ImageWrapper>
                          <HeadingH3>{item.title}</HeadingH3>
                          <Text>{item.price}</Text>
                      </CardWrapper>
                ))
              }
            </div>
        </Wrapper>
    </Section>
  )
}
