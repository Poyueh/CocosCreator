import { JoystickType, GlobalListener } from "./Joystick";

const { ccclass } = cc._decorator;

@ccclass
export default class UI extends cc.Component {
  /**
   * 使用固定摇杆
   */
  useFixedType() {
    GlobalListener.emit("set_joystick_type", JoystickType.FIXED);
  }

  /**
   * 使用跟随摇杆
   */
  useFollowType() {
    GlobalListener.emit("set_joystick_type", JoystickType.FOLLOW);
  }
}
