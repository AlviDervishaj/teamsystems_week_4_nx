import styled from 'tailwind';

const StyledSimpleButton = styled.div`
  color: pink;
`;

export function SimpleButton() {
  return (
    <StyledSimpleButton>
      <h1>Welcome to SimpleButton!</h1>
    </StyledSimpleButton>
  );
}

export default SimpleButton;
