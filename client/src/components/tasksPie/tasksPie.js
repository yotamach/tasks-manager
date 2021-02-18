import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import {useSelector} from 'react-redux';
import _ from 'lodash';
import { handleStatusLabel, handleStatusLabelColor } from '../../utils/Utils';

export const TasksPie = (props) => {
  const tasks = useSelector(state => state.tasks.tasks);
  var countData = _.countBy(tasks, obj => obj.status);

  const pieData = Object.keys(countData).map(key => ({ name: handleStatusLabel(key), y: countData[key] ,color: handleStatusLabelColor(key)}));
  

  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: 'pie'
    },
    title: {
      text: 'Tasks by status'
    },
    tooltip: {
      pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
      point: {
        valueSuffix: '%'
      }
    },
    plotOptions: {
      pie: {
        allowPointSelect: true,
        cursor: 'pointer',
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b>: {point.percentage:.1f} %'
        }
      }
    },
    series: [
      {
        name: 'Tasks',
        colorByPoint: true,
        data: pieData
      }
    ]
  };
  return (<HighchartsReact highcharts={Highcharts} options={options}/>)
}

export default TasksPie;