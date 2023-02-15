import React from 'react'
import {Link} from 'react-router-dom'

function Sidebar() {
  return (
    <>
        <div class="ui top attached demo menu" bis_skin_checked="1">
            <a class="item">
                <i class="sidebar icon"></i>
                Menu
            </a>
            </div>
            <div class="ui bottom attached segment pushable" bis_skin_checked="1">
            <div class="ui inverted labeled icon left inline vertical sidebar menu" bis_skin_checked="1">
                <a class="item">
                <i class="home icon"></i>
                Home
                </a>
                <a class="item">
                <i class="block layout icon"></i>
                Topics
                </a>
                <a class="item">
                <i class="smile icon"></i>
                Friends
                </a>
                <a class="item">
                <i class="calendar icon"></i>
                History
                </a>
            </div>
            <div class="pusher" bis_skin_checked="1">
                <div class="ui basic segment" bis_skin_checked="1">
                <h3 class="ui header">Application Content</h3>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Sidebar