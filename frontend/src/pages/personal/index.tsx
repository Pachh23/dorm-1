import { EditOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { Button, Col, Divider, Row, Space, Card } from "antd";

function Personal() {
  // ข้อมูลสำหรับตาราง
  
  return (
    <div >
      <Row>
        <Col span={12}>
          <h2 style={{color: '#1f1f1f'}}>ข้อมูลส่วนตัว</h2>
        </Col>
        <Col span={12} style={{ textAlign: "end", alignSelf: "center" }}>
          <Space>
            <Link to="/personal/change">
              <Button 
                type="primary" 
                icon={<EditOutlined />} 
                style={{ backgroundColor: '#007bff', borderColor: '#007bff' }} // เปลี่ยนสีปุ่ม
              >
                เปลี่ยนแปลงข้อมูล
              </Button>
            </Link>
          </Space>
        </Col>
      </Row>
      <Divider />
      <div className="card"style={{ marginTop: 10, padding: 0 }}>
        <Card style={{color: '#001d66'}} type="inner"  title={<span style={{ color: '#061178' }}>1. ข้อมูลส่วนตัวนักศึกษา</span>} >
          <table className="info-table ">
            <tbody>
              <tr>
              <td style={{ backgroundColor: '#f0f0f0' }}>ชื่อเล่น</td>
                <td>WOO</td>
                <td style={{ backgroundColor: '#f0f0f0' }}>วัน/เดือน/ปีเกิด</td>
                <td></td>
              </tr>
              <tr>
                <td>รหัสประประชาชน</td>
                <td></td>
                <td>หมายเลขโทรศัพท์มือถือ</td>
                <td></td>
              </tr>
              <tr>
                <td style={{ backgroundColor: '#f0f0f0' }}>สัญชาติ</td>
                <td></td>
                <td style={{ backgroundColor: '#f0f0f0' }}>เชื้อชาติ</td>
                <td></td>
              </tr>
              <tr>
                <td>ศาสนา</td>
                <td></td>
                <td>กรุ๊ปเลือด</td>
                <td></td>
              </tr>
              <tr>
                <td style={{ backgroundColor: '#f0f0f0' }}>โรคประจำตัว (ถ้ามี)</td>
                <td colSpan={3}></td>
              </tr>
            </tbody>
          </table>
        </Card>
        <Card style={{ marginTop: 10 }} type="inner" title={<span style={{ color: '#061178' }}>2. ที่อยู่ปัจจุบัน(ตามทะเบียนบ้าน)</span>} >
          <table className="info-table ">
              <tbody>
                <tr>
                <td style={{ backgroundColor: '#f0f0f0' }}>บ้านเลขที่</td>
                  <td></td>
                  <td style={{ backgroundColor: '#f0f0f0' }}>หมู่ที่</td>
                  <td></td>
                </tr>
                <tr>
                  <td>ชื่อหมู่บ้าน</td>
                  <td></td>
                  <td>ซอย</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f0f0f0' }}>ถนน</td>
                  <td></td>
                  <td style={{ backgroundColor: '#f0f0f0' }}>ตำบล/แขวง</td>
                  <td></td>
                </tr>
                <tr>
                  <td>อำเภอ/เขต</td>
                  <td></td>
                  <td>จังหวัด</td>
                  <td></td>
                </tr>
                <tr>
                  <td style={{ backgroundColor: '#f0f0f0' }}>รหัสไปรษณีย์</td>
                  <td colSpan={3}></td>
                </tr>
              </tbody>
            </table>
        </Card>
        <Card style={{ marginTop: 10 }} type="inner" title={<span style={{ color: '#061178' }}>3. เกี่ยวกับครอบครัว</span>} >
          <table className="info-table ">
            <tbody>
              <tr>
              <td style={{ backgroundColor: '#f0f0f0' }}>ชื่อ - สกุลบิดา</td>
                <td></td>
                <td style={{ backgroundColor: '#f0f0f0' }}>ชื่อ - สกุลมารดา</td>
                <td></td>
              </tr>
              <tr>
                <td>อาชีพบิดา</td>
                <td></td>
                <td>อาชีพมารดา</td>
                <td></td>
              </tr>
              <tr>
                <td style={{ backgroundColor: '#f0f0f0' }}>หมายเลขโทรศัพท์มือถือบิดา</td>
                <td></td>
                <td style={{ backgroundColor: '#f0f0f0' }}>หมายเลขโทรศัพท์มือถือมารดา</td>
                <td></td>
              </tr>
              <tr>
                <td>สถานภาพครอบครัว</td>
                <td></td>
                <td>ผู้ปกครอง</td>
                <td></td>
              </tr>
              <tr>
                <td style={{ backgroundColor: '#f0f0f0' }}>หรือผู้ปกครอง ชื่อ/สกุล</td>
                <td></td>
                <td style={{ backgroundColor: '#f0f0f0' }}>เกี่ยวข้องเป็น</td>
                <td></td>
              </tr>
              <tr>
                <td>อาชีพ</td>
                <td></td>
                <td>หมายเลขโทรศัพท์มือถือ</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Card>
        <Card style={{ marginTop: 10 }} type="inner" title={<span style={{ color: '#061178' }}>4. ข้อมูลอื่นๆ</span>} >
          <table className="info-table ">
            <tbody>
              <tr>
                <td style={{ backgroundColor: '#f0f0f0' }}>สำเร็จการศึกษาขั้นสุดท้ายจาก</td>
                <td colSpan={3}></td>
              </tr>
              <tr>
                <td >เมื่อปี พ.ศ.</td>
                <td></td>
                <td>GPAX</td>
                <td></td>
              </tr>
              <tr>
                <td style={{ backgroundColor: '#f0f0f0' }}>พาหนะส่วนตัวที่ใช้</td>
                <td></td>
                <td style={{ backgroundColor: '#f0f0f0' }}>สี</td>
                <td></td>
              </tr>
              <tr>
                <td>หมายเลขทะเบียน</td>
                <td></td>
                <td>วันครบกำหนดเสียภาษี</td>
                <td></td>
              </tr>
              <tr>
                <td style={{ backgroundColor: '#f0f0f0' }}>จังหวัด</td>
                <td></td>
                <td style={{ backgroundColor: '#f0f0f0' }}>ใบขับขี่</td>
                <td></td>
              </tr>
              <tr>
                <td>ประเภท (ถ้ามี)</td>
                <td></td>
                <td>วันบัตรหมดอายุ</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}

export default Personal;
