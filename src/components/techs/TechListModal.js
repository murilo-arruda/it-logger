import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TechItem from './TechItem';
import { getTechs } from './../../actions/techActions';
import PropTypes from 'prop-types';

const TechListModal = ({ techs: { techs, loading }, getTechs }) => {
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  techs: state.tech
});
export default connect(
  mapStateToProps,
  { getTechs }
)(TechListModal);
