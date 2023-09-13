import { AppContainer } from './App.styles';
import { AddTodoForm } from '../AddTodoForm/AddTodoForm';
import { TodoList } from '../TodoList/TodoList';

import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Row, Typography } from 'antd';

const App = () => {
	return (
		<Provider store={store}>
			<AppContainer>
				<Row justify="center">
					<Typography.Title>Todos</Typography.Title>
				</Row>
				<AddTodoForm />
				<TodoList />
			</AppContainer>
		</Provider>
	);
};

export default App;
