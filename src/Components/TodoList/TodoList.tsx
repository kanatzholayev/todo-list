import { Button, List, Radio, Row, Space, Typography, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

import { useEffect, useState } from 'react';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import { Todo, State, Filter } from '../../utils/contracts';

export const TodoList = () => {
	const [filter, setFilter] = useState<Filter>('all');
	const [list, setList] = useState<Todo[]>([]);

	const [messageApi, contextHolder] = message.useMessage();

	const todoList = useSelector((state: State) => state.todoList);

	const dispatch = useDispatch();

	const onChange = (e: CheckboxChangeEvent, uuid: string) => {
		dispatch({
			type: 'TOGGLE_TODO',
			payload: {
				completed: e.target.checked,
				uuid,
			},
		});
	};

	const onDelete = (uuid: string) => {
		dispatch({
			type: 'DELETE_TODO',
			payload: uuid,
		});
		messageApi.open({
			type: 'success',
			content: 'Todo deleted successfully!',
		});
	};

	const onClear = () => {
		dispatch({
			type: 'CLEAR_COMPLETED',
		});
		messageApi.open({
			type: 'success',
			content: 'Completed todos deleted successfully!',
		});
	};

	useEffect(() => {
		setList(todoList);
	}, [todoList]);

	useEffect(() => {
		switch (filter) {
			case 'active':
				setList(todoList.filter(todo => !todo.completed));
				break;
			case 'completed':
				setList(todoList.filter(todo => todo.completed));
				break;
			default:
				setList(todoList);
		}
	}, [filter, todoList]);

	return (
		<>
			{contextHolder}
			<Row justify="space-between" align="top">
				<Space direction="vertical" size="middle">
					<Radio.Group value={filter} onChange={e => setFilter(e.target.value)}>
						<Radio.Button value="all">All</Radio.Button>
						<Radio.Button value="active">Active</Radio.Button>
						<Radio.Button value="completed">Completed</Radio.Button>
					</Radio.Group>
					<Typography.Text>{`${list.length} item(s) left`}</Typography.Text>
				</Space>
				<Button danger type="default" onClick={onClear}>
					Clear Completed
				</Button>
			</Row>
			<List
				dataSource={list}
				renderItem={item => <TodoListItem item={item} onChange={onChange} onDelete={onDelete} />}
			/>
		</>
	);
};
