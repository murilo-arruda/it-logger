import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { deleteTech } from '../../actions/techActions';

const TechItem = ({ tech, deleteTech }) => {
  return (
    <li className='collection-item'>
      <div>
        {tech.firstName + ' ' + tech.lastName}
        <a href='#!' className='secondary-content'>
          <i
            onClick={() => deleteTech(tech.id)}
            className='material-icons grey-text'
          >
            delete
          </i>
        </a>
      </div>
    </li>
  );
};

TechItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteTech }
)(TechItem);
