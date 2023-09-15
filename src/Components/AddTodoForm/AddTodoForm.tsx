import { Button, Form, Input, Space } from 'antd';
import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../utils/createTodo';

export const AddTodoForm: FC = () => {
	const [form] = Form.useForm();

	const dispatch = useDispatch();

	const onFinish = () => {
		const todo = createTodo(form.getFieldValue('name'));
		dispatch({
			type: 'ADD_TODO',
			payload: todo,
		});
		form.setFieldValue('name', '');
	};

	return (
		<Form form={form} onFinish={onFinish} layout="horizontal">
			<Space.Compact style={{ width: '100%' }}>
				<Form.Item
					name={'name'}
					rules={[{ required: true, message: 'This field is required' }]}
					style={{ width: '100%' }}
				>
					<Input placeholder="What needs to be done?" />
				</Form.Item>
				<Button type="primary" htmlType="submit">
					Add todo
				</Button>
			</Space.Compact>
		</Form>
	);
};
