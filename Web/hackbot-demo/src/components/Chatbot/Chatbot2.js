import React, { useMemo } from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';

export default () => {
  const directLine = useMemo(() => createDirectLine({ token: 'YOUR_DIRECT_LINE_TOKEN' }), []);

  return <ReactWebChat directLine={directLine} userID="YOUR_USER_ID" />;
};