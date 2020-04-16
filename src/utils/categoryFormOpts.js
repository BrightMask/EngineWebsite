export const FormOpts = {
    '发电机组': {
        // 发电机组 alternatorGroupFormItems
        type: 'alternatorGroup',
        forms: [
            {
                groupName: '发电机',
                formName: 'alternator',
                formGroup: [
                    {label: '型号', key: 'mdoel'},
                    {label: '额定电压', key: 'ratedVoltage'},
                    {label: '额定频率', key: 'ratedFrequency'},
                    {label: '额定输出', key: 'ratedOutput'},
                    {label: '最大输出', key: 'elcmaxOutput'},
                    {label: '直流输出', key: 'dcOutput'},
                    {label: '相数', key: 'phaseNumber'},
                    {label: '功率因数', key: 'powerFactor'},
                    {label: '后备功率', key: 'reservePower'},
                    {label: '绝缘等级', key: 'insulationGrade'},
                    {label: '电压变幅', key: 'voltageAmplitude'},
                ]
            },
            {
                groupName: '发动机',
                formName:'engineForm',
                formGroup: [
                    {label: '型号', key: 'type'},
                    {label: '起动系统', key: 'startSys'},
                    {label: '连续工作时间', key: 'durTime'},
                    {label: '排气量', key: 'dischargeVolume'},
                    {label: '最大输出', key: 'maxOutput'},
                    {label: '燃料', key: 'fuel'},
                    {label: '燃油箱容量', key: 'fuelTankCapacity'},
                    {label: '额定转速', key: 'ratedSpeed'},
                ]
            },
            {
                groupName: '标准配置',
                formName: 'standard',
                formGroup: [
                    {label: '电压表', key: 'voltmeter'},
                    {label: '自动电压调节器', key: 'automaticvoltageregulator'},
                    {label: '机油警告系统', key: 'oilwarningsystem'},
                    {label: '蓄电池', key: 'battery'},
                    {label: '车轮与吊钩', key: 'wheelsAndHooks'},
                    {label: '运行计时表', key: 'runningTimeMeter'},
                  
                ]
            },
            {
                groupName: '附属装置',
                formName: 'accessory',
                formGroup: [
                    {label: '无碳刷', key: 'brushless'},
                    {label: '电压调节器', key: 'voltageregulator'},
                    {label: '电启动', key: 'electricstart'},
                    {label: '双电压', key: 'doublevoltage'},
                    {label: '交流断路器', key: 'accircuitbreaker'},
                    {label: '直流断路器', key: 'dccircuitbreaker'},
                    {label: '燃油表', key: 'fuelgauge'},
                    {label: '机油报警装置	', key: 'oilalarm'},
                    {label: '水温报警装置	', key: 'watertemperaturealarmdevice'},
                    {label: '油压报警装置		', key: 'oilpressurealarmdevice'},
                    {label: '水温灯	', key: 'watertemperaturelamp'},
                    {label: '电压表	', key: 'voltmeter'},
                    {label: '指示灯	', key: 'indicatorlight'},
                    {label: '节能怠速装置', key: 'energysavingidledevice'},
                    {label: '发动机控制端子', key: 'enginecontrolterminal'},
                    {label: 'DPC', key: 'dpc'},
                    {label: '电压调节方式', key: 'voltageregulationmode'},
                    {label: '无熔丝断路器', key: 'circuitbreakerwithoutfuse'},
                    {label: '充电报警灯', key: 'chargingalarmlamp'},
                ]
            },
            {
                groupName: '其他',
                formName: 'other',
                formGroup: [
                    {label: '长*宽*高（mm）', key: 'size'},
                    {label: '净重', key: 'netWeight'},
                    {label: '油箱容积', key: 'tankvolume'},
                    {label: '耗油量（L/KW.H）', key: 'fuelconsumption'},
                    {label: '噪音水平（dBA/7M）', key: 'noiselevel'},
                    {label: '车轮附件', key: 'wheelaccessories'},
                    {label: '电池', key: 'battery'},
                ]
            }
        ]
    },

    // 发电机 alternatorFormItems
    "发电机": {
        type: 'alternator',
        forms: [
            {
                groupName: '发电机',
                formName: 'alternator',
                formGroup: [
                    {label: '型号', key: 'mdoel'},
                    {label: '额定电压', key: 'ratedVoltage'},
                    {label: '额定频率', key: 'ratedFrequency'},
                    {label: '额定输出', key: 'ratedOutput'},
                    {label: '最大输出', key: 'elcmaxOutput'},
                    {label: '直流输出', key: 'dcOutput'},
                    {label: '相数', key: 'phaseNumber'},
                    {label: '功率因数', key: 'powerFactor'},
                    {label: '后备功率', key: 'reservePower'},
                    {label: '绝缘等级', key: 'insulationGrade'},
                    {label: '电压变幅', key: 'voltageAmplitude'},
                ]
            },
            {
                groupName: '发动机',
                formName:'engineForm',
                formGroup: [
                    {label: '类型', key: 'type'},
                    {label: '起动系统', key: 'startSys'},
                    {label: '连续工作时间', key: 'durTime'},
                    {label: '排气量', key: 'dischargeVolume'},
                    {label: '最大输出', key: 'maxOutput'},
                    {label: '燃料', key: 'fuel'},
                    {label: '燃油箱容量', key: 'fuelTankCapacity'},
                    {label: '额定转速', key: 'ratedSpeed'},
                ]
            },
            {
                groupName: '其他',
                formName: 'other',
                formGroup: [
                    {label: '长*宽*高（mm）', key: 'size'},
                    {label: '净重', key: 'netWeight'},
                    {label: '油箱容积', key: 'tankvolume'},
                    {label: '耗油量（L/KW.H）', key: 'fuelconsumption'},
                    {label: '噪音水平（dBA/7M）', key: 'noiselevel'},
                    {label: '车轮附件', key: 'wheelaccessories'},
                    {label: '电池', key: 'battery'},
                ]
            },
            {
                groupName: '附属装置',
                formName: 'accessory',
                formGroup: [
                    {label: '无碳刷', key: 'brushless'},
                    {label: '电压调节器', key: 'voltageregulator'},
                    {label: '电启动', key: 'electricstart'},
                    {label: '双电压', key: 'doublevoltage'},
                    {label: '交流断路器', key: 'accircuitbreaker'},
                    {label: '直流断路器', key: 'dccircuitbreaker'},
                    {label: '燃油表', key: 'fuelgauge'},
                    {label: '机油报警装置	', key: 'oilalarm'},
                    {label: '水温报警装置	', key: 'watertemperaturealarmdevice'},
                    {label: '油压报警装置		', key: 'oilpressurealarmdevice'},
                    {label: '水温灯	', key: 'watertemperaturelamp'},
                    {label: '电压表	', key: 'voltmeter'},
                    {label: '指示灯	', key: 'indicatorlight'},
                    {label: '节能怠速装置', key: 'energysavingidledevice'},
                    {label: '发动机控制端子', key: 'enginecontrolterminal'},
                    {label: 'DPC', key: 'dpc'},
                    {label: '电压调节方式', key: 'voltageregulationmode'},
                    {label: '无熔丝断路器', key: 'circuitbreakerwithoutfuse'},
                    {label: '充电报警灯', key: 'chargingalarmlamp'},
                ]
            },
            
        ]
    },

    // 水泵 waterFormItems
    '水泵': {
        type: 'water',
        forms:   [
           
            {
                groupName: '发动机',
                formName:'engineForm',
                formGroup: [
                    {label: '配套汽油机型号', key: 'type'},
                    {label: '起动系统', key: 'startSys'},
                    {label: '连续工作时间', key: 'durTime'},
                    {label: '排气量', key: 'dischargeVolume'},
                    {label: '配套汽油机功率', key: 'maxOutput'},
                    {label: '燃料', key: 'fuel'},
                    {label: '燃油箱容量', key: 'fuelTankCapacity'},
                    {label: '转速', key: 'waveRent'},
                ]
            },
            {
                groupName: '水泵',
                formName:'water',
                formGroup: [
                    {label: '进/出口直径(mm)', key: 'suctionDischarge'},
                    {label: '规定点扬程(m)', key: 'totalHead'},
                    {label: '吸程(m)', key: 'suctionHead'},
                    {label: '最大抽水量(', key: 'maxCapacity'},
                    {label: '规定点自吸高度(', key: 'maxHeight'},
                    {label: '规定点流量(', key: 'maxWaterNum'},
                    
                ]
            },
            {
                groupName: '标准配置',
                formName: 'standard',
                formGroup: [
                    
                    {label: '净重', key: 'net'},
                    {label: '尺寸', key: 'sizes'},
                    {label: '电压表', key: 'voltmeter'},
                    {label: '自动电压调节器', key: 'automaticvoltageregulator'},
                    {label: '机油警告系统', key: 'oilwarningsystem'},
                    {label: '蓄电池', key: 'battery'},
                    {label: '车轮与吊钩', key: 'wheelsAndHooks'},
                    {label: '运行计时表', key: 'runningTimeMeter'},
                ]
            },
        ]
    },

    // 发动机 enigerFormItems
    '发动机': {
        type: 'engine',
        forms:[
            {
                groupName: '发动机',
                formName:'engineForm',
                formGroup: [
                    {label: '名称', key: 'name'},
                    {label: '图片', key: 'img', type: 'upload'},
                    {label: '发动机', key: 'eniger'},
                    {label: '内径X冲程', key: 'xStroke'},
                    {label: '气缸排量', key: 'cyCapacity'},
                    {label: '压缩比', key: 'CompRatio'},
                    {label: '最大功率', key: 'maxPower'},
                    {label: '推荐使用功率', key: 'recPower'},
                    {label: '最大扭矩', key: 'maxTorque'},
                    {label: '点火系统', key: 'fire'},
                    {label: '起动系统', key: 'start'},
                    {label: '燃油箱容量', key: 'fuelTankCapacity'},
                    {label: '空气滤清器', key: 'airFilter'},
                    {label: '机油容量', key: 'oilCapacity'},
                    {label: '燃油消耗量', key: 'fuelConsumption'},
                    {label: '.寸（长*宽*高）', key: 'size'},
                    {label: '净重', key: 'netWeight'},
                ]
            },
        ]
    },

    // 汽油发电机 gasolineGenerator
    '汽油发电机': {
        type: 'gasolineGenerator',
        forms: [
            {
                groupName: '发电机',
                formName: 'alternator',
                formGroup: [
                    {label: '类型', key: 'mdoel'},
                    {label: '额定电压', key: 'ratedVoltage'},
                    {label: '额定频率', key: 'ratedFrequency'},
                    {label: '额定输出', key: 'ratedOutput'},
                    {label: '最大输出', key: 'elcmaxOutput'},
                    {label: '直流输出', key: 'dcOutput'},
                    {label: '相数', key: 'phaseNumber'},
                    {label: '功率因数', key: 'powerFactor'},
                    {label: '后备功率', key: 'reservePower'},
                    {label: '绝缘等级', key: 'insulationGrade'},
                    {label: '电压变幅', key: 'voltageAmplitude'},
                    {label: '额定电流', key: 'ratedCurrent'},
                    {label: '波形畸变率', key: 'waveformDistortionRate'},
                    {label: '调速类型', key: 'speedRegulationType'},
                ]
            },
            {
                groupName: '发动机',
                formName:'engineForm',
                formGroup: [
                    {label: '类型', key: 'type'},
                    {label: '起动系统', key: 'startSys'},
                    {label: '连续工作时间', key: 'durTime'},
                    {label: '排气量', key: 'dischargeVolume'},
                    {label: '最大输出', key: 'maxOutput'},
                    {label: '燃料', key: 'fuel'},
                    {label: '点火方式', key: 'ignitionMode'},
                    {label: '燃油箱容量', key: 'fuelTankCapacity'},
                    {label: '额定转速', key: 'ratedSpeed'},
                ]
            },
            {
                groupName: '其他',
                formName: 'other',
                formGroup: [
                    {label: '长*宽*高（mm）', key: 'size'},
                    {label: '净重', key: 'netWeight'},
                    {label: '油箱容积', key: 'tankvolume'},
                    {label: '耗油量（L/KW.H）', key: 'fuelconsumption'},
                    {label: '连续运转时间(Hr)', key: 'continuousOperationTime'},
                    {label: '噪音水平（dBA/7M）', key: 'noiselevel'},
                    {label: '车轮附件', key: 'wheelaccessories'},
                    {label: '电池', key: 'battery'},
                    
                ]
            },
            {
                groupName: '附属装置',
                formName: 'accessory',
                formGroup: [
                    {label: '无碳刷', key: 'brushless'},
                    {label: '电压调节器', key: 'voltageregulator'},
                    {label: '电启动', key: 'electricstart'},
                    {label: '双电压', key: 'doublevoltage'},
                    {label: '电路断路器', key: 'circuitBreaker'},
                    {label: '交流断路器', key: 'accircuitbreaker'},
                    {label: '直流断路器', key: 'dccircuitbreaker'},
                    {label: '燃油表', key: 'fuelgauge'},
                    {label: '机油报警装置	', key: 'oilalarm'},
                    {label: '水温报警装置	', key: 'watertemperaturealarmdevice'},
                    {label: '油压报警装置		', key: 'oilpressurealarmdevice'},
                    {label: '水温灯	', key: 'watertemperaturelamp'},
                    {label: '电压表	', key: 'voltmeter'},
                    {label: '指示灯	', key: 'indicatorlight'},
                    {label: '节能怠速装置', key: 'energysavingidledevice'},
                    {label: '发动机控制端子', key: 'enginecontrolterminal'},
                    {label: 'DPC', key: 'dpc'},
                    {label: '电压调节方式', key: 'voltageregulationmode'},
                    {label: '无熔丝断路器', key: 'circuitbreakerwithoutfuse'},
                    {label: '充电报警灯', key: 'chargingalarmlamp'},
                    {label: '超载指示灯', key: 'overloadIndicator'},
                    {label: '输出指示灯', key: 'outputIndicator'},
                    {label: '交流超载保护装置', key: 'acOverloadProtectionDevice'},
                    {label: '直流超载保护装置', key: 'dcOverloadProtectionDevice'},
                    {label: '启动卸压装置', key: 'startThePressureReliefDevice'},
                    {label: '减噪装置', key: 'noiseReductionDevice'},
                    {label: '机架', key: 'frame'},
                ]
            },
        ]
    },


    // 柴油发电机  dieselGenerator
    '柴油发电机': {
        type: 'dieselGenerator',
        forms: [
            {
                groupName: '发电机',
                formName: 'alternator',
                formGroup: [
                    {label: '型号', key: 'mdoel'},
                    {label: '额定电压', key: 'ratedVoltage'},
                    {label: '额定频率', key: 'ratedFrequency'},
                    {label: '额定输出', key: 'ratedOutput'},
                    {label: '最大输出', key: 'elcmaxOutput'},
                    {label: '直流输出', key: 'dcOutput'},
                    {label: '相数', key: 'phaseNumber'},
                    {label: '功率因数', key: 'powerFactor'},
                    {label: '后备功率', key: 'reservePower'},
                    {label: '绝缘等级', key: 'insulationGrade'},
                    {label: '电压变幅', key: 'voltageAmplitude'},
                    {label: '准备状态输出功率', key: 'readyStateOutputPower'},
                    {label: '基本输出功率', key: 'basicOutputPower'},
                    {label: '电压(三相)', key: 'voltageThreee'},
                    {label: '电压(单相)', key: 'voltageOne'},
                    {label: '电极连接', key: 'electrodeConnection'},
                    {label: '相和线', key: 'phaseSumLine'},
                    {label: '极数', key: 'poleNumber'},
                    {label: '绝缘', key: 'insulation'},
                ]
            },
            {
                groupName: '发动机',
                formName:'engineForm',
                formGroup: [
                    {label: '设计', key: 'design'},
                    {label: '型号', key: 'type'},
                    {label: '汽缸数', key: 'cylinders'},
                    {label: '断面x行程', key: 'sectionXStroke'},
                    {label: '润滑油', key: 'lubricatingOil'},
                    {label: '润滑油容量', key: 'lubricatingOilCapacity'},
                    {label: '冷却水容量', key: 'coolingWaterCapacity'},
                    {label: '起动系统', key: 'startSys'},
                    {label: '连续工作时间', key: 'durTime'},
                    {label: '排气量', key: 'dischargeVolume'},
                    {label: '最大输出', key: 'maxOutput'},
                    {label: '燃料', key: 'fuel'},
                    {label: '燃油箱容量', key: 'fuelTankCapacity'},
                    {label: '额定转速', key: 'ratedSpeed'},
                ]
            },
            {
                groupName: '其他',
                formName: 'other',
                formGroup: [
                    {label: '长*宽*高（mm）', key: 'size'},
                    {label: '净重', key: 'netWeight'},
                    {label: '油箱容积', key: 'tankvolume'},
                    {label: '耗油量（L/KW.H）', key: 'fuelconsumption'},
                    {label: '连续运转时间(Hr)', key: 'continuousOperationTime'},
                    {label: '噪音水平（dBA/7M）', key: 'noiselevel'},
                    {label: '车轮附件', key: 'wheelaccessories'},
                    {label: '电池', key: 'battery'},
                ]
            },
            {
                groupName: '附属装置',
                formName: 'accessory',
                formGroup: [
                    {label: '无碳刷', key: 'brushless'},
                    {label: '电压调节器', key: 'voltageregulator'},
                    {label: '电启动', key: 'electricstart'},
                    {label: '双电压', key: 'doublevoltage'},
                    {label: '交流断路器', key: 'accircuitbreaker'},
                    {label: '直流断路器', key: 'dccircuitbreaker'},
                    {label: '燃油表', key: 'fuelgauge'},
                    {label: '机油报警装置	', key: 'oilalarm'},
                    {label: '水温报警装置	', key: 'watertemperaturealarmdevice'},
                    {label: '油压报警装置		', key: 'oilpressurealarmdevice'},
                    {label: '水温灯	', key: 'watertemperaturelamp'},
                    {label: '电压表	', key: 'voltmeter'},
                    {label: '指示灯	', key: 'indicatorlight'},
                    {label: '节能怠速装置', key: 'energysavingidledevice'},
                    {label: '发动机控制端子', key: 'enginecontrolterminal'},
                    {label: 'DPC', key: 'dpc'},
                    {label: '电压调节方式', key: 'voltageregulationmode'},
                    {label: '无熔丝断路器', key: 'circuitbreakerwithoutfuse'},
                    {label: '充电报警灯', key: 'chargingalarmlamp'},
                ]
            },
            {
                groupName: '整体',
                formName:'hollForm',
                formGroup: [
                    {label: '燃油', key: 'fuelOil'},
                    {label: '燃油消耗（满负载状态)', key: 'fuelConsumption'},
                    {label: '燃油箱容量', key: 'fuelTankCapacity'},
                    {label: '连续工作时间', key: 'durTime'},
                    {label: '蓄电池', key: 'holBattery'},
                    {label: '起动系统', key: 'startSys'},
                    {label: '长*宽*高（mm）', key: 'holsize'},
                    {label: '净重', key: 'holNetWeight'},
                    {label: '噪音水平（dBA/7M', key: 'holNoiselevel'},
                    {label: '非常停机系统', key: 'emergencyShutdownSystem'},
                ]
            },
            {
                groupName: '放大器',
                formName:'plusForm',
                formGroup: [
                    {label: '单相 110V', key: 'singlePhaseOneOneZero'},
                    {label: '单相 220V', key: 'singlePhaseTwoTwoZero'},
                    {label: '三相 220V', key: 'threePhaseTwoTwoZero'},
                    {label: '三相 380V', key: 'threePhaseThreeEightZero'},
                ]
            },
        ]
    },

    // 发电机组 generatorGroup
    '发电机组': {
        type: 'generatorGroup',
        forms: [
            {
                groupName: '发动机',
                formName:'engineForm',
                formGroup: [
                    {label: '类型', key: 'type'},
                    {label: '起动系统', key: 'startSys'},
                    {label: '连续工作时间', key: 'durTime'},
                    {label: '排气量', key: 'dischargeVolume'},
                    {label: '最大输出', key: 'maxOutput'},
                    {label: '燃料', key: 'fuel'},
                    {label: '燃油箱容量', key: 'fuelTankCapacity'},
                    {label: '额定转速', key: 'ratedSpeed'},
                    {label: '噪音', key: 'noise'},
                    {label: '耗油量', key: 'fuelConsumption'},
                ]
            },
            {
                groupName: '发电机',
                formName: 'alternator',
                formGroup: [
                    {label: '型号', key: 'mdoel'},
                    {label: '额定电压', key: 'ratedVoltage'},
                    {label: '额定频率', key: 'ratedFrequency'},
                    {label: '额定输出', key: 'ratedOutput'},
                    {label: '最大输出', key: 'elcmaxOutput'},
                    {label: '直流输出', key: 'dcOutput'},
                    {label: '相数', key: 'phaseNumber'},
                    {label: '功率因数', key: 'powerFactor'},
                    {label: '后备功率', key: 'reservePower'},
                    {label: '绝缘等级', key: 'insulationGrade'},
                    {label: '电压变幅', key: 'voltageAmplitude'},
                ]
            },
            {
                groupName: '标准配置',
                formName: 'standard',
                formGroup: [
                    {label: '电压表', key: 'voltmeter'},
                    {label: '自动电压调节器', key: 'automaticvoltageregulator'},
                    {label: '机油警告系统', key: 'oilwarningsystem'},
                    {label: '蓄电池', key: 'battery'},
                    {label: '车轮与吊钩', key: 'wheelsAndHooks'},
                    {label: '运行计时表', key: 'runningTimeMeter'},
                ]
            },
        ]
    },

    //汽油发电机组 gasolineGeneratorGroup
    '汽油发电机组': {

    },
    // 柴油发电机组 dieselGeneratorGroup
    '柴油发电机组': {
        type: 'dieselGeneratorGroup',
        forms: [
            {
                groupName: '发电机',
                formName: 'alternator',
                formGroup: [
                    {label: '型号', key: 'mdoel'},
                    {label: '额定电压', key: 'ratedVoltage'},
                    {label: '额定频率', key: 'ratedFrequency'},
                    {label: '额定输出', key: 'ratedOutput'},
                    {label: '最大输出', key: 'elcmaxOutput'},
                    {label: '直流输出', key: 'dcOutput'},
                    {label: '相数', key: 'phaseNumber'},
                    {label: '功率因数', key: 'powerFactor'},
                    {label: '后备功率', key: 'reservePower'},
                    {label: '绝缘等级', key: 'insulationGrade'},
                    {label: '电压变幅', key: 'voltageAmplitude'},
                    {label: '额定电流(A)', key: 'ratedCurrent'},

                ]
            },
            {
                groupName: '发动机',
                formName:'engineForm',
                formGroup: [
                    {label: '型号', key: 'type'},
                    {label: '起动系统', key: 'startSys'},
                    {label: '连续工作时间', key: 'durTime'},
                    {label: '排气量', key: 'dischargeVolume'},
                    {label: '最大输出', key: 'maxOutput'},
                    {label: '燃料', key: 'fuel'},
                    {label: '燃油箱容量', key: 'fuelTankCapacity'},
                    {label: '额定转速', key: 'ratedSpeed'},
                ]
            },
            {
                groupName: '附属装置',
                formName: 'accessory',
                formGroup: [
                    {label: '无碳刷', key: 'brushless'},
                    {label: '电压调节器', key: 'voltageregulator'},
                    {label: '电启动', key: 'electricstart'},
                    {label: '双电压', key: 'doublevoltage'},
                    {label: '交流断路器', key: 'accircuitbreaker'},
                    {label: '直流断路器', key: 'dccircuitbreaker'},
                    {label: '燃油表', key: 'fuelgauge'},
                    {label: '机油报警装置	', key: 'oilalarm'},
                    {label: '水温报警装置	', key: 'watertemperaturealarmdevice'},
                    {label: '油压报警装置		', key: 'oilpressurealarmdevice'},
                    {label: '水温灯	', key: 'watertemperaturelamp'},
                    {label: '电压表	', key: 'voltmeter'},
                    {label: '指示灯	', key: 'indicatorlight'},
                    {label: '节能怠速装置', key: 'energysavingidledevice'},
                    {label: '发动机控制端子', key: 'enginecontrolterminal'},
                    {label: 'DPC', key: 'dpc'},
                    {label: '电压调节方式', key: 'voltageregulationmode'},
                    {label: '无熔丝断路器', key: 'circuitbreakerwithoutfuse'},
                    {label: '充电报警灯', key: 'chargingalarmlamp'},
                    {label: '运行时间表', key: 'operationSchedule'},
                    {label: '紧急停机装备', key: 'emergencyStopEquipment'},
                    {label: '电流表', key: 'ammeter'},
                    {label: '电流选择器', key: 'currentSelector'},

                    
                ]
            },
            {
                groupName: '其他',
                formName: 'other',
                formGroup: [
                    {label: '长*宽*高（mm）', key: 'size'},
                    {label: '净重', key: 'netWeight'},
                    {label: '油箱容积', key: 'tankvolume'},
                    {label: '连续运转时间(Hr)', key: 'continuousOperationTime'},
                    {label: '耗油量（L/KW.H）', key: 'fuelconsumption'},
                    {label: '噪音水平（dBA/7M）', key: 'noiselevel'},
                    {label: '车轮附件', key: 'wheelaccessories'},
                    {label: '电池', key: 'battery'},
                ]
            }
        ]
    },

    // 大功率汽油发电机 highPowerGasolineGenerator
    '大功率汽油发电机': {
        type: 'highPowerGasolineGenerator',
        forms: [
            {
                groupName: '发动机',
                formName:'engineForm',
                formGroup: [
                    {label: '型号(本田)', key: 'engModal'},
                    {label: '发动机类型', key: 'engType'},
                    {label: '汽缸容积', key: 'cylinderVolume'},
                    {label: '冷却系统', key: 'coolingSystem'},
                    {label: '点火系统', key: 'fire'},
                    {label: '油料告警系统', key: 'oilAlarmSystem'},
                    {label: '火花塞', key: 'sparkPlug'},
                    {label: '起动系统', key: 'start'},
                ]
            },
            {
                groupName: '发电机',
                formName: 'alternator',
                formGroup: [
                    {label: '类　　型', key: 'mdoel'},
                    {label: '电压调节系统', key: 'voltageRegulationSystem'},
                    {label: '额定电压', key: 'ratedVoltage'},
                    {label: '额定频率', key: 'ratedFrequency'},
                    {label: '额定电流', key: 'ratedAc'},
                    {label: '额定输出', key: 'ratedOutput'},
                    {label: '最大输出', key: 'elcmaxOutput'},
                    {label: '直流输出', key: 'dcOutput'},
                    {label: '额定功率系数', key: 'ratedPowerFactor'},
                    {label: '相数', key: 'phaseNumber'},
                    {label: '长度', key: 'length'},
                    {label: '宽度', key: 'width'},
                    {label: '额定功高度(不含轮/含轮)', key: 'height'},
                    {label: '净重(不含轮/含轮)', key: 'netWeight'},
                    {label: '油箱容量', key: 'tankCapacity'},
                ]
            },
        ]
    },

    // 焊接用汽油发电机 gasolineGeneratorForWelding
    '焊接用汽油发电机': {
        type: 'gasolineGeneratorForWelding',
        forms: [
            {
                groupName: '焊机',
                formName:'welder',
                formGroup: [
                    {label: '输出功率', key: 'hjOutputPower'},
                    {label: '额定电流', key: 'ratedCurrent'},
                    {label: '额定电压（V）', key: 'eniger'},
                    {label: '电流范围（A）', key: 'xStroke'},
                    {label: '无负荷电压', key: 'noLoadVoltage'},
                    {label: '工作循环（%）', key: 'cyCapacity'},
                    {label: '额定转速', key: 'ratedSpeed'},
                    {label: '电焊条（直径）（毫米）', key: 'weldingRod'},
                ]
            },
            {
                groupName: '发电机',
                formName: 'alternator',
                formGroup: [
                    {label: '型号', key: 'mdoel'},
                    {label: '额定电压', key: 'ratedVoltage'},
                    {label: '额定电流', key: 'elratedCurrent'},
                    {label: '额定频率', key: 'ratedFrequency'},
                    {label: '额定输出', key: 'ratedOutput'},
                    {label: '最大输出', key: 'elcmaxOutput'},
                    {label: '直流输出', key: 'dcOutput'},
                    {label: '相数', key: 'phaseNumber'},
                    {label: '功率因数', key: 'powerFactor'},
                    {label: '后备功率', key: 'reservePower'},
                    {label: '绝缘等级', key: 'insulationGrade'},
                    {label: '电压变幅', key: 'voltageAmplitude'},
                    {label: '额定转速', key: 'elratedSpeed'},
                ]
            },
            {
                groupName: '发动机',
                formName:'engineForm',
                formGroup: [
                    {label: '型式', key: 'engModal'},
                    {label: '缸数', key: 'cylinderNumber'},
                    {label: '型号', key: 'type'},
                    {label: '起动系统', key: 'startSys'},
                    {label: '燃料', key: 'fuel'},
                    {label: '润滑油量', key: 'lubricatingOilQuantity'},
                    {label: '内径X冲程', key: 'engxStroke'},
                    {label: '气缸排量', key: 'cylinderDisplacement'},
                    {label: '压缩比', key: 'CompRatio'},
                    {label: '最大功率', key: 'maxPower'},
                    {label: '推荐使用功率', key: 'recPower'},
                    {label: '最大扭矩', key: 'maxTorque'},
                    {label: '点火系统', key: 'fire'},
                    {label: '起动系统', key: 'start'},
                    {label: '燃油箱容量', key: 'fuelTankCapacity'},
                    {label: '空气滤清器', key: 'airFilter'},
                    {label: '机油容量', key: 'oilCapacity'},
                    {label: '燃油消耗量', key: 'fuelConsumption'},
                ]
            },
            {
                groupName: '其他',
                formName: 'other',
                formGroup: [
                    {label: '长*宽*高（mm）', key: 'size'},
                    {label: '净重', key: 'netWeight'},
                    {label: '油箱容积', key: 'tankvolume'},
                    {label: '耗油量（L/KW.H）', key: 'fuelconsumption'},
                    {label: '噪音水平（dBA/7M）', key: 'noiselevel'},
                    {label: '车轮附件', key: 'wheelaccessories'},
                    {label: '电池', key: 'battery'},
                ]
            }
        ]
    }, 

    // 焊接用汽油发电机组 gasolineGeneratorSetForWelding
    '焊接用汽油发电机组' : {
        type: "gasolineGeneratorSetForWelding",
        forms: [
            {
                groupName: '焊机',
                formName:'welder',
                formGroup: [
                    {label: '输出功率', key: 'name'},
                    {label: '额定电流（A）', key: 'img', type: 'upload'},
                    {label: '额定电压（V）', key: 'eniger'},
                    {label: '电流范围（A）', key: 'xStroke'},
                    {label: '工作循环（%）', key: 'cyCapacity'},
                    {label: '额定转速', key: 'CompRatio'},
                    {label: '电焊条（直径）（毫米）', key: 'weldingRod'},
                ]
            },
            {
                groupName: '发电机',
                formName: 'alternator',
                formGroup: [
                    {label: '型号', key: 'mdoel'},
                    {label: '额定电压', key: 'ratedVoltage'},
                    {label: '额定频率', key: 'ratedFrequency'},
                    {label: '额定输出', key: 'ratedOutput'},
                    {label: '最大输出', key: 'elcmaxOutput'},
                    {label: '直流输出', key: 'dcOutput'},
                    {label: '相数', key: 'phaseNumber'},
                    {label: '功率因数', key: 'powerFactor'},
                    {label: '后备功率', key: 'reservePower'},
                    {label: '绝缘等级', key: 'insulationGrade'},
                    {label: '电压变幅', key: 'voltageAmplitude'},
                    {label: '额定转速', key: 'reatedSpeed'},

                ]
            },
            {
                groupName: '发动机',
                formName:'engineForm',
                formGroup: [
                    {label: '型式', key: 'engModal'},
                    {label: '缸数', key: 'cylinderNumber'},
                    {label: '型号', key: 'type'},
                    {label: '起动系统', key: 'startSys'},
                    {label: '燃料', key: 'fuel'},
                    {label: '润滑油量', key: 'lubricatingOilQuantity'},
                    {label: '内径X冲程', key: 'engxStroke'},
                    {label: '气缸排量', key: 'cylinderDisplacement'},
                    {label: '压缩比', key: 'CompRatio'},
                    {label: '最大功率', key: 'maxPower'},
                    {label: '推荐使用功率', key: 'recPower'},
                    {label: '最大扭矩', key: 'maxTorque'},
                    {label: '点火系统', key: 'fire'},
                    {label: '起动系统', key: 'start'},
                    {label: '燃油箱容量', key: 'fuelTankCapacity'},
                    {label: '空气滤清器', key: 'airFilter'},
                    {label: '机油容量', key: 'oilCapacity'},
                    {label: '燃油消耗量', key: 'fuelConsumption'},
                ]
            },
            {
                groupName: '其他',
                formName: 'other',
                formGroup: [
                    {label: '长*宽*高（mm）', key: 'size'},
                    {label: '净重', key: 'netWeight'},
                    {label: '油箱容积', key: 'tankvolume'},
                    {label: '耗油量（L/KW.H）', key: 'fuelconsumption'},
                    {label: '噪音水平（dBA/7M）', key: 'noiselevel'},
                    {label: '车轮附件', key: 'wheelaccessories'},
                    {label: '电池', key: 'battery'},
                ]
            }
        ]
    },

    // 变频汽油发电机组 variableFrequencyGasolineGeneratorSet
    '变频汽油发电机组': {
        type: 'variableFrequencyGasolineGeneratorSet',
        forms: [
            {
                groupName: '发电机',
                formName: 'alternator',
                formGroup: [
                    {label: '型号', key: 'mdoel'},
                    {label: '额定电压', key: 'ratedVoltage'},
                    {label: '额定频率', key: 'ratedFrequency'},
                    {label: '额定输出', key: 'ratedOutput'},
                    {label: '最大输出', key: 'elcmaxOutput'},
                    {label: '直流输出', key: 'dcOutput'},
                    {label: '相数', key: 'phaseNumber'},
                    {label: '功率因数', key: 'powerFactor'},
                    {label: '后备功率', key: 'reservePower'},
                    {label: '绝缘等级', key: 'insulationGrade'},
                    {label: '电压变幅', key: 'voltageAmplitude'},
                ]
            },
            {
                groupName: '发动机',
                formName:'engineForm',
                formGroup: [
                    {label: '型号', key: 'type'},
                    {label: '起动系统', key: 'startSys'},
                    {label: '连续工作时间', key: 'durTime'},
                    {label: '排气量', key: 'dischargeVolume'},
                    {label: '最大输出', key: 'maxOutput'},
                    {label: '燃料', key: 'fuel'},
                    {label: '燃油箱容量', key: 'fuelTankCapacity'},
                    {label: '额定转速', key: 'fuelTankCapacity'},
                ]
            },
            {
                groupName: '标准配置',
                formName: 'standard',
                formGroup: [
                    {label: '电压表', key: 'voltmeter'},
                    {label: '自动电压调节器', key: 'automaticvoltageregulator'},
                    {label: '机油警告系统', key: 'oilwarningsystem'},
                    {label: '蓄电池', key: 'battery'},
                    {label: '车轮与吊钩', key: 'wheelsAndHooks'},
                    {label: '运行计时表', key: 'runningTimeMeter'},
                  
                ]
            },
            {
                groupName: '控制面板',
                formName: 'accessory',
                formGroup: [
                    {label: '发电指示', key: 'powergenerationindication'},
                    {label: '超载指示', key: 'overloadindication'},
                    {label: '引擎停机', key: 'engineshutdown'},
                    {label: '交流输出', key: 'acoutput'},
                    {label: '交流保护装置', key: 'acprotectiondevice'},
                    {label: '直流输出', key: 'dcoutput'},
                    {label: '直流保护装置', key: 'dcprotectiondevice'},
                ]
            },
            {
                groupName: '其他',
                formName: 'other',
                formGroup: [
                    {label: '长*宽*高（mm）', key: 'size'},
                    {label: '净重', key: 'netWeight'},
                    {label: '油箱容积', key: 'tankvolume'},
                    {label: '耗油量（L/KW.H）', key: 'fuelconsumption'},
                    {label: '噪音水平（dBA/7M）', key: 'noiselevel'},
                    {label: '车轮附件', key: 'wheelaccessories'},
                    {label: '电池', key: 'battery'},
                ]
            }
        ]
    },

    // TVS汽油发电机组 tvsGasolineGeneratorGroup
    'TVS汽油发电机组': {
        type: 'tvsGasolineGeneratorGroup',
        forms: [
            {
                groupName: '发电机',
                formName: 'alternator',
                formGroup: [
                    {label: '型号', key: 'mdoel'},
                    {label: '额定电压', key: 'ratedVoltage'},
                    {label: '额定电流', key: 'elratedCurrent'},
                    {label: '额定频率', key: 'ratedFrequency'},
                    {label: '额定输出', key: 'ratedOutput'},
                    {label: '最大输出', key: 'elcmaxOutput'},
                    {label: '直流输出', key: 'dcOutput'},
                    {label: '相数', key: 'phaseNumber'},
                    {label: '功率因数', key: 'powerFactor'},
                    {label: '后备功率', key: 'reservePower'},
                    {label: '绝缘等级', key: 'insulationGrade'},
                    {label: '电压变幅', key: 'voltageAmplitude'},
                ]
            },
            {
                groupName: '发动机',
                formName:'engineForm',
                formGroup: [
                    {label: '型号', key: 'type'},
                    {label: '起动系统', key: 'startSys'},
                    {label: '连续工作时间', key: 'durTime'},
                    {label: '排气量', key: 'dischargeVolume'},
                    {label: '最大输出', key: 'maxOutput'},
                    {label: '燃料', key: 'fuel'},
                    {label: '点火系统', key: 'fire'},
                    {label: '燃油箱容量', key: 'fuelTankCapacity'},
                    {label: '额定转速', key: 'engeatedSpeed'},
                ]
            },
            {
                groupName: '附属装置',
                formName: 'accessory',
                formGroup: [
                    {label: '无碳刷', key: 'brushless'},
                    {label: '电压调节器', key: 'voltageregulator'},
                    {label: '电启动', key: 'electricstart'},
                    {label: '双电压', key: 'doublevoltage'},
                    {label: '交流断路器', key: 'accircuitbreaker'},
                    {label: '直流断路器', key: 'dccircuitbreaker'},
                    {label: '燃油表', key: 'fuelgauge'},
                    {label: '机油报警装置	', key: 'oilalarm'},
                    {label: '水温报警装置	', key: 'watertemperaturealarmdevice'},
                    {label: '油压报警装置		', key: 'oilpressurealarmdevice'},
                    {label: '水温灯	', key: 'watertemperaturelamp'},
                    {label: '电压表	', key: 'voltmeter'},
                    {label: '节能怠速装置', key: 'energysavingidledevice'},
                    {label: '发动机控制端子', key: 'enginecontrolterminal'},
                    {label: 'DPC', key: 'dpc'},
                    {label: '电压调节方式', key: 'voltageregulationmode'},
                    {label: '无熔丝断路器', key: 'circuitbreakerwithoutfuse'},
                    {label: '充电报警灯', key: 'chargingalarmlamp'},
                    {label: '启动卸压装置', key: 'startThePressureReliefDevice'},
                    {label: '直流过载保护', key: 'dcOverloadProtection'},
                    {label: '电流表', key: 'ammeter'},
                    {label: '运行时间表', key: 'operationSchedule'},
                ]
            },
            {
                groupName: '其他',
                formName: 'other',
                formGroup: [
                    {label: '长*宽*高（mm）', key: 'size'},
                    {label: '指示灯	', key: 'indicatorlight'},
                    {label: '净重', key: 'netWeight'},
                    {label: '连续运转时间(Hr)', key: 'continuousOperationTime'},
                    {label: '油箱容积', key: 'tankvolume'},
                    {label: '耗油量（L/KW.H）', key: 'fuelconsumption'},
                    {label: '噪音水平（dBA/7M）', key: 'noiselevel'},
                    {label: '车轮附件', key: 'wheelaccessories'},
                    {label: '电池', key: 'battery'},
                ]
            }
        ]
    }
}