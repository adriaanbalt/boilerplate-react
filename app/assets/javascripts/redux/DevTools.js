/**
 * name: DevTools
 * description: Helper Dev Tools window within the DOM to expose current state details.
 */

import React from 'react';
import { createDevTools } from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

// Configure redux devtools
export const DevTools = createDevTools(
  <DockMonitor
    toggleVisibilityKey="ctrl-h"
    changePositionKey="ctrl-m">
    <LogMonitor />
  </DockMonitor>
);
