import "@styles/App.css"
import { bestsellerSection } from "@assets/data";
import { CardWrapper, HeadingH2, HeadingH3, Image, ImageWrapper, Section, Text, TextContentWrapper, Wrapper } from "@components/PresetComposables";
import { Rating } from "@mui/material";


export default function BestsellerSection() {

  return (
    <Section id="bestseller" className={"bestseller"}>
        <Wrapper className={"bestseller__wrapper"}>
            <TextContentWrapper>
                <HeadingH2>
                    Bestseller
                </HeadingH2>
                <Text>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est omnis magni commodi dignissimos? Dolore molestias commodi atque laboriosam consequatur asperiores!
                </Text>
            </TextContentWrapper>
            <div className="bestseller__items">
                {
                    bestsellerSection.map( ( item ) => (
                        <CardWrapper className={"bestseller__card"}  key={item.id}>
                            <ImageWrapper className={"image__wrapper_alt"}>
                                <Image src={item.image} />
                            </ImageWrapper>
                            <HeadingH3>{ item.title }</HeadingH3>
                            <Rating name="size-large" size="large" className="ratings" readOnly value={item.stars} />
                            <Text>{ item.price }</Text>
                        </CardWrapper>
                    ))
                }
            </div>
        </Wrapper>
    </Section>
  )
}
