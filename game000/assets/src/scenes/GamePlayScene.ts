
import ApplicationFacade from "../facade/ApplicationFacade"
const {ccclass, property} = cc._decorator;
 
@ccclass
export class GamePlay extends cc.Component {

    @property({
        type: cc.Node,
        displayName: "player",
        tooltip: "玩家角色",
    })
    
    public player: cc.Node = null;

    start () {
        new ApplicationFacade(this.node); 
    }
}