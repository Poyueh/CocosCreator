
import ApplicationFacade from "./facade/ApplicationFacade"
const {ccclass, property} = cc._decorator;
 
@ccclass
export class GameRoot extends cc.Component {
 
 
    start () {
        new ApplicationFacade(this.node); 
    }
}