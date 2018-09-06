import styled from "styled-components";

export const StyledDiv1 = styled.div`
  background: yellow;
`;

export const StyledDiv2 = styled(StyledDiv1)`
  border: 1px solid green;
`;

export default () => (
  <div>
    <StyledDiv1>styled div 1</StyledDiv1>
    <StyledDiv2>styled div 2</StyledDiv2>
  </div>
);
