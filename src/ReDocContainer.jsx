/*
 * Copyright © 2021-present Mia s.r.l.
 * All rights reserved
 *
 * Mia-Platform uses Open Source Software.
 * Copyright notice are available at https://docs.mia-platform.eu/info/oss/.
 */

import React, {useCallback, useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import {Helmet} from 'react-helmet'
import {LoadingAnimation} from '@mia-platform/microlc-ui-components'
import './ReDocContainer.css'

const DISPLAY_INITIAL = {display: 'initial'}
const DISPLAY_NONE = {display: 'none'}
const CHECK_RENDER_INTERVAL = 2000

export const ReDocContainer = (props) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const checkPageLoading = setInterval(() => {
      if (window.document.querySelector('.redoc-wrap')) {
        setIsLoading(false)
        clearInterval(checkPageLoading)
      }
    }, CHECK_RENDER_INTERVAL)
    return () => clearInterval(checkPageLoading)
  }, [])

  const display = useCallback((displayAtLoading) => {
    return (displayAtLoading === isLoading) ? DISPLAY_INITIAL : DISPLAY_NONE
  }, [isLoading])

  return (
    <>
      <Helmet>
        <script src="https://cdn.jsdelivr.net/npm/redoc@2.0.0-rc.53/bundles/redoc.standalone.js"></script>
      </Helmet>
      <div style={display(true)}>
        <LoadingAnimation />
      </div>
      <redoc data-testid='redoc' spec-url={props.openApiSpecUrl} style={display(false)}/>
    </>
  )
}
ReDocContainer.propTypes = {
  openApiSpecUrl: PropTypes.string
}

export default ReDocContainer
