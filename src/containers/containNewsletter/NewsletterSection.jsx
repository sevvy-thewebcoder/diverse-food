import { Button, HeadingH2, Text, TextContentWrapper, Wrapper } from "@components/PresetComposables";
import "@styles/App.css"
import { useState } from "react";

export default function NewsletterSection () {
    
    const [ input, setInput ] = useState("")

    console.log(input)

  return (
    <article className="newsletter">
        <Wrapper className={"newsletter__wrapper"}>
            <TextContentWrapper>
                <HeadingH2>
                    Subscribe to get latest updates!
                </HeadingH2>
                <Text className={"newsletter__text"}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Text>
            </TextContentWrapper>
            <form className="form">
                <input onChange={(e) => setInput(() => e.target.value)} value={input} type="email" placeholder="Please enter your Email ID" />
                <Button type="submit">Subscribe</Button>
            </form>
        </Wrapper>
    </article>
  )
}
