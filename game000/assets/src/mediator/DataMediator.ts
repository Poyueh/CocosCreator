import { instance } from "../../joystick/scripts/Joystick";
import MyData from "../data/MyData"
export default class DataMediator extends puremvc.Mediator {
    public mediatorName = "DataMediator";
    private text: cc.Label;
    private btn : cc.Button;
 
    constructor(root: cc.Node) {
        super();
        this.text = root.getChildByName("label").getComponent(cc.Label);
        this.btn  = root.getChildByName("addNum").getComponent(cc.Button);
 
        this.btn.node.on('click', this.clickCallBack, this);
        instance.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        instance.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        instance.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
      }
    
      onTouchStart() {}
    
      onTouchMove(event: cc.Event.EventTouch, data) {
        this.text.string = data.speedType+','+data.moveDistance;
      }
      onTouchEnd(event: cc.Event.EventTouch, data) {
        this.text.string = '0';
      }
 
    clickCallBack() {
        this.sendNotification("Reg_StartDataCommand");
    }
 
    public listNotificationInterests() {
        let list: Array<string> = [];
        list.push("Msg_AddLevel");
        return list;
    }
 
    public handleNotification(notification: puremvc.INotification) {
        switch(notification.getName()) {
            case "Msg_AddLevel": 
                let data: MyData = notification.getBody();
                this.text.string = "" + data.Level;
            break;
        }
    }
}