import * as React from 'react';
import { Descendant } from 'slate';

export interface EditorProps {
  initialValue?: Descendant[];
}

export default function Editor(props: EditorProps): React.ReactElement; 