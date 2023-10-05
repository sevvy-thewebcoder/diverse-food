import { testimonialSection } from "@assets/data";
import TestimonialCard from "@components/Cards/TestimonialCard";
import { HeadingH2, Section, Text, TextContentWrapper, Wrapper } from "@components/PresetComposables";
import "@styles/App.css"

export default function TestimonialSection() {
  return (
    <Section id="testimonial" className={"testimonials"}>
      <Wrapper className={"test__wrapper"}>
        <TextContentWrapper className={"test__content"}>
          <HeadingH2>Testimonials</HeadingH2>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.varius aliquam urna ut.</Text>
        </TextContentWrapper>
        <div className="cards">
          {
            testimonialSection.map( ( user ) => (
              <TestimonialCard key={user.id} image={user.image} title={user.title} subTitle={user.subTitle} text={user.text} />
            ))
          }
        </div>
      </Wrapper>
    </Section>
  )
}
