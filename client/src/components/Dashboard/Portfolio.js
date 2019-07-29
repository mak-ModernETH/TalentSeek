import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deletePortfolio } from '../../actions/profileActions';

class Portfolio extends Component {
    onDeleteClick(id) {
        this.props.deletePortfolio(id);
    }

    render() {
        const portfolio = this.props.portfolio.map(exp => (
            <tr key={exp._id}>
                <td>{exp.company}</td>
                <td>{exp.title}</td>
                <td>
                    <Moment format="YYYY/MM/DD">{exp.from}</Moment> -
          {exp.to === null ? (
                        ' Now'
                    ) : (
                            <Moment format="YYYY/MM/DD">{exp.to}</Moment>
                        )}
                </td>
                <td>
                    <button
                        onClick={this.onDeleteClick.bind(this, exp._id)}
                        className="btn btn-danger"
                    >
                        Delete
          </button>
                </td>
            </tr>
        ));
        return (
            <div className=" transparent mt-5">
                <h4 className="mb-4">Portfolio Credentials</h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Title</th>
                            <th>Years</th>
                            <th />
                        </tr>
                        {portfolio}
                    </thead>
                </table>
            </div>
        );
    }
}

Portfolio.propTypes = {
    deletePortfolio: PropTypes.func.isRequired
};

export default connect(null, { deletePortfolio })(Portfolio);
