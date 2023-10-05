import { HeadingH3, TextContentWrapper, Wrapper } from "@components/PresetComposables";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import "@styles/App.css"

export default function Footer() {
  return (
    <footer className="footer">
        <Wrapper className={"footer__wrapper"}>
            <TextContentWrapper className={"footerText__contentWrapper"}>
                <HeadingH3 className={"title__h3_alt"}>Diverse Food</HeadingH3>
                <small>
                    Copyright &copy; 2023. Diverse Food. All Rights Reserved.
                </small>
            </TextContentWrapper>
            <div className="media__links">
                <a href="/">
                    <IconButton>
                        <Instagram className="media__icon" />
                    </IconButton> 
                </a>
                <a href="/">
                    <IconButton>
                        <YouTube className="media__icon"  />
                    </IconButton>
                </a>
                <a href="/">
                    <IconButton>
                        <Twitter className="media__icon"  />
                    </IconButton>
                </a>
                <a href="/">
                    <IconButton>
                        <Facebook className="media__icon"  />
                    </IconButton>
                </a>
            </div>
        </Wrapper>
    </footer>
  )
}
