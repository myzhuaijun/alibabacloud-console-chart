import React from 'react';
import { ConsoleLineChart } from '@alicloud/console-chart';

const data = [
  {
    name: 'ECS',
    data: [
      ['201804', 31],
      ['201805', 39],
      ['201806', 32],
      ['201807', 35],
      ['201808', 31],
      ['201809', 36],
      ['201810', 32],
      ['201811', 34],
    ],
  },
  {
    name: 'OSS',
    data: [
      ['201804', 12],
      ['201805', 12],
      ['201806', 12],
      ['201807', 11],
      ['201808', 10],
      ['201809', 14],
      ['201810', 12],
      ['201811', 11],
    ],
  },
  {
    name: 'RDS',
    data: [
      ['201804', 48],
      ['201805', 45],
      ['201806', 43],
      ['201807', 44],
      ['201808', 41],
      ['201809', 45],
      ['201810', 42],
      ['201811', 45],
    ],
  },
];

const config = {
  padding: [50, 50, 50, 60],
  xAxis: {
    type: 'time',
    mask: 'YYYY-MM-DD',
  },
  guide: {
    topUnit: ['单位: 个', '单位: %'],
  },
};

export default () => (
  <ConsoleLineChart data={data} config={config} height={300} />
);
