function generate_chart(health_data) {
        var convertedData = [],
            obj_keys;

        if(health_data.lenght < 0) return;

        obj_keys = _.keys(health_data[0]);

        for(var i=0; i < obj_keys.length; i++) {
            var key_data = _.map(health_data, function(obj){
                return obj[obj_keys[i]];
            });
            key_data.unshift(obj_keys[i]);
            convertedData.push(key_data);
        }

        var chart = c3.generate({
             bindto: '#chart',
             data: {
                  x: 'time',
                  xFormat: '%Y-%m-%d %H:%M',
                  columns: convertedData,
                  type: 'bar',
                  types: {
                    heartbeats: 'area',
                    volume_of_oxygen: 'line'
                    //data6: 'spline',
                 },
                 axes: {
                   heartbeats: 'y',
                   volume_of_oxygen: 'y2'
                  }
                },
             axis: {
                x: {
                    type: 'timeseries',
                    tick: {
                        format: '%Y-%m-%d %H:%M'
                    }
                },
                y2: {
                 show: true,
                 tick: {
                        format: function (d) { 
                            return Math.ceil(d * 100) /100
                        }                 
                  },
                  label: { 
                     text: "Oxygen consumption, liters",
                     position: 'outer-middle'
                  }
                }
            },
            subchart: {
              show: true
            }
        })
}
