/**
 * Created by Owen on 16/7/2.
 */

var data = {
    iteme:[
        {
            title: '2.5i全驱风尚版',
            content: [
                {
                    title: '发动机',
                    proto: [
                        {
                            name: '内径x冲程(mm) - 1',
                            con: '94.0×90.0 - 1'
                        },
                        {
                            name: '内径x冲程(mm) - 2',
                            con: '94.0×90.0 - 2'
                        }
                    ],
                },
                {
                    title: '发动机333',
                    proto: [
                        {
                            name: '内径x冲程(mm) - 333',
                            con: '94.0×90.0 - 333'
                        },
                        {
                            name: '内径x冲程(mm) - 333',
                            con: '94.0×90.0 - 333'
                        }
                    ],
                },
            ]
        },
        {
            title: '2.5i全驱豪华版',
            content: [
                {
                    title: '发动机2',
                    proto: [
                        {
                            name: '内径x冲程(mm) - 3',
                            con: '94.0×90.0 - 3'
                        },
                        {
                            name: '内径x冲程(mm) - 4',
                            con: '94.0×90.0 - 4'
                        }
                    ],
                },
                {
                    title: '发动机',
                    proto: [
                        {
                            name: '内径x冲程(mm) - 1',
                            con: '94.0×90.0 - 1'
                        },
                        {
                            name: '内径x冲程(mm) - 2',
                            con: '94.0×90.0 - 2'
                        }
                    ],
                },
            ]
        },
    ]
}

new Vue({
    el: '#configList',
    data: data
})


$("#configList select").change(function(){
    var $val = $(this).val();


    data[0].iteme[0].
    console.log($val);
})










