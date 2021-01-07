import React, { Component } from 'react';
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                <Switch>
                    {/* exact path 로 설정하지 않으면 뒤에 /join과 같은 것들도 /에 해당하므로 /join으로 매치하기 이전에 /에서 매칭되고 끝남 */}
                    {/* exact로 설정해 둠으로써 /에 매칭할 때만 route되고 /join은 또 따로 매칭되면 적용됨 */}
                    <Route exact path="/">
                        <p>This is the home page</p>
                    </Route>
                    <Route path='/join' component={RoomJoinPage} />
                    <Route path='/create' component={CreateRoomPage} />
                    <Route path='/room/:roomCode' component={Room} />
                </Switch>
            </Router>
        );
    }
}