import "@styles/App.css"
// import "@styles/MediaQueries.css"
import { aboutSection__image } from '@assets/images';
import {
  Section,
  Wrapper,
  TextContentWrapper,
  ImageWrapper,
  Image,
  HeadingH2,
  Text,
  Link
} from '@components/PresetComposables';

export default function AboutSection() {
  return (
    <Section id="about" className="about">
        <Wrapper className={"wrapper__alt"}>
          <ImageWrapper className="inner__section-a">
            <Image className={"image__alt"} src={aboutSection__image} />
          </ImageWrapper>
          <TextContentWrapper className={"inner__section-b"}>
            <HeadingH2 className={"title__h2-alt"}>
              The beginning of standing Restaurant a Diverse food
            </HeadingH2>
            <div className="text__wrapper">
              <Text className={"text__alt"}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio fuga expedita numquam deleniti at, possimus mollitia! Cupiditate asperiores enim aliquid accusantium, labore deserunt eius expedita placeat, modi, ab beatae consequuntur!
              </Text>
              <Text className={"text__alt"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus cum ut voluptatibus dolorum enim rerum officia hic autem odio qui.
              </Text>
            </div>
            <Link href="/" className={"link__alt"}>Explore Now</Link>
          </TextContentWrapper>
        </Wrapper>
    </Section>
  )
}
