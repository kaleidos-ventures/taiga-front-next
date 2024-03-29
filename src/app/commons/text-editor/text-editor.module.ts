/**
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 *
 * Copyright (c) 2021-present Kaleidos INC
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextEditorComponent } from './text-editor.component';
import { MarkdownEditorModule } from '@/app/commons/markdown-editor/markdown-editor.module';
import { HtmlEditorModule } from '../html-editor/html-editor.module';
import { SearchApiModule } from '@/app/api/search/search-api.module';

@NgModule({
  providers: [],
  declarations: [TextEditorComponent],
  exports: [TextEditorComponent],
  imports: [
    CommonModule,
    MarkdownEditorModule,
    HtmlEditorModule,
    SearchApiModule,
  ],
})
export class TextEditorModule { }
