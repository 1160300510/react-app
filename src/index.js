import React from "react";
import ReactDOM from "react-dom";
import "xp.css/dist/98.css";
import "xp.css/dist/XP.css";
import "./table.css";

const App = () => {
  //const [count, setCount] = React.useState(0);
  return (
    <div style={{ 
      width: 600,
      height: 400,
      }} className="window">
      <div className="title-bar">
        <div className="title-bar-text">窗口药品消耗明细清单</div>
        <div className="title-bar-controls">
          <button aria-label="Close" />
        </div>
      </div>

      <div className="window-body">
        <p contentEditable="true"
          style={{ 
          textAlign: "center", 
          fontFamily: "KaiTi",
          marginTop:"1px",
          fontSize: "30px",
          }}>城中社区卫生服务中心药品消耗清单</p>
        <p contentEditable="true"
          style={{
          textAlign: "left",
          fontFamily: "KaiTi",
          fontSize: "14px"}}>药品名: 参松养心胶囊*C</p>
        <div className="left">
          <table>
          <tr>
            <th contentEditable="true">处方号码</th>
            <th contentEditable="true">发药日期</th>
            <th contentEditable="true">病人姓名</th>
            <th contentEditable="true">数 量</th>
            <th contentEditable="true">单位</th>
            <th contentEditable="true">金 额</th>
            <th contentEditable="true">发药</th>
          </tr>
          <tr>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
          </tr>
          <tr>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
          </tr> 
          <tr>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
          </tr> 
          <tr>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
          </tr> 
          <tr>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
          </tr> 
          <tr>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
          </tr> 
          <tr>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
          </tr> 
          <tr>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
          </tr> 
          <tr>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
          </tr> 
            <tr>
            <td colSpan="3">合计</td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
            <td contentEditable="true"></td>
          </tr> 
          </table>
        </div>
        <div className="right"
          style={{ 
            justifyContent: 'right',
            flexDirection: 'column',
            flex: 1,
            textAlign: 'center',
          }}>
          <button type="button">明细(D)</button>
          <button type="button">打印(P)</button>
          <button type="button">退出(X)</button>
        </div>
      </div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <div style={{ width: 350 }}>
        <App />
      </div>
    </div>
  </React.StrictMode>,
  rootElement
);