import { blogSection } from "@assets/data";
import { CardWrapper, HeadingH2, HeadingH3, Image, ImageWrapper, Section, Text, TextContentWrapper, Wrapper } from "@components/PresetComposables";
import "@styles/App.css"

export default function BlogSection() {
  return (
    <Section id="blogs" className={"blogs"}>
        <Wrapper className={"blogs__wrapper"}>
            <TextContentWrapper>
                <HeadingH2>Blog & Articles</HeadingH2>
                <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est rem distinctio voluptates?
                </Text>
            </TextContentWrapper>
            <div className="blog__posts">
                {
                    blogSection.map((item) => (
                        <CardWrapper className={"post"} key={item.id}>
                            <ImageWrapper className={"image__wrapper_alt"}>
                                <Image src={item.image} />
                            </ImageWrapper>
                            <TextContentWrapper className={"blog__content_wrapper"}>
                                <data>{ item.date }</data>
                                <HeadingH3>{ item.title }</HeadingH3>
                                <Text className={"blogPost__text"}>{ item.text }</Text>
                            </TextContentWrapper>
                        </CardWrapper>
                    ))
                }
            </div>
        </Wrapper>
    </Section>
  )
}
