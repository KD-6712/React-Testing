import React from 'react'
import {render} from '@testing-library/react'
import { AppProviders } from '../provider/AppProviders'

const customRender = (ui, options) =>
// ui is the component we want to render.
  render(ui, {wrapper: AppProviders, ...options})

// re-export everything
export * from '@testing-library/react'

// override render method
export {customRender as render} 