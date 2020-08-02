import React from 'react';
import { Row, Col, Input, Select, Button, Modal } from 'antd';
import DateTimePicker from 'react-datetime-picker';

import { GlobalConstants } from '@constants/global-constants';

const { TextArea } = Input;
const { Option } = Select;

const TodoAddPresentational = ({ loading, handleAdd, handleModalVisible, visible, handleChange, todo: { title, message, dueAt, type } }) => {
	return (
		<Col xl={24} className="add_area">
			<Modal destroyOnClose footer={null} title="Add Todo" visible={visible} onOk={handleAdd} onCancel={() => handleModalVisible(false)}>
				<Col xl={24} className="input_area">
					<Col>
						<Row className="input_container">
							<Col className="label" xl={24}>
								Title
							</Col>
							<Col className="input_style">
								<Input
									autoFocus={visible}
									value={title}
									placeholder="enter todo"
									onChange={(e) => handleChange('title', e.target.value)}
								/>
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
								<Select onChange={(value) => handleChange('type', value)} value={type} style={{ width: 120 }}>
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
									Create (or Tell "Save")
								</Button>
							</Col>
						</Row>
					</Col>
					<audio className="audio-element">
						{/* <source src={require('@assets/smb_pause.wav')}></source> */}
						<source src="https://api.coderrocketfuel.com/assets/pomodoro-times-up.mp3"></source>
					</audio>
				</Col>
			</Modal>
			<Button onClick={handleModalVisible} type="primary">
				Add Todo (or Tell "Create")
			</Button>
		</Col>
	);
};

export default TodoAddPresentational;
