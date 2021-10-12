import React from "react";
import Container from "react-bootstrap/esm/Container";
import { useParams } from "react-router-dom";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import TopVisual from "../components/TopVisual";
import Caution from "../components/Caution";
import Input from "../components/Input";

function Home() {
  const { serial } = useParams();
  return (
    <Container fluid>
      <TopVisual />
      <Row className="bg-info">
        <Col />
        <Col xs={10} className="bg-dark pt-2 pb-2">
          {serial}
          <div className="h4 text-light">【応募締め切り】</div>
          <div className="h3 text-light text-center">
            2021年12月31日 16:59まで
          </div>
        </Col>
        <Col />
      </Row>
      <Row className="bg-info">
        <Col />
        <Col xs={10}>
          <div className="text-center pt-2 pb-2">
            対象商品を購入し、キャンペーンシール内のQRコードを読み取り、応募フォームにアクセス。
            <br />
            シリアルコードを入力するだけ！その場で当たる！
          </div>
        </Col>
        <Col />
      </Row>
      <Caution />
      <Input serial={serial} />
    </Container>
  );
}
// class Home extends React.Component {
//   render() {
//     return (
//       <Container fluid>
//         <TopVisual />
//         <Row className="bg-info">
//           <Col />
//           <Col xs={10} className="bg-dark pt-2 pb-2">
//             <div className="h4 text-light">【応募締め切り】</div>
//             <div className="h3 text-light text-center">
//               2021年12月31日 16:59まで
//             </div>
//           </Col>
//           <Col />
//         </Row>
//         <Row className="bg-info">
//           <Col />
//           <Col xs={10}>
//             <div className="text-center pt-2 pb-2">
//               対象商品を購入し、キャンペーンシール内のQRコードを読み取り、応募フォームにアクセス。
//               <br />
//               シリアルコードを入力するだけ！その場で当たる！
//             </div>
//           </Col>
//           <Col />
//         </Row>
//         <Caution />
//         <Input />
//       </Container>
//     );
//   }
// }

export default Home;
