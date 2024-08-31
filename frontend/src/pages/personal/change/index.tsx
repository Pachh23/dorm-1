import { Space, Button, Col, Row, Divider, Form, Input, Card, message, DatePicker, InputNumber, Select } from "antd";
import { EditOutlined } from "@ant-design/icons";
//import { StudentInterface } from "../../../interfaces/IUser";
import { PersonalAllInterface } from "../../../interfaces/PersonalAll";
import { ChangePersonal } from "../../../services/https";
import { useNavigate, Link } from "react-router-dom";

function PersonalChange() {
	const navigate = useNavigate();
	const [messageApi, contextHolder] = message.useMessage();
	const onFinish = async (values: PersonalAllInterface) => {
		try {
			const res = await ChangePersonal(values);
			if (res.status === 201) {
					messageApi.open({
						type: "success",
						content: res.data.message,
					});
					setTimeout(() => navigate("/personal"), 2000);
			} else {
					messageApi.open({
						type: "error",
						content: res.data.error,
					});
			}
		} catch (error) {
				messageApi.open({
					type: "error",
					content: "An unexpected error occurred.",
				});
		}
	};
	return (
	<div>
		{contextHolder}
			<h2 style={{color: '#1f1f1f'}}>เปลี่ยนแปลงข้อมูลส่วนตัว</h2>
			<Card>
				<Form 
					labelCol={{ span: 10 }}
					name="basic"
					layout="horizontal"
					onFinish={onFinish}
					autoComplete="off"
					style={{ maxWidth: 1000 }}
				>
					<h4 style={{ marginTop: -10, marginBottom: -10,color: '#061178' }}>1. ข้อมูลส่วนตัวนักศึกษา</h4>
					<Divider/>
						<Row gutter={[16, 0]}>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="ชื่อเล่น"
									/*{['address', 'house_no']}*/
									name={['personalInfo', 'nickname']}
									rules={[{ required: true, message: "กรุณากรอกชื่อเล่น" }]}
								> 
								<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="รหัสบัตรประชาชน"
									name={['personalInfo', 'citizen_id']}
									rules={[{ required: true, message: "กรุณากรอกรหัสบัตรประชาชน" },
													{pattern: /^[0-9]{13}$/, message: "กรุณากรอกรหัสบัตรประชาชนที่ถูกต้อง (13 หลัก)" }]}
									>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="หมายเลขโทรศัพท์มือถือ"
									name={['personalInfo', 'phone']}
									rules={[{ required: true, message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ" },
												{pattern: /^[0-9]{10}$/, message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ (10 หลัก)" }]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="สัญชาติ"
									name={['personalInfo', 'nationality']}
									rules={[{ required: true, message: "กรุณากรอกสัญชาติ" }]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="เชื้อชาติ"
									name={['personalInfo', 'race']}
									rules={[{ required: true, message: "กรุณากรอกเชื้อชาติ" }]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="ศาสนา"
									name={['personalInfo', 'religion']}
									rules={[{ required: true, message: "กรุณากรอกศาสนา" }]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="กลุ่มเลือด"
									name={['personalInfo', 'blood_group']}
									rules={[{ required: true, message: "กรุณากรอกกลุ่มเลือด" }]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
										label="โรคประจำตัว(ถ้ามี)"
										name={['personalInfo', 'UD']}
								>
									<Input />
								</Form.Item>
							</Col>
					<Divider />
					<h4 style={{ marginTop: -10, marginBottom: -10,color: '#061178' }}>2. ที่อยู่ปัจจุบัน(ตามทะเบียนบ้าน)</h4>
					<Divider />
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="บ้านเลขที่"
									name={['address', 'house_no']}
									rules={[{ required: true, message: "กรุณากรอกบ้านเลขที่" }]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="หมู่ที่"
									name={['address', 'village_no']}
									rules={[{ required: true, message: "กรุณากรอกบ้านหมู่ที่" }]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="ชื่อหมู่บ้าน"
									name={['address', 'village']}
									rules={[{ required: true, message: "กรุณากรอกชื่อหมู่บ้าน" }]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="ซอย"
									name={['address', 'alley']}
									rules={[{ required: true, message: "กรุณากรอกซอย" }]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="ถนน"
									name={['address', 'road']}
									rules={[{ required: true, message: "กรุณากรอกถนน !" }]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="ตำบล/แขวง"
									name={['address', 'sub_district']}
									rules={[{ required: true, message: "กรุณากรอกตำบล/แขวง" }]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="อำเภอ/เขต"
									name={['address', 'district']}
									rules={[{ required: true, message: "กรุณากรอกอำเภอ/เขต" }]}
									>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="จังหวัด"
									name={['address', 'province']}
									rules={[{ required: true, 
														message: "กรุณากรอกชื่อจังหวัดที่ถูกต้อง",}]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="รหัสไปรษณีย์"
									name={['address', 'post_code']}
									rules={[{ required: true, message: "กรุณากรอกรหัสไปรษณีย์" },
										{pattern: /^[0-9]{5}$/, message: "กรุณากรอกรหัสไปรษณีย์ (5 หลัก)" }]}
									>
									<Input />
								</Form.Item>
							</Col>
					<Divider />
					<h4 style={{ marginTop: -10, marginBottom: -10,color: '#061178' }}>3. เกี่ยวกับครอบครัว</h4>
					<Divider />
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="ชื่อ - สกุลบิดา"
									name={['family', 'fathers_name']}
									rules={[{ required: true, message: "กรุณากรอกชื่อ-สกุลบิดา" }]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="ชื่อ - สกุลมารดา"
									name={['family', 'mathers_name']}
									rules={[{ required: true, message: "กรุณากรอกชื่อ-สกุลมารดา" }]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="อาชีพบิดา"
									name={['family', 'occupation_father']}
									rules={[{ required: true, message: "กรุณากรอกอาชีพบิดา" }]}
								>
									<Input />
								</Form.Item>
							</Col>
								<Col xs={24} sm={24} md={24} lg={24} xl={12}>
									<Form.Item
										label="อาชีพมารดา"
										name={['family', 'occupation_mather']}
										rules={[{ required: true, message: "กรุณากรอกอาชีพมารดา" }]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24} lg={24} xl={12}>
									<Form.Item
										label="หมายเลขโทรศัพท์มือถือบิดา"
										name={['family', 'phone_father']}
										rules={[{ required: true, message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ" },
														{ pattern: /^[0-9]{10}$/, message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ (10 หลัก)" }]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24} lg={24} xl={12}>
									<Form.Item
										label="หมายเลขโทรศัพท์มือถือมารดา"
										name={['family', 'phone_mather']}
										rules={[{ required: true, message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ" },
														{ pattern: /^[0-9]{10}$/, message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ (10 หลัก)" }]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24} lg={24} xl={12}>
									<Form.Item
										label="สถานภาพครอบครัว"
										name={['family', 'family_status_id']}
										rules={[
												{
												required: true,
												message: "กรุณาเลือกสถานภาพครอบครัว",
												},]}
									>
									<Select
										defaultValue=""
										style={{ width: "100%" }}
										options={[
										{ value: "", lable: "กรุณาเลือกสถานภาพครอบครัว", disabled: true },
										{ value: 1, label: "อยู่ด้วยกัน" },
										{ value: 2, label: "แยกกันอยู่" },
										{ value: 3, label: "อื่นๆ (พ่อหรือแม่เสียชีวิต)" },
										]}
									/>
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24} lg={24} xl={12}>
									<Form.Item
										label="ผู้ปกครอง"
										name={['family', 'guardian_id']}
										rules={[{ required: true, message: "กรุณาเลือกผู้ปกครอง",}]}
									>
									<Select
										defaultValue=""
										style={{ width: "100%" }}
										options={[
										{ value: "", label: "กรุณาเลือกผู้ปกครอง", disabled: true },
										{ value: 1, label: "มารดา" },
										{ value: 2, label: "บิดา" },
										{ value: 3, label: "อื่นๆ (ระบุ)" },
										]}
									/>
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24} lg={24} xl={12}>
									<Form.Item
										label="หรือผู้ปกครอง ชื่อ/สกุล"
										name={['family', 'or_guardians_name']}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24} lg={24} xl={12}>
									<Form.Item
										label="เกี่ยวข้องเป็น"
										name={['family', 'relationship']}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24} lg={24} xl={12}>
									<Form.Item
										label="อาชีพ"
										name={['family', 'OccupationGuardian']}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={24} lg={24} xl={12}>
									<Form.Item
										label="หมายเลขโทรศัพท์มือถือ"
										name={['family', 'phone_guardian']}
										rules={[{ message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ" },
														{ pattern: /^[0-9]{10}$/, message: "กรุณากรอกหมายเลขโทรศัพท์มือถือ (10 หลัก)" }]}
									>
										<Input />
									</Form.Item>
								</Col>
					<Divider />
					<h4 style={{ marginTop: -10, marginBottom: -10,color: '#061178' }}>4. ข้อมูลอื่นๆ</h4>
					<Divider />
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="สำเร็จการศึกษาขั้นสุดท้ายจาก"
									name={['otherInfo', 'latest_graduation_from']}
									rules={[{ required: true, message: "กรุณากรอกชื่อโรงเรียน" }]}
								>
									<Input placeholder="กรอกชื่อโรงเรียน" />
								</Form.Item>
							</Col>
							<Col></Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="เมื่อปี พ.ศ."
									name={['otherInfo', 'graduated_year']}
									rules={[{ required: true, message: "กรุณากรอก พ.ศ.",}]}
								>
								<InputNumber
									min={2500}
									max={2600}
									style={{ width: "100%" }}
								/>
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="GPAX"
									name={['otherInfo', 'gpax']}
									rules={[{ required: true, message: "กรุณากรอก gpax",}]}
								>
								<InputNumber
									min={0.00}
									max={4.00}
									step={0.01} // เพิ่มทีละ 0.1
									style={{ width: "100%" }}
								/>
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="พาหนะส่วนตัวที่ใช้"
									name={['otherInfo', 'personal_vehicles']}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="สี"
									name={['otherInfo', 'color']}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="หมายเลขทะเบียน"
									name={['otherInfo', 'plate_no']}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="วันครบกำหนดเสียภาษี"
									name={['otherInfo', 'tax_date']}
								>
									<DatePicker style={{ width: "100%" }} />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="จังหวัด"
									name={['otherInfo', 'province']}
									rules={[{
											pattern: /^[ก-ฮA-Za-z\s]{1,50}$/, 
											message: "กรุณากรอกชื่อจังหวัดที่ถูกต้อง",
									},]}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="ใบขับขี่"
									name={['otherInfo', 'driver_license']}
									rules={[
											{
											message: "กรุณาเลือกใบขับขี่",
											},
									]}
								>
								<Select
										defaultValue=""
										style={{ width: "100%" }}
										options={[
										{ value: "", label: "กรุณาเลือกใบขับขี่", disabled: true },
										{ value: 1, label: "มี" },
										{ value: 2, label: "ไม่มี" },
										]}
								/>
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="ประเภท (ถ้ามี)"
									name={['otherInfo', 'type']}
								>
									<Input />
								</Form.Item>
							</Col>
							<Col xs={24} sm={24} md={24} lg={24} xl={12}>
								<Form.Item
									label="วันบัตรหมดอายุ"
									name={['otherInfo', 'expired_card']}
								>
									<DatePicker style={{ width: "100%" }} />
								</Form.Item>
							</Col>
						</Row>
							<Row justify="end">
								<Col style={{ marginTop: "40px" }}>
									<Form.Item>
										<Space>
											<Button
												type="primary"
												htmlType="submit"
												icon={<EditOutlined />}
												style={{ backgroundColor: '#007bff', borderColor: '#007bff' }}
												>
												อัปเดตข้อมูล
											</Button>
												<Link to="/personal">
													<Button htmlType="button" style={{ marginRight: "0px" }}>
														ปิด
													</Button>
												</Link>
										</Space>
									</Form.Item>
								</Col>
							</Row>
						</Form>
				</Card>
  	</div>
  );
}

export default PersonalChange;
