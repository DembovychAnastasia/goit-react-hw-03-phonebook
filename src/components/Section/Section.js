import propTypes from 'prop-types';
import { SectionTitle } from './Section.styled';

export function Section({ title , children}) {
    return (
      <SectionTitle>
        <h2>{title}</h2>
        {children}
      </SectionTitle>
    );
  }
  
  Section.propTypes = {
    title: propTypes.string.isRequired,
    children: propTypes.node.isRequired,
  };