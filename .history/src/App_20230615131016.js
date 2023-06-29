import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";

import "./App.scss";
import { diva } from "./global";
import Header from "./components/Header";
import Nan from "./components/Nan";
import Customize from "./pages/Customize";
import CodeView from "./components/CodeView";
import VisualLeft from "./components/visual/visualLeft";
import VisualTop from "./components/visual/visualTop";
import VisualRight from "./components/visual/visualRight";
import VisualMiddle from "./components/visual/visualMiddle";
import LeftSide from "./pages/leftSide";
import Footer from "./components/footer";
import TopSide from "./pages/TopSide";
import RightSide from "./pages/rightSide/rightSide";
import RailWay from "./pages/RailwayStation";
import Cloud from "./pages/cloud";

// 通过懒加载导入各个模块
const Scene = lazy(() => import("./pages/Scene"));
const Video = lazy(() => import("./pages/Video"));
const Global = lazy(() => import("./pages/Global"));
const Weather = lazy(() => import("./pages/Weather"));
const Date = lazy(() => import("./pages/Date"));
const Floor = lazy(() => import("./pages/Floor"));
const Overlay = lazy(() => import("./pages/Overlay"));
const State = lazy(() => import("./pages/State"));
const Monitor = lazy(() => import("./pages/Monitor"));
const Lamp = lazy(() => import("./pages/Lamp"));
const AirConditioner = lazy(() => import("./pages/AirConditioner"));

// 创建并暴露App组件
export default class App extends Component {
  state = {
    isRouter: false,
    exampleCode: false,
  };
  changeResolution = new Subject();

  updateResolution = () => {
    if (!diva.isEmbeddedMode()) {
      const width = this.backendContainer.current.clientWidth;
      const height = this.backendContainer.current.clientHeight;
      diva.client.setResolution({ width, height });
      console.log(width, height);
    }
  };

  async componentDidMount() {
    if (this.backendContainer.current) {
      //初始话 webRtc 链接
      await diva.init(this.backendContainer.current);
      if (!diva.client) {
        new Error("diva client is not initialized");
        return;
      }
      this.setState({ isRouter: true });
      //  设置服务后端分辨率
      this.updateResolution();
      // 监听显示区域的改变
      const resizeObserver = new ResizeObserver(() => {
        this.changeResolution.next(true);
      });
      resizeObserver.observe(this.backendContainer.current);
      this.changeResolution
        .pipe(debounceTime(200))
        .subscribe(this.updateResolution);
    }
  }

  componentWillUnmount() {
    this.changeResolution.unsubscribe();
  }

  render() {
    //获取DOM元素
    this.backendContainer = React.createRef();
    const router = !this.state.isRouter ? null : (
      <div>
        {/* <Redirect to="/scene"></Redirect> */}
        <Route path="/scene" component={Scene} />
        <Route path="/video" component={Video} />
        <Route path="/global" component={Global} />
        <Route path="/weather" component={Weather} />
        <Route path="/floor" component={Floor} />
        <Route path="/date" component={Date} />
        <Route path="/Overlay" component={Overlay} />
        <Route path="/state" component={State} />
        <Route path="/Monitor" component={Monitor} />
        <Route path="/lamp" component={Lamp} />
        <Route path="/airConditioner" component={AirConditioner} />
        <Route path="/customize" component={Customize} />
      </div>
    );
    const codeArea = !this.state.exampleCode ? null : (
      <div className="codeView">
        <CodeView />
      </div>
    );
    return (
      <div className="win">
        <div
          id="backendContainer"
          ref={this.backendContainer}
          className="backend-container"
        >
          <main>
            <BrowserRouter>
              <Suspense>
                <div
                  style={
                    {
                      // margin: "10px 10px"
                    }
                  }
                >
                  <div>{/* <Footer /> */}</div>
                  <div className="router">
                    {/* <Nan /> */}
                    {/* {router} */}
                  </div>
                </div>
              </Suspense>
            </BrowserRouter>
          </main>
        </div>
      </div>
    );
  }
}
