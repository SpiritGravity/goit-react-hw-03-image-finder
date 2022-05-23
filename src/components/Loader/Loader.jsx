import PropTypes from "prop-types";
import { ThreeDots } from 'react-loader-spinner';
import { Component } from 'react';
import loader from './Loader.css';

const Loader = () => {
    return ( 
        <div className="loader">
        <ThreeDots color="#3f51b5" height={80} width={80} />
    </div>
    )
}

Loader.propTypes = {
    enabled: PropTypes.bool.isRequired,
};

export default Loader;
