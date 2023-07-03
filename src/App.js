import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import { Subject } from "rxjs";
import { debounceTime } from "rxjs/operators";
import "./App.scss";
import { diva } from "./global";
import Footer from "./components/footer";

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
                <div>
                  <div>
                    <Footer />
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
