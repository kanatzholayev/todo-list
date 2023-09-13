import { DeleteOutlined } from '@ant-design/icons';
import { List, Button, Checkbox } from 'antd';
import { FC } from 'react';

import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { TextStyled } from './TodoListItem.styles';
import { Todo } from '../../utils/contracts';

interface TodoListItemProps {
	item: Todo;
	onChange: (e: CheckboxChangeEvent, uuid: string) => void;
	onDelete: (uuid: string) => void;
}

export const TodoListItem: FC<TodoListItemProps> = ({ item, onChange, onDelete }) => {
	return (
		<List.Item
			actions={[
				<Button
					key="delete"
					type="default"
					danger
					shape="circle"
					icon={<DeleteOutlined />}
					onClick={() => onDelete(item.uuid)}
				/>,
			]}
		>
			<Checkbox
				onChange={e => onChange(e, item.uuid)}
				checked={item.completed}
				style={{ transform: 'scale(1.5)' }}
			/>
			<TextStyled delete={item.completed} type={item.completed ? 'secondary' : undefined}>
				{item.name}
			</TextStyled>
		</List.Item>
	);
};
