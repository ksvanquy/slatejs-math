import React, { useMemo, useState, useCallback } from 'react';
import { createEditor, Descendant, Element as SlateElement } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';

type ParagraphElement = { type: 'paragraph'; children: Descendant[] };

export interface EditorProps {
  initialValue?: Descendant[];
}

const initialValueDefault: ParagraphElement[] = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a Slate editor!' }],
  },
];

export default function Editor({ initialValue }: EditorProps) {
  const editor = useMemo(() => withReact(createEditor()), []);
  const [value, setValue] = useState<Descendant[]>(initialValue || initialValueDefault);

  const renderElement = useCallback((props: any) => <DefaultElement {...props} />, []);

  return (
    <Slate editor={editor} initialValue={value} onChange={setValue}>
      <Editable renderElement={renderElement} />
    </Slate>
  );
}

function DefaultElement(props: any) {
  return <p {...props.attributes}>{props.children}</p>;
} 