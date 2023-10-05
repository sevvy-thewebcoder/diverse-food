import '@styles/App.css'
import { Section, Wrapper, HeadingH1, Text, Link } from '@components/PresetComposables'

export default function HeroSection() {
  return (
    <Section id="home" className="hero">
      <Wrapper className={"wrapper__alt"}>
        <HeadingH1 className={"title__h1-alt"}><span className='title__h1_addOn-a'>Diverse</span><span className='title__h1_addOn-b'>Restaurant</span></HeadingH1>
        <Text className={"text__alt"}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil cum ipsum illum a quod consequatur deserunt nulla harum laborum accusantium eaque laboriosam eius sint explicabo.</Text>
        <Link href="/" className="link__alt">
          Order Now
        </Link>
      </Wrapper>
    </Section>
  )
}
