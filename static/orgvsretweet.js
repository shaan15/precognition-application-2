$( document ).ready(function test(x_list,y_list,x_list_p,y_list_p,x_list_v,y_list_v,x_list_u,y_list_u,x_list_s,y_list_s,x_list_um,y_list_um,x_list_c,y_list_c,words,count,m_words,m_count,posts,usersids,m_posts,m_usersids,allposts,favs,m_allposts,m_favs){
 // console.log(data);
 console.log("kabfa");
    console.log(x_list);
    new Highcharts.chart('chart-A', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Original Tweets vs Retweeted tweets'
    },
    subtitle: {
        text: 'Delhi Air Pollution'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                // format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
        name: 'Tweets',
        colorByPoint: true,
        data: [{
            name: 'Retweeted Tweets',
            y: x_list[1],
            drilldown: 'Retweeted Tweets'
        }, {
            name: 'Original Tweets',
            y: x_list[0],
            
            drilldown: 'Original Tweets'
        }]
    }],
    drilldown: {
        series: [{
            name: 'Retweeted Tweets',
            id: 'Retweeted tweets',
            
        }, {
            name: 'Original Tweets',
            id: 'Original tweets',
            
        }]
    }
});

new Highcharts.chart('chart-B', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Original Tweets vs Retweeted tweets'
    },
    subtitle: {
        text: 'Mumbai Cyclone'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                // format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
        name: 'Tweets',
        colorByPoint: true,
        data: [{
            name: 'Retweeted Tweets',
            y: y_list[1],
            drilldown: 'Retweeted Tweets'
        }, {
            name: 'Original Tweets',
            y: y_list[0],
            
            drilldown: 'Original Tweets'
        }]
    }],
    drilldown: {
        series: [{
            name: 'Retweeted Tweets',
            id: 'Retweeted tweets',
            
        }, {
            name: 'Original Tweets',
            id: 'Original tweets',
            
        }]
    }
});

    new Highcharts.chart('chart-C', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Tweets containing photos vs not'
    },
    subtitle: {
        text: 'Delhi Air Pollution'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                // format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
        name: 'Tweets',
        colorByPoint: true,
        data: [{
            name: 'photos',
            y: x_list[0],
            drilldown: 'photos'
        }, {
            name: 'No photos',
            y: x_list[1],
            
            drilldown: 'No photos'
        }]
    }],
    drilldown: {
        series: [{
            name: 'photos',
            id: 'photos',
            
        }, {
            name: 'No photos',
            id: 'No photos',
            
        }]
    }
});


new Highcharts.chart('chart-D', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Tweets containing photos vs not'
    },
    subtitle: {
        text: 'Mumbai Cyclone'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                // format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
        name: 'Tweets',
        colorByPoint: true,
        data: [{
            name: 'photos',
            y: y_list[0],
            drilldown: 'photos'
        }, {
            name: 'No photos',
            y: y_list[1],
            
            drilldown: 'No photos'
        }]
    }],
    drilldown: {
        series: [{
            name: 'photos',
            id: 'photos',
            
        }, {
            name: 'No photos',
            id: 'No photos',
            
        }]
    }
});

    new Highcharts.chart('chart-E', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Tweets containing videos vs not'
    },
    subtitle: {
        text: 'Delhi Air Pollution'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                // format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
        name: 'Tweets',
        colorByPoint: true,
        data: [{
            name: 'videos',
            y: x_list_v[0],
            drilldown: 'videos'
        }, {
            name: 'No videos',
            y: x_list_v[1],
            
            drilldown: 'No videos'
        }]
    }],
    drilldown: {
        series: [{
            name: 'videos',
            id: 'videos',
            
        }, {
            name: 'No videos',
            id: 'No videos',
            
        }]
    }
});

    new Highcharts.chart('chart-F', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Tweets containing videos vs not'
    },
    subtitle: {
        text: 'Mumbai Cyclone'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                // format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
        name: 'Tweets',
        colorByPoint: true,
        data: [{
            name: 'videos',
            y: y_list_v[0],
            drilldown: 'videos'
        }, {
            name: 'No videos',
            y: y_list_v[1],
            
            drilldown: 'No videos'
        }]
    }],
    drilldown: {
        series: [{
            name: 'videos',
            id: 'videos',
            
        }, {
            name: 'No videos',
            id: 'No videos',
            
        }]
    }
});

    new Highcharts.chart('chart-G', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Tweets containing URLs vs not'
    },
    subtitle: {
        text: 'Delhi Air Pollution'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                // format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
        name: 'Tweets',
        colorByPoint: true,
        data: [{
            name: 'URLs',
            y: x_list_u[0],
            drilldown: 'URLs'
        }, {
            name: 'No URLs',
            y: x_list_u[1],
            
            drilldown: 'No URLs'
        }]
    }],
    drilldown: {
        series: [{
            name: 'URLs',
            id: 'URLs',
            
        }, {
            name: 'No URLs',
            id: 'No URLs',
            
        }]
    }
});

    new Highcharts.chart('chart-H', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Tweets containing URLs vs not'
    },
    subtitle: {
        text: 'Mumbai Cyclone'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                // format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
        name: 'Tweets',
        colorByPoint: true,
        data: [{
            name: 'URLs',
            y: y_list_u[0],
            drilldown: 'URLs'
        }, {
            name: 'No URLs',
            y: y_list_u[1],
            
            drilldown: 'No URLs'
        }]
    }],
    drilldown: {
        series: [{
            name: 'URLs',
            id: 'URLs',
            
        }, {
            name: 'No URLs',
            id: 'No URLs',
            
        }]
    }
});

new Highcharts.chart('chart-I', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Tweets containing symbols vs not'
    },
    subtitle: {
        text: 'Delhi Air Pollution'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                // format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
        name: 'Tweets',
        colorByPoint: true,
        data: [{
            name: 'symbols',
            y: x_list_s[0],
            drilldown: 'symbols'
        }, {
            name: 'No symbols',
            y: x_list_s[1],
            
            drilldown: 'No symbols'
        }]
    }],
    drilldown: {
        series: [{
            name: 'symbols',
            id: 'symbols',
            
        }, {
            name: 'No symbols',
            id: 'No symbols',
            
        }]
    }
});

new Highcharts.chart('chart-J', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Tweets containing symbols vs not'
    },
    subtitle: {
        text: 'Mumbai Cyclone'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                // format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
        name: 'Tweets',
        colorByPoint: true,
        data: [{
            name: 'symbols',
            y: y_list_s[0],
            drilldown: 'symbols'
        }, {
            name: 'No symbols',
            y: y_list_s[1],
            
            drilldown: 'No symbols'
        }]
    }],
    drilldown: {
        series: [{
            name: 'symbols',
            id: 'symbols',
            
        }, {
            name: 'No symbols',
            id: 'No symbols',
            
        }]
    }
});

new Highcharts.chart('chart-K', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Tweets containing user mentions vs not'
    },
    subtitle: {
        text: 'Delhi Air Pollution'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                // format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
        name: 'Tweets',
        colorByPoint: true,
        data: [{
            name: 'user mentions',
            y: x_list_um[0],
            drilldown: 'user mentions'
        }, {
            name: 'No user mentions',
            y: x_list_um[1],
            
            drilldown: 'No user mentions'
        }]
    }],
    drilldown: {
        series: [{
            name: 'user mentions',
            id: 'user mentions',
            
        }, {
            name: 'No user mentions',
            id: 'No user mentions',
            
        }]
    }
});

new Highcharts.chart('chart-L', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Tweets containing user mentions vs not'
    },
    subtitle: {
        text: 'Mumbai Cyclone'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                // format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
        name: 'Tweets',
        colorByPoint: true,
        data: [{
            name: 'user mentions',
            y: y_list_um[0],
            drilldown: 'user mentions'
        }, {
            name: 'No user mentions',
            y: y_list_um[1],
            
            drilldown: 'No user mentions'
        }]
    }],
    drilldown: {
        series: [{
            name: 'user mentions',
            id: 'user mentions',
            
        }, {
            name: 'No user mentions',
            id: 'No user mentions',
            
        }]
    }
});
    
new Highcharts.chart('chart-M', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Distribution of Type of Tweet'
    },
    subtitle: {
        text: 'Delhi Air Pollution'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                // format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
        name: 'Tweets',
        colorByPoint: true,
        data: [{
            name: 'Only text',
            y: x_list_c[0],
            drilldown: 'Only text'
        }, {
            name: 'Only media',
            y: x_list_c[1],
            
            drilldown: 'Only media'
        }, {
            name: 'Both',
            y: x_list_c[2],
            
            drilldown: 'Both'
        }]
    }],
    series: [{
        name: 'Tweets',
        colorByPoint: true,
        data: [{
            name: 'Only text',
            y: x_list_c[0]
        }, {
            name: 'Only media',
            y: x_list_c[1]
        }, {
            name: 'Both',
            y: x_list_c[2]
        }]
    }]
}); 

new Highcharts.chart('chart-N', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Distribution of Type of Tweet'
    },
    subtitle: {
        text: 'Mumbai Cyclone'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    plotOptions: {
        series: {
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                // format: '{point.name}: {point.y:.1f}%'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.percentage:.1f}%</b>'
    },
    series: [{
        name: 'Tweets',
        colorByPoint: true,
        data: [{
            name: 'Only text',
            y: y_list_c[0],
            drilldown: 'Only text'
        }, {
            name: 'Only media',
            y: y_list_c[1],
            
            drilldown: 'Only media'
        }, {
            name: 'Both',
            y: y_list_c[2],
            
            drilldown: 'Both'
        }]
    }],
    series: [{
        name: 'Tweets',
        colorByPoint: true,
        data: [{
            name: 'Only text',
            y: y_list_c[0]
        }, {
            name: 'Only media',
            y: y_list_c[1]
        }, {
            name: 'Both',
            y: y_list_c[2]
        }]
    }]
}); 

new Highcharts.chart('chart-O', {
    chart: {
        type: 'column'
    },
    title: {
        text: '10 most frequntly used hashtags'
    },
    subtitle: {
        text: 'Delhi Air Pollution'
    },
    xAxis: {
        categories: words,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'frequency'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'hashtags',
        data: count

    }]
});

new Highcharts.chart('chart-P', {
    chart: {
        type: 'column'
    },
    title: {
        text: '10 most frequntly used hashtags'
    },
    subtitle: {
        text: 'Mumbai Cyclone'
    },
    xAxis: {
        categories: m_words,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'frequency'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'hashtags',
        data: m_count

    }]
});

new Highcharts.chart('chart-Q', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Activity of non-Delhi users'
    },
    subtitle: {
        text: 'Delhi Air Pollution'

    },
    xAxis: {
        categories: usersids,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Activity level'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'number of posts in database',
        data: posts

    }]
});

new Highcharts.chart('chart-R', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Activity of non-Mumbai users'
    },
    subtitle: {
        text: 'Mumbai Cyclone'

    },
    xAxis: {
        categories: m_usersids,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Activity level'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'number of posts in database',
        data: m_posts

    }]
});

new Highcharts.chart('chart-S', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Activity of non-Delhi users'
    },
    subtitle: {
        text: 'Delhi Air Pollution'

    },
    xAxis: {
        categories: usersids,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Activity level'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Total posts',
        data: allposts

    }, {
        name: 'Favourite count',
        data: favs

    }]
});

new Highcharts.chart('chart-T', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Activity of non-Mumbai users'
    },
    subtitle: {
        text: 'Mumbai Cyclone'

    },
    xAxis: {
        categories: m_usersids,
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Activity level'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f} </b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
        name: 'Total posts',
        data: m_allposts

    }, {
        name: 'Favourite count',
        data: m_favs

    }]
});
  console.log("kabfa");
})

test({{x_list|safe}},{{y_list|safe}},{{x_list_p|safe}},{{y_list_p|safe}},{{x_list_v|safe}},{{y_list_v|safe}},{{x_list_u|safe}},{{y_list_u|safe}},{{x_list_s|safe}},{{y_list_s|safe}},{{x_list_um|safe}},{{y_list_um|safe}},{{x_list_c|safe}},{{y_list_c|safe}},{{words|safe}},{{count|safe}},{{m_words|safe}},{{m_count|safe}},{{posts|safe}},{{usersids|safe}},{{m_posts|safe}},{{m_usersids|safe}},{{allposts|safe}},{{favs|safe}},{{m_allposts|safe}},{{m_favs|safe}});
console.log("HI1");