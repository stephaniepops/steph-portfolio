import styled from "styled-components/macro";

export const Title = styled.div`
  font-size: 1.75em;
  margin: 35px;
  font-weight: 400;
  text-align: center;
  position: relative;

  ::after {
    position: absolute;
    content: "";
    height: 2px;
    margin: 0 auto;
    bottom: -10px;
    left: 0;
    right: 0;
    width: 80px;
    /* background: green; */
  }
`;
