import styled from 'styled-components';

interface SectionProps {
  title: React.ReactNode;
  children: React.ReactNode;
}

const Section = (props: SectionProps) => {
  const { children, title } = props;

  return (
    <StyledSection>
      <SectionTitle>{title}</SectionTitle>
      <SectionContent>{children}</SectionContent>
    </StyledSection>
  );
};

export default Section;

const StyledSection = styled.section`
  padding-block: 20px;
  width: 90%;
  max-width: 1024px;
  margin-inline: auto;
  display: grid;
  gap: 1rem;
`;

const SectionTitle = styled.h2`
  font-weight: 500;
  font-size: 1.5rem;
`;

const SectionContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;
