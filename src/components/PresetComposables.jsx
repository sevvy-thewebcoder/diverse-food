import PropTypes from "prop-types"
import "@styles/PresetComposables.css"

function Section ( { className, children, ...props } ) {
  return (
    <section className={`section ${className}`} {...props}>{children}</section>
  )
}

function Wrapper( { className, children, ...props } ) {
  return (
    <div className={`wrapper ${className}`} {...props}>{ children }</div>
  )
}

function CardWrapper ( { className, children, ...props } ) {
  return (
    <div className={`card ${className}`} {...props}>{children}</div>
  )
}

function TextContentWrapper ( { className, children, ...props } ) {
  return (
    <div className={`text__contentWrapper ${className}`} {...props}>{children}</div>
  )
}

function ImageWrapper ( { className, children, ...props } ) {
  return (
    <div className={`image__wrapper ${className}`} {...props}>{children}</div>
  )
}

function Image ( { className, ...props } ) {
  return (
    <img className={`image ${className}`} {...props} />
  )
}

function Button ( { className, children, ...props } ) {
  return (
    <button className={`btn ${className}`} {...props}>{children}</button>
  )
}

function Link ( { children, className, ...props } ) {
  return (
    <a className={`link ${className}`} { ...props }>{ children}</a>
  )
}

function HeadingH1 ( { children, className, ...props } ) {
  return (
    <h1 className={`title__h1 ${className}`} { ...props }>{ children}</h1>
  )
}

function HeadingH2 ( { children, className, ...props } ) {
  return (
    <h2 className={`title__h2 ${className}`} { ...props }>{ children}</h2>
  )
}

function HeadingH3 ( { children, className, ...props } ) {
  return (
    <h3 className={`title__h3 ${className}`} { ...props }>{ children}</h3>
  )
}

function HeadingH4 ( { children, className, ...props } ) {
  return (
    <h4 className={`title__h4 ${className}`} { ...props }>{ children}</h4>
  )
}

function Text ( { children, className, ...props } ) {
  return (
    <p className={`text ${className}`} { ...props }>{ children}</p>
  )
}


Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string
}

CardWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

TextContentWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

ImageWrapper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Image.propTypes = {
  className: PropTypes.string
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

HeadingH1.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

HeadingH2.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

HeadingH3.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

HeadingH4.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}




export {
    Section,
    Wrapper,
    CardWrapper,
    TextContentWrapper,
    ImageWrapper,
    Image,
    Button,
    Link,
    HeadingH1,
    HeadingH2,
    HeadingH3,
    HeadingH4,
    Text
};