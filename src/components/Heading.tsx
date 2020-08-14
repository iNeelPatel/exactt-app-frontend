import styled from 'styled-components';

const Heading = styled.div<{ mixin: any }>`
  ${props => props.mixin};
`;

export default Heading