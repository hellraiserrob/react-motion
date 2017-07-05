import React from 'react';

import './error.css'

const Error = ({ msg, css }) => (
    <div className={css}>{msg}</div>
);

export default Error;