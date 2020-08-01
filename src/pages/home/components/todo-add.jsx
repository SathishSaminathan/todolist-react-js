import React from 'react';
import { Row, Col, Input, Select, Button } from 'antd';
import DateTimePicker from 'react-datetime-picker';
import { GlobalConstants } from '@constants/global-constants';

const { TextArea } = Input;
const { Option } = Select;

const TodoAdd = ({ loading, handleAdd, handleChange, todo: { title, message, dueAt } }) => {
	return (
		<Col xl={12} className="input_area">
			<Col>
				<Row className="input_container">
					<Col className="label" xl={24}>
						Title
					</Col>
					<Col className="input_style">
						<Input value={title} placeholder="enter todo" onChange={(e) => handleChange('title', e.target.value)} />
					</Col>
				</Row>
				<Row className="input_container">
					<Col className="label" xl={24}>
						Message
					</Col>
					<Col className="input_style" style={{ width: '100%' }}>
						<TextArea
							value={message}
							onChange={(e) => handleChange('message', e.target.value)}
							rows={4}
							placeholder="enter todo message"
						/>
					</Col>
				</Row>
				<Row className="input_container">
					<Col className="label" xl={24}>
						Type
					</Col>
					<Col className="input_style" style={{ width: '100%' }}>
						<Select onChange={(value) => handleChange('type', value)} defaultValue={GlobalConstants.SUCCESS} style={{ width: 120 }}>
							<Option value={GlobalConstants.SUCCESS}>Success</Option>
							<Option value={GlobalConstants.ERROR}>Error</Option>
							<Option value={GlobalConstants.WARNING}>Warning</Option>
							<Option value={GlobalConstants.CRITICAL}>Critical</Option>
						</Select>
					</Col>
				</Row>
				<Row className="input_container">
					<Col className="label" xl={24}>
						Due at
					</Col>
					<Col className="input_style" style={{ width: '100%' }}>
						<DateTimePicker
							minDate={new Date()}
							className="date_picker_style"
							onChange={(date) => handleChange('dueAt', date)}
							value={dueAt}
							format={GlobalConstants.dateFormat}
						/>
					</Col>
				</Row>
				<Row className="input_container">
					<Col className="" xl={24}>
						<Button
							loading={loading}
							disabled={!(title && message && dueAt)}
							onClick={handleAdd}
							type="primary"
							style={{ width: '100%' }}>
							Add
						</Button>
					</Col>
				</Row>
			</Col>
		</Col>
	);
};

export default TodoAdd;
