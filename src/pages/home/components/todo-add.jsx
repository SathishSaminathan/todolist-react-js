import React from 'react';
import { Row, Col, Input, Select, Button } from 'antd';
import DateTimePicker from 'react-datetime-picker';
import moment from 'moment';

const dateFormat = 'dd/mm/yyyy hh:mm:ss';

const { TextArea } = Input;
const { Option } = Select;

const TodoAdd = () => {
	return (
		<Col xl={12} className="input_area">
			<Col>
				<Row className="input_container">
					<Col className="label" xl={24}>
						Title
					</Col>
					<Col className="input_style">
						<Input placeholder="enter todo" />
					</Col>
				</Row>
				<Row className="input_container">
					<Col className="label" xl={24}>
						Message
					</Col>
					<Col className="input_style" style={{ width: '100%' }}>
						<TextArea rows={4} placeholder="enter todo message" />
					</Col>
				</Row>
				<Row className="input_container">
					<Col className="label" xl={24}>
						Type
					</Col>
					<Col className="input_style" style={{ width: '100%' }}>
						<Select defaultValue="Success" style={{ width: 120 }}>
							<Option value="Success">Success</Option>
							<Option value="Error">Error</Option>
							<Option value="Warning">Warning</Option>
							<Option value="Critical">Critical</Option>
						</Select>
					</Col>
				</Row>
				<Row className="input_container">
					<Col className="label" xl={24}>
						Type
					</Col>
					<Col className="input_style" style={{ width: '100%' }}>
						<DateTimePicker className="date_picker_style" onChange={(date) => console.log(date)} value={new Date()} format={dateFormat} />
					</Col>
				</Row>
				<Row className="input_container">
					<Col className="" xl={24}>
						<Button type="primary" style={{ width: '100%' }}>
							Add
						</Button>
					</Col>
				</Row>
			</Col>
		</Col>
	);
};

export default TodoAdd;
