// var groceryListItems = ['learn react', 'learn react2','learn 3','hi Kim'];

// var GroceryList = () => (
//     <div>
//         <h2>My Grocery List</h2>
//             <GroceryListItem items={groceryListItems}/>
//     </div>
// );


// var GroceryListItem = (props) => {
//     var onItemClick = () => alert('df')
//     return (
//     <ul>
//         {props.items.map(elem => <li onClick={onItemClick}>{elem}</li>)}
//     </ul>
//     );
// }
// ReactDOM.render(<GroceryList/>,document.getElementById('app'));

class TodoListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            done: false
        }
    }

    onListClick() {
        this.setState({
            done: !this.state.done
        });
    }
    render() {
        var style = {
            textDecoration: this.state.done ? 'line-through' : "none"
        };

        return (
            <li style={style} onMouseEnter={this.onListClick.bind(this)}>{this.props.todo}</li>
        );
    }
}

var TodoList = (props) => (
    <ul>
        {props.todos.map(todo => <TodoListItem todo={todo}/>)}
    </ul>
)

ReactDOM.render(<TodoList todos={['hey','d00d']}/>,document.getElementById('app'));