import React from 'react'

// 结尾组件
export default class myAnimate extends React.Component {
    constructor(props) {
        super(props)   
    }
    render() {
        return (
            <div className="ani-box">
                <img src="../images/yeoman.png" width="100" className="animated fadeInUp lastPic" />
                <span className="animated flipInX ege">我的头像</span>
            </div>
        )
    }       
}