import {
  init,
  classModule,
  propsModule,
  styleModule,
  eventListenersModule,
  h,
  toVNode,
} from "snabbdom";

// 2. 注册模块
const patch = init([styleModule, eventListenersModule]);

// 3. 使用 h() 函数创建虚拟节点（VNode）
let vnode = h("div", [
  h("h1", { style: { backgroundColor: "red" } }, "Hello world"),
  h("p", { on: { click: eventHandler } }, "Hello P"),
]);

function eventHandler() {
  alert("eventHandler");
}

const app = document.querySelector("#app");

// 4. 使用 patch 函数将虚拟节点渲染到容器中
patch(app, vnode);
