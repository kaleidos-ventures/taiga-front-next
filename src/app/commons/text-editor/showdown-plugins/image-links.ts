/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) 2021-present Kaleidos INC
 */

export default () => {
  const imageLink = {
    type: 'output',
    regex:   '<p>(<a.*?><img.*?<\/a>)<\/p>',
    replace: (_match: string, group: string) => {
      return group;
    },
  };

  return [imageLink];
};
