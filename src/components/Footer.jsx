import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  background: var(--primary);

  svg {
    font-size: 2rem;
    color: ${({ theme }) =>
      theme.name === "light" ? "var(--light)" : "var(--dark)"};

    &:hover {
      color: ${({ theme }) =>
        theme.name === "light" ? "var(--dark)" : "var(--light)"};
    }
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <FaGithub />
    </StyledFooter>
  );
}
