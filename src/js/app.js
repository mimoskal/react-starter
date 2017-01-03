/*
 * Extract React objects
 */

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { Router, Route, Redirect, Link, browserHistory } from 'react-router'

ReactDOM.render(
            (
                <div className="test">
                    test
                </div>
            ),
			document.getElementById('app')
        );