import React from 'react';
import { ConsoleDotChart } from '@alicloud/console-chart';

const data = [
  {
    name: '云产品A',
    data: [
      ['11', 35],
      ['11', 10],
      ['12', 32],
      ['11', 7],
      ['13', 32],
      ['12', 23],
      ['11', 80],
      ['13', 33],
      ['11', 11],
      ['11', 32],
      ['12', 24],
      ['12', 72],
      ['13', 14],
      ['11', 42],
    ],
  },
  {
    name: '云产品B',
    data: [
      ['11', 54],
      ['11', 10],
      ['12', 24],
      ['12', 72],
      ['13', 14],
      ['11', 42],
      ['12', 32],
      ['11', 7],
      ['13', 32],
      ['12', 23],
      ['11', 24],
      ['13', 33],
      ['11', 11],
      ['11', 32],
    ],
  },
  {
    name: '云产品C',
    data: [
      ['11', 31],
      ['11', 10],
      ['11', 11],
      ['11', 32],
      ['12', 24],
      ['12', 32],
      ['11', 7],
      ['13', 32],
      ['12', 23],
      ['11', 43],
      ['13', 33],
      ['12', 72],
      ['13', 14],
      ['11', 42],
    ],
  },
];

const config = {
  padding: [40, 5, 24, 40],
  jitter: true,
  yAxis: {
    min: 0,
    max: 100,
  },
};

export default () => (
  <ConsoleDotChart data={data} config={config} height={300} />
);
