import React from 'react';
import ReactHighCharts from 'react-highcharts';
import { storiesOf } from '@storybook/react';
import chart1 from '../config/chart1.json';
import chart2 from '../config/chart2.json';


storiesOf('Charts', module)
.add('Test Line Chart', () => <ReactHighCharts config={chart1}/>)
.add('Line Chart - 4 data points', () => <ReactHighCharts config={chart2} />);