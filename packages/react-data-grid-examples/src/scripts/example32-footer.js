import React from 'react';
import ReactDataGrid from 'react-data-grid';

import exampleWrapper from '../components/exampleWrapper';

const columns = [
  { key: 'id', name: 'ID', width: 800 },
  { key: 'title', name: 'Title', width: 800 },
  { key: 'count', name: 'Count', width: 800 }
];

const rows = [];
for (let i = 0; i < 100; i++) {
  rows.push({ id: i, title: `row_${i + 1}`, count: (i + 1) * 2 });
}

function RDGFooter() {
  return (
    <ReactDataGrid
      columns={columns}
      rowGetter={i => rows[i]}
      rowsCount={rows.length}
      minHeight={500}
    />
  );
}

export default exampleWrapper({
  WrappedComponent: RDGFooter,
  exampleName: 'Footer Example',
  exampleDescription: 'A grid with footer.',
  examplePath: './scripts/example32-footer.js',
  examplePlaygroundLink: ''
});
