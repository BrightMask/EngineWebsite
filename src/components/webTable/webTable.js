import React, { Component } from 'react'
import { Table } from 'antd'

export default class WebTable extends React.PureComponent {
    constructor(props) {
        super(props) 
        this.currentPage = 1
        this.pageSize = this.props.pageSize ? this.props.pageSize : 10

    }

    /**
     * 显示总数
     */
    showTotal(data) {
        return <span>共 0 条记录 </span>
    }

    render () {
        let { columns } = this.props
        // table数据
        let dataSource = this.props.dataSource  ? this.props.dataSource : {}
            dataSource.content = dataSource.content ? dataSource.content: []
        console.log(dataSource) 
        // 分页
        const pagenation = {
            current: this.currentPage,
            defaultCurrent: 1,
            defaultPageSize: 10,
            pageSize: this.pageSize,
            pageSizeOptions: ['10', '20', '30'],
            showQuickJumper: true, // 快速跳转
            showSizeChanger: true, // 可改变pageSize
            hideOmSinglePage: true, // 只有一页时隐藏分页器
            showTotal: () => this.showTotal(dataSource)
        }

        let tableProps = {
            dataSource: dataSource
        }
        console.log(tableProps)
        return (
            <div>
                <Table 
                    ref={(ref) => {this._table = ref}}
                    pagination={pagenation}
                    columns={columns}
                    {...tableProps}
                />
            </div>
        )
    }
    

}