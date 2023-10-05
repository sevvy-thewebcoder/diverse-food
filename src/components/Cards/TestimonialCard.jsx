import PropTypes from "prop-types"
import { CardWrapper, HeadingH3, HeadingH4, Text, TextContentWrapper } from "@components/PresetComposables";
import Avatar from '@mui/material/Avatar';
import "@styles/App.css"

export default function TestimonialCard( { image, title, subTitle, text } ) {
  return (
    <CardWrapper className={"testCard"}>
        <Avatar src={image} />
        <TextContentWrapper>
            <div className="titles">
                <HeadingH3 className={"title__h3_alt"}>{ title }</HeadingH3>
                <HeadingH4 className={"title__h4_alt"}>{ subTitle }</HeadingH4>
            </div>
            <Text className={"text__content_alt"}>{ text }</Text>
        </TextContentWrapper>
    </CardWrapper>
  )
}


TestimonialCard.propTypes = {
    image: PropTypes.any,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    text: PropTypes.string,
}