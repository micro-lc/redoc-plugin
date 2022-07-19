/*
 * Copyright © 2021-present Mia s.r.l.
 * All rights reserved
 *
 * Mia-Platform uses Open Source Software.
 * Copyright notice are available at https://docs.mia-platform.eu/info/oss/.
 */

import React, {useCallback, useState} from 'react'
import PropTypes from 'prop-types'
import {RedocStandalone} from 'redoc'
import {LoadingAnimation} from '@mia-platform/microlc-ui-components'

import './ReDocContainer.css'

const DISPLAY_INITIAL = {display: 'initial'}
const DISPLAY_NONE = {display: 'none'}
const REDOC_OPTIONS = {hideLoading: true}

export const ReDocContainer = (props) => {
  const [isLoading, setIsLoading] = useState(true)

  const display = useCallback((displayAtLoading) => {
    return displayAtLoading === isLoading ? DISPLAY_INITIAL : DISPLAY_NONE
  }, [isLoading])

  return (
    <>
      <div style={display(true)}>
        <LoadingAnimation />
      </div>
      <RedocStandalone
        onLoaded={() => setIsLoading(false)}
        options={REDOC_OPTIONS}
        specUrl={props.openApiSpecUrl}
        style={display(false)}
      />
    </>
  )
}
ReDocContainer.propTypes = {
  openApiSpecUrl: PropTypes.string
}

export default ReDocContainer
