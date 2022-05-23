import PropTypes from "prop-types";
import { ThreeDots } from 'react-loader-spinner';
import { Component } from 'react';

function Loader ({}) {
    return ( 
        <div className="loader">
        <ThreeDots color="#00BFFF" height={80} width={80} />
    </div>
    )
}

Loader.propTypes = {
    enabled: PropTypes.bool.isRequired,
};

export default Loader;
