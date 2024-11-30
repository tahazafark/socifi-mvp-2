import PropTypes from 'prop-types';
import styled from 'styled-components';

const Heading = styled.h1`
  font-family: ${(props) => props.theme.fonts.fontFamily};
  font-weight: ${(props) =>
    props.headingClass === 'h1' || props.headingClass === 'h2'
      ? props.theme.fonts.fontWeightBold
      : props.theme.fonts.fontWeightRegular};
  font-size: ${(props) =>
    props.headingClass
      ? props.theme.fonts[`fontSize${props.headingClass.toUpperCase()}`]
      : props.theme.fonts.fontSizeH1};
  text-align: ${(props) => (props.textCentered ? 'center' : 'left')};

  @media screen and (max-width: 1024px) {
    text-align: ${(props) =>
      props.textCenteredOnMobile || props.textCentered ? 'center' : 'left'};
  }

  @media screen and (max-width: 768px) {
    font-size: ${(props) =>
      props.headingClass
        ? `calc(${props.theme.fonts[`fontSize${props.headingClass.toUpperCase()}`]} * 0.8)`
        : `calc(${props.theme.fonts.fontSizeH1} * 0.8)`};
  }

  color: ${(props) => props.theme.colors[props.headingClass] || props.theme.colors.primary};
`;

Heading.propTypes = {
  headingClass: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  textCentered: PropTypes.bool,
  textCenteredOnMobile: PropTypes.bool,
};

Heading.defaultProps = {
  textCentered: false,
  textCenteredOnMobile: false,
};

export default Heading;
