/*
 * Copyright © 2022-present Mia s.r.l.
 * All rights reserved
 *
 * Mia-Platform uses Open Source Software.
 * Copyright notice are available at https://docs.mia-platform.eu/info/oss/.
 */

import React from 'react'
import {render, screen} from '@testing-library/react'
import ReDocContainer from '../ReDocContainer'

describe('ReDocContainer test', () => {
  it('Correctly show redoc page', async () => {
    render(<ReDocContainer openApispecUrl={'http://petstore.swagger.io/v2/swagger.json'}/>)
    expect(screen.getByTestId('redoc')).toBeTruthy()
  })
})
